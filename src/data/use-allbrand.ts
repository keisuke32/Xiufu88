import useSWR from 'swr';
import {request} from 'graphql-request';

import {allBrands} from "../graphql/query/brands.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

const fetcher = async (query,livestream) => await request(url, query, {
    livestream    
});

interface Props {
    livestream?:Boolean
}

export default function useBrands(variables: Props) {
    const {livestream} = variables ?? {};

    const {data, mutate, error} = useSWR([allBrands, livestream], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const loading = !data && !error;

    let brands = data?.allBrands;

    return {
        loading,
        error,
        data: brands,
        // hasMore,
        mutate
    };
}
