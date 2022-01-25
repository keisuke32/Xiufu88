import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CartMobileWrapper = styled.div`
    // overflow: scroll;
    padding: 10px;
    margin-bottom: 110px;
    margin-top: 40px;
    background-color: ${themeGet('colors.background', '#F2F2F2')};
`;

export const CartMobileHeader = styled.div`
    padding: 10px;
    background: linear-gradient(90deg, #FF1515 0%, #BE0000 100%);
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
    justify-content: space-between;
    color: ${themeGet('colors.white', '#FFFFFF')};
    font-size: ${themeGet('fontSizes.base', '14')}px;
`;

export const CartStoreWrapper = styled.div`
    padding: 10px;
    margin-bottom: 20px;
    background-color: ${themeGet('colors.white', '#FFFFFF')};
    border-radius: 10px;
`;

export const CartProductWrapper = styled.div`
    display: flex;
    padding-bottom: 20px;
    .custom-control-input:checked~.custom-control-label::before {
        border-color: ${themeGet('colors.gray.800', '#BDBDBD')};
        background-color: ${themeGet('colors.primary.alternate', '#FA4C4C')};
    }
    .select_option {
        width: 10%;
        & label::before {
            border-radius: 50%;
        }
    }
    .product_detail {
        width: 90%;
        display: flex;
        font-size: ${themeGet('fontSizes.xs', '12')}px;
        .store_name {
            line-height: 1;
            font-size: ${themeGet('fontSizes.sm', '13')}px;
        }
        .product_image {
            width: 100px;
            height: 100px;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .product_description {
            padding: 10px;
            position: relative;
            width: calc(100% - 100px);
            .product_title {
                font-size: 12px;
                color: black;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            .price_quantity {
                display: flex;
                justify-content: space-between;
                margin-top: 15px;
                .product_price {
                    color: ${themeGet('colors.price', '#EF3900')};
                    font-size: ${themeGet('fontSizes.md', '19')}px;
                    font-weight: ${themeGet('fontWeights.bold', 700)};
                }
                .product_quantity {
                    padding: 7px 10px;
                    border: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
                    border-radius: 5px;
                    .show {
                        display: block;
                    }
                    .hide {
                        display: none;
                    }
                }
            }
        }
    }
`;

export const CartMobileFooter = styled.div`
    padding: 10px;
    background-color: ${themeGet('colors.white', '#FFFFFF')};
    position:fixed;
    bottom: 69px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .custom-control-input:checked~.custom-control-label::before {
        border-color: ${themeGet('colors.gray.800', '#BDBDBD')};
        background-color: ${themeGet('colors.primary.alternate', '#FA4C4C')};
    }
    .all_selection {
        padding-top: 12px;
        label::before {
            border-radius: 50%;
        }
    }
    .operation {
        display: flex;
        .total_price {
            padding-top: 10px;
            span {
                color: ${themeGet('colors.price', '#EF3900')};
            }
        }
        .operation_button{
            button {
            margin-left: 20px;
            padding: 10px 30px;
            background-color: ${themeGet('colors.primary.regular', '#F00000')};
            border: 0;
            color: ${themeGet('colors.white', '#FFFFFF')};
            border-radius: 20px;
        }
        }
    }
`;
