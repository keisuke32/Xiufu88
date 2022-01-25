import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
import {Box} from 'components/box';

const Card = styled.div({
    backgroundColor: '#fff',
    overflow: 'hidden',
    border: '1px solid #f3f3f3',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s ease-in-out',
    cursor: 'pointer',
    marginBottom: '20px',
    borderRadius: 8,

    ':hover': {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        transform: 'translateY(-5px)',
    },
});
const ImageWrapper = styled.div({
    height: 100,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    overflow: 'hidden',
});

const Image = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'contain'
});
const Discount = styled.div(
    css({
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        backgroundColor: 'primary.regular',
        color: '#fff',
        overflow: 'hidden',
        padding: '0.25rem 0.5rem',
        fontSize: 12,
        borderRadius: 6,
        pointerEvents: 'none',
    })
);
const Title = styled.h2({
    marginBottom: 10,
    color: '#999',
    fontSize: 10,
    fontWeight: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    lineHeight: '1.4',
});

const PriceWrapper = styled.div({
    display: 'flex',
    alignItems: 'center'
});

const Price = styled.span(
    css({
        color: 'primary.regular',
        fontSize: 12,
        fontWeight: 'heading',
        lineHeight: 1,
    })
);

const SalePrice = styled.span(
    css({
        color: 'text.regular',
        fontSize: 15,
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

interface Props {
    data: any;
}

export const ProductCardMobileImage = ({data}: Props) => {
    const {title, thumbnail, assets, oldPrice, price, slug, discountInPercent} = data;

    return (
        <Link href='/products/[slug]' as={`/products/${slug}`}>
            <a style={{textDecoration: 'none', color: 'black'}}>
            <Card>
                <ImageWrapper>
                    <Image src={thumbnail?.thumbnail || assets[0]?.thumbnail || assets[0]?.url || ""} alt={data.title}/>
                    {discountInPercent ? <Discount>{discountInPercent}%</Discount> : null}
                </ImageWrapper>

                <Box padding={10}>
                    <Title>{title}</Title>
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <PriceWrapper>
                            <Price>{oldPrice?.formatted ? oldPrice.formatted : price.formatted}</Price>
                            {discountInPercent ? <SalePrice>${price.formatted}</SalePrice> : null}
                        </PriceWrapper>
                    </Box>
                </Box>
            </Card>
            </a>
        </Link>
    );
};
