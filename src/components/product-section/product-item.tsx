import React, {useState} from 'react';
import Link from 'next/link';
import {FormattedMessage} from "react-intl";
import styled from 'styled-components';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import ErrorMessage from 'components/error-message/error-message';
import {useRouter} from 'next/router';
import useProducts from 'data/use-products';
import {ProductCardDefault} from 'components/product-card/product-card-default';
import { ArrowNext } from 'assets/icons/ArrowNext';
import {lineHeight} from "styled-system";
import {Button} from "components/button/button";

const currency = "￥";

interface Props {
    product: any;
    ranking: number;
    hovered: number;
    onMouseEnter: any;
}

export const ProductItem = (
    {
        product,
        ranking,
        hovered,
        onMouseEnter,
    }: Props) => {

    if (ranking < 1 || ranking == hovered)
        return (
            <Link href='/products/[slug]' as={`/products/${product.slug}`}>
                <a style={{textDecoration: 'none', color: 'black'}}>
            <TopProductItem>
                <ProductDetail>
                    <p>
                        <span>{ranking + 1}</span>
                        {product.title}
                    </p>
                    <p>{product.price.formatted}</p>
                    <p>月销量</p>
                </ProductDetail>
                <Image src={product.thumbnail?.thumbnail || product.assets[0]?.thumbnail || product.assets[0]?.url || ""} />
            </TopProductItem>
                </a>
            </Link>
        );
    else
        return (
            <Link href='/products/[slug]' as={`/products/${product.slug}`}>
                <a style={{textDecoration: 'none', color: 'black'}}>
            <TopProductItem onMouseEnter={onMouseEnter}>
                <p className="product-name"><span>{ranking + 1}</span> {product.title}</p>
                <span className="product-price">{product.price.formatted}</span>
            </TopProductItem>
                </a>
            </Link>
        );
};

const TopProductItem = styled.div`
    display: flex;
    padding: 10px 5px;
    cursor: pointer;
    flex-wrap: wrap;
    
    &:not(:first-child) {
        border-top: 1px solid ${themeGet('colors.gray.700', '#BDBDBD')};
    }
    
    span {
        padding-right: 5px;
        width: 4rem;
        text-align: right;
    }
    
    p.product-name {
        width: calc(100% - 4rem);
    }
    span.product-price {
        white-space: nowrap;
    }
    p {        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    p:not(:first-child) {
        padding-left: 20px;
        padding-top: 10px;
    }
    p:last-child {
        color: ${themeGet('colors.gray.900', '#BDBDBD')};
    }
    
    &:hover {
        p {
            color: ${themeGet('colors.primary.regular')};
        }
    }
`;

const ProductDetail = styled.div`
    width: 65%;
    padding-right: 5px;
`;
const Image = styled.img({
    width: '35%',
    height: '100px',
    objectFit: 'contain',
    objectPosition: 'center',
});
