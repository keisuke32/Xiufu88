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
    height: ['190px', '210px'],

    img: {
      display: 'block',
      width: '100%',
      height: '100%',
        objectFit: 'contain',
        padding: '5px',
    },
  })
);
const Discount = styled.div<any>(
  css({
    position: 'absolute',
    zIndex: 1,
    top: '10px',
    left: '10px',
    backgroundColor: 'primary.regular',
    color: '#fff',
    overflow: 'hidden',
    padding: '0.25rem 0.5rem',
    fontSize: 12,
    borderRadius: 6,
    pointerEvents: 'none',
  })
);

const CounterWrapper = styled.div<any>(
  css({
    position: 'absolute',
    zIndex: 1,
    top: '10px',
    right: '10px',
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
    fontSize: 16,
    fontWeight: 'semiBold',
  })
);

const SalePrice = styled.span(
  css({
    color: 'text.regular',
    fontSize: 13,
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
        fontSize: 'base',
        fontWeight: 'regular',
        marginBottom: 10,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': '2',
        lineHeight: 1.4,
        minHeight: 42,
    })
);

const Seller = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${themeGet('colors.gray.900')};
    span.sellerName {    
        color: ${themeGet('colors.gray.900')};
        text-decoration: underline;
    }
`;

const SoldCount = styled.div`
    margin-top: 5px;
    text-align: right;
    color: ${themeGet('colors.gray.900')};
    
    span {
        font-weight: ${themeGet('fontWeights.heading')};
        color: ${themeGet('colors.blue.light')};
    }
`
interface Props {
  data: any;
    productRef?: any;
}

export const ProductCard = ({ data, productRef }: Props) => {
  const { title, thumbnail, assets, price, oldPrice, slug, seller, sold } = data;

  return (
    <Link href='/products/[slug]' as={`/products/${slug}`}>
        <a style={{textDecoration: 'none'}}>
      <Card ref={productRef}>
        <Box position='relative'>
          {/*<CounterWrapper>*/}
          {/*  <AddItemToCart data={data} />*/}
          {/*</CounterWrapper>*/}
          <ImageWrapper>
            <img src={thumbnail?.thumbnail || assets[0]?.thumbnail || assets[0]?.url || ''} alt={title} />
          </ImageWrapper>
          {/*{discountInPercent ? <Discount>{discountInPercent}%</Discount> : null}*/}
        </Box>
        <Box padding={20}>
          <PriceWrapper>
            <Price>{price?.formatted}</Price>
            <SalePrice>{oldPrice ? oldPrice?.formatted : price?.formatted}</SalePrice>
          </PriceWrapper>
          <Title>{title}</Title>
            <Seller>
                <span className="sellerName">{seller?.name}</span>
                <span>{seller?.organization?.address?.city || seller?.address?.city}</span>
            </Seller>
            <SoldCount>
                <FormattedMessage id="product.sold" defaultMessage="评价: " />
                <span>{sold}</span>
            </SoldCount>
        </Box>
      </Card>
        </a>
    </Link>
  );
};
