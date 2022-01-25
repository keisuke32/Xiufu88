import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PaymentGroupContainer = styled.div`
    padding: 15px 20px;
    border: 1px solid ${themeGet('colors.blue.regular')};
`;

export const PaymentGroupTitle = styled.div`
`;

export const PaymentGroupBox = styled.div`
`;

export const PaymentBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 25px;
`;

export const PaymentItem = styled.div`
    width: 25%;
    div.custom-control {
        padding-right: 2.5rem;
        label {
            border: 1px solid ${themeGet('colors.gray.700')};
            padding: 10px;
            width: 100%;
            height: 60px;
            position: relative;
            cursor: pointer;
            
            &:before, &:after {
                top: 20px;
                width: 20px;
                height: 20px;
                margin-left: -15px;
            }
            
            img {
                height: 100%;
            }
        }
    }
`;

export const PaymentConfirmButton = styled.div`
    text-align: right;
    
    button {
        padding: 5px 30px;
    }
`;

export const PaymentContent = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-wrap: warp;
`;

export const PaymentForm = styled.div`
    padding: 4rem 8rem;
    display: grid;
    grid-template-columns: 20% minmax(0, 1fr);
    
    label {
        position: relative;
        display: block;
        height: 2.5rem;
        text-align: right;
        margin-right: 2rem;
        
        span {
            position: absolute;
            color: ${themeGet('colors.gray.800')};
            top: 1rem;
            right: 0;
        }
        
    }
    
    input {
        height: 2rem;
        width: 12rem;
        border: 1px solid ${themeGet('colors.gray.700')};
        &:focus {
            outline: none;
        }
    }
    
`;

export const PaymentInformation = styled.div`
    width: 50%;
    span {
        padding-right: 1rem;
    }
`;

export const PaymentDetail = styled.div`
    width: 25%;
    text-align: right;
    
    .service {
        display: flex;
        justify-content: flex-end;
        
        .service-price {
            padding-left: 0.2rem;
        }
        
        .rule {
            position: relative;
            
            a {
                padding-left: 0.2rem;
                color: ${themeGet('colors.blue.regular')};
                cursor: pointer;
            }
            
            .payment-rule-info {
                position: absolute;
                border: 1px solid ${themeGet('colors.gray.700')};
                padding: 1rem;
                width: 25rem;
                top: 1.5rem;
                right: 0;
                opacity: 0;
                z-index: -99;
                transition: all 0.3s;
                text-align: left;
                background: ${themeGet('colors.white')};
                
                p {
                    padding: 0.5rem 0;
                    border-bottom: 1px solid ${themeGet('colors.gray.700')};
                    color: ${themeGet('colors.black')};
                }
                p:last-child {
                    border-bottom: none;
                }
                
                &:before {
                    content: " ";
                    border:
                }
            }
            
            &:hover {
                .payment-rule-info {
                    opacity: 1;
                    z-index: 99;
                }
            }
        }
    }
    
`;
export const HE = styled.div`
    `;
