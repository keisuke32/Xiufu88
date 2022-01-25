import {assets} from 'graphql/query/asset';
import useSWR from 'swr';
import {GraphQLClient} from 'graphql-request';
import {initializeApollo} from 'utils/apollo';
const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;


export default function useasset({limit,skip})
{
    const apollo = initializeApollo();
    const fetcher = async (query,variable) => await apollo.query({query,variables:variable,context:{headers:{Authorization:'Bearer ' + localStorage.getItem('access_token')}}})

    const {data,error,mutate} = useSWR([assets,{limit,skip}],fetcher)

    console.log('access_token',data)
    const loading = !data || error;
    const assetdata =  loading?[]:data.data.assets.collection;
    return {
        loading,
        data:assetdata,
        error,
        mutate
    }
}