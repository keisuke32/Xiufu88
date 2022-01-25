import React from 'react';
import Link from 'next/link';
import { AddItemToCart } from 'components/add-item-to-cart';
import styled from 'styled-components';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import { Box } from 'components/box';
import {FormattedMessage} from "react-intl";

const ListCard = styled.div`
    background-color: #fff;
    display: inline-grid;
    grid-template-columns: 85px 30% 20% 10%;
    width:100%;
    border-bottom: 1px solid ${themeGet("colors.gray.800")};
    padding-top: 20px;
    padding-bottom: 20px;
    &:last-child {
        border-bottom: none;
    }
    cursor: pointer;
`;

const ImageWrapper = styled.div`
    width: 100%;
`;

const ProductTitle = styled.p`
    overflow: hidden;
    max-height: 3rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.5rem;
`;

const DetailWrapper = styled.div`
    padding-left: 20px;
    position: relative;
    p {
        font-size: ${themeGet("fontSizes.placeholder")}px;
    }
    .detailDescription {
        display: flex;
        justify-content: space-between;
        color: ${themeGet("colors.gray.900")};
        a {
            text-decoration: underline;
            color: ${themeGet("colors.gray.900")};
            position: absolute;
            bottom: 0;
            left: 20px;
        }
        .sellerCity {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
`;

const PriceWrapper = styled.div`
    padding-left: 20px;
    font-size: ${themeGet("fontSizes.placeholder")}px;
    color: ${themeGet("colors.price")};
`;

const ReviewWrapper = styled.div`
    padding-left: 20px;
    color: ${themeGet("colors.gray.900")};
    .reviewCount{
        span{
            color: ${themeGet("colors.blue.light")};
        }
    }
`;

interface Props {
    data: any;
    productRef?: any;
}

export const ProductListCard = ({ data, productRef }: Props) => {
    const { title, thumbnail, assets, price, oldPrice, slug, seller, sold } = data;

    return (
        <Link href='/products/[slug]' as={`/products/${slug}`}>
            <a style={{textDecoration: 'none', color: 'black'}}>
            <ListCard ref={productRef}>
                <ImageWrapper>
                    <img src={thumbnail?.thumbnail || assets[0]?.thumbnail || assets[0]?.url || ''} alt={title} height="85px" width="85px"/>
                </ImageWrapper>
                <DetailWrapper>
                    <ProductTitle>{title}</ProductTitle>
                    <div className="detailDescription">
                        <a href="#"><span>{seller?.name}</span></a>
                        <span className="sellerCity">{seller?.organization?.address?.city || seller?.address?.city}</span>
                    </div>
                </DetailWrapper>
                <PriceWrapper>
                    {price?.formatted}
                </PriceWrapper>
                <ReviewWrapper>
                    <div className="soldCount">
                        <span>{sold}</span>人付款
                    </div>
                    <div className="reviewCount">
                        <FormattedMessage id="product.sold" defaultMessage="评价: " />
                        <span>{sold}</span>
                    </div>
                </ReviewWrapper>
            </ListCard>
            </a>
        </Link>
    );
};
