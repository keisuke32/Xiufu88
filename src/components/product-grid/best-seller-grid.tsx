import React, { useState } from 'react';
import { BestProductCard } from 'components/product-card/best-product-card';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import { useBestProducts } from 'data/use-products';
import {LoaderItem, LoaderWrapper} from "./product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";
import {Button} from 'components/button/loadmore-button';
import {FormattedMessage} from 'react-intl';
import {Box} from 'components/box';

const Grid = styled.div(
    css({
        display: 'block',
    })
);

interface Props {
    loadMore?: boolean;
    fetchLimit?: number;
    style?: any;
}

export const BestSellerGrid = ({
                                style,
                                fetchLimit = 20,
                                loadMore = true,
                            }: Props) => {

    const [pageNumber, setPageNumber] = useState(0);
    const router = useRouter();

    const { data, error, hasMore, loading } = useBestProducts({
        text: "",
        category: router.query.category,
        offset: fetchLimit * pageNumber,
        limit: fetchLimit,
        feature: "SOLD",
        sort: "DESC"
    });

    if (error) return <ErrorMessage message={error.message} />;

    const handleLoadMore = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <div>
            {
                data && (
                    <Grid style={style}>
                        {
                            data.map((product, idx) => {
                                return <BestProductCard data={product} key={idx}/>
                            })
                        }
                    </Grid>
                )
            }

            {
                loading && (
                    <LoaderWrapper>
                        <LoaderItem style={{width: "100%"}}>
                            <Placeholder uniqueKey="1"/>
                        </LoaderItem>
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
                            borderRadius: 0,
                        }}
                        border='1px solid #f1f1f1'
                    >
                        <FormattedMessage id='loadMoreButton' defaultMessage='Load More' />
                    </Button>
                </Box>
            )}
        </div>
    );
};
