import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const OrderBox = styled.div`
`;
const OrderContainer = styled.div`
`;
const OrderContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${themeGet('colors.gray.700', '#FFFFFF')};
    
    .order-menu {
        display: flex;
        
        .menu-item {
            padding: 15px 0;
            a {
                padding: 0 30px;
                cursor: pointer;
            }
            
            &:not(:first-child) a {
                border-left: 1px solid ${themeGet('colors.gray.600', '#FFFFFF')};
            }
            
            &.current-page a, &:hover a {
                color: ${themeGet('colors.primary.regular', '#FFFFFF')};
            }
        }
    }
    
    .to-trash {
        display: flex;
        align-items: center;
        color: ${themeGet('colors.gray.900', '#FFFFFF')};
        cursor: pointer;
        
        &:hover {
            color: ${themeGet('colors.primary.regular', '#FFFFFF')};
        }
        
        span {
            margin-left: 5px;
        }
    }
`;
const OrderContainerContent = styled.div`
    .custom-control {
        display:flex;
        align-items: center;
    }
`;
const OrderSearchBar = styled.div`
    display: flex;
    padding: 25px 0;
    
    .search-input {
        font-size: ${themeGet('fontSizes.xs', 12)}px;
        padding: 5px 10px;
        border: 1px solid ${themeGet('colors.gray.700', '#FFFFFF')};
        width: 15rem;
        &:focus {
            outline: none;
        }
    }
    .search-button {
        border: 1px solid ${themeGet('colors.gray.700', '#FFFFFF')};
        font-size: ${themeGet('fontSizes.xs', 12)}px;
        padding: 5px 10px;
        
        &:hover {
            background: ${themeGet('colors.gray.600', '#FFFFFF')};
        }
    }
    .advance-filter {        
        display: flex;
        align-items: center;
        margin-left: 1rem;
        font-size: ${themeGet('fontSizes.xs', 12)}px;
        color: ${themeGet('colors.black', '#FFFFFF')};
        cursor: pointer;
    }
`;
const OrderList = styled.div`
`;
const OrderListHead = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 15% 12% 12%;
    font-size: ${themeGet('fontSizes.xs', 12)}px;
    padding: 10px 0;
    background: ${themeGet('colors.gray.700', ' #FFFFFF')};
    span {
        text-align: center;
    }
    
    .product-head {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 10% 10% 12%;
    }
`;
const OrderListTool = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    .tool-left {
        display: flex;
        align-items: center;
        
        button {
            margin-left: 2rem;
            font-size: ${themeGet('fontSizes.xs', 12)}px;
        }
    }
    .tool-right {
        display: flex;
        
        button {
            margin-left: .5rem;
            font-size: ${themeGet('fontSizes.xs', 12)}px;
        }
    ]
`;
const OrderWrapper = styled.div``;
const StoreList = styled.div``;
const StoreItem = styled.div`
    margin-bottom: 10px;
`;
const StoreHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 20px;
    background: ${themeGet('colors.fog.light', '#FFFFFF')};
    border: 1px solid ${themeGet('colors.fog.regular', '#FFFFFF')};
    font-size: ${themeGet('fontSizes.xs', 12)}px;
    
    .order-number {
        margin-left: 1rem;
    }
    .store-name, .contact-seller {
        margin-left: 2rem;
    }
    .contact-seller {
        cursor: pointer;
        background: #F0FFFE;
        border: 1px solid #B2D3D1;
        padding-right: 5px;
        
        a {
            &:hover {
                color: ${themeGet('colors.primary.regular', '#FFFFFF')};
            }
        }
    }
    
    &.completed {
        background: ${themeGet('colors.gray.300', '#FFFFFF')};
        border: 1px solid ${themeGet('colors.gray.700', '#FFFFFF')};
    }
`;
const StoreContainer = styled.div`    
    display: grid;
    grid-template-columns: minmax(0, 1fr) 15% 12% 12%;
    font-size: ${themeGet('fontSized.xs', 12)}px;
    
    .grid-content {
        padding-top: 10px;
    }
    .grid-footer {
        padding: 15px 20px;
        border-top: 1px solid ${themeGet('colors.fog.regular', '#FFFFFF')};
    }
`;
const ProductList = styled.div`
    border: 1px solid ${themeGet('colors.fog.regular', '#FFFFFF')};
    
    .shipping-id {
        padding-left: 5px;
    }
`;
const ProductItem = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 10% 10% 12%;
    text-align: center;
    
    .product-basic {
        padding: 10px;
        display: flex;
        
        .product-image {
            width: 85px;
            height: 85px;
            overflow: hidden;
            
            img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }
        .product-name {
            width: calc(100% - 95px);
            padding-left: 10px;
            text-align: left;
        }    
    }        
    
    .price, .quantity, .operation {
        padding-top: 10px;
    }
    
    &:not(:first-child) {
        border-top: 1px solid ${themeGet('colors.fog.regular')};
    }
`;
const RealPayment = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    border: 1px solid ${themeGet('colors.fog.regular', '#FFFFFF')};
    span {
        display: block;
        text-align: center;
        padding-top: 5px;
    }
    .shipping-button-wrap {
        padding-top: 5px;
        text-align: center;
        
        button {
            border: none;
            padding: 2px 15px;
            margin-left: 5px;
            color: ${themeGet('colors.white')};
            
            &.consolidation {
                background: ${themeGet('colors.blue.regular', '#FFFFFF')};
                
                &:hover {
                    background: ${themeGet('colors.blue.link', '#FFFFFF')};
                }
            }            
            &.direct-delivery {
                background: ${themeGet('colors.green.regular', '#FFFFFF')};
                
                &:hover {
                    background: ${themeGet('colors.green.link', '#FFFFFF')};
                }
            }
        }
                    
    }
    
`;
const TransactionStatus = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    border: 1px solid ${themeGet('colors.fog.regular', '#FFFFFF')};
    text-align: center;
    span, a {
        display: block;
        color: ${themeGet('colors.black')};
        padding-top: 5px;
    }
    a {
        cursor: pointer;
        
        &:hover {
            color: ${themeGet('colors.primary.regular')};
        }
    }
`;
const TransactionOperation = styled.div`
    border: 1px solid ${themeGet('colors.fog.regular', '#FFFFFF')};
    text-align: center;
    span {
        display: block;
        color: ${themeGet('colors.black')};
        padding-top: 5px;
    }
    
    button {
        color: ${themeGet('colors.white')};
        border: none;
        margin-top: 5px;
        padding: 5px 12px;
        border-radius: 4px;
        
        &.combine {
            background: ${themeGet('colors.primary.regular')};
            
            &:hover {
                background: ${themeGet('colors.primary.hover')};
            }
                
        }
        &.confirm {
            background: ${themeGet('colors.blue.regular')};
            
            &:hover {
                background: ${themeGet('colors.blue.link')};
            }
        }
    }
`;
const OrderContainerFooter = styled.div``;
const HotItemWrapper = styled.div``;
export {
    OrderBox,
    OrderContainer,
    OrderContainerHeader,
    OrderContainerContent,
    OrderSearchBar,
    OrderList,
    OrderListHead,
    OrderListTool,
    OrderWrapper,
    StoreList,
    StoreItem,
    StoreHeader,
    StoreContainer,
    OrderContainerFooter,
    ProductList,
    ProductItem,
    RealPayment,
    TransactionStatus,
    TransactionOperation,
    HotItemWrapper
};
