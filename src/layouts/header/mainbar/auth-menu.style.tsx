import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const AuthMenuBox = styled.div`
    display: flex;
    padding: 0 40px;
    color: white;
    
    button {
        background: transparent;
        border-radius: 0;
        
        &:hover {
            background: transparent;
            color: #EFEFEF;
        }  
        
        &.register-button {
            border-left: 1px solid #FFFFFF;
            padding-right: 145px;
        }
    }    
`;
export const CartBox = styled.div`
    display: flex;
    position: relative;
    .menu-item {
        display: flex;
        align-items: center;
        padding: 0 15px;
        font-weight: ${themeGet('fontWeights.bold', 700)};
    }
    
    button, .menu-item a {
        background: transparent;
        border-radius: 0;
        color: ${themeGet('colors.white', '#FFFFFF')};
        text-decoration: none;
        
        &:hover {
            background: transparent;
            color: #EFEFEF;
        }
        border-radius: 0;
    }
    
    span.cart-badge {
        border: 2px solid ${themeGet('colors.white', '#FFFFFF')};
        border-radius: 50%;
        width: 30px;
        height: 30px;
        position: absolute;
        background-color: ${themeGet('colors.red', '#007bff')};
        line-height: 28px;
        text-align: center;
        color: ${themeGet('colors.white', '#FFFFFF')};
        font-size: ${themeGet('fontSizes.base', '14')}px;
        font-weight: ${themeGet('fontWeights.bold', 700)};
        top: -15px;
        left: 20px;
    }
`;
