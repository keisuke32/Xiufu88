import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CheckoutMobileWrapper = styled.div`
    .final_price_operation {
        padding: 20px;
        display: flex;
        justify-content: flex-end;
        font-size: ${themeGet('fontSizes.xs', '12')}px;
        .description {
            line-height: 3;
            padding-right: 20px;
            span {
                color: ${themeGet('colors.primary.regular', '#F00000')};
            }
        }
        button {
            padding: 10px 20px;
            background-color: ${themeGet('colors.primary.regular', '#F00000')};
            border-radius: 20px;
            border: 0;
            color: ${themeGet('colors.white', '#FFFFFF')};
        }
    }
`;

export const CartMobileHeader = styled.div`
    display: flex;
    background: linear-gradient(90deg, #FF1515 0%, #BE0000 100%);
    padding: 10px;
    .header_title {
        color: ${themeGet('colors.white', '#FFFFFF')};
        padding-left: 10px;
    }
`;

export const DeliveryAddressWrapper = styled.div`
    font-size: ${themeGet('fontSizes.xs', '12')}px;
    padding-bottom: 50px;
    .address_header {
        padding-left: 15%;
    }
    .address_description {
        display: flex;
        .icon_div {
            width: 15%;
            .location_icon {
                width: 30px;
                height: 30px;
                background-color: ${themeGet('colors.primary.regular', '#F00000')};
                border-radius: 50%;
                margin-top: 4px;
            }
        }
        .address_detail {
            width: 80%;
            
        }
        .see_detail {
            width: 5%;
            text-align: right;
        }
    }
`;

export const CartMobileProduct = styled.div`
    padding: 20px;
    border-bottom: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
    .product_detail {
        margin-bottom: 20px;
        .product_description {
            display: flex;
            padding-bottom: 20px;
            img {
                width: 25%;
                height: 100%;
            }
            .description {
                width: 55%;
                font-size: ${themeGet('fontSizes.ms', '10')}px;
                .product_name {
                    color: ${themeGet('colors.black', '#000000')};
                }
                .product_size {
                    color: ${themeGet('colors.gray.1000', '#4F4F4F')};
                }
                .delivery_time {
                    color: ${themeGet('colors.primary.alternate', '#FA4C4C')};
                }
            }
            .product_price {
                width: 20%;
                line-height: 1.3;
                font-size: ${themeGet('fontSizes.xs', '12')}px;
                text-align: right;
            }
        }
        .purchase_quantity {
            display: flex;
            justify-content: space-between;
            font-size: ${themeGet('fontSizes.xs', '12')}px;
            padding-bottom: 20px;
            .pq_title {
                line-height: 3;
            }
        }
        .order_note {
            display: flex;
            font-size: ${themeGet('fontSizes.xs', '12')}px;
            padding-bottom: 20px;
            .note_header {
                width: 25%;
            }
            .note_detail {
                width: 75%;
                color: ${themeGet('colors.gray.900', '#828282')};
            }
        }
        .subtotal_price {
            display: flex;
            justify-content: flex-end;
            font-size: ${themeGet('fontSizes.ms', '10')}px;
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
            span {
                color: ${themeGet('colors.primary.regular', '#F00000')};
            }
        }
    }
`;

export const ProductItemQuantity = styled.div`
    .quantity-counter {
        border: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
    }
`;

export const DeliveryMethodWrapper = styled.div`
    padding-bottom: 50px;
    .delivery_method_header {
        font-size: ${themeGet('fontSizes.sm', '13')}px;
        padding-bottom: 20px;
    }
    .delivery_method_description {
        font-size: ${themeGet('fontSizes.ms', '10')}px;
        color: ${themeGet('colors.primary.regular', '#F00000')};
        padding-left: 10px;
        padding-bottom: 20px;
    }
    .delivery_plan {
        .plan {
            display: flex;
            justify-content: space-between;
            padding-bottom: 20px;
            .plan_name {
                font-size: ${themeGet('fontSizes.sm', '13')}px;
            }
            .plan_price {
                font-size: ${themeGet('fontSizes.ms', '10')}px;
            }
        }
    }
`;

export const PaymentMethodWrapper = styled.div`
    padding-bottom: 20px;
    .payment_method_header {
        display: flex;
        justify-content: space-between;
        font-size: ${themeGet('fontSizes.xs', '12')}px;
        padding-bottom: 20px;
    }
    .payment_method_detail {
        font-size: ${themeGet('fontSizes.xs', '12')}px;
        padding-bottom: 20px;
    }
    .total_price {
        font-size: ${themeGet('fontSizes.xs', '12')}px;
        display: flex;
        justify-content: space-between;
        .price {
            color: ${themeGet('colors.primary.regular', '#F00000')};
        }
    }
`;
