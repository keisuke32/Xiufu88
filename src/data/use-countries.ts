import {GET_COUNTRY} from 'graphql/query/location.query';
import useSWR from 'swr';
import {request} from 'graphql-request';
import {initializeApollo} from 'utils/apollo';
const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;


export default function usecountries()
{
    const fetcher = async (query) => await request(url,query,{})

    const {data,error} = useSWR([GET_COUNTRY],fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    console.log('error',data);
    const loading = !data || error;
    const countries =  loading?[]:data.countries;
    return {
        loading,
        countries,
        error
    }
}