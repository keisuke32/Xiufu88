import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  split
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import {WebSocketLink} from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import {SubscriptionClient} from 'subscriptions-transport-ws';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const authlink = setContext((_,{headers})=>{
  const token = typeof localStorage == 'undefined'?'':localStorage.getItem('access_token');
  return {
    headers:{
      ...headers,
      authorization:token?'Bearer ' + token:''
    }
  }
})


function createApolloClient() {
  const httplink =  new HttpLink({
    uri: process.env.NEXT_PUBLIC_REST_API_ENDPOINT, // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });

  // const wslink = typeof window != 'undefined'?new WebSocketLink({
  //   uri:'ws://18.195.227.58:4000/graphql',
  //   options:{
  //     lazy:true,
  //     reconnect:true
  //   }
  // }):null;
  const wslink = typeof window != 'undefined'?new WebSocketLink(new SubscriptionClient('wss://api.xiufu88.com/graphql',{
    reconnect:true,
    connectionParams:()=>{
      return {
        authorization:'Bearer ' + localStorage.getItem('access_token')
      }
    },
  }
  )):null;

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: typeof window == 'undefined'?httplink:split(
      ({query})=>{
        const definition = getMainDefinition(query);
        return (
          definition.kind == 'OperationDefinition' && definition.operation == 'subscription'
        );
        
      },
      wslink,
      authlink.concat(httplink)
    ),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // Reusable helper function to generate a field
            // policy for the Query.products field.
          },
        },
      },
    }),
    
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
