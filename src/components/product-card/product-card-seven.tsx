import React from 'react';
import Link from 'next/link';
import {AddItemToCart} from 'components/add-item-to-cart';
import styled from 'styled-components';
import css from '@styled-system/css';
import {Box} from 'components/box';
import {Text} from 'components/text';
import {Button} from "../button/button";
import {CartIcon} from "../../assets/icons/CartIcon";
import {ButtonText} from "./product-card.style";
import {FormattedMessage} from "react-intl";
import {Counter} from "../counter/counter";
import {useCart} from "../../contexts/cart/use-cart";
import {cartAnimation} from "../../utils/cart-animation";
import {opacity} from "styled-system";

const Card = styled.div({
    backgroundColor: '#fff',
    overflow: 'hidden',
    border: '1px solid #f3f3f3',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s ease-in-out',
    cursor: 'pointer',
    marginBottom: '20px',

    ':hover': {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        // transform: 'translateY(-5px)',
        filter: 'opacity(0.5)',
    },
});
const ImageWrapper = styled.div({
    height: 200,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    overflow: 'hidden',

    '@media screen and (max-width: 1280px)': {
        height: 200,
    },

    '@media screen and (max-width: 990px)': {
        height: 100,
    },
});

const Image = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: '3px'
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
        color: 'primary.regular',
        fontSize: 18,
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

export const ProductCard = ({data}: Props) => {
    const {title, thumbnail, assets, oldPrice, price, slug, discountInPercent} = data;

    return (
        <Link href='/products/[slug]' as={`/products/${slug}`}>
            <a style={{textDecoration: 'none', color: 'black'}}>
            <Card>
                <ImageWrapper>
                    <Image src={thumbnail?.thumbnail || assets[0]?.thumbnail || assets[0]?.url || ""} alt={data.title}/>
                    {discountInPercent ? <Discount>{discountInPercent}%</Discount> : null}
                </ImageWrapper>

                <Box padding={30}>
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
