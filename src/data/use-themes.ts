import {request, GraphQLClient} from 'graphql-request';

import useSWR from "swr";
import {GET_PRODUCTS_BY_THEME, GET_THEMES} from "../graphql/query/themes.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

interface getThemeInterface {
    searchQuery?: string;
    themeType?: string;
    themeTime?: any;
    feature?: string;
    sortType?: string;
    skip?: number;
    limit?: number;
}

const themeFetcher = async (query, searchQuery, themeType, themeTime, feature, sortType, skip, limit) => await request(url, query, {
    searchQuery: searchQuery,
    themeType: themeType,
    themeTime: themeTime,
    feature: feature,
    sortType: sortType,
    skip: skip,
    limit: limit,
});

export function getThemes({searchQuery, themeType, themeTime, feature, sortType, skip, limit}: getThemeInterface) {

    const {data, mutate, error} = useSWR([GET_THEMES, searchQuery, themeType, themeTime, feature, sortType, skip, limit], themeFetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const loading = !data && !error;

    let themes = data?.themes?.collection.sort((a, b) => {
        return parseInt(a.order) >= parseInt(b.order) ? 1 : -1;
    });
    const total =  data?.themes?.pager?.total;

    let localOffset = skip;
    let localLimit = limit;
    const hasMore = themes?.length != total;
    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
    };

    return {
        loading,
        error,
        themes,
        hasMore,
        mutate,
        total,
        fetchMore,
    };
}

interface getThemeProductsInterface {
    theme?: string;
    feature?: string;
    sortType?: string;
    skip?: number;
    limit?: number;
}

const themeProductsFetcher = async (query, theme, feature, sortType, skip, limit) => await request(url, query, {
    theme: theme,
    feature: feature,
    sortType: sortType,
    skip: skip,
    limit: limit,
});

export function getThemeProducts({theme, feature, sortType, skip, limit}: getThemeProductsInterface) {

    const {data, mutate, error} = useSWR([GET_PRODUCTS_BY_THEME, theme, feature, sortType, skip, limit], themeProductsFetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const loading = !data && !error;

    let themeProducts = data?.productsByTheme?.collection;
    const total =  data?.productsByTheme?.pager?.total;

    let localOffset = skip;
    let localLimit = limit;
    const hasMore = themeProducts?.length != total;
    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
    };

    return {
        loading,
        error,
        themeProducts,
        total,
        hasMore,
        mutate,
        fetchMore,
    };
}
