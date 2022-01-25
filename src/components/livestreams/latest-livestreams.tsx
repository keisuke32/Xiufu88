import React, {useState} from 'react';
import {LatestLivestreamCard} from 'components/livestreams/latest-livestream-one';
import styled from 'styled-components';
import css from '@styled-system/css';
import ErrorMessage from 'components/error-message/error-message';
import {useRouter} from 'next/router';
import useLivestreams from 'data/use-livestreams';
import {LoaderItem, LoaderWrapper} from "../product-grid/product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";

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
    status?: Array<string>;
}

export const LatestLivestreams = (
    {
        style,
        loadMore = true,
        fetchLimit = 8,
        isFeatured,
        status,
    }: Props) => {
    const router = useRouter();
    const {data, error, hasMore, fetchMore} = useLivestreams({
        text: router.query.text,
        category: router.query.category?[router.query.category]:undefined,
        offset: 0,
        limit: fetchLimit,
        isFeatured: isFeatured,
        status: status
    });

    if (error) return <ErrorMessage message="Network Error"/>;

    if (!data) {
        return (
            <LoaderWrapper>
                <LoaderItem>
                    <Placeholder uniqueKey="1"/>
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="2"/>
                </LoaderItem>
            </LoaderWrapper>
        );
    }


    return (
        <section>
            <Grid>
                {data.map((livestream, idx) => (
                    <LatestLivestreamCard data={livestream} key={livestream.id}/>
                ))}
            </Grid>
        </section>
    );
};
