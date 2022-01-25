import styled, {css} from "styled-components";
import {themeGet} from '@styled-system/theme-get';

export const FashionSection = styled.div`
    margin-bottom: 1rem;
`;

export const FashionSectionWrapper = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    grid-template-columns: 20% minmax(0, 1fr);
    background-color: #f9f9f9;
`;

export const SectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
    padding-right: 20px;
    
    .menu-item {
        a {
            position: relative;
            color: ${themeGet('colors.gray.900')};
            
            &:after {
                content: '>';
                right: -15px;
                position: absolute;
                transition: all 0.3s;
            }
            
            &:hover {                
                &:after {
                    right: -17px;
                }
            }
        }
    }
`;

export const SectionTitleHead = styled.div`
    display: flex;
    align-items: flex-end;
    line-height: 1;
    h3 {
        padding-left: 10px;   
    }
`;

export const AdvertisementItemTwo = styled.div`
    display: flex;
    padding-bottom: 20px;
    max-height: 884px;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;
