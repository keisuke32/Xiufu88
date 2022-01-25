import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const FooterWrapper = styled.footer`
    background-color: ${themeGet('colors.gray.300')};
    padding: 40px 0;
    width: 80%;
    margin: 0 auto;
    
    @media (max-width: 990px) {
        display: none !important;
    }
    
    @media (max-width: 1440px) {
        width: 90%;
    }
`;

export default FooterWrapper;
