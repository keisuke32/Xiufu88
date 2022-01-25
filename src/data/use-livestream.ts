import useSWR from 'swr';
import {initializeApollo} from 'utils/apollo';

import {GET_LIVESTREAM} from 'graphql/query/livestreams.query';

interface Props{
    slug:string,
    update?:Boolean
}

const apolloClient = initializeApollo();

const fetcher = async(query,slug) => {console.log('query',slug); return await apolloClient.query({query:query,variables:{slug}})}

export default function useLiveStream(variables:Props)
{
    let {slug,update} = variables;

    const {data,error} = useSWR([GET_LIVESTREAM,slug],fetcher);

    const loading = !data || error;

    console.log(data);
    return {
        loading,
        livestream:loading?{}:data.data.liveStream,
        error
    }
}