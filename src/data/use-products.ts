import useSWR from 'swr';
import Fuse from 'fuse.js';
import {request} from 'graphql-request';

import {isMatch} from 'lodash';

import {GET_PRODUCTS} from "../graphql/query/products.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

import {useState} from 'react';
import {GET_PRODUCTS_BY_THEME} from "../graphql/query/themes.query";

const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.3,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    minMatchCharLength: 2,
    keys: ['title'],
};

function search(list, pattern) {
    const fuse = new Fuse(list, options);

    return fuse.search(pattern).map((current) => current.item);
}

// import productFetcher from 'utils/api/product';

const fetcher = async (query, category, offset, limit, feature, sort, isFeatured, text, sellers, variations, categories) => await request(url, query, {
    category: category ? ((categories && categories.length > 0) ? [...categories, category] : [category]) : ((categories && categories.length > 0) ? categories : null),
    offset: offset,
    limit: limit,
    feature: feature,
    sort: sort,
    isFeatured: isFeatured,
    search: text,
    sellers: sellers ? [sellers] : null,
    variations: (variations && variations.length == 0) ? null : variations
})

interface Props {
    text?: any;
    category?: any;
    offset?: number;
    limit?: number;
    feature?: any;
    isFeatured?: boolean;
    sort?: any;
    sellers?: any;
    variations?: any;
    categories?: any;
}

export default function useProducts(variables: Props) {
    const {text, category, offset = 0, limit = 20, feature, sort, isFeatured, sellers, variations, categories} = variables ?? {};

    // const [list, setList] = useState([]);

    const {data, mutate, error} = useSWR([GET_PRODUCTS, category, offset, limit, feature, sort, isFeatured, text, sellers, variations, categories], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;

    let products = data?.products?.collection;
    const total = data?.products?.pager?.total;

    // if (products) {
    //     if (!isMatch(list, products) && list.length < limit + offset) {
    //         setList([...list, ...products])
    //     }
    // }
    let localOffset = offset;
    let localLimit = limit;
    const hasMore = (offset + limit) < total; // products?.length != total;
    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
    };

    return {
        loading,
        error,
        data: products,
        products: products,
        hasMore,
        mutate,
        total,
        fetchMore,
    };
}

export function useBestProducts(variables: Props) {
    const {text, category, offset = 0, limit = 20, feature, sort} = variables ?? {};

    const [hasMore, setHasMore] = useState(false);

    const {data, mutate, error} = useSWR([GET_PRODUCTS, category, offset, limit, feature, sort], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;

    let products = data?.products?.collection;

    if (products) {
        if (hasMore && !products.length)
            setHasMore(false)
        if (!hasMore && products.length)
            setHasMore(true)
    }
    let localOffset = offset;
    let localLimit = limit;

    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
    };

    return {
        loading,
        error,
        data: products,
        hasMore,
        mutate,
        fetchMore,
    };
}

interface themeProductsProps {
    theme: any;
    feature?: any;
    sortType?: any;
    skip?: any;
    limit?: any;
}

const themeProductsFetcher = async (query, theme, feature, sortType, skip, limit) => await request(url, query, {
    theme: theme,
    feature: feature,
    sortType: sortType,
    skip: skip,
    limit: limit,
})
export function useThemeProducts(variables: themeProductsProps) {
    const {theme, feature, sortType, skip, limit} = variables ?? {};

    const [hasMore, setHasMore] = useState(false);

    const {data, mutate, error} = useSWR([GET_PRODUCTS_BY_THEME, theme, feature, sortType, skip, limit], themeProductsFetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;

    let themeProducts = data?.productsByTheme?.collection;

    if (themeProducts) {
        if (hasMore && !themeProducts.length)
            setHasMore(false)
        if (!hasMore && themeProducts.length)
            setHasMore(true)

    }
    let localOffset = skip;
    let localLimit = limit;

    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
    };

    return {
        loading,
        error,
        themeProducts,
        hasMore,
        mutate,
        fetchMore,
    };
}
