import React, {useEffect, useRef, useState} from 'react';
import {
    NeighbourProducts,
    PopularProducts,
    ProductDetail,
    ProductFeedback,
    ProductLogisticsDetail,
    ProductMobileDescription,
    ProductMobileDetailsWrapper,
    ProductMobileHeaderWrapper,
    ProductSizeDetail,
    RecommendProductList,
    HeaderIconWrap,
    SearchWrapper,
    ProductMobileFooterWrapper,
    FooterButtonGroup
} from "./product-mobile.style";
import Delivery_Img from '../../../assets/images/delivery.png';
import {ArrowNext} from "../../../assets/icons/ArrowNext";
import JBC from '../../../assets/images/jbc.png';
import Visa from '../../../assets/images/visa.png';
import MasterCard from '../../../assets/images/master-card.png';
import useProducts from "../../../data/use-products";
import Link from "next/link";
import ReactHtmlParser from 'react-html-parser';
import {AttributesValues, RelatedEachProduct} from "../product-details-four/product-details-four.style";
import {FormattedMessage} from "react-intl";
import CarouselWithCustomDots from "../../multi-carousel/multi-carousel";
import {ArrowLeft} from "../../../assets/icons/ArrowLeft";
import {LinkIcon} from "../../../assets/icons/Link";
import {ShoppingCart} from "../../../assets/icons/ShoppingCartIcon";
import {MoreIcon} from "../../../assets/icons/MoreIcon";
import Search from "../../../features/search/search";
import {LocationWhite} from "../../../assets/icons/Location";
import {StoreIcon} from "../../../assets/icons/StoreIcon";
import {MessageIcon} from "../../../assets/icons/MessageIcon";
import {FavouriteIcon} from "../../../assets/icons/FavouriteIcon";
import {NewsLetter} from "../../newsletter/newsletter";
import {getBanners} from "../../../data/use-banner";
import MobileModal from "../../modal/mobile-modal";
import {ProductAttributeMobile} from "./product-attribute-mobile";
import {ProductInfoMobile} from "./product-info-mobile";
import {ProductMoreMenuMobile} from "./product-more-menu";
import {getDeliveryAddresses} from "../../../data/use-user";
import {calcDeliveryAddress} from "../../../data/use-checkout";
import {AuthContext} from "../../../contexts/auth/auth.context";
import Router, {useRouter} from "next/router";
// import Product_Image from '../../../assets/images/med-1.jpg';
type ProductDetailsProps = {
    product: any;
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const ProductMobileDetails: React.FunctionComponent<ProductDetailsProps> = (
    {
        product,
        deviceType,
    }) => {

    const {data: top_rated_products} = useProducts({
        category: product.category.id,
        offset: 0,
        limit: 6
    });

    const {deliveryAddresses, error: deliveryAddressError} = getDeliveryAddresses();
    const {authState: {isAuthenticated, token}} = React.useContext<any>(AuthContext);
    const router = useRouter();

    if (!isAuthenticated) {
        Router.push(`/login?redirect_to=${router.asPath}`);
    }

    const {data: popular_products} = useProducts({
        category: product.category.id,
        offset: 0,
        limit: 6
    });

    const {data: neighbour_products} = useProducts({
        category: product.category.id,
        offset: 0,
        limit: 4
    });

    const [modalOpen, setModalOpen] = useState(false);

    const [modalProductInfoOpen, setModalProductInfoOpen] = useState(false);

    const [modalMoreOpen, setMoreModalOpen] = useState(false);

    const [amount, setAmount] = useState(1);

    const handleModal = () => {
        setModalOpen(false);
    }

    const handleModalProductInfo = () => {
        setModalProductInfoOpen(false);
    }

    const handleMoreModal = () => {
        setMoreModalOpen(false);
    }

    const calcDeliveryRate = (selectedDeliveryAddress) => {
        calcDeliveryAddress({
            product: product.id,
            quantity: amount,
            deliveryAddress: selectedDeliveryAddress.id,
            isWholeSale: false,
            token: token
        }).then(data => {
            if (data.state == 'success') {
                console.log(data.res);
                return data?.res?.amount?.formatted;
            }
        }).catch(err => {
            return 0;
        });
        return 0;
    }
    return (
        <>
            <MobileModal isOpen={modalMoreOpen} isCloseButton={true} onRequestClose={handleMoreModal}
                         children={<ProductMoreMenuMobile onRequestClose={handleMoreModal}/>}/>
            <MobileModal isOpen={modalProductInfoOpen} isCloseButton={false} onRequestClose={handleModalProductInfo}
                         children={<ProductInfoMobile onRequestClose={handleModalProductInfo} product={product}/>}/>
            <MobileModal isOpen={modalOpen} isCloseButton={false} onRequestClose={handleModal} children={<ProductAttributeMobile onRequestClose={handleModal} product={product} amount={amount} setAmount={setAmount} />}/>
            <ProductMobileHeaderWrapper>
                <HeaderIconWrap>
                    <ArrowLeft color="#828282"/>
                </HeaderIconWrap>
                <SearchWrapper
                    className='searchIconWrapper'
                >
                    <Search
                        className='header-modal-search'
                        showButtonText={false}
                        minimal={true}
                    />
                </SearchWrapper>
                <HeaderIconWrap>
                    <LinkIcon color="#828282"/>
                    <span><FormattedMessage id="cart.footer.share" defaultMessage="??????"/></span>
                </HeaderIconWrap>
                <HeaderIconWrap>
                    <ShoppingCart color="#828282" width="15" height="15"/>
                    <span><FormattedMessage id="mobile-header.cart" defaultMessage="?????????"/></span>
                </HeaderIconWrap>
                <HeaderIconWrap onClick={() => setMoreModalOpen(true)}>
                    <MoreIcon color="#828282"/>
                    <span><FormattedMessage id="more" defaultMessage="??????"/></span>
                </HeaderIconWrap>
            </ProductMobileHeaderWrapper>
            <ProductMobileDetailsWrapper>
                <CarouselWithCustomDots
                    items={product?.assets}
                    deviceType={deviceType}
                />
                <ProductMobileDescription>
                    <div className="discount_price">
                        {product?.price?.formatted}
                    </div>
                    <div className="original_price">
                        <FormattedMessage id='mobile.product.info.price' defaultMessage='??????' />
                        <span>{product?.oldPrice?.formatted}</span>
                    </div>
                    <div className="product_description">
                        {product.title}
                    </div>
                </ProductMobileDescription>
                <ProductLogisticsDetail>
                    <div className="logistics_path_price">
                        <div className="logistics_header">
                            <FormattedMessage id="mobile.product.info.logistics" defaultMessage="??????" />
                        </div>
                        <div className="path_price">
                            {deliveryAddresses?.map((addr, idx) =>
                                 (
                                    <div className="path_price_row" key={idx}>
                                        <span className="path">
                                            <span>{product.seller?.address?.city ?? "?"}</span>
                                            <span><FormattedMessage id="product.detail.deliveryTo" defaultMessage="???"/></span>
                                            <span>{addr?.region?.name},{addr?.city}</span>
                                        </span>
                                        <span className="price">{calcDeliveryRate(addr)}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="delivery_plan">
                        <div className="delivery_img">
                            <img src={Delivery_Img} alt=""/>
                        </div>
                        <div className="delivery_name">
                            <span>???????????? 1</span>
                            <span><ArrowNext/></span>
                        </div>
                    </div>
                    <div className="pay_method">
                        <div className="pay_method_header">
                            <FormattedMessage id="checkout.paynow" defaultMessage="??????" />
                        </div>
                        <div className="method_detail">
                    <span>
                        <img src={JBC} alt=""/>
                        JBC
                    </span>
                            <span>
                        <img src={Visa} alt=""/>
                        Visa
                    </span>
                            <span>
                        <img src={MasterCard} alt=""/>
                        Master
                    </span>
                        </div>
                    </div>
                </ProductLogisticsDetail>
                <ProductSizeDetail>
                    <div className="select_size">
                        <div className="size_header">
                            ??????
                        </div>
                        <div className="size_detail">
                            <div className="size_name" onClick={() => setModalOpen(true)}>
                                <span>????????? ?????? ?????? ??????</span>
                                <span><ArrowNext/></span>
                            </div>
                            <div className="size_img">
                        <span className="size_img_description">
                            ???3???????????????
                        </span>
                            </div>
                        </div>
                    </div>
                    <div className="size_data">
                        <div className="data_header">
                            ??????
                        </div>
                        <div className="data-detail" onClick={() => setModalProductInfoOpen(true)}>
                            <span>???????????? ??????...</span>
                            <span><ArrowNext/></span>
                        </div>
                    </div>
                </ProductSizeDetail>
                <ProductFeedback>
                    <div className="feedback_header">
                        <span className="user_name">???????????????34???</span>
                        <span className="view_all">????????????<ArrowNext/></span>
                    </div>
                    <div className="feedback_user">
                <span>
                    <img src={JBC} alt=""/>
                </span>
                        <span className="user_name">
                    ??????
                </span>
                    </div>
                    <div className="feedback_content">
                        ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                    </div>
                </ProductFeedback>
                <RecommendProductList>
                    <div className="recommend_header">
                        <div className="list_img">
                            <img src={JBC} alt=""/>
                        </div>
                        <div className="list_name_button">
                            <span className="list_name">?????????????????? </span>
                            <span className="list_button">
                        <button className="all_products">????????????</button>
                        <button className="enter_shop">????????????</button>
                    </span>
                        </div>
                    </div>
                    <div className="recommend_description">
                        <div>
                            <span className="desc_name">????????????</span>
                            <span className="desc_value">4.8   ???</span>
                        </div>
                        <div>
                            <span className="desc_name">????????????</span>
                            <span className="desc_value">4.8   ???</span>
                        </div>
                        <div>
                            <span className="desc_name">????????????</span>
                            <span className="desc_value">4.8   ???</span>
                        </div>
                    </div>
                    <div className="recommend_products">
                        <div className="products_header">
                            <span className="header_name">????????????</span>
                            <span className="view_all">????????????<ArrowNext/></span>
                        </div>
                        <div className="product_list">
                            {top_rated_products?.map((item, idx) => {
                                return (
                                    <Link href='/products/[slug]' as={`/products/${item.slug}`} key={idx}>
                                        <div className="product">
                                            <div className="product_img">
                                                <img src={item?.thumbnail?.thumbnail || item?.assets[0]?.thumbnail}
                                                     alt=""/>
                                            </div>
                                            <div className="product_title">
                                                <a href="#">{item?.title}</a>
                                            </div>
                                            <div className="product_price">
                                                {item?.price?.formatted}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </RecommendProductList>
                <ProductDetail>
                    <div className="detail_header">
                        <span>????????????</span>
                    </div>
                    <div className="detail-description">
                        {ReactHtmlParser(product?.description)}
                    </div>
                </ProductDetail>
                <PopularProducts>
                    <div className="popular_header">
                        <span>??????????????????</span>
                    </div>
                    <div className="popular_product_list">
                        {popular_products?.map((item, idx) => {
                            return (
                                <Link href='/products/[slug]' as={`/products/${item.slug}`} key={idx}>
                                    <div className="product">
                                        <div className="product_img">
                                            <img src={item?.thumbnail?.thumbnail || item?.assets[0]?.thumbnail} alt=""/>
                                            {/*<img src={item?.thumbnail?.thumbnail} alt="product-image"/>*/}
                                        </div>
                                        <div className="product_title">
                                            <a href="#">{item?.title}</a>
                                        </div>
                                        <div className="product_price">
                                            {item?.price?.formatted}
                                            <span>{item?.oldPrice?.formatted}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </PopularProducts>
                <NeighbourProducts>
                    <div className="neighbour_header">
                        <span>????????????</span>
                    </div>
                    <div className="neighbour_product_list">
                        {neighbour_products?.map((item, idx) => {
                            return (
                                <Link href='/products/[slug]' as={`/products/${item.slug}`} key={idx}>
                                    <div className="product">
                                        <div className="product_img">
                                            <img src={item?.thumbnail?.thumbnail || item?.assets[0]?.thumbnail} alt=""/>
                                        </div>
                                        <div className="product_title">
                                            <a href="#">{item?.title}</a>
                                        </div>
                                        <div className="product_price">
                                            {item?.price?.formatted}
                                            <span>{item?.oldPrice?.formatted}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </NeighbourProducts>
            </ProductMobileDetailsWrapper>
            <ProductMobileFooterWrapper>
                <HeaderIconWrap>
                    <StoreIcon color="#EF1D00"/>
                    <span><FormattedMessage id="footer.store" defaultMessage="??????"/></span>
                </HeaderIconWrap>
                <HeaderIconWrap>
                    <MessageIcon color="#C4C4C4" strokeColor="#4F4F4F" width="14" height="15"/>
                    <span><FormattedMessage id="footer.contact" defaultMessage="??????"/></span>
                </HeaderIconWrap>
                <HeaderIconWrap>
                    <FavouriteIcon color="#4F4F4F"/>
                    <span><FormattedMessage id="footer.favourite" defaultMessage="??????"/></span>
                </HeaderIconWrap>
                <div>
                    <FooterButtonGroup>
                        <button onClick={() => setModalOpen(true)}>
                            <FormattedMessage id="footer.add-shopping-cart" defaultMessage="??????"/>
                        </button>
                        <button onClick={() => setModalOpen(true)}>
                            <FormattedMessage id="footer.buy-now" defaultMessage="??????"/>
                        </button>
                    </FooterButtonGroup>
                </div>
            </ProductMobileFooterWrapper>
        </>
    );
};

export default ProductMobileDetails;
