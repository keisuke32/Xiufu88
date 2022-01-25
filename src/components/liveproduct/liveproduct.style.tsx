import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import BrandBackground from "assets/images/brand_background.png";
import BrandBackgroundBottom from "assets/images/brand_background_bottom.png";

export const LiveProductCategoryList = styled.ul`
    flex:1;
    overflow-x:auto;
    display:flex;
    align-items:center;
    li
    {
        display:flex;
        min-width:fit-content;
        flex-wrap:nowrap;
        float:left;
        padding:10px;
        color:white;
        margin-right:18px;
        cursor:pointer;
        font-size:12px;
        a {
            white-space: nowrap;
            color: white;
        }
    }

    li.active
    {
        a {
            text-decoration: none;
        }
        font-weight:bold;
        border-bottom:2px solid white;
    }
`;

export const AdAreaMobile = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
    height: 15%;
`;
export const AdvertisementItemMobile = styled.div`
    img {
        width: 100%;
        height: 100%;
    }
`;
export const CategoryImageAreaMobile = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
`;

export const CategoryImageMobile = styled.div`
    img {
        width: 100%;
        height: 100%;
    }
`;

export const BrandSectionMobile = styled.div`
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    background: url("${BrandBackgroundBottom}");
    background-repeat: no-repeat;
    background-size: cover;
`

export const BrandItem = styled.div`
    padding: 5px;
    position: relative;
    // border: 1px solid ${themeGet('colors.gray.800')};
    cursor: pointer;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
    }
    
    .brand-name {
        // position: absolute;
        padding: 5px 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;        
        transition: all 0.3s;
        white-space: nowrap;
        color: white;
        text-overflow: ellipsis;
    }
    
    &:hover {
        .brand-name {
            // background-color: ${themeGet('colors.white')};
            // opacity: 0.3;
        }
    }
`;

export const ProductSectionMobileWrapper = styled.div`

`;
