import React, {useEffect, useState} from 'react';
import {FormattedMessage} from "react-intl";

import {
    AdvertisementItemTwo,
    FashionSection,
    FashionSectionWrapper,
    SectionTitle,
    SectionTitleHead
} from "./theme-products-fashion.style";
import FashionIcon from "../../assets/images/home/fashion.svg";
import NavLink from "../nav-link/nav-link";
import AdvertisementImage3 from "../../assets/images/banner/advertise/shopping_ad3.png";
import {ProductGrid} from "../product-grid/product-grid";
import {getThemes} from "../../data/use-themes";
import {ProductThemeGridTwo} from "../product-grid/product-theme-grid-two";

type ThemeProductsFashionProps = {}

export const ThemeProductsFashion: React.FC<ThemeProductsFashionProps> = () => {
    const settings3 = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    const {themes, error, loading, total} = getThemes({searchQuery: "fashion"});
    console.log('fashion theme', themes, (!error && !loading && total>0));

    return (
        <FashionSection>
            <SectionTitle>
                <SectionTitleHead>
                    <img src={FashionIcon} alt={"fashion"}/>
                    <h3 className="fashion-section-title"><FormattedMessage id="section-title.fashion"/>
                    </h3>
                </SectionTitleHead>
                <NavLink
                    className='menu-item'
                    href="/liveproduct"
                    label="More"
                    intlId="more"
                />
            </SectionTitle>
            <FashionSectionWrapper>
                <AdvertisementItemTwo>
                    {(!loading && !error && total > 0) ?
                        (<img src={themes[0]?.thumbnail?.url} alt="Fashion Banner"/>)
                        :
                        (<img src={AdvertisementImage3} alt="Fashion Banner"/>)
                    }
                </AdvertisementItemTwo>
                {(!loading && !error && total > 0) ?
                    (<ProductThemeGridTwo settings={settings3} limit={8} theme={themes[0].id}/>)
                    :
                    (<ProductGrid setting={settings3} fetchLimit={8}/>)
                }
            </FashionSectionWrapper>
        </FashionSection>
    )
}
