import React, {useState} from 'react';
import Slider from "react-slick";
import ErrorMessage from 'components/error-message/error-message';
import {useRouter} from 'next/router';
import useProducts from 'data/use-products';
import {LoaderItem, LoaderWrapper} from "./product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";
import {ProductCardTheme} from "../product-card/product-card-theme";


interface Props {
    loadMore?: boolean;
    fetchLimit?: number;
    feature?: any;
    sort?: any;
    style?: any;
    setting?: any;
    isFeatured?: boolean;
    sellers?: any;
}

export const ProductThemeGrid = (
    {
        style,
        setting,
        loadMore = true,
        fetchLimit = 6,
        feature = undefined,
        isFeatured = undefined,
        sort = undefined,
        sellers = undefined
    }: Props) => {
    const router = useRouter();
    const {data, error, hasMore, fetchMore} = useProducts({
        text: router.query.text,
        category: router.query.category,
        offset: 0,
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
            </LoaderWrapper>
        );
    }
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        ]
    };

    return (
        <section>
            <Slider {...settings}>
                {data.map((product, idx) => (
                    <ProductCardTheme data={product} key={idx}/>
                ))}
            </Slider>
        </section>
    );
};
