const LogisticsWrapper = styled.div`
  margin-top: 50px;
  .order-detail {
    margin-top: 20px;
    padding-bottom: 50px;
    background-color: ${themeGet('colors.checkout.gray1')};
    border: 1px solid ${themeGet('colors.gray.700')};
    p {
        padding-top: 20px;
        padding-left: 20px;
        label {
            padding-right: 10px;
        }
    }
    p.deliver-time {
        span {
            color: ${themeGet('colors.red')};
        }
    }
    p.order-item {
        color: ${themeGet('colors.blue.link')};
    }
  }
  .logistics-info {
    margin-top: 20px;
    .logistics-info-header {
        padding-bottom: 10px;
        border-bottom: 1px solid ${themeGet('colors.gray.700')};
        font-size: ${themeGet('fontSizes.rating')}px;
    }
    .view-products {
        padding-top: 10px;
        select {
            border: 1px solid ${themeGet('colors.gray.800')};
        }
        .logistics-diagram {
            padding-top: 20px;
            display: inline-grid;
            grid-template-columns: 10% 20% 10% 20% 10% 20% 10%;
            width:100%;
            img {
                border: 1px solid ${themeGet('colors.gray.800')};
                border-radius: 50%;
            }
            img.active {
                border: 1px solid ${themeGet('colors.red')};
            }
            label {
                padding-top: 20px;
            }
        }
        .transport-detail {
            padding-top: 20px;
            .transport-detail-header {
                padding-bottom: 10px;
                padding-left: 20px;
                border-bottom: 1px solid ${themeGet('colors.gray.700')};
            }
            .transport-detail-content {
                padding-top: 20px;
                display: inline-grid;
                grid-template-columns: 2% 10% 5% 10% 30%;
                width:100%;
                span.check-icon {
                    padding-top: 5px;
                }
            }
        }
    }
    button.gonext {
        float: right;
    }
    .logistics-order-detail {
        margin-top: 100px;
        padding-top: 10px;
        border: 1px solid ${themeGet('colors.gray.900')};
        .logistics-order-detail-header {
            padding-left: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid ${themeGet('colors.gray.900')};
            button {
                float: right;
                border: 1px solid ${themeGet('colors.gray.800')};
                margin-right: 10px;
                border-radius: 5px;
            }
        }
        .logistics-order-detail-content{
            padding-top: 10px;
            padding-left: 10px;
            p {
                padding-top: 20px;
                display: inline-grid;
                grid-template-columns: 10% 90%;
                width:100%;
            }
            p.seller-info, p.order-info {
                display: inline-grid;
                grid-template-columns: 10% 25% 25% 25%;
                width:100%;
            }
        }
        .product-info {
            padding: 10px;
            table {
                padding-top: 10px;
                padding-bottom: 10px;
                thead {
                    background-color: #F3F8FF;
                    th {
                        padding-top: 10px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid ${themeGet('colors.gray.700')};
                        border-top: 1px solid ${themeGet('colors.gray.700')};
                        text-align: center;
                        &:first-child {
                            border-left: 1px solid ${themeGet('colors.gray.700')};
                        }
                        &:last-child {
                            border-right: 1px solid ${themeGet('colors.gray.700')};
                        }
                    }
                }
                tbody {
                    tr {
                        td {
                            text-align: center;
                            border: 1px solid ${themeGet('colors.gray.700')};
                            img {
                                width: 82px;
                                height: 82px;
                                margin-right: 20px;
                            }
                            a {
                                color: black;
                            }
                            span.total-price {
                                color: red;
                            }
                        }
                        td.title {
                            a {
                                color: ${themeGet('colors.blue.link')};
                            }
                        }
                        &:last-child {
                            td {
                                border-left: 0;
                                border-right: 0;
                            }
                            td:first-child {
                                border-left: 1px solid ${themeGet('colors.gray.700')};
                            }
                            td:last-child {
                                border-right: 1px solid ${themeGet('colors.gray.700')};
                            }
                        }
                        &:last-child {
                            background-color: #F3F8FF;
                        }
                    }
                }
            }
         }
    }
  }
  .favourite-goods {
        margin-top: 50px;
        .goods-header {
            border-bottom: 1px solid ${themeGet('colors.gray.700')};
            font-size: ${themeGet('fontSizes.rating')}px;
            margin-bottom: 20px;
        }
  }
`;
import styled from 'styled-components';

import { themeGet } from '@styled-system/theme-get';

export default LogisticsWrapper;
