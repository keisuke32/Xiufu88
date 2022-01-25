import React, {useState} from 'react';
import {ProductCardMobileImage} from 'components/product-card/product-card-mobile-image';
import Slider from "react-slick";

import {useRouter} from 'next/router';
import useProducts from 'data/use-products';
import {LoaderItem, LoaderWrapper} from "./product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";


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

export const ProductGridMobileSlider = (
    {
        style,
        setting,
        loadMore = true,
        fetchLimit = 10,
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
        console.log(error.message);
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

    return (
        <section>
            <Slider {...setting}>
                {data.map((product, idx) => (
                    <ProductCardMobileImage data={product} key={idx}/>
                ))}
            </Slider>
        </section>
    );
};
