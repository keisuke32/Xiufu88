import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const TopFooterWrapper = styled.footer`
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
`;

export const ServiceItem = styled.div`
    display: flex;
    .service_text {
        position: relative;
        width: 150px;
        margin-left: 20px;
        .service_name {
            position: absolute;
            top: 0;
            p {
                font-size: ${themeGet('fontSizes.badge', '14')}px;
                font-weight: ${themeGet('fontWeights.heading', '14')}px;
                font-style: bold;
            }
        }
        .service_detail {
            position: absolute;
            bottom: 0;
            font-size: ${themeGet('fontSizes.base', '14')}px;
            font-weight: ${themeGet('fontWeights.body', '14')}px;
        }
    }
`;
export default TopFooterWrapper;
