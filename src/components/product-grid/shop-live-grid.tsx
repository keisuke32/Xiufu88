import React, {useState} from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import ShopLiveCard from './shop-live/shop-live';
import Slider from "react-slick";
import productimg from 'assets/images/image 10.png';
import {useRouter} from "next/router";
import useLivestreams from "../../data/use-livestreams";
import ErrorMessage from "../error-message/error-message";
import {LoaderItem, LoaderWrapper} from "./product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";

const Grid = styled.div(
    css({
        display: 'grid',
        gridGap: '16px',
        gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',

        '@media screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',
        },

        '@media screen and (min-width: 740px)': {
            gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
        },

        '@media screen and (min-width: 991px)': {
            gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
        },

        '@media screen and (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
        },

        '@media screen and (min-width: 1400px)': {
            gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
        },

        '@media screen and (min-width: 1700px)': {
            gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
        },
    })
);

interface Props{
    setting: any;
    fetchLimit?: number;
    isFeatured?: boolean;
    status?: Array<string>;
}

export const ShopLiveGrid = ({setting, fetchLimit=10, isFeatured, status}:Props) => {
    const router = useRouter();

    const [stream,setStream] = useState({});

    let {data,error,fetchMore,hasMore} = useLivestreams({status: status, isFeatured: isFeatured, feature: "CREATED_AT", sort: "DESC"});

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
                <LoaderItem>
                    <Placeholder uniqueKey="3"/>
                </LoaderItem>
            </LoaderWrapper>
        );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        rows: 2,
        slidesPerRow:1,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        ...setting
    };

    return (
        <section>
            <Slider {...settings}>
                {
                    data.map((item, idx)=>(
                            <ShopLiveCard key={idx} data={item} onSelect={item=>setStream(item)}/>
                    ))
                }

            </Slider>
        </section>
    )
}

