import {GET_REGIONS} from 'graphql/query/location.query';
import useSWR from 'swr';
import {request} from 'graphql-request';
import {initializeApollo} from 'utils/apollo';
const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;


export default function useregions(countryid)
{
    const fetcher = async (query,countryid) => await request(url,query,{countryid})

    const {data,error} = useSWR([GET_REGIONS,countryid],fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    console.log('error',data);
    const loading = !data || error;
    const regions =  loading?[]:data.regions;
    return {
        loading,
        regions,
        error
    }
}