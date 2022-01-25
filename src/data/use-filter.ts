import useSWR from 'swr';
import {request} from 'graphql-request';

import {GET_PRODUCT_VARIATIONS, GET_PRODUCT_VARIATION_BY_KEYWORD} from "../graphql/query/variations.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

const fetcher = async (query, searchQuery, feature, type, offset, limit) => await request(url, query, {
    searchQuery: searchQuery,
    feature: feature,
    type: type,
    offset: offset,
    limit: limit
});

const fetcher_keyword = async (query, keyword) => await request(url, query, {
    keyword: keyword,
});

interface Props {
    searchQuery?: string,
    feature?: string,
    type?: string,
    offset?: number,
    limit?: number
}

export default function useFilters(variables: Props) {
    const {searchQuery, offset = 0, limit = 20, feature, type} = variables ?? {};

    const {data, mutate, error} = useSWR([GET_PRODUCT_VARIATIONS, searchQuery, feature, type, offset, limit], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;

    let filters = data?.productVariations?.collection;
    const total =  data?.productVariations?.pager?.total;

    let localOffset = offset;
    let localLimit = limit;
    const hasMore = filters?.length != total;
    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
    };

    return {
        loading,
        error,
        data: filters,
        hasMore,
        mutate,
        fetchMore,
    };
}

export function useFiltersKeyword(keyword: string) {
    const {data, mutate, error} = useSWR([GET_PRODUCT_VARIATION_BY_KEYWORD, keyword], fetcher_keyword, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;

    const filters = data?.attributeFilter;

    return {
        loading,
        error,
        filterVariations: filters?.productVariations,
        filterCategories: filters?.productCategories,
        mutate,
    };
}
