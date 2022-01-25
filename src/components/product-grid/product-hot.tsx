import React, {useState} from 'react';
import {ProductCard} from 'components/product-card/product-card-seven';
import styled from 'styled-components';
import css from '@styled-system/css';
import Slider from "react-slick";
import ErrorMessage from 'components/error-message/error-message';
// import { useQuery, NetworkStatus } from '@apollo/client';
// import { GET_PRODUCTS } from 'graphql/query/products.query';
import {useRouter} from 'next/router';
import {Button} from 'components/button/loadmore-button';
import {FormattedMessage} from 'react-intl';
import {Box} from 'components/box';
import useProducts from 'data/use-products';
import {LoaderItem, LoaderWrapper} from "./product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";

// import { Button } from './button';

interface Props {
    loadMore?: boolean;
    fetchLimit?: number;
    offset?: number;
    feature?: any;
    sort?: any;
    style?: any;
    setting?: any;
    isFeatured?: boolean;
    sellers?: any;
    category?: string;
}

export const ProductGridHot = (
    {
        style,
        setting,
        loadMore = true,
        fetchLimit = 10,
        offset = 0,
        feature = undefined,
        isFeatured = undefined,
        sort = undefined,
        sellers = undefined,
        category = undefined
    }: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {data, error, hasMore, fetchMore} = useProducts({
        text: router.query.text,
        category: category ?? router.query.category,
        offset: offset,
        limit: fetchLimit,
        feature: feature,
        sort: sort,
        isFeatured: isFeatured,
        sellers: sellers
    });
    if (error){
        return <ErrorMessage message="Network Error"/>;
    }

    if (!data) {
        return (
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
            </LoaderWrapper>
        );
    }

    const handleLoadMore = async () => {
        setLoading(true);
        // await fetchMore(Number(data.length), fetchLimit);
        setLoading(false);
    };
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        rows: 1,
        slidesPerRow:1,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ],
        ...setting
    };

    // const { items, hasMore } = data.products;
    return (
        <section>
            <Slider {...settings}>
                {data.map((product, idx) => (
                    <ProductCard data={product} key={product?.id}/>
                ))}
            </Slider>

            {/*{loadMore && data?.hasMore && (*/}
            {/*  <Box style={{ textAlign: 'center' }} mt={'2rem'}>*/}
            {/*    <Button*/}
            {/*      onClick={handleLoadMore}*/}
            {/*      loading={loading}*/}
            {/*      variant='secondary'*/}
            {/*      style={{*/}
            {/*        fontSize: 14,*/}
            {/*        display: 'inline-flex',*/}
            {/*      }}*/}
            {/*      border='1px solid #f1f1f1'*/}
            {/*    >*/}
            {/*      <FormattedMessage id='loadMoreButton' defaultMessage='Load More' />*/}
            {/*    </Button>*/}
            {/*  </Box>*/}
            {/*)}*/}
        </section>
    );
};
