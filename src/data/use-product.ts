import useSWR from 'swr';

import {request} from 'graphql-request';

import {GET_PRODUCT, GET_PRODUCTS} from "../graphql/query/products.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

// import productFetcher from 'utils/api/product';

const productFetcher = async (query, slug) => await request(url, query, {
    slug: slug,
})

// const productFetcher = (url) => fetch(url).then((res) => res.json());

interface Props {
    slug: string | string[];
}

export default function useProduct(variables: Props) {
    // const { data, mutate, error } = useSWR('/api/products.json', productFetcher);
    const {data, mutate, error} = useSWR([GET_PRODUCT, variables?.slug ? variables.slug : ""], productFetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const loading = !data && !error;
    // need to remove when you using real API integration
    let product = data?.productBySlug;

    return {
        loading,
        error,
        product: product,
        // user: data,
        mutate,
    };
}
