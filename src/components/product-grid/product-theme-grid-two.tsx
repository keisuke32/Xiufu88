import React, {useState} from 'react';
import Slider from "react-slick";
import ErrorMessage from 'components/error-message/error-message';
import {useRouter} from 'next/router';
import useProducts from 'data/use-products';
import {LoaderItem, LoaderWrapper} from "./product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";
import {ProductCardTheme} from "../product-card/product-card-theme";
import {getThemeProducts} from "../../data/use-themes";
import {ProductCard} from "../product-card/product-card-seven";


interface Props {
    theme: string;
    feature?: string;
    sortType?: string;
    skip?: number;
    limit?: number;
    settings?: any;
}

export const ProductThemeGridTwo = ({theme, feature, sortType, skip, limit, settings}: Props) => {
    const router = useRouter();
    const {themeProducts, error, hasMore, fetchMore, loading, total} = getThemeProducts({
        theme: theme,
        feature: feature,
        sortType: sortType,
        skip: skip,
        limit: limit,
    });
    console.log('theme products', themeProducts);
    if (error) {
        return <ErrorMessage message="Network Error"/>;
    }

    if (!themeProducts) {
        return (
            <>
                <LoaderWrapper>
                    <LoaderItem>
                        <Placeholder uniqueKey="1"/>
                    </LoaderItem>
                </LoaderWrapper>
                <LoaderWrapper>
                    <LoaderItem>
                        <Placeholder uniqueKey="2"/>
                    </LoaderItem>
                </LoaderWrapper>
                <LoaderWrapper>
                    <LoaderItem>
                        <Placeholder uniqueKey="3"/>
                    </LoaderItem>
                </LoaderWrapper>
            </>
        );
    }

    return (
        <section>
            <Slider {...settings}>
                {themeProducts.map((product, idx) => (
                    <ProductCard data={product} key={idx}/>
                ))}
            </Slider>
        </section>
    );
};
