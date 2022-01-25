import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
import {Box} from 'components/box';

const Card = styled.div({
    backgroundColor: '#fff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s ease-in-out',
    cursor: 'pointer',

    ':hover': {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        transform: 'translateY(-5px)',
    },
});
const ImageWrapper = styled.div({
    height: 250,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    overflow: 'hidden',
    '@media (max-width: 1490px)': {
        height: 220,
    },

    '@media (max-width: 1024px)': {
        height: 190,
    }
});

const Image = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'contain'
});
const Title = styled.h2({
    marginBottom: 10,
    color: '#999',
    fontSize: 15,
    fontWeight: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
    textAlign: 'center',
    lineHeight: '1.4',
    minHeight: '42px'
});

const PriceWrapper = styled.div({
    display: 'flex',
    alignItems: 'center'
});

const Price = styled.span(
    css({
        color: 'white',
        fontSize: 'base',
        fontWeight: 'semiBold',
        lineHeight: 1,
        padding: '5px 10px',
        backgroundColor: 'primary.regular',
        border: '1px solid',
        borderColor: 'primary.regular'
    })
);

const SalePrice = styled.span(
    css({
        color: 'gray.700',
        fontSize: 'base',
        lineHeight: 1,
        fontWeight: 'semiBold',
        padding: '5px 10px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'primary.regular',
        textDecoration: 'line-through',
    })
);

interface Props {
    data: any;
}

export const ProductCardTheme = ({data}: Props) => {
    const {title, thumbnail, assets, oldPrice, price, slug, discountInPercent} = data;

    return (
        <Link href='/products/[slug]' as={`/products/${slug}`}>
            <a style={{textDecoration: 'none', color: 'black'}}>
            <Card>
                <ImageWrapper>
                    <Image src={thumbnail?.thumbnail || assets[0]?.thumbnail || assets[0]?.url || ""} alt={data.title}/>
                </ImageWrapper>

                <Box padding={10}>
                    <Title>{title}</Title>
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <PriceWrapper>
                            <Price>{price?.formatted}</Price>
                            <SalePrice>{oldPrice ? oldPrice?.formatted : price?.formatted}</SalePrice>
                        </PriceWrapper>
                    </Box>
                </Box>
            </Card>
            </a>
        </Link>
    );
};
