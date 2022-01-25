import React, {useState, useRef, useCallback, useEffect} from 'react';
import {ProductListCard} from 'components/product-list/product-list-one';
import styled from 'styled-components';
import css from '@styled-system/css';
import {useRouter} from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import useProducts from 'data/use-products';
// import {LoaderItem, LoaderWrapper} from "./product-list/product-list.style";
import {PlaceholderList} from "../placeholder/placeholder";
import NoResultFound from "../no-result/no-result";
import {Button} from 'components/button/loadmore-button';
import {FormattedMessage} from 'react-intl';
import {Box} from 'components/box';
import {LoaderItem, LoaderWrapper} from "./product-list.style";

const List = styled.div(
    css({
        display: 'block',
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

export const ProductList = (
    {
        style,
        type,
        fetchLimit = 20,
        loadMore = true,
        handleTotal = undefined,
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
    }, [total]);

    if (error) return <ErrorMessage message="Network Error"/>;

    return (
        <section>
            {
                products && (
                    !loading && !products.length ? (
                        <NoResultFound/>
                    ) : (
                        <List style={style}>
                            {
                                products.map((product, idx) => {
                                    return <ProductListCard data={product} key={idx}/>
                                })
                            }
                        </List>
                    )
                )
            }
            {
                loading && (
                    <LoaderWrapper>
                        {[...Array(fetchLimit)].map((_, idx) => {
                            return (<LoaderItem key={idx}>
                                <PlaceholderList uniqueKey={idx}/>
                            </LoaderItem>)
                        })}
                    </LoaderWrapper>
                )
            }
        </section>
    );
};
