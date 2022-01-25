import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ProductMoreMenuMobileWrapper = styled.div`
    color: ${themeGet('colors.white', '#FFFFFF')};
    font-size: ${themeGet('fontSizes.ms', '10')}px;
    padding: 10px;
    .more_title {
        width: 100%;
        text-align: left;
        font-size: ${themeGet('fontSizes.base', '14')}px;
    }
    .more_menu {
        padding-top: 50px;
        display: flex;
        justify-content: space-around;
        .menu_content {
            text-align: center;
            padding: 15px 25px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 10px;
            .menu_title {
                padding-top: 10px;
            }
        }
    }
`;