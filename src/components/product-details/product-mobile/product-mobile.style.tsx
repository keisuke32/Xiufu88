import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ProductMobileDetailsWrapper = styled.div`
  color: ${themeGet('colors.black', '#000000')};
  font-size: ${themeGet('fontSizes.xs', '12')}px;
  background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
  * {
    box-sizing: border-box;
  }
`;

export const ProductMobileDescription = styled.div`
    padding: 10px 20px;
    background-color: ${themeGet('colors.white', '#ffffff')};
    .discount_price {
        font-size: ${themeGet('fontSizes.lg', '21')}px;
        color: ${themeGet('colors.price', '#EF3900')};
    }
    .original_price {
        font-size: ${themeGet('fontSizes.xs', '12')}px;
        color: ${themeGet('colors.gray.1000', '#4F4F4F')};
        span {
            text-decoration: line-through;
        }
    }
    .product_description {
        padding-top: 10px;
        font-size: ${themeGet('fontSizes.base', '14')}px;
    }
`;

export const ProductFeedback = styled.div`
    padding: 20px 20px;
    margin-top: 20px;
    background-color: ${themeGet('colors.white', '#ffffff')};
    .feedback_header {
        display: flex;
        justify-content: space-between;
        .user_name {
            font-size: ${themeGet('fontSizes.sm', '13')}px;
        }
        .view_all {
            color: ${themeGet('colors.price', '#EF3900')};
        }
    }
    .feedback_user {
        padding-top: 10px;
        color: ${themeGet('colors.gray.1000', '#4F4F4F')};
        .user_name {
            padding-left: 10px;
        }
        img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }
    }
    .feedback_content {
        padding-top: 10px;
    }
`;

export const ProductLogisticsDetail = styled.div`
    margin-top: 20px;
    padding: 20px 20px;
    background-color: ${themeGet('colors.white', '#ffffff')};
    color: ${themeGet('colors.gray.1000', '#4F4F4F')};
    .logistics_path_price {
        display: flex;
        .logistics_header {
            width: 10%;
        }
        .path_price {
            width: 90%;
            .path_price_row {
                padding-bottom: 10px;
                display: flex;
                justify-content: space-between;
                .path {
                    color: ${themeGet('colors.black', '#000000')};
                    span + span {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
    .delivery_plan {
        padding: 10px;
        background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
        display: flex;
        .delivery_img {
            width: 10%;
        }
        .delivery_name {
            width: 90%;
            color: ${themeGet('colors.black', '#000000')};
            display: flex;
            justify-content: space-between;
        }
    }
    
    .pay_method {
        padding-top: 10px;
        display: flex;
        .pay_method_header {
            width: 10%;
        }
        .method_detail {
            width: 100%;
            display: flex;
            justify-content: space-around;
            span {
                padding-right: 10px;
                img {
                    padding-right: 10px;
                }
            }
        }
    }
`;

export const ProductSizeDetail = styled.div`
    padding: 20px 20px;
    margin-top: 20px;
    background-color: ${themeGet('colors.white', '#ffffff')};
    .select_size {
        display: flex;
        .size_header {
            width: 10%;
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
        }
        .size_detail {
            width: 90%;
            .size_name {
                display: flex;
                justify-content: space-between;
            }
            .size_img {
                padding-top: 10px;
                display: flex;
                img {
                    width: 40px;
                    height: 40px;
                    margin-right: 3px;
                }
                .size_img_description {
                    padding: 10px 5px;
                    border-radius: 5px;
                    background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
                    color: ${themeGet('colors.gray.900', '#828282')};
                }
            }
        }
    }
    .size_data {
        padding-top: 20px;
        display: flex;
        .data_header {
            width: 10%;
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
        }
        .data-detail {
            width: 90%;
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const RecommendProductList = styled.div`
    padding: 20px 10px;
    margin-top: 20px;
    background-color: ${themeGet('colors.white', '#ffffff')};
    .recommend_header {
        display: flex;
        padding-left: 10px;
        .list_img {
            img {
                width: 32px;
                height: 32px;
            }
        }
        .list_name_button {
            width: 90%;
            display: flex;
            justify-content: space-between;
            .list_name {
                padding-left: 10px;
                line-height: 2;
                font-size: ${themeGet('fontSizes.sm', '13')}px;
            }
            .list_button {
                .all_products {
                    padding: 5px;
                    margin-right: 10px;
                    border-radius: 15px;
                    background-color: ${themeGet('colors.white', '#ffffff')};
                    border: 1px solid ${themeGet('colors.price', '#EF3900')};
                    color: ${themeGet('colors.price', '#EF3900')};
                }
                .enter_shop {
                    padding: 5px 10px;
                    border-radius: 15px;
                    background-color: ${themeGet('colors.price', '#EF3900')};
                    color: ${themeGet('colors.white', '#ffffff')};
                    border: 0;
                }
            }
        }
    }
    .recommend_description {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        span {
            padding-right: 10px;
        }
        .desc_name {
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
        }
        .desc_value {
            color: ${themeGet('colors.price', '#EF3900')};
        }
    }
    .recommend_products {
        padding-top: 20px;
        .products_header {
            display: flex;
            justify-content: space-between;
            font-size: ${themeGet('fontSizes.sm', '13')}px;
            .view_all {
                color: ${themeGet('colors.price', '#EF3900')};
            }
        }
        .product_list {
            padding-top: 10px;
            display: inline-grid;
            grid-template-columns: 31% 31% 31%;
            grid-gap: 10px;
            width:100%;
            .product {
                .product_img {
                    img {
                        width: 100%;
                        height: 100px;
                    }
                }
                .product_title {
                    padding-top: 10px;
                    a {
                        color: ${themeGet('colors.black', '#000000')};
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                }
                .product_price {
                    padding-top: 10px;
                    color: ${themeGet('colors.price', '#EF3900')};
                    font-size: ${themeGet('fontSizes.placeholder', '16')}px;
                }
            }
        }
    }
`;

export const ProductDetail = styled.div`
    position: relative;
    background-color: ${themeGet('colors.white', '#ffffff')};
    .detail_header {
        padding: 10px 0;
        background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
        color: ${themeGet('colors.gray.900', '#828282')};
        text-align: center;
        &:before {
            content: '';
            position: absolute;
            left: 30px;
            top: 20px;
            width: calc(100% - 60px);
            height: 1px;
            background-color: ${themeGet('colors.gray.700', '#E0E0E0')};
        }
        span {
            position: relative;
            padding: 0 10px;
            background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
        }
    }
    .detail-description {
        padding: 20px 10px;
    }
`;

export const PopularProducts = styled.div`
    position: relative;
    .popular_header {
        padding: 10px 0;
        background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
        text-align: center;
        color: ${themeGet('colors.gray.900', '#828282')};
        &:before {
            content: '';
            position: absolute;
            left: 30px;
            top: 20px;
            width: calc(100% - 60px);
            height: 1px;
            background-color: ${themeGet('colors.gray.700', '#E0E0E0')};
        }
        span {
            position: relative;
            padding: 0 10px;
            background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
        }
    }
    .popular_product_list {
        padding: 0;
        padding-left: 10px;
        display: inline-grid;
        grid-template-columns: 50% 50%;
        width:100%;
        .product {
            margin-bottom: 10px;
            margin-right: 10px;
            background-color: ${themeGet('colors.white', '#ffffff')};
            .product_img {
                img {
                    width: 100%;
                    height: 100px;
                }
            }
            .product_title {
                padding: 10px;
                a {
                    color: ${themeGet('colors.gray.1000', '#4F4F4F')};
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
            }
            .product_price {
                padding: 10px;
                color: ${themeGet('colors.price', '#EF3900')};
                font-size: ${themeGet('fontSizes.sm', '13')}px;
                span {
                    text-decoration: line-through;
                    padding-left: 10px;
                    color: ${themeGet('colors.gray.1000', '#4F4F4F')};
                    font-size: ${themeGet('fontSizes.xs', '12')}px;
                }
            }
        }
    }
`;

export const NeighbourProducts = styled.div`
    position: relative;
    .neighbour_header {
        padding: 10px 0;
        background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
        color: ${themeGet('colors.gray.900', '#828282')};
        text-align: center;
        &:before {
            content: '';
            position: absolute;
            left: 30px;
            top: 20px;
            width: calc(100% - 60px);
            height: 1px;
            background-color: ${themeGet('colors.gray.700', '#E0E0E0')};
        }
        span {
            position: relative;
            padding: 0 10px;
            background-color: ${themeGet('colors.gray.500', '#F2F2F2')};
        }
    }
    .neighbour_product_list {
        padding: 0;
        padding-left: 10px;
        display: inline-grid;
        grid-template-columns: 50% 50%;
        width:100%;
        .product {
            margin-bottom: 10px;
            margin-right: 10px;
            background-color: ${themeGet('colors.white', '#ffffff')};
            .product_img {
                img {
                    width: 100%;
                    height: 100px;
                }
            }
            .product_title {
                padding: 10px;
                a {
                    color: ${themeGet('colors.gray.1000', '#4F4F4F')};
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
            }
            .product_price {
                padding: 10px;
                color: ${themeGet('colors.price', '#EF3900')};
                font-size: ${themeGet('fontSizes.sm', '13')}px;
                span {
                    text-decoration: line-through;
                    padding-left: 10px;
                    color: ${themeGet('colors.gray.1000', '#4F4F4F')};
                    font-size: ${themeGet('fontSizes.xs', '12')}px;
                }
            }
        }
    }
`;

export const ProductMobileHeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    background-color: ${themeGet('colors.white')};
`;

export const HeaderIconWrap = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    span {
        padding-top: 5px;
        font-size: 9px;
        text-transform: uppercase;
        color: ${themeGet('colors.gray.900')};
    }
    
    &:not(:first-child) {
        margin-left: 10px;
    }
`;

export const SearchWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  width: calc(100% - 150px);
  svg {
    display: block;
    width: 17px;
    height: auto;
  }

  @media only screen and (min-width: 991px) and (max-width: 1366px) {
    opacity: 0;
  }
`;

export const ProductMobileFooterWrapper = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    background-color: ${themeGet('colors.white')};
`;

export const FooterButtonGroup = styled.div`
    width: 100%;
    text-align: center;
    button {
        border: 0;
        color: ${themeGet('colors.white')};
        padding: 10px 20px;
        &:first-child {
            background-color: ${themeGet('colors.yellow.regular')};
            border-radius: 20px 0 0 20px;
        }
        &:last-child {
            background-color: ${themeGet('colors.price')};
            border-radius: 0px 20px 20px 0px;
        }
    }
`;

export const ProductAttributeMobileWrapper = styled.div`
    position: relative;
    margin-top: 20vh;
    width: 100%;
    height: 80vh;
    background-color: ${themeGet('colors.white')};
    padding: 10px;
    font-size: ${themeGet('fontSizes.xs', '12')}px;
    .product_image_detail {
        display: flex;
        padding-top: 20px;
        padding-bottom: 20px;
        img {
            width: 30%;
            height: auto;
            padding-right: 20px;
        }
        .product_detail {
            .product_price {
                color: ${themeGet('colors.price')};
                font-size: ${themeGet('fontSizes.lg', '21')}px;
            }
            .product_stock {
                color: ${themeGet('colors.gray.900')};
                padding-bottom: 10px;
            }
        }
    }
    .product_logistics {
        padding-bottom: 20px;
        .product_location {
            color: ${themeGet('colors.gray.900')};
            display: flex;
            justify-content: space-between;
        }
        .product_logistics_hint {
            color: ${themeGet('colors.gray.900')};
        }
    }
    .product_detail_size {
        .size_header {
            font-size: ${themeGet('fontSizes.base', '14')}px;
            padding-bottom: 20px;
        }
    }
    
    .product_purchase_quantity {
        font-size: ${themeGet('fontSizes.base', '14')}px;
    }
    
    .buy_button_group {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
`;

export const Attributes = styled.div`
      display: flex;
      padding: 10px;
      line-height: 2rem;
`
export const InfoTitle = styled.div`
      margin-right: 10px;
      width: 5rem;
      min-width: 5rem;
      color: ${themeGet('colors.gray.900', '#828282')};
      line-height: 4;
`

export const AttributesValues = styled.div`
      display: flex;
      flex-flow: wrap;
      span {
            margin-left: 5px;
            background: ${themeGet('colors.white', '#FFFFFF')};
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
            font-size: ${themeGet('fontSizes.sm', '13')}px;
            
      }
      button {
            margin-left: 5px;
            margin-top: 5px;
            background: ${themeGet('colors.white', '#FFFFFF')};
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
            border: 1px solid ${themeGet('colors.gray.700', '#E0E0E0')};
            font-size: ${themeGet('fontSizes.sm', '13')}px;
      }
      .active {
            background: ${themeGet('colors.primary.regular', '#F00000')};
            color: ${themeGet('colors.white', '#FFFFFF')};
     }
`

export const AttributesWrapper = styled.div`
      
`

export const Quantity = styled.div`
      margin-left: 10px;
      color: ${themeGet('colors.gray.900', '#828282')};
      line-height: 2.5rem;
`

export const ProductAmountWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .quantity_header {
            line-height: 3;
      }
      .amount-counter {
            width: 25%;
            border-radius: 0;
            // border: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
            margin-left: 5px;
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
      }
`

export const CloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    button {
        border: 0;
    }
`

export const ProductInfoMobileWrapper = styled.div`
    position: relative;
    margin-top: 20vh;
    width: 100%;
    height: 80vh;
    background-color: ${themeGet('colors.white')};
    padding: 10px;
    font-size: ${themeGet('fontSizes.xs', '12')}px;
    color: ${themeGet('colors.black', '#000000')};
    .info_header {
        text-align: center;
    }
    .info_item {
        display: flex;
        padding-bottom: 10px;
        padding-top: 10px;
        border-bottom: 1px solid ${themeGet('colors.gray.700', '#E0E0E0')};
        span:first-child {
            width: 20%;
        }
        span:last-child {
            width: 80%;
            color: ${themeGet('colors.gray.900', '#828282')};
        }
        &:last-child {
            border-bottom: 0;
        }
    }
    .button_group {
        margin-top: 20px;
        text-align: center;
        button {
            border: 0;
            padding: 10px 20px;
            background-color: ${themeGet('colors.price', '#EF3900')};
            color: ${themeGet('colors.white', '#000000')};
            border-radius: 20px;
            width: 100%;
        }
    }
`;
