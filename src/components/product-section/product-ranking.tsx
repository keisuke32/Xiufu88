import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import useProducts from 'data/use-products';
import ErrorMessage from 'components/error-message/error-message';
import {ProductItem} from "./product-item";
import { themeGet } from '@styled-system/theme-get';

import {RankingIcon} from "assets/icons/RankingIcon";
import Link from "next/link";
import {useCategoryLevel} from "../../data/use-category";
import {LoaderItem, LoaderWrapper} from "../product-grid/product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";
import Loader from "../loader/loader";

interface Props {
    fetchLimit?: number;
    categories?: any;
}

export const ProductRanking = (
    {
        categories,
        fetchLimit = 7,
    }: Props) => {
    const router = useRouter();
    const [currentCate, setCurrentCate] = useState(categories && categories.length > 0 ? categories[0].id : null);
    const defaultHovered = 1;
    const [hoveredProductItem, setHoveredProductItem] = useState(defaultHovered);
    const [categoryProducts, setCategoryProducts] = useState({});

    const {loading, products, error, hasMore, fetchMore} = useProducts({
        text: router.query.text,
        category: currentCate,
        offset: 0,
        limit: fetchLimit,
    });

    if (error) {
        console.log(error.message);
        // return <ErrorMessage message="Network Error"/>;
    }
    if (!products && !loading) return null;

    const setCurrentCategory = (category_id) => {
        setCurrentCate(category_id)
    }
    const onMouseEnterProductItem = (item_id) => {
        setHoveredProductItem(item_id)
    }
    const onMouseLeaveProductItem = () => {
        setHoveredProductItem(defaultHovered)
    }

    return (
        <ProductRankingBox>
            <CategoryNavigation>
                <RankingIcon />
                {
                    categories.map((sub_category, idx) => (
                        (idx < 4) &&
                        <CategoryNavigationItem className={(sub_category.id == currentCate)?"current-cate":""} onMouseEnter={() => setCurrentCategory(sub_category.id)} key={idx}>{sub_category.name}</CategoryNavigationItem>
                    ))
                }
            </CategoryNavigation>
            <TopProductList onMouseLeave={() => onMouseLeaveProductItem()}>
                {!loading ? products.map((product, idx) => (
                    <ProductItem
                        product={product}
                        ranking={idx}
                        key={idx}
                        hovered={hoveredProductItem}
                        onMouseEnter={() => onMouseEnterProductItem(idx)}
                    />
                )): <Loader/>}
            </TopProductList>
        </ProductRankingBox>
    );
};

const ProductRankingBox = styled.div`
    border: 1px solid ${themeGet('colors.gray.700')};
    height: 100%;
    
`;

const CategoryNavigation = styled.div`
    display: flex;
    padding: 0 5px;
    border-bottom: 1px solid ${themeGet('colors.gray.700', '#BDBDBD')};
    cursor: pointer;
    flex-wrap: wrap;
    align-items: center;
    min-height: 49px;
`;

const CategoryNavigationItem = styled.div`
    width: calc((100% - 21px) / 4);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    padding: 0.75rem 0.5rem;
    border-bottom: 2px solid transparent;
    
    &:hover {
        color: ${themeGet('colors.primary.regular')};
    }
    
    &.current-cate {
        color: ${themeGet('colors.blue.regular')};
        border-bottom: 2px solid ${themeGet('colors.blue.regular')};
    }
`;

const TopProductList = styled.div`
    padding: 0.75rem;
`;
