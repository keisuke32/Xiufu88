import { gql } from '@apollo/client';
import {PURCHASE_ORDER_DETAIL} from "./checkout.query";


export const AVAILABLE_PAYMENT_METHODS = gql`
    query availablePaymentMethods {
        availablePaymentMethods
    }
`;

export const GET_PURCHASE_ORDERS = gql`
    query purchaseOrders(
        $statuses: [PurchaseOrderStatus!], 
        $skip: Int=0, 
        $limit: Int=10, 
        $feature: ReviewSortFeature!=CREATED_AT, 
        $sortType: SortTypeEnum!=DESC
    ) {
        purchaseOrders(
            filter: {statuses: $statuses},
            page: {skip: $skip, limit: $limit},
            sort: {feature: $feature, type: $sortType}
        ){
            collection {
                ...PurchaseOrderDetail
            }
            pager{
                total
                limit
                skip
            }
        }
    }
    ${PURCHASE_ORDER_DETAIL}
`;

export const GET_ALL_PURCHASE_ORDERS = gql`
    query {
        allPurchaseOrders{
            ...PurchaseOrderDetail
        }
    }
    ${PURCHASE_ORDER_DETAIL}
`;
