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
// import {useCart} from "../../contexts/cart/use-cart";
import {cartAnimation} from "../../utils/cart-animation";

const Card = styled.div({
    backgroundColor: '#fff',
    overflow: 'hidden',
    border: '1px solid #f3f3f3',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    float: 'left',
    width: 'calc(100% / 3)',
    height: '50%',

    transition: 'all 0.3s ease-in-out',
    '&.slide-right:hover': {
        'img': {
            transform: 'translateX(20px)',
        }
    },
    '&.zoom-in:hover': {
        'img': {
            transform: 'scale(1.2)',
        }
    },
    '&.lighten:hover': {
        'img': {
            filter: 'opacity(0.7)',
        }
    },
    '&.rectangle:hover': {
        border: '1px solid #FF0036',
        img: {
            filter: 'opacity(0.7)'
        }
    },
    //
    // ':hover': {
    //     'img': {
    //         filter: 'opacity(0.7)',
    //         border: '1px solid #FF0036',
    //     },
    // },
});

const PriceWrapper = styled.div({
    display: 'flex',
    alignItems: 'center'
});

const Title = styled.h2({
    marginBottom: '5px',
    color: '#999',
    fontSize: 12,
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

const Price = styled.span(
    css({
        color: 'primary.regular',
        fontSize: 14,
        fontWeight: 'heading',
        marginBottom: '5px',
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

const ImageWrapper = styled.div({
    height: 200,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    overflow: 'hidden',
    img: {
        padding: '15px',
        height: '100%',
        width: '100%',
        objectFit: 'contain',
    },
    '@media screen and (max-width: 1280px)': {
        height: 200,
    },

    '@media screen and (max-width: 560px)': {
        height: 150,
    },
});

const Image = styled.img({
    height: '100%',
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

interface Props {
    data: any;
}

export const ProductCardDefault = ({data}: Props) => {
    const {title, thumbnail, assets, oldPrice, price, slug, discountInPercent} = data;
    // const {addItem, removeItem, getItem, isInCart, items} = useCart();
    const hoverEffects = ["slide-right", "zoom-in", "lighten", "rectangle"];

    // const handleAddClick = (e) => {
    //     e.stopPropagation();
    //     addItem(data);
    //     if (!isInCart(data.id)) {
    //         cartAnimation(e);
    //     }
    // };
    // const handleRemoveClick = (e) => {
    //     e.stopPropagation();
    //     removeItem(data);
    // };
    const getRandomHoverEffectClass = () => {
        const index = Math.floor(Math.random() * hoverEffects.length);
        return hoverEffects[index];
    }

    return (
        <Link href='/products/[slug]' as={`/products/${slug}`}>
            <a>
                <Card className='rectangle'>
                    <ImageWrapper>
                        <Image src={thumbnail?.thumbnail || assets[0]?.thumbnail || assets[0]?.url || ""} alt={data.title}/>
                    </ImageWrapper>
                    <Box>
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
