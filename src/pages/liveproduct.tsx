import React, {useState, useEffect} from 'react';
import {
    slice, concat,
} from 'lodash';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import css from '@styled-system/css';
import themeGet from '@styled-system/theme-get'
import {Modal} from '@redq/reuse-modal';
import {ProductSection} from 'components/product-section/product-section';

import BrandPlaceholder from "assets/images/brand-placeholder.png";
import {ModalProvider} from "contexts/modal/modal.provider";
import {useCategoryLevel} from "../data/use-category";
import useBrands from "../data/use-brand";
import {FormattedMessage, useIntl} from "react-intl";
import {SEO} from "../components/seo";
import {getBanners} from "../data/use-banner";
import {ToTop} from "../assets/icons/ToTop";
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import {getThemes} from "../data/use-themes";
import NavLink from "../components/nav-link/nav-link";
import {ProductGrid} from "../components/product-grid/product-grid";
import {ProductGridHot} from "../components/product-grid/product-hot";
import MobileHeader from "../layouts/header/mobile-header";
import {useAppState} from "../contexts/app/app.provider";
import {
    AdAreaMobile,
    AdvertisementItemMobile,
    CategoryImageAreaMobile, CategoryImageMobile, BrandSectionMobile, ProductSectionMobileWrapper
} from "../components/liveproduct/liveproduct.style";
import {BrandsMobile} from "../components/liveproduct/liveproductbrands";
import {ProductSectionMobile} from "../components/liveproduct/product-section-mobile";

const Banner = dynamic(() => import('components/banner/banner-two'), {
    ssr: false,
});

const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
    ssr: false,
});

const settings2 = {
    dots: false,
};

const recommended_brand = [
    {id: 1, title: "电器"},
    {id: 2, title: "食品"},
    {id: 3, title: "个人护理"},
    {id: 4, title: "时装"},
];

export default function LiveProductPage({deviceType}) {

    const limit = 2;
    const intl = useIntl();
    const [list, setList] = useState([])
    const [brandCategory, setBrandCategory] = useState(0)

    const [sidebarActive, setSidebarActive] = useState(false);
    const [sidebarActiveItem, setSidebarActiveItem] = useState('');

    const {data: brands} = useBrands({offset: 0, limit: 24});

    const {themes, error:themeError, loading:themeLoading} = getThemes({searchQuery: "liveproduct"})

    const {data, error} = useCategoryLevel({level: 1});

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.scrollY < window.innerHeight / 2) {
            setSidebarActive(false);
        } else {
            setSidebarActive(true);
        }

    }

    if (data && !list.length) {
        setList(slice(data, 0, limit));
    }

    const {banners, total, error: banner_error, loading} = getBanners({
        limit: 100,
        sitePath: '/liveproducts',
    });
    const bannerSlides = banners?.find(item => item.identifier == 'n');

    const categoryImages = banners?.filter(item => ['o', 'p', 'q'].includes(item.identifier));

    const AdvertisementImage4 = banners?.find(item => item.identifier == 'r');

    function selectBrandCategory(brandCategoryID) {
        setBrandCategory(brandCategoryID);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    const scrollToBottom = () => {
        scroll.scrollToBottom();
    }
    const scrollTo = () => {
        scroll.scrollTo(100);
    }
    const scrollMore = () => {
        scroll.scrollMore(100);
    }
    const handleSetActive = (to) => {
        setSidebarActiveItem(to);
    }

    const isSticky = useAppState('isSticky');

    return (
        <>
            <SEO title="Live Products - JiTeng" description="JiTeng Live Products"/>
            <MobileHeader className={isSticky ? 'sticky' : 'unSticky'} liveproduct={{show: true, themes: themes, activeCategory: sidebarActiveItem, setActiveCategory: handleSetActive}}/>
            <ModalProvider>
                <Modal>
                    {deviceType.desktop ?
                        <ContainerWrapper>
                        <div className="container">
                            <ContentArea>
                                <div></div>
                                <main>
                                    <FixedSidebar hidden={!sidebarActive}>
                                        {themes?.map((item, idx) => {
                                            return (
                                                <div key={idx}
                                                     className={sidebarActiveItem == item.id ? 'active' : ''}>
                                                    <Link
                                                        activeClass="active"
                                                        to={item.id}
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-200}
                                                        duration={500}
                                                        onClick={() => handleSetActive(item.id)}
                                                        onSetActive={() => handleSetActive(item.id)}
                                                    >{item.name}</Link>
                                                </div>
                                            )
                                        })}
                                        <div className={sidebarActiveItem == 'hot-product' ? 'active' : ''}>
                                            <Link
                                                activeClass="active"
                                                to="hot-product"
                                                spy={true}
                                                smooth={true}
                                                offset={-200}
                                                duration={500}
                                                onClick={() => handleSetActive('hot-product')}
                                                onSetActive={() => handleSetActive('hot-product')}
                                            >{intl.formatMessage({id: 'section-title.hotproduct', defaultMessage: '猜你喜欢',})}</Link>
                                        </div>
                                        <div>
                                            <a onClick={scrollToTop}><ToTop/>&nbsp;顶部</a>
                                        </div>
                                    </FixedSidebar>
                                    <HeroArea>
                                        <BannerArea>
                                            <Banner data={bannerSlides}/>
                                        </BannerArea>
                                        <AdArea>
                                            <AdvertisementItem>
                                                <a href={AdvertisementImage4?.assets[0]?.link}>
                                                    <img src={AdvertisementImage4?.assets[0]?.image}
                                                         alt={AdvertisementImage4?.identifier}/>
                                                </a>
                                            </AdvertisementItem>
                                        </AdArea>
                                        <CatArea>
                                            <CategoryImageArea>
                                                {
                                                    categoryImages?.map((item, idx) => (
                                                        <a href={item?.assets[0]?.link} key={idx}>
                                                            <img src={item?.assets[0]?.image} key={idx} alt={item?.identifier}/>
                                                        </a>
                                                    ))
                                                }
                                            </CategoryImageArea>
                                        </CatArea>
                                    </HeroArea>
                                </main>
                            </ContentArea>
                            <BrandSection>
                                <SectionTitle>
                                    <FormattedMessage id="liveproduct.brand.recommend-brand" defaultMessage="推荐品牌"/>
                                </SectionTitle>
                                <SectionCategoryWrapper>
                                    <SectionCategoryItemBox>
                                        <SectionCategoryItem onClick={() => selectBrandCategory(0)}
                                                             className={!brandCategory && "active"}>
                                            <FormattedMessage id="liveproduct.brand.all-brand" defaultMessage="全部"/>
                                        </SectionCategoryItem>
                                        {recommended_brand.map((item, idx) => {
                                            return (
                                                <SectionCategoryItem key={idx}
                                                                     onClick={() => selectBrandCategory(item.id)}>
                                                    {item.title}
                                                </SectionCategoryItem>
                                            )
                                        })}
                                    </SectionCategoryItemBox>
                                </SectionCategoryWrapper>
                                <Grid>
                                    {
                                        brands?.map((brand, idx) => (
                                            <BrandItem key={idx}>
                                                <img
                                                    src={brand.image?.thumbnail || brand.image?.url || BrandPlaceholder}/>
                                                <div className="brand-name">
                                                    {
                                                        !brand.image?.thumbnail && !brand.image?.url && (
                                                            <span>{brand.name}</span>
                                                        )
                                                    }
                                                </div>
                                            </BrandItem>
                                        ))
                                    }
                                </Grid>
                            </BrandSection>
                            <ProductSectionWrapper>
                                {
                                    themes?.map((item, idx) => {
                                        return <Element key={idx} name={item.id} className="element">
                                            <ProductSection key={idx} theme={item}/>
                                        </Element>
                                    })
                                }
                            </ProductSectionWrapper>
                            <Element name='hot-product' className="element">
                                <HotProductSection>
                                    <SectionTitle>
                                        <FormattedMessage id="section-title.hotproduct"/>
                                    </SectionTitle>
                                    <ProductGridHot setting={settings2} fetchLimit={5} isFeatured={true}/>
                                </HotProductSection>
                            </Element>
                        </div>
                    </ContainerWrapper>
                    :
                        <ContainerWrapper>
                            <HeroArea>
                                <div>
                                    <Banner data={bannerSlides}/>
                                </div>
                            </HeroArea>
                            <AdAreaMobile>
                                <AdvertisementItemMobile>
                                    <a href={AdvertisementImage4?.assets[0]?.link}>
                                        <img src={AdvertisementImage4?.assets[0]?.image}
                                             alt={AdvertisementImage4?.identifier}/>
                                    </a>
                                </AdvertisementItemMobile>
                                <CategoryImageAreaMobile>
                                    {
                                        categoryImages?.map((item, idx) => (
                                            <CategoryImageMobile style={ idx == 0? {gridColumn: 'span 2'} : {}}>
                                                <a href={item?.assets[0]?.link} key={idx}>
                                                    <img src={item?.assets[0]?.image} key={idx} alt={item?.identifier}/>
                                                </a>
                                            </CategoryImageMobile>
                                        ))
                                    }
                                </CategoryImageAreaMobile>
                            </AdAreaMobile>
                            <ContentArea>
                                <BrandSectionMobile>
                                    <BrandsMobile brands={brands} />
                                </BrandSectionMobile>
                                <ProductSectionMobileWrapper>
                                    {
                                        themes?.map((item, idx) => {
                                            return <Element key={idx} name={item.id} className="element">
                                                <ProductSectionMobile key={idx} theme={item}/>
                                            </Element>
                                        })
                                    }
                                </ProductSectionMobileWrapper>
                            </ContentArea>
                        </ContainerWrapper>
                    }
                </Modal>
            </ModalProvider>
        </>
    );

}

const ContainerWrapper = styled.div<any>(
    css({
        padding: ['0 0 100px', '0 0 50px', '0 2rem 50px'],
    })
);

const FixedSidebar = styled.div`
    position: fixed;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
    width: 100px;
    transition: all .5s ease;
    border: 1px solid ${themeGet('colors.gray.700')};
    @media screen and (max-width: 1600px) {
        width: 80px;
        font-size: ${themeGet('fontSizes.xs')}px;
        transition: all 0.3s;
        &:hover{
            left: 0;
        }
    };
    @media screen and (max-width: 1366px) {
        left: -65px;
        width: 80px;
        font-size: ${themeGet('fontSizes.xs')}px;
        transition: all 0.3s;
        &:hover{
            left: 0;
        }
    };
    z-index: 10000;
    background: ${themeGet('colors.white')};
    padding: 3px;
    text-align: center;
    div & div:after {
        content: "";
        position: absolute;
        height: 1px;
        background: ${themeGet('colors.gray.700')};
        top: 100%;
        width: 70%;
        left: 50%;
        transform: translateX(-50%);
    }
    div {
        display: flex;
        position: relative;
        cursor: pointer;
        padding: 5px 0 5px 0;
        &:last-child {
            background: ${themeGet('colors.green.bluedark')};
            color: ${themeGet('colors.white')};
        }
        a {
            padding: 5px 0 5px 0;
            text-decoration: none;
            margin: 0 auto;
            color: ${themeGet('colors.white')};
        }
        a:hover {
            font-weight: ${themeGet('fontWeights.bold')};
        }
        
    }
    div.active {
          background: ${themeGet('colors.red')};
      }
`;
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
    height: 265px;
`;

const AdArea = styled.div`
    grid-row: span 2;
    height: 440px;
`;
const CatArea = styled.div`
    height: 175px;
`;

const CategoryImageArea = styled.div`
    display: flex;
    height: 100%;
    a {
        width: calc(100% / 3);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;


const AdvertisementItem = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    
    img {
        height: -webkit-fill-available;
        width: 100%;
        object-fit: cover;
    }
`;

const BrandSection = styled.section`
    margin-top: 80px;
    padding-bottom: 50px;
`;

const SectionTitle = styled.h3`
    font-weight: ${themeGet('fontWeights.heading')};
    font-size: ${themeGet('fontSizes.2xl')};    
    color: ${themeGet('colors.black')};
`

const SectionCategoryWrapper = styled.div`
    padding: 20px;
    border-top: 3px solid #000000;
    background: ${themeGet('colors.gray.400', '#F2F2F2')};
`;

const SectionCategoryItemBox = styled.ul`
    display: flex;
`;

const SectionCategoryItem = styled.li`
    padding: 5px 40px;
    margin-right: 20px;
    border: 1px solid ${themeGet('colors.gray.1000')};
    font-size: ${themeGet('fontSizes.sm')}px;
    color: ${themeGet('colors.black')};
    background: ${themeGet('colors.white')};
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover,
    &.active {
        background: ${themeGet('colors.gray.1000')};
        color: ${themeGet('colors.gray.300')};
    }
`;

const Grid = styled.div(
    css({
        display: 'grid',
        gridGap: '0px',
        gridTemplateColumns: 'repeat(8, 12.5%)',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'gray.700',
    })
);

const BrandItem = styled.div`
    position: relative;
    border: 1px solid ${themeGet('colors.gray.800')};
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
    
    .brand-name {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;        
        transition: all 0.3s;
    }
    
    &:hover {
        .brand-name {
            background-color: ${themeGet('colors.white')};
            opacity: 0.3;
        }
    }
`;

const ProductSectionWrapper = styled.div`
    section {
        padding-bottom: 50px;
    }
`;

const HotProductSection = styled.div`
    margin-top: 50px;
    section {
        margin-top: 10px;   
        border-top: 3px solid ${themeGet('colors.black')};
    }
    
    .slick-slide {
        padding: 0;
    }
`;
