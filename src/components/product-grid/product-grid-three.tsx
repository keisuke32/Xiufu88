import React, { useState, useRef, useCallback } from 'react';
import { ProductCard } from 'components/product-card/product-card-six';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import useProducts from 'data/use-products';
import {LoaderItem5, LoaderWrapper} from "./product-list/product-list.style";
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
            gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 991px)': {
            gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(4, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 1400px)': {
            gridTemplateColumns: 'repeat(5, minmax(220px, 1fr))',
        },
    })
);

interface Props {
    type: string;
    loadMore?: boolean;
    fetchLimit?: number;
    style?: any;
}

export const ProductGridThree = ({
                                style,
                                type,
                                fetchLimit = 20,
                                loadMore = true,
                            }: Props) => {
    const router = useRouter();

    const [pageNumber, setPageNumber] = useState(0);

    const { data, error, hasMore, loading } = useProducts({
        text: router.query.text,
        category: router.query.category,
        offset: fetchLimit * pageNumber,
        limit: fetchLimit,
    });

    const observer = useRef();

    if (error) return <ErrorMessage message={error.message} />;

    const handleLoadMore = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <section>
            {
                data && (
                    !loading && !data.length ? (
                        <NoResultFound />
                    ) : (
                        <Grid style={style}>
                            {
                                data.map((product, idx) => {
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
                        <LoaderItem5>
                            <Placeholder uniqueKey="1"/>
                        </LoaderItem5>
                        <LoaderItem5>
                            <Placeholder uniqueKey="2"/>
                        </LoaderItem5>
                        <LoaderItem5>
                            <Placeholder uniqueKey="3"/>
                        </LoaderItem5>
                        <LoaderItem5>
                            <Placeholder uniqueKey="4"/>
                        </LoaderItem5>
                        <LoaderItem5>
                            <Placeholder uniqueKey="5"/>
                        </LoaderItem5>
                    </LoaderWrapper>
                )
            }
            {loadMore && hasMore && (
                <Box style={{ textAlign: 'right' }} mt={'2rem'}>
                    <Button
                        onClick={handleLoadMore}
                        loading={loading}
                        variant='primary'
                        style={{
                            fontSize: 14,
                            display: 'inline-flex',
                        }}
                        border='1px solid #f1f1f1'
                    >
                        <FormattedMessage id='loadMoreButton' defaultMessage='Load More' />
                    </Button>
                </Box>
            )}
        </section>
    );
};
