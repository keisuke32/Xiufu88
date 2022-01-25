import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BottombarWrapper = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 40px;
        position: relative;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 2px #888888;
        z-index: 1;
        font-size: 16px;
        line-height: 21px;
        
        .popover-content {
            box-shadow: 2px 2px rgba(142,142,142,0.14);
        }
        
        @media (max-width: 990px) {
            display: none !important;
        }
`;

export const TopCategoryWrapper = styled.div(
    {
        padding: '20px 0',
    }
);

export const MainMenuWrapper = styled.div(
    {

    }
);

export const MainMenuBox = styled.ul(
    {
        display: "flex",
    }
);

export const MainMenuItem = styled.li`
    display: flex;
    align-items: center;
    
    &:not(:first-child) {
        margin-left: 2.5rem;
    }
    .menu-item {
        margin-left: 10px;
        a {
            color: ${themeGet('colors.gray.700')};
            text-decoration: none;
            
            &.current-page {
                color: ${themeGet('colors.primary.regular', '#FFFFFF')};
                
                span.label {
                    color: ${themeGet('colors.primary.regular', '#FFFFFF')};
                }
            }
            span.label {
                color: black;
            }
        }
    }
    
    &:hover {
        color: ${themeGet('colors.primary.regular', '#FFFFFF')};
        
        .menu-item {
            a {
                color: ${themeGet('colors.primary.regular', '#FFFFFF')};             
                span.label {
                    color: ${themeGet('colors.primary.regular', '#FFFFFF')};
                }
            }   
        }
    }
`;
export const FollowWrapper = styled.div(
    {

    }
);

export const FollowBox = styled.ul(
    {
        display: "flex",
        alignItems: "center",
    }
);
export const FollowItem = styled.li`
    margin-left: 20px;
`;
