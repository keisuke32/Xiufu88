import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import css from '@styled-system/css';

import {ProductGridMobileSlider} from 'components/product-grid/product-grid-mobile-slider';
import { themeGet } from '@styled-system/theme-get';
import BannerSlideImageOne_1920 from 'assets/images/banner/top-banner-1/top-banner-1_vxhanf_c_scale,w_1920.jpg';
import BannerSlideImageOne_1574 from 'assets/images/banner/top-banner-1/top-banner-1_vxhanf_c_scale,w_1574.jpg';
import BannerSlideImageOne_1336 from 'assets/images/banner/top-banner-1/top-banner-1_vxhanf_c_scale,w_1336.jpg';
import BannerSlideImageOne_1064 from 'assets/images/banner/top-banner-1/top-banner-1_vxhanf_c_scale,w_1064.jpg';
import BannerSlideImageOne_846 from 'assets/images/banner/top-banner-1/top-banner-1_vxhanf_c_scale,w_846.jpg';
import BannerSlideImageOne_480 from 'assets/images/banner/top-banner-1/top-banner-1_vxhanf_c_scale,w_480.jpg';

import BannerSlideImageTwo_910 from 'assets/images/banner/top-banner-2/top-banner-2_dm88iu_c_scale,w_910.jpg';
import BannerSlideImageTwo_798 from 'assets/images/banner/top-banner-2/top-banner-2_dm88iu_c_scale,w_798.jpg';
import BannerSlideImageTwo_611 from 'assets/images/banner/top-banner-2/top-banner-2_dm88iu_c_scale,w_611.jpg';
import BannerSlideImageTwo_444 from 'assets/images/banner/top-banner-2/top-banner-2_dm88iu_c_scale,w_444.jpg';
import BannerSlideImageTwo_190 from 'assets/images/banner/top-banner-2/top-banner-2_dm88iu_c_scale,w_190.jpg';

import FashionBannerMobileWeb from 'assets/images/home/fashion-banner_mobile_web1.png'
import {FormattedMessage} from "react-intl";
import NavLink from "../../components/nav-link/nav-link";
import {ProductGridMobile} from "../../components/product-grid/product-grid-mobile";
import {defaultTheme} from "../../site-settings/site-theme/default";
import {LatestLivestreams} from "../../components/livestreams/latest-livestreams";
import {LiveStream} from "../../components/shoplive/Stream";
import {themed} from "../../components/base";
import {MobileBanner} from "../../components/banner/mobile-banner";
import {ArrowRightWhite} from "../../assets/icons/ArrowRight";
import MobileHeader from "../../layouts/header/mobile-header";
import {useRouter} from "next/router";
import {useAppDispatch, useAppState} from "../../contexts/app/app.provider";
import {getBanners} from "../../data/use-banner";

const Banner = dynamic(() => import('components/banner/banner-two'), {
    ssr: false,
});

const bannerSlides = [
    {
        img: BannerSlideImageOne_1920,
        alt: 'Slide One',
        sizes: "(max-width: 1920px) 40vw, 1920px",
        srcset:`${BannerSlideImageOne_1920} 1920w,
            ${BannerSlideImageOne_1574} 1574w,
            ${BannerSlideImageOne_1336} 1336w,
            ${BannerSlideImageOne_1064} 1064w,
            ${BannerSlideImageOne_846} 846w,
            ${BannerSlideImageOne_480} 480w`

    },
    {
        img: BannerSlideImageTwo_910,
        alt: 'Slide Two',
        sizes: "(max-width: 1920px) 40vw, 1920px",
        srcset:`${BannerSlideImageTwo_910} 910w,
            ${BannerSlideImageTwo_798} 798w,
            ${BannerSlideImageTwo_611} 611w,
            ${BannerSlideImageTwo_444} 444w,
            ${BannerSlideImageTwo_190} 190w,
            ${BannerSlideImageOne_480} 480w`
    },
];
const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }
    ]
};

export default function MobileHome() {

    const [livestreamStatus, setLiveStreamStatus] = useState("FINISHED");

    const {banners, total, error, loading} = getBanners({
        limit: 100,
        sitePath: '/',
    });

    const bannerSlides = banners?.find(item => item.identifier == 'a');

    const {pathname, query} = useRouter();

    const setToggleState = useAppDispatch();

    const isSticky = useAppState('isSticky');

    useEffect(() => {
        if (pathname.includes('/home') || pathname.includes('/liveproduct')) {
            setToggleState({type: 'SET_TOGGLE_MENU', payload: true});
        } else {
            setToggleState({type: 'SET_TOGGLE_MENU', payload: false});
        }
    }, [pathname]);

    return (
        <>
            <MobileHeader className={isSticky ? 'sticky' : 'unSticky'} livestream={pathname.includes('/shoplive')}/>
            <ContainerWrapper>
                <HeroArea>
                    <div>
                        <Banner data={bannerSlides}/>
                    </div>
                </HeroArea>
                <ContentArea>
                    <FashionMobileSection>
                        <img className="section-image" src={FashionBannerMobileWeb}/>
                        <FashionMobileSectionTitle>
                            <h3><FormattedMessage id="section-title.fashion"/></h3>
                            <div className="more-fashion">
                                <NavLink
                                    href="/productfilter"
                                    label="More"
                                    intlId="more.product"
                                />
                                &nbsp;&nbsp;&nbsp;
                                <span><ArrowRightWhite color="white" /></span>
                            </div>
                        </FashionMobileSectionTitle>
                        <FashionSectionWrapper>
                            <ProductGridMobileSlider setting={settings} />
                        </FashionSectionWrapper>
                    </FashionMobileSection>
                    <LatestLiveSection>
                        <LiveStreamStatus>
                            <button className={livestreamStatus === "STREAMING" ? "active" : ""} onClick={() => setLiveStreamStatus('STREAMING')}>
                                <FormattedMessage id="livestream.livestream" />
                                <span>LIVE</span>
                            </button>
                            <button className={livestreamStatus === "FINISHED" ? "active" : ""} onClick={() => setLiveStreamStatus('FINISHED')}>
                                <FormattedMessage id="livestream.video" />
                            </button>
                        </LiveStreamStatus>
                        <LatestLiveSectionWrapper>
                            <LatestLivestreams isFeatured={false} status={[livestreamStatus]} />
                        </LatestLiveSectionWrapper>
                        <button className="more"><FormattedMessage id="more.product" /><span>&nbsp;&nbsp;&nbsp;<ArrowRightWhite color="white" width="14px" height="14px" /></span></button>
                    </LatestLiveSection>
                    <RecommendProductSection>
                        <SectionTitle>
                            <FormattedMessage id="section-title.hotproduct" />
                        </SectionTitle>
                        <ProductGridMobile isFeatured={true} />
                    </RecommendProductSection>
                </ContentArea>
            </ContainerWrapper>
        </>
    );
}

const ContentArea = styled.main<any>(
    css({
        padding: 15
    })
);

const HeroArea = styled.div<any>(
    css({
        overflow: 'hidden',
        display: 'grid',
        gridRowGap: ['15px', '20px', '0'],
        gridTemplateColumns: [
            'minmax(0, 1fr)',
            'minmax(0, 1fr)',
            'minmax(0, 1fr) 20%',
        ],
        backgroundColor: '#f9f9f9',
    })
);

const ContainerWrapper = styled.div<any>(
    css({
        padding: ['0 0 100px', '0 0 50px', '0 2rem 50px'],
    })
);

const FashionMobileSection = styled.div<any>(
    css({
        position: 'relative',
        padding: 10,
        marginTop: 15,

        'img.section-image': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
        }
    })
);

const FashionSectionWrapper = styled.div``;

const FashionMobileSectionTitle = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    
    h3 {
        font-size: 16px;
        color: white;
    }
    
    .more-fashion {
        display: flex;
        padding: 5px 10px;
        font-size: 10px;
        background: #3676F4;
        border-radius: 14px 0 0 14px;
        margin-right: -15px;
        
        a {
            color: white;
            font-weight: 300;
        }
        span {
            color: ${themeGet('colors.white')};
        }
    }
`;

const RecommendProductSection = styled.div`
    margin-top: 2rem;
`;

const SectionTitle = styled.h3`
    font-size: ${defaultTheme.fontSizes.md}px;
    margin-bottom: 10px;
`;

const LiveStreamStatus = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    
    button {
        position: relative;
        border: none;
        background: transparent;
        outline: none;
        font-size: ${defaultTheme.fontSizes.md}px;
        
        &.active {
            color: ${defaultTheme.colors.primary.regular};
        }
        span {
            position: absolute;
            top: 0px;
            background: ${defaultTheme.colors.primary.regular};
            color: white;
            font-size: 8px;
            padding: 0 5px;
            margin-left: 5px;
        }
    }
    
    &:after {
        content: " ";
        position: absolute;
        width: 1px;
        height: 100%;
        top: 0px;
        left: 50%;
        background: ${defaultTheme.colors.gray['900']};
    }
`;
const LatestLiveSection = styled.div<any>(
    css({
        marginTop: '2rem',
        'button.more': {
            width: '100%',
            padding: '5px',
            background: defaultTheme.colors.primary.alternate,
            color: 'white',
            marginTop: '0.35rem',
            border: 'none',
            outline: 'none',
            borderRadius: 8,
            boxShadow: `2px 2px 2px ${defaultTheme.colors.gray[800]}`,

            '&:focus': {
                boxShadow: 'none',
                background: defaultTheme.colors.primary.hover
            }
        }
    })
);


const LatestLiveSectionWrapper = styled.div<any>(
    css({
    })
);
