import { gql } from '@apollo/client';
import {CART_DETAIL, PURCHASE_ORDER_DETAIL} from "../query/checkout.query";

export const CALCULATE_DELIVERY_RATE = gql`
    mutation(
        $product: ID!,
        $quantity: Int!,
        $deliveryAddress: ID!,
        $isWholeSale: Boolean
    ){
        calculateDeliveryRates(
            product: $product
            deliveryAddress: $deliveryAddress
            quantity: $quantity
            isWholeSale: $isWholeSale
        ){
            id
            carrier{
                id
                name
            }
            service
            deliveryDays
            rate_id
            shipmentId
            amount(currency:CNY){
                amount
                amountISO
                formatted
            }
        }
    }
`;

export const ADD_PRODUCT_TO_CART = gql`
    mutation(
        $product: ID!, 
        $deliveryRate: ID!, 
        $quantity: Int!, 
        $billingAddress: ID!,
        $productAttribute: ID, 
        $note: String
    ) {
        addProductToCart(
            product: $product,
            deliveryRate: $deliveryRate, 
            quantity: $quantity,
            billingAddress: $billingAddress,
            productAttribute: $productAttribute, 
            note: $note
        ) {
            ...CartDetail
        }
    }
    ${CART_DETAIL}
`;

export const UPDATE_CART_PRODUCT = gql`
    mutation(
        $id: ID!, 
        $deliveryRate: ID, 
        $quantity: Int!, 
        $billingAddress: ID,
        $note: String
    ) {
        updateCartItem(
            id: $id,
            deliveryRate: $deliveryRate, 
            quantity: $quantity,
            billingAddress: $billingAddress,
            note: $note
        ) {
            ...CartDetail
        }
    }
    ${CART_DETAIL}
`;

export const DELETE_PRODUCT_FROM_CART = gql`
    mutation(
        $id: ID!
    ){
        deleteCartItem(
            id: $id
        ){
            ...CartDetail
        }
    }
    ${CART_DETAIL}
`;

export const SELECT_PRODUCT_FROM_CART = gql`
    mutation(
        $ids: [ID]!
        $selected: Boolean
    ){
        selectCartItems(
            ids: $ids
            selected: $selected
        ){
            ...CartDetail
        }
    }
    ${CART_DETAIL}
`;

export const CLEAR_CART = gql`
    mutation($selected:Boolean){
        clearCart(selected: $selected){
            ...CartDetail
        }
    }
    ${CART_DETAIL}
`;

export const CHECKOUT_CART = gql`
    mutation(
        $currency: Currency!
        $provider: PaymentMethodProviders!
        $redirection_success: String!
        $redirection_cancel: String!
    ){
        checkoutCart(
            currency: $currency
            provider: $provider
            redirection: {
                success: $redirection_success
                cancel: $redirection_cancel
            }
        ){
            ...PurchaseOrderDetail
        }   
    }
    ${PURCHASE_ORDER_DETAIL}
`;

export const TRANSACTION_PROCESSED = gql`
    subscription ($id: ID!){
        paymentTransactionProcessed(id: $id){
            id
            createdAt
            amount{
                amount
                amountISO
                currency
                formatted
            }
            status
            processedAt
            tags
        }
    }
`;
