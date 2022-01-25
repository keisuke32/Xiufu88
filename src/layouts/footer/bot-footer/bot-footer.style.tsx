import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BotFooterWrapper = styled.footer`
    padding: 0px 2rem; 
`;

export const BotFooterNavigationOne = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 50px;
    border-top: 1px solid ${themeGet('colors.gray.700', '#E0E0E0')};
    border-bottom: 1px solid ${themeGet('colors.gray.700', '#E0E0E0')};
`;

export const BotFooterNavigationOneItem = styled.div`
    text-align: center;
    padding-bottom: 20px;
    font-size: 12px;
    color: #4F4F4F;
    
    h5 {
        padding-bottom: 10px;
        color: black;
        text-align: left;
        .menu-header a {
            color: black;
            padding-bottom: 5px;
            transition: all 0.3s;
            &:hover {
                color: gray;
            }
        }
    }
    .menu-item a {        
        color: black;
        padding-bottom: 5px;
        transition: all 0.3s;
        &:hover {
            color: gray;
        }
    }
    .merchant_service_policy{
        display: flex;
    }
`;

export const BotFooterNavigationTwo = styled.div`
    display: flex;
    flex-flow: column;
    padding: 20px 0;
    
    .menu-item {
        a {
            color: black;
            padding: 0 2px;
            transition: all 0.3s;
            &:hover {
                color: gray;
            }
        }
        
        &:not(:first-child) a {
            border-left: 1px solid black;
        }
    }
`;

export const BotFooterNavigationTwoItem = styled.div`
    text-align: center;
    padding-bottom: 20px;
    font-size: 12px;
    color: #4F4F4F;
`;

export const BotFooterNavigationTwoWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
    font-size: 12px;
    .menu-item {
        a {
            padding: 0 10px;
        }
    }
`;
export default BotFooterWrapper;
