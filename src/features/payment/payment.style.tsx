import styled from "styled-components";
import {themeGet} from '@styled-system/theme-get';

export const CardHeader = styled.div`

`;

export const PaymentHead = styled.h3`
    font-size: ${themeGet('fontSizes.sm')}px;
    padding: 5px 0;
    border-bottom: 1px solid ${themeGet('colors.gray.700')};
`;

export const OrderDetailWrapper = styled.div`
    padding: 20px 30px;
    margin-top: 5px;
    background: ${themeGet('colors.green.light')};
    border: 1px solid ${themeGet('colors.green.alternate')};
    
    .total-price {
        text-align: right;
        font-size: ${themeGet('fontSizes.2xl')}px;
        color: ${themeGet('colors.primary.regular')};
        font-weight: ${themeGet('fontWeights.heading')};
    }
`;

export const OrderDetailItem = styled.div`
    padding-bottom: 25px;
    .seller-name {
        color: ${themeGet('colors.gray.1000')};
        padding-bottom: 10px;
    }
    .product-name {
        padding-bottom: 5px;
    }
`;
export const PaymentTool = styled.div`
    padding: 15px 20px;    
    background: ${themeGet('colors.green.light')};
    
    a.how-to-pay {
        padding-left: 10px;
        font-size: ${themeGet('fontSizes.sm')}px;
        color: ${themeGet('colors.blue.link')};
        cursor: pointer;
    }
`;

export const PaymentGroupWrapper = styled.div`
    padding-top: 20px;
`;

export const PAYSUCCESS = styled.div`
    margin-top: 50px;
    .pay-detail {
        border: 1px solid ${themeGet('colors.green.alternate')};
        p {
            padding-left: 100px;
            padding-top: 20px;
            label {
                padding-right: 10px;
            }
            .default-address {
                color: ${themeGet('colors.gray.900')};
            }
            .order-detail {
                color: ${themeGet('colors.blue.link')};
            }
        }
        p.total-price {
            padding-left: 70px;
            font-size: ${themeGet('fontSizes.badge')}px;
            .price {
                color: ${themeGet('colors.price')};
            }
        }
        p.purchased-goods {
            display: flex;
        }
    }
    .gotonext {
        float: right;
        margin-top: 20px;
    }
    .favourite-goods {
        margin-top: 50px;
        .goods-header {
            border-bottom: 1px solid ${themeGet('colors.gray.700')};
            font-size: ${themeGet('fontSizes.rating')}px;
            margin-bottom: 20px;
        }
    }
    .default-address {
        margin-left: 30px;
    }
    .order-detail {
        margin-left: 30px;
    }
    .product-title {
        width: 60%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
