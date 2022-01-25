import React, {useState} from 'react';
import {ProductCard} from 'components/product-card/product-card-eight';
import styled from 'styled-components';
import css from '@styled-system/css';
import Slider from "react-slick";
import ErrorMessage from 'components/error-message/error-message';
import BrandPlaceholder from "../../assets/images/brand-placeholder.png";
import {BrandItem} from "./liveproduct.style";

interface Props {
    brands: any;
}

export const BrandsMobile = ({brands}: Props) => {

    const settings = {
        customPaging: function(i) {
            return (
                <span style={{height: "100%", width: "100%", display:"block", marginTop:"5px", borderTop: "1px solid red"}} />
            );
        },
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 2,
        initialSlide: 0,
        rows: 2,
        slidesPerRow:1,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }
        ],
    };

    return (
        <section>
            <Slider {...settings}>
                {brands?.map((brand, idx) => (
                    <BrandItem key={idx}>
                        <img src={brand.image?.thumbnail || brand.image?.url || BrandPlaceholder} alt={brand.name} />
                        <div className="brand-name">
                            {
                                !brand.image?.thumbnail && !brand.image?.url && (
                                    <span>{brand.name}</span>
                                )
                            }
                        </div>
                    </BrandItem>
                ))}
            </Slider>
        </section>
    );
};
