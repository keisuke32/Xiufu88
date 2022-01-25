import React, { useState, useRef, useCallback } from 'react';
import { ProductCardMobile } from 'components/product-card/product-card-mobile';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useRouter } from 'next/router';
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
        gridColumnGap: '4%',
        gridRowGap: '10px',
        gridTemplateColumns: '48% 48%',

        '@media screen and (min-width: 740px)': {
            gridColumnGap: '2%',
            gridTemplateColumns: '23.5% 23.5% 23.5% 23.5%',
        },
    })
);

interface Props {
    loadMore?: boolean;
    fetchLimit?: number;
    style?: any;
    isFeatured?: boolean;
}

export const ProductGridMobile = ({
                                style,
                                fetchLimit = 20,
                                loadMore = true,
                                isFeatured,
                            }: Props) => {
    const router = useRouter();

    const [pageNumber, setPageNumber] = useState(0);

    const { data, error, hasMore, loading } = useProducts({
        text: router.query.text,
        category: router.query.category,
        offset: fetchLimit * pageNumber,
        limit: fetchLimit,
        isFeatured: isFeatured
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
                                    return <ProductCardMobile data={product} key={idx}/>
                                })
                            }
                        </Grid>
                    )
                )
            }

            {
                loading && (
                    <LoaderWrapper>
                        <LoaderItem>
                            <Placeholder uniqueKey="1"/>
                        </LoaderItem>
                        <LoaderItem>
                            <Placeholder uniqueKey="2"/>
                        </LoaderItem>
                        <LoaderItem>
                            <Placeholder uniqueKey="3"/>
                        </LoaderItem>
                        <LoaderItem>
                            <Placeholder uniqueKey="4"/>
                        </LoaderItem>
                    </LoaderWrapper>
                )
            }
            {/*{loadMore && hasMore && (*/}
            {/*    <Box style={{ textAlign: 'center' }} mt={'2rem'}>*/}
            {/*        <Button*/}
            {/*            onClick={handleLoadMore}*/}
            {/*            loading={loading}*/}
            {/*            variant='primary'*/}
            {/*            style={{*/}
            {/*                fontSize: 14,*/}
            {/*                display: 'inline-flex',*/}
            {/*            }}*/}
            {/*            border='1px solid #f1f1f1'*/}
            {/*        >*/}
            {/*            <FormattedMessage id='loadMoreButton' defaultMessage='Load More' />*/}
            {/*        </Button>*/}
            {/*    </Box>*/}
            {/*)}*/}
        </section>
    );
};
