import useSWR from 'swr';
import {request} from 'graphql-request';

import { isMatch } from 'lodash';

import {GET_BRANDS} from "../graphql/query/brands.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

const fetcher = async (query, offset, limit) => await request(url, query, {
    offset: offset,
    limit: limit,
});

interface Props {
    offset?: number;
    limit?: number;
}

export default function useBrands(variables: Props) {
    const {offset = 0, limit = 10} = variables ?? {};

    const {data, mutate, error} = useSWR([GET_BRANDS, offset, limit], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const loading = !data && !error;

    let brands = data?.searchBrand?.collection;

    let localOffset = offset;
    let localLimit = limit;

    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
    };

    return {
        loading,
        error,
        data: brands,
        // hasMore,
        mutate,
        fetchMore,
    };
}
