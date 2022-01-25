import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';

const CheckoutWrapper = styled.div`
    background: ${themeGet('colors.white', '#FFFFFF')};
`;

export const CheckoutContainer = styled.div<any>(
    css({
        position: 'relative',
        padding: ['0 0 100px', '0 0 50px', '0 2rem 50px'],
        maxWidth: '1150px',
        margin: '0 auto',
    })
);

export const CheckoutHeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    
    ul {
        display: flex;
        padding-right: 40px;
        
        li {
            position: relative;
            background: ${themeGet('colors.gray.800', '#BDBDBD')};
            height: 34px;
            padding: 0 30px;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: ${themeGet('colors.white', '#FFFFFF')};
            transition: all 0.3s;
                
            span.checkout-step-number {
                position: absolute;
                width: 28px;
                height: 28px;
                left: -12px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                background: rgba(0,0,0,0.1);
                color: ${themeGet('colors.white', '#FFFFFF')};
                transition: all 0.3s;
            }
            
            &:first-child, &:last-child {  
            
                &:before {
                    content: " ";   
                    position: absolute;
                    top: 0;       
                    width: 34px;
                    height: 34px;   
                    background: ${themeGet('colors.gray.800', '#BDBDBD')};
                    transition: all 0.3s;
                }
                
                &:hover, &.active {
                    &:before {
                        background: ${themeGet('colors.primary.regular', '#EF3900')}; 
                    }
                }                        
            }
            &:first-child {              
                &:before {
                    left: -17px;
                    border-radius: 50% 0 0 50%;
                }
            }
            &:last-child {             
                &:before {
                    right: -17px;
                    border-radius: 0 50% 50% 0;
                }
            }
            
            &:not(:first-child) {
                margin-left: 38px;
            }
            
            &:not(:last-child) {
                &:after {
                    content: " ";
                    position: absolute;
                    top: 0;       
                    right: -20px;
                    width: 0;
                    height: 0;
                    border-top: 17px solid transparent;
                    border-left: 20px solid ${themeGet('colors.gray.800', '#BDBDBD')};
                    border-bottom: 17px solid transparent;
                    z-index: 1;
                    transition: all 0.3s;
                }
            }
            
            &.active, &:hover {
                background: ${themeGet('colors.primary.regular', '#EF3900')};
                
                &:after {
                    border-left: 20px solid ${themeGet('colors.primary.regular', '#EF3900')};
                }            
                span.checkout-step-mark {     
                    background: ${themeGet('colors.primary.regular', '#EF3900')};
                }
            }
            
            span.checkout-step-mark {     
                
                display: inline-block;
                position: absolute;
                width: 32px;
                height: 34px;
                left: -32px;
                background: ${themeGet('colors.gray.800', '#BDBDBD')};
                transition: all 0.3s;
                      
                &:before {       
                    content: " ";
                    position: absolute;
                    top: 12px;
                    left: 8px;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: ${themeGet('colors.white', '#FFFFFF')};
                    transition: all 0.3s;
                }
                
                &:after {                    
                    content: " ";
                    position: absolute;
                    width: 0px;
                    height: 34px;
                    border-top: 13px solid transparent;
                    border-left: 16px solid ${themeGet('colors.white', '#FFFFFF')};
                    border-bottom: 13px solid transparent;
                    transition: all 0.3s;
                }
                    
            }
        }
        
    }
`;

export const CheckoutInformation = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 20px;

  @media (max-width: 990px) {
    margin-right: 10px;
  }

  @media (max-width: 767px) {
    order: 1;
    margin-right: 0;
  }
`;

export const Heading = styled.h3`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.4;
  margin-bottom: 35px;
  position: relative;
  width: calc(100% - 100px);
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: ${themeGet('fontSizes.md', '19')}px;
  }
`;

export const InformationBox = styled.div`
    border-top: 2px solid ${themeGet('colors.gray.700', '#BDBDBD')};
    padding: 5px 0;
    margin-bottom: 30px;
    
    button.use-another-address {
        margin-left: 100px;
        margin-top: 10px;
        border: 1px solid ${themeGet('colors.gray.700', '#BDBDBD')};
        background: ${themeGet('colors.gray.500', '#F2F2F2')};
        padding: 4px 12px;
        cursor: pointer;
        
        &:hover {
            background: ${themeGet('colors.gray.700', '#BDBDBD')};
        }
    }
`;

export const InformationBoxHeaderWrapper = styled.div`
    font-size: ${themeGet('fontSizes.base', '14')}px;
    padding: 5px;
    span:last-child {
        float: right;
        color: ${themeGet('colors.blue.link', '#004FB9')};
    }
`;

export const AddressWrapper = styled.div`
    background: ${themeGet('colors.checkout.gray1', '#FFF3F7')};
    border: 1px solid ${themeGet('colors.checkout.gray2', '#FFD3E2')};
    padding:5px 20px;
    
    div {
        display: flex;
        align-items: flex-end;
    }
    
    div:last-child {
        padding-top: 14px;
        justify-content: flex-end;
        
        a:hover {
            color: ${themeGet('colors.primary.hover', '#FEFEFE')};
        }
    }
    span.address-text{
        margin-left: 20px;
        input{
            margin-right: 10px;
        }
    }
`;

export const ShippingMethodWrapper = styled.div`
    margin-top: 3px;
    border: 1px solid ${themeGet('colors.fog.regular')};
    padding: 10px 15px;
    background: ${themeGet('colors.fog.alternate')};
`;

export const ShippingMethodTitle = styled.div`
    display: flex;
    padding-bottom: 20px;
    
    span:first-child {
        width: 15%;    
    }
    span:last-child {
        width: 85%;
        padding-left: 50px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

export const ShippingMethodBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`;

export const ShippingMethodItem = styled.div`
    width: calc(100% / 3);
    padding-bottom: 20px;
    
    label {
        cursor: pointer;
        
        &:hover {
            color: ${themeGet('colors.primary.hover', '#FEFEFE')};
        }
        span.shipping-price {
            padding: 0 10px;
        }
    }
    
    a.detail {
        color: ${themeGet('colors.blue.link', '#004FB9')};
        
        &:hover {
            color: ${themeGet('colors.primary.hover', '#FEFEFE')};
        }
    }
`;

export const CartWrapper = styled.div`
    font-size: ${themeGet('fontSizes.xs', '12')}px;
`;

export const CartContainer = styled.div`
`;

export const CartHeader = styled.div<any>(
    css({
        display: 'grid',
        gridColumnGap: '3px',
        gridTemplateColumns: [
            'minmax(0, 1fr) 20% 10% 10% 15% 10%',
        ],
        paddingTop: '20px',

        'span': {
            textAlign: 'center',
            borderBottom: '2px solid',
            borderBottomColor: 'fog.regular',
        }
    })
);

export const CartContent = styled.div`
    padding-bottom: 90px;
`;
export const StoreItemWrapper = styled.div`
    padding-top: 30px;
`;

export const StoreHeader = styled.div`
    padding-bottom: 10px;
    span {
        padding-left: 10px;
        
        &:first-child {
            padding-right: 100px;
        }
    }
`;
export const ProductList = styled.div``;

export const ProductItem = styled.div<any>(
    css({
        display: 'grid',
        gridColumnGap: '3px',
        gridTemplateColumns: [
            'minmax(0, 1fr) 20% 10% 10% 15% 10%',
        ],
        padding: '10px',
        background: 'fog.light',
        border: '1px solid',
        borderColor: 'fog.regular',

        '&:not(:first-child)': {
            borderTop: 'none',
        },

        'span': {
            padding: '0 10px;',
            fontSize: 'sm',

            '&.price, &.quantity, &.discount': {
                textAlign: 'center'
            },
            '&.amount': {
                color: 'primary.regular',
                textAlign: 'right',
                padding: '0'
            }
        }
    })
);
export const ProductItemName = styled.div`
    display: flex;
    flex-wrap: wrap;
    .product-image {
        width: 50px;
        height: 50px;
        overflow: hidden;
        img {
            width: 100%;
            object-fit: contain;
        }
    }
    .product-name {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        width: calc(100% - 50px);
        
        span {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    
`;

export const StoreFooter = styled.div``;
export const StoreOption = styled.div<any>(
    css({
        display: 'grid',
        gridColumnGap: '3px',
        gridTemplateColumns: [
            '50% minmax(0, 1fr)',
        ],
        padding: '3px 0',

        'div': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: 'fog.alternate',
            border: '1px solid',
            borderColor: 'fog.regular',

            'label': {
                width: '15%',
                fontSize: 'xs',
            },
            'textarea': {
                width: '85%',
                height: '65px',
                fontSize: 'xs',
                borderColor: 'gray.700',
            },
            'span': {
                fontSize: 'xs',

                '&.shipping-price': {
                    color: 'primary.regular',
                }
            }

        }
    })
);
export const StoreTotalAmount = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 20px 10px;
    background-color: ${themeGet('colors.fog.alternate', '#F3F3FF')};
    border: 1px solid ${themeGet('colors.fog.regular', '#DCDCFF')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    
    span {
        color: ${themeGet('colors.primary.regular', '#EF1D00')};
        padding-left: 10px;
    }
`;

export const CheckoutFooter = styled.div`
    display: flex;
    align-items: flex-end;
    flex-flow: column;
    font-size: ${themeGet('fontSizes.sm', ' 13')}px;
    
    .checkout-detail {
        padding: 25px 5px;
        text-align: right;
        max-width: 60%;
        width: 100%;
        border: 1px solid ${themeGet('colors.primary.regular', '#FFFFFF')};
        
        .real-payment {
            padding-bottom: 10px;
            
            .total-amount {
                font-size: ${themeGet('fontSizes.xl', '24')}px;
                color: ${themeGet('colors.primary.regular', '#FFFFFF')};
                font-weight: ${themeGet('fontWeights.heading', 700)};
            }
        }
    }
    
    .checkout-footer-buttons {
        .back-to-cart {
            position: relative;
            background: transparent;
            border: none;
            padding: 12px 70px;
            color: ${themeGet('colors.blue.link', '#FFFFFF')};
            cursor: pointer;
            
            &:before {
                content: "<";
                position: absolute;
                left: 50px;
            }
            &:hover {
                color: ${themeGet('colors.blue.light', '#FFFFFF')};
            }
        }
        .place-order {
            background: ${themeGet('colors.primary.regular', '#FFFFFF')};
            border: none;
            padding: 12px 70px;
            color: ${themeGet('colors.white', '#FFFFFF')};
            cursor: pointer;
            
            &:hover {
                background: ${themeGet('colors.primary.hover', '#FFFFFF')};
            }
        }
    }
    
    .checkout-footer-note {
        background: ${themeGet('colors.gray.400', '#FFFFFF')};
        border: 1px solid ${themeGet('colors.gray.700', '#FFFFFF')};
        margin-top: 30px;
        
        span.notification {
            position: relative;
            padding: 0 30px 0 20px;
            font-size: ${themeGet('fontSizes.xs', '12')}px;
        
            &:before {
                content: "";
                position: absolute;
                width: 9px;
                height: 9px;
                border-radius: 50%;
                background: ${themeGet('colors.yellow.regular', '#FFFFFF')};
                left: 6px;
                top: 4px;
            }
            
            &:after {            
                content: "?";
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                font-size: 9px;
                width: 12px;
                height: 12px;
                border: 1px solid ${themeGet('colors.blue.link', '#FFFFFF')};
                color: ${themeGet('colors.blue.link', '#FFFFFF')};
                border-radius: 50%;
                right: 6px;
                top: 3px;
            }
        }
    }
`;

export const NoProductMsg = styled.h3`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  line-height: 1.2;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`;

export const NoProductImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    width: 140px;
    height: auto;
  }
`;

export default CheckoutWrapper;
