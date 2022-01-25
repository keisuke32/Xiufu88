import React from 'react';
import Link from 'next/link';
import { AddItemToCart } from 'components/add-item-to-cart';
import styled from 'styled-components';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import { Box } from 'components/box';
import {FormattedMessage} from "react-intl";

const Card = styled.div({
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid',
    borderColor: themeGet('colors.gray.400'),
    borderRadius: 8,
    cursor: 'pointer',
    transition: '0.25s ease-in-out',
    '&:hover': {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        transform: 'translateY(-5px)',
    },
});
const ImageWrapper = styled.div(
    css({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        height: '170px',

        img: {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
        },
    })
);

const PriceWrapper = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
});

const Price = styled.span(
    css({
        display: 'block',
        color: 'primary.regular',
        fontSize: 12,
        fontWeight: 'semiBold',
    })
);

const SalePrice = styled.span(
    css({
        color: 'text.regular',
        fontSize: 11,
        lineHeight: 1,
        fontWeight: 'regular',
        padding: '0 5px',
        overflow: 'hidden',
        position: 'relative',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center',

        ':before': {
            content: '""',
            width: '100%',
            height: 1,
            display: 'inline-block',
            backgroundColor: 'text.regular',
            position: 'absolute',
            top: '50%',
            left: 0,
        },
    })
);

const Title = styled.h2(
    css({
        color: 'text.regular',
        fontSize: 11,
        fontWeight: 'regular',
        marginBottom: 10,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': '2',
        lineHeight: 1.4,
        minHeight: 30,
    })
);

interface Props {
    data: any;
    productRef?: any;
}

export const ProductCardMobile = ({ data, productRef }: Props) => {
    const { title, thumbnail, assets, price, oldPrice, slug, seller, sold } = data;

    return (
        <Link href='/products/[slug]' as={`/products/${slug}`}>
            <a style={{textDecoration: 'none', color: 'black'}}>
            <Card ref={productRef}>
                <Box position='relative'>
                    <ImageWrapper>
                        <img src={thumbnail?.thumbnail || assets[0]?.thumbnail || assets[0]?.url || ''} alt={title} />
                    </ImageWrapper>
                </Box>
                <Box padding={10}>
                    <Title>{title}</Title>
                    <PriceWrapper>
                        <Price>{price?.formatted}</Price>
                        <SalePrice>{oldPrice ? oldPrice?.formatted : price?.formatted}</SalePrice>
                    </PriceWrapper>
                </Box>
            </Card>
            </a>
        </Link>
    );
};
