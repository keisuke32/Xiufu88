import React, {useState, useRef, useCallback, useEffect} from 'react';
import {ProductCard} from 'components/product-card/product-card-six';
import styled from 'styled-components';
import css from '@styled-system/css';
import {useRouter} from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import useProducts from 'data/use-products';
import {LoaderItem, LoaderWrapper} from "./product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";
import NoResultFound from "../no-result/no-result";
import {Button} from 'components/button/loadmore-button';
import {FormattedMessage} from 'react-intl';
import {Box} from 'components/box';

const Grid = styled.div(
    css({
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(1, minmax(220px, 1fr))',

        '@media screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(1, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 740px)': {
            gridTemplateColumns: 'repeat(1, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 991px)': {
            gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 1400px)': {
            gridTemplateColumns: 'repeat(4, minmax(220px, 1fr))',
        },
    })
);

interface Props {
    type?: string;
    loadMore?: boolean;
    fetchLimit?: number;
    style?: any;
    variations?: any;
    categories?: any;
    handleTotal?: any;
    page?: any;
}

export const ProductGrid = (
    {
        style,
        type,
        fetchLimit = 20,
        loadMore = true,
        handleTotal,
        page = 1,
        variations,
        categories
    }: Props) => {
    const router = useRouter();

    const {data, products, error, hasMore, loading, total} = useProducts({
        text: router.query.text,
        category: router.query.category,
        offset: fetchLimit * (page - 1),
        limit: fetchLimit,
        variations: variations,
        categories: categories
    });

    useEffect(() => {
        if (!loading && handleTotal) {
            handleTotal(total);
        }
    }, [loading]);

    if (error) return <ErrorMessage message="Network Error"/>;

    return (
        <section>
            {
                products && (
                    !loading && !products.length ? (
                        <NoResultFound/>
                    ) : (
                        <Grid style={style}>
                            {
                                products.map((product, idx) => {
                                    return <ProductCard data={product} key={idx}/>
                                })
                            }
                        </Grid>
                    )
                )
            }

            {
                loading && (
                    <LoaderWrapper>
                        {[...Array(fetchLimit)].map((_, idx) => {
                            return (<LoaderItem key={idx}>
                                <Placeholder uniqueKey={idx}/>
                            </LoaderItem>)
                        })}
                    </LoaderWrapper>
                )
            }
        </section>
    );
};
