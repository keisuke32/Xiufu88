import useSWR from 'swr';

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
import {request, GraphQLClient} from 'graphql-request';
import {
    AVAILABLE_PAYMENT_METHODS,
    GET_ALL_PURCHASE_ORDERS,
    GET_PURCHASE_ORDERS
} from "../graphql/query/purchaseorder.query";

interface PurchaseOrderInterface {
    token: string;
    statuses?: any;
    limit?: number;
    offset?: number;
    feature?: string;
    sortType?: string;
}

export default function useOrders({token, statuses, limit, offset, feature, sortType}: PurchaseOrderInterface) {

    const variables = {
        statuses: statuses,
        limit: limit,
        skip: offset,
        feature: feature,
        sortType: sortType
    }

    const fetcher = async (query) => await new GraphQLClient(url, {
        headers: {
            authorization: 'Bearer ' + token,
        }
    }).request(query, variables);

    // console.log(token);
    const {data, revalidate, mutate, error} = useSWR([GET_PURCHASE_ORDERS], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;
    const orders = data?.purchaseOrders?.collection;

    return {
        loading,
        error,
        orders,
        // loggedOut,
        // user: data,
        revalidate,
    };
}

export function useAllOrders({token}: PurchaseOrderInterface) {

    const fetcher = async (query) => await new GraphQLClient(url, {
        headers: {
            authorization: 'Bearer ' + token,
        }
    }).request(query);

    // console.log(token);
    const {data, mutate, error} = useSWR([GET_ALL_PURCHASE_ORDERS], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;
    const allOrders = data?.allPurchaseOrders;

    if(!loading && !error){

    }
    return {
        allOrders,
        allPaidOrders: allOrders?.filter(item => item.isPaid),
        pendingOrders: allOrders?.filter(item => item.statuses == 'CREATED'),
        loading,
        error,
        mutate,
    };
}

export function paymentMethods(token: string) {
    const fetcher = async (query, token) => await new GraphQLClient(url, {
        headers: {
            authorization: 'Bearer ' + token,
        },
    }).request(query);
    const {data, mutate, error} = useSWR([AVAILABLE_PAYMENT_METHODS, token], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;
    const orders = data?.availablePaymentMethods;
    // const paginatedData = data?.slice(offset, limit);
    // const loggedOut = error && error.status === 403;

    return {
        loading,
        error,
        data: orders,
        // loggedOut,
        // user: data,
        mutate,
    };
}
