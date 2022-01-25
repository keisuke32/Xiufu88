import React, {useState} from 'react';
import Link from 'next/link';
import {FormattedMessage} from "react-intl";
import styled from 'styled-components';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import ErrorMessage from 'components/error-message/error-message';
import Router, {useRouter} from 'next/router';
import useProducts, {useThemeProducts} from 'data/use-products';
import {ProductCardDefault} from 'components/product-card/product-card-default';

import { ArrowNext } from 'assets/icons/ArrowNext';
import {LoaderItem, LoaderWrapper} from "../product-grid/product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";

interface Props {
    loadMore?: boolean;
    fetchLimit?: number;
    style?: any;
    theme?: any;
    sort?: any;
    feature?: any;
}

const import_goods = [
    {id: 1, title: "糕点"},
    {id: 2, title: "坚果 "},
    {id: 3, title: "方便麵"},
    {id: 4, title: "饼乾"},
    {id: 4, title: "意面 "},
    {id: 4, title: "海产品"},
];

const local_goods = [
    {id: 1, title: "糕点"},
    {id: 2, title: "坚果 "},
    {id: 3, title: "方便麵"},
    {id: 4, title: "饼乾"},
    {id: 4, title: "意面 "},
];

export const ProductSectionMobile = (
    {
        theme,
        style,
        loadMore = true,
        fetchLimit = 6,
        sort = "DESC",
        feature = "CREATED_AT"
    }: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [brandCategory, setBrandCategory] = useState(0)

    const {themeProducts, error: themeProductsError, loading: themeProductsLoading} = useThemeProducts({theme: theme.id, feature, sortType: sort, limit:fetchLimit});

    function selectBrandCategory(brandCategoryID) {
        setBrandCategory(brandCategoryID);
    }

    if (!themeProducts) {
        return (
            <LoaderWrapper>
                <LoaderItem>
                    <Placeholder uniqueKey="1"/>
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="2"/>
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="3"/>
                </LoaderItem>
            </LoaderWrapper>
        );
    }

    const handleCategory = (e) => {
        Router.push('/productfilter?category=' + e);
    }

    return (
        <ThemeMobileWrapper>
            <CategoryImage>
                <a href="#">
                    <img src={theme?.thumbnail?.thumbnail || theme?.thumbnail?.url } alt={theme?.name}/>
                    <ThemeName>{theme?.name}</ThemeName>
                </a>
            </CategoryImage>
            <Grid>
                {themeProducts.map((product, idx) => (
                    <ProductCardDefault data={product} key={idx}/>
                ))}
            </Grid>
        </ThemeMobileWrapper>
    );
};
const ThemeMobileWrapper = styled.div`
    position: relative;
    padding: 10px;
`
const ThemeName = styled.div`
    position: absolute;
    top: 0;
    padding: 20px;
    font-weight: ${themeGet('fontWeights.heading')};
    font-size: ${themeGet('fontSizes.2xl')}px;    
    color: ${themeGet('colors.white')};
`

const Grid = styled.div(
    css({
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'gray.700',
        height: "500px",
    })
);

const CategoryImage = styled.div`
    img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const ThemeWrap = styled.div`
    
`;
const ProductGridWrapper = styled.div`
`;

