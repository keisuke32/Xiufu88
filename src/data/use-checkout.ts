import {request, GraphQLClient} from 'graphql-request';

import {
    ADD_PRODUCT_TO_CART,
    CALCULATE_DELIVERY_RATE, CHECKOUT_CART,
    CLEAR_CART, DELETE_PRODUCT_FROM_CART, SELECT_PRODUCT_FROM_CART, TRANSACTION_PROCESSED,
    UPDATE_CART_PRODUCT
} from "../graphql/mutation/checkout.mutation";
import React from "react";
import {AuthContext} from "../contexts/auth/auth.context";
import useSWR from "swr";
import {GET_DELIVERY_ADDRESSES} from "../graphql/query/userAuth.query";
import {GET_CART_PRODUCTS} from "../graphql/query/checkout.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

interface CalcDeliveryAddressInterface {
    product: string,
    quantity: number,
    deliveryAddress: string,
    isWholeSale: boolean
    token: string;
}

export function calcDeliveryAddress({product, quantity, deliveryAddress, isWholeSale, token}: CalcDeliveryAddressInterface) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        product: product,
        quantity: quantity,
        deliveryAddress: deliveryAddress,
        isWholeSale: isWholeSale,
    };

    return client.request(CALCULATE_DELIVERY_RATE, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data.calculateDeliveryRates[0]
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}

interface AddToCartInterface {
    product: string;
    deliveryRate: string;
    quantity: number;
    billingAddress: string;
    productAttribute?: string;
    note?: string;
    token: string;
}

export function addProductToCart({product, deliveryRate, quantity, billingAddress, productAttribute, note, token}: AddToCartInterface) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        product: product,
        deliveryRate: deliveryRate,
        quantity: quantity,
        billingAddress: billingAddress,
        productAttribute: productAttribute,
        note: note,
    };
    return client.request(ADD_PRODUCT_TO_CART, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data?.addProductToCart
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}

interface UpdateCartInterface {
    cart_id: string;
    deliveryRate?: string;
    quantity: number;
    billingAddress?: string;
    note?: string;
    token: string;
}

export function updateProductCart({cart_id, deliveryRate, quantity, billingAddress, note, token}: UpdateCartInterface) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        id: cart_id,
        deliveryRate: deliveryRate,
        quantity: quantity,
        billingAddress: billingAddress,
        note: note,
    };
    return client.request(UPDATE_CART_PRODUCT, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data?.updateCartItem
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}

interface DeleteProductCartInterface {
    cart_id: string;
    token: string;
}

export function deleteProductCart({cart_id, token}: DeleteProductCartInterface) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        id: cart_id,
    };
    return client.request(DELETE_PRODUCT_FROM_CART, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data?.deleteCartItem
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}

interface ClearCartInterface {
    selected?: boolean;
    token: string;
}

export function clearProductCart({token, selected=false}: ClearCartInterface) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
    const variables = {selected: selected};
    return client.request(CLEAR_CART, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data?.clearCart
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}
interface SelectCartItemsInterface {
    ids: any;
    selected: boolean;
    token: string;
}

export function selectCartItems({ids, selected, token}: SelectCartItemsInterface) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        ids: ids,
        selected: selected
    };

    return client.request(SELECT_PRODUCT_FROM_CART, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data?.selectCartItems
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}

interface CartItemsProps {
    token: string;
}

export function getItemsFromCart({token}: CartItemsProps){
    const fetcher = async (query, token) => {
        const client = new GraphQLClient(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return client.request(query)
            .then((data) => {
                return data;
            })
    }
    const {data, mutate, error} = useSWR([GET_CART_PRODUCTS, token], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    const loading = !data && !error;
    const res = data?.cart;
    return {
        cartProducts: res?.items,
        cartPrice: res?.price,
        deliveryPrice: res?.deliveryPrice,
        totalPrice: res?.total,
        mutate,
        error,
        loading,
    };
}

interface CheckoutCartProps {
    currency: string;
    provider: string;
    redirectSuccess: string;
    redirectFailed: string;
    token: string;
}

export function checkout({currency="CNY", provider="PayPal", redirectSuccess, redirectFailed, token} : CheckoutCartProps) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        currency: currency,
        provider: provider,
        redirection_success: redirectSuccess,
        redirection_cancel: redirectFailed,
    };

    return client.request(CHECKOUT_CART, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data?.checkoutCart
            }
        })
        .catch((err) => {
            // console.log(err);
            return {
                state: 'failed',
                res: err
            }
        });
}

interface TransactionProcessedInterface {
    id: string;
    token: string;
}

export function paymentTransactionProcessed({id, token}: TransactionProcessedInterface) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        id: id,
    };

    return client.request(TRANSACTION_PROCESSED, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data?.paymentTransactionProcessed
            }
        })
        .catch((err) => {
            // console.log(err);
            return {
                state: 'failed',
                res: err
            }
        });
}
