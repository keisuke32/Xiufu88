import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CheckoutFinishedWrapper = styled.div`
    padding: 10px;
    background-color: ${themeGet('colors.background', '#F2F2F2')};
    .final_header {
        display: flex;
        .final_header_title {
            width: 100%;
            text-align: center;
            font-size: ${themeGet('fontSizes.placeholder', '16')}px;
        }
        .more_menu {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            width: 40px;
            font-size: ${themeGet('fontSizes.ms', '10')}px;
            color: ${themeGet('colors.gray.900')};
        }
    }
    .order_detail {
        padding: 20px 0;
        text-align: center;
        width: 100%;
        margin-top: 10px;
        background-color: ${themeGet('colors.white')};
        border-radius: 10px;
        .order_price {
            font-size: ${themeGet('fontSizes.lg', '21')}px;
            color: ${themeGet('colors.price')};
        }
        .order_operation {
            font-size: ${themeGet('fontSizes.base', '14')}px;
            padding-top: 20px;
            display: flex;
            .check_order {
                width: 50%;
                border-right: 1px solid ${themeGet('colors.gray.900')};
            }
            .back_home {
                width: 50%;
            }
        }
    }
    .product_list {
        padding-top: 20px;
        .list_header {
            position: relative;
            text-align: center;
            padding-bottom: 20px;
            &::before {
                content: '';
                position: absolute;
                top: 10px;
                left: 25%;
                width: 50%;
                height: 1px;
                background-color: ${themeGet('colors.price')};
            }
            span {
                padding: 0 20px;
                position: relative;
                color: ${themeGet('colors.price')};
                background-color: ${themeGet('colors.background', '#F2F2F2')};
            }
        }
    }
`;