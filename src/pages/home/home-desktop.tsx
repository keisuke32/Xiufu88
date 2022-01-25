import React, {useEffect, useRef, useState} from 'react';
import {ProductGrid} from 'components/product-grid/product-grid-four';
import {ShopLiveGrid} from 'components/product-grid/shop-live-grid';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import css from '@styled-system/css';

import {FormattedMessage} from "react-intl";
import NavLink from "components/nav-link/nav-link";

import LatestLiveIcon from 'assets/images/home/latest-live.svg';
import WelcomeModal from "../../components/modal/welcome-modal";
import {NewsLetter} from "components/newsletter/newsletter";
import {ThemeProductsOne} from "../../components/theme/theme-products-one";
import {ThemeProductsFashion} from "../../components/theme/theme-products-fashion";
import {getBanners} from "../../data/use-banner";

const Banner = dynamic(() => import('components/banner/banner-two'), {
    ssr: false,
});

const settings1 = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
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

const settings2 = {
    dots: false,
};


export default function DesktopHome() {
    const [modalOpen, setModalOpen] = useState(true);
    const [livestreaming, setLiveStreaming] = useState(["STREAMING", "PENDING"]);
    const [paststreaming, setPastStreaming] = useState(["FINISHED"]);

    const {banners, total, error, loading} = getBanners({
        limit: 100,
        sitePath: '/',
    });

    const bannerSlides = banners?.find(item => item.identifier == 'a');
    const categoryImages = banners?.filter(item => item.adType == 'PRODUCT');
    const AdvertisementImage11 = banners?.find(item => item.identifier == 'h');
    const AdvertisementImage12 = banners?.find(item => item.identifier == 'i');
    const CountDownImage = banners?.find(item => item.identifier == 'j');
    const NewsLetterImage = banners?.find(item => item.identifier == 'k');
    const AdvertisementImage2 = banners?.find(item => item.identifier == 'm');

    const handleModal = () => {
        setModalOpen(false);
    }
    return (
        <ContainerWrapper>
            <div className="container">
                <ContentArea>
                    <WelcomeModal isOpen={modalOpen} onRequestClose={handleModal} children={<NewsLetter banner={NewsLetterImage?.assets[0]?.image}/>}/>
                    <div></div>
                    <main>
                        <HeroArea>
                            <BannerArea>
                                <Banner data={bannerSlides}/>
                            </BannerArea>
                            <AdArea>
                                <AdvertisementItem>
                                    <a href={AdvertisementImage11?.assets[0]?.link}>
                                        <img src={AdvertisementImage11?.assets[0]?.image} alt={AdvertisementImage11?.identifier}/>
                                    </a>
                                </AdvertisementItem>
                                <AdvertisementItem>
                                    <a href={AdvertisementImage12?.assets[0]?.link}>
                                        <img src={AdvertisementImage12?.assets[0]?.image} alt={AdvertisementImage12?.identifier}/>
                                    </a>
                                </AdvertisementItem>
                            </AdArea>
                        </HeroArea>
                        <CategoryImageArea>
                            {categoryImages?.map((item, idx) => {
                                return <a key={idx} href={item?.assets[0]?.link}>
                                    <img src={item?.assets[0]?.image} alt={item?.identifier} key={idx}/>
                                    </a>
                            })}
                        </CategoryImageArea>
                    </main>
                </ContentArea>

                <ThemeProductsOne banner={CountDownImage} count={50}/>

                <ShopLiveSection>
                    <SectionTitle>
                        <SectionTitleHead>
                            <img src={LatestLiveIcon} alt={"latest livestream"}/>
                            <h3 className="shoplive-section-title"><FormattedMessage id="section-title.latest-live"/>
                            </h3>
                        </SectionTitleHead>
                        <NavLink
                            className='menu-item'
                            href="/shoplive"
                            label="More"
                            intlId="more"
                        />
                    </SectionTitle>
                    <ShopLiveGrid status={livestreaming} setting={settings1} fetchLimit={6}/>
                </ShopLiveSection>

                <ShopLiveSection>
                    <SectionTitle>
                        <SectionTitleHead>
                            <img src={LatestLiveIcon} alt={"latest livestream"}/>
                            <h3 className="shoplive-section-title"><FormattedMessage id="section-title.latest-video"/>
                            </h3>
                        </SectionTitleHead>
                        <NavLink
                            className='menu-item'
                            href="/shoplive"
                            label="More"
                            intlId="more"
                        />
                    </SectionTitle>
                    <ShopLiveGrid status={paststreaming} setting={settings1} fetchLimit={6}/>
                </ShopLiveSection>

                <ThemeProductsFashion/>

                <AdvertisementItem>
                    <img src={AdvertisementImage2?.assets[0]?.image} alt={AdvertisementImage2?.identifier} />
                </AdvertisementItem>
                <HotProductSection>
                    <SectionTitle>
                        <h3><FormattedMessage id="section-title.hotproduct"/></h3>
                        <NavLink
                            className='menu-item'
                            href="/liveproduct"
                            label="More"
                            intlId="more"
                        />
                    </SectionTitle>
                    <ProductGrid setting={settings2} fetchLimit={10} isFeatured={true}/>
                </HotProductSection>
            </div>
        </ContainerWrapper>
    );
}

const ContentArea = styled.div<any>(
    css({
        overflow: 'hidden',
        display: 'grid',
        gridColumnGap: '20px',
        gridRowGap: ['15px', '20px', '0'],
        gridTemplateColumns: [
            'minmax(0, 1fr)',
            'minmax(0, 1fr)',
            '200px minmax(0, 1fr)',
        ],
        backgroundColor: '#f9f9f9',
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
const BannerArea = styled.div`
    height: 305px;
`;
const AdArea = styled.div`
    
`;
const CategoryImageArea = styled.div`
    display: flex;
    height: 135px;
    a {
        width: calc(100% / 6);
        // height: 100px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const ContainerWrapper = styled.div<any>(
    css({
        padding: ['0 0 100px', '0 0 50px', '0 2rem 50px'],
    })
);


const AdvertisementItem = styled.div<any>(
    css({
        display: 'flex',
        height: '50%',

        '@media (max-width: 999px)': {
            display: 'none'
        }
    })
);


const ServiceWrapper = styled.div<any>(
    css({
        display: 'flex',
        flexFlow: 'column',
        background: 'white',
        minHeight: '50%',
        paddingLeft: '40px',
        justifyContent: 'center',
        transition: 'all 0.3s',

        '@media (max-width: 1479px)': {
            height: '100%'
        },

        '@media (max-width: 1200px)': {
            paddingLeft: '20px',
        }
    })
);

const ServiceItem = styled.div<any>(
    css({
        display: 'flex',
        paddingBottom: '0.65rem'
    })
);
const ServiceContentWrapper = styled.div`
    padding-left: 5px;
    
    h6 {
        font-size: 11px;
    }
    p {
        font-size: 8px;
    }
`;

const ShopLiveSection = styled.div<any>(
    css({
        marginBottom: '1rem',
    })
);
const FashionSection = styled.div<any>(
    css({
        marginBottom: '1rem',
    })
);
const FashionSectionWrapper = styled.div<any>(
    css({
        display: 'grid',
        gridColumnGap: '20px',
        gridRowGap: ['5px', '10px', '0'],
        gridTemplateColumns: [
            '40% minmax(0, 1fr)',
            '35% minmax(0, 1fr)',
            '30% minmax(0, 1fr)',
            '25% minmax(0, 1fr)',
            '20% minmax(0, 1fr)',
        ],
        backgroundColor: '#f9f9f9',
    })
);

const HotProductSection = styled.div<any>(
    css({
        marginTop: '1rem',
    })
);

const SectionTitle = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 10px;
        padding-right: 20px;
        
        .menu-item {
            a {
                position: relative;
                color: ${themeGet('colors.gray.900')};
                
                &:after {
                    content: '>';
                    right: -15px;
                    position: absolute;
                    transition: all 0.3s;
                }
                
                &:hover {                
                    &:after {
                        right: -17px;
                    }
                }
            }
        }
`;

const SectionTitleHead = styled.div`
    display: flex;
        align-items: flex-end;
        line-height: 1;
        h3 {
            padding-left: 10px;   
        }
`;
