import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {Button} from 'components/button/button';
import ReactHtmlParser from 'react-html-parser';

import {
    ProductDetailsWrapper,
    ProductPreview,
    ProductInfo,
    ProductTitlePriceWrapper,
    ProductTitle,
    ProductDescription,
    ButtonText,
    ProductMeta,
    ProductCartWrapper,
    ProductPriceWrapper,
    ProductPrice,
    SalePrice,
    ProductCartBtn,
    MetaTitle,
    MetaSingle,
    MetaItem,
    RelatedItems,
    ProductPriceText,
    ProductSaleWrapper,
    RatingWrapper,
    Rating,
    Divider,
    Sold,
    PriceAndRatingWrapper,
    DeliveryWrapper,
    AttributesWrapper,
    Attributes,
    InfoTitle,
    AttributesValues,
    ProductAmountWrapper,
    Quantity,
    ProductMetaInfo,
    ProductShop,
    ProductShopTitle,
    ProductShopDetail,
    ProductShopDetailButton,
    RelatedProduct,
    RelatedEachProduct,
    RelatedProductContent,
    RelatedProductTitle,
    MatchingPackage,
    MatchingPackageTitle,
    MatchingPackageContent,
    MatchingPackageContentProduct,
    MatchingPackageContentTotal,
    PayMethod,
    ProductDescriptionWrapper,
    ProductDescriptionSidebar,
    ProductDescriptionDetail,
    ProductDetailsWrapper1,
    DeliveryAddresses,
} from './product-details-four.style';
import {CartIcon} from 'assets/icons/CartIcon';
import ReadMore from 'components/truncate/truncate';
import CarouselWithCustomDots from 'components/multi-carousel/multi-carousel';
import {CURRENCY} from 'utils/constant';
import {FormattedMessage, useIntl} from 'react-intl';
import {useLocale} from 'contexts/location/location.provider';
import {useCart} from 'contexts/cart/use-cart';
import {Counter} from 'components/counter/counter';
import {ProductGrid} from 'components/product-grid/product-grid';
import {FavouriteIcon} from "../../../assets/icons/FavouriteIcon";
import {SearchIcon} from "../../../assets/icons/SearchIcon";
import Visa from '../../../assets/images/visa.png';
import MasterCard from '../../../assets/images/master-card.png';
import JBC from '../../../assets/images/jbc.png';
import {getBillingAddresses, getDeliveryAddresses} from "../../../data/use-user";
import {addProductToCart, calcDeliveryAddress} from "../../../data/use-checkout";
import {AuthContext} from "../../../contexts/auth/auth.context";
import {ChevronDown} from "../../../assets/icons/ChevronUp";
import Router, {useRouter} from "next/router";
import useProducts from "../../../data/use-products";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useCategoryLevel} from "../../../data/use-category";

type ProductDetailsProps = {
    product: any;
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = (
    {
        product,
        deviceType,
    }) => {

    const intl = useIntl();
    const [selectedAttributes, SetSelectedAttributes] = useState({});
    const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState({
        id: null,
        city: "?",
        region: {name: "?"}
    });
    const [tabID, SetTabID] = useState(0);
    const [attr, setAttr] = useState(null);
    const [amount, setAmount] = useState(1);
    const {isRtl} = useLocale();
    const {setCart} = useCart();

    const [cartable, setCartable] = useState(false);

    const {authState: {isAuthenticated, token}} = React.useContext<any>(AuthContext);
    const router = useRouter();

    if (!isAuthenticated) {
        Router.push(`/login?redirect_to=${router.asPath}`);
    }
    const [price, setPrice] = useState(product?.price?.formatted);
    const [oldPrice, setOldPrice] = useState(product?.oldPrice?.formatted);
    const [quantity, setQuantity] = useState(product?.quantity);
    const [deliveryRate, setDeliveryRate] = useState(null);

    const {deliveryAddresses, error: deliveryAddressError} = getDeliveryAddresses();

    const {data: top_rated_products} = useProducts({
        category: product.category.id,
        offset: 0,
        limit: 6
    });
    const {data: matching_package_products} = useProducts({
        category: product.category.id,
        offset: 0,
        limit: 3
    });
    const {data: product_description_sidebar_categories, error: error_categories, loading: loading_categories} = useCategoryLevel({
        parent: product?.category?.parent?.id,
        hasProduct: true
    });

    const {data: ranking_products} = useProducts({
        category: product.category.id,
        offset: 0,
        limit: 5
    });

    useEffect(() => {
        if (deliveryAddresses && deliveryAddresses.length > 0) {
            setSelectedDeliveryAddress(deliveryAddresses[0]);
        }
    }, [deliveryAddresses]);

    useEffect(() => {
        if (quantity > 0 && attr && attr.id && selectedDeliveryAddress && selectedDeliveryAddress.id) {
            setCartable(true);
        }
    }, [quantity, attr, selectedDeliveryAddress, amount]);

    useEffect(() => {
        if (selectedDeliveryAddress?.id) {
            calcDeliveryRate();
        }
    }, [selectedDeliveryAddress, amount]);

    let variations = [];
    let variationKeys = [];
    if (product) {
        product.attrs?.map((attr, idx) => {
            attr?.variation?.map(variation_item => {
                if (!(variation_item.name in variations)) {
                    variations[variation_item.name] = [];
                    variationKeys.push(variation_item.name);
                }
                if (!variations[variation_item.name].includes(variation_item.value)) {
                    variations[variation_item.name].push(variation_item.value);
                }
            });

        })
    }
    const handleAttributes = (e, attr_key, attr_value) => {
        let oldAttrs = {}
        oldAttrs = JSON.parse(JSON.stringify(selectedAttributes));
        oldAttrs[attr_key] = attr_value;
        SetSelectedAttributes(oldAttrs);
        let selectedAttr = {price: {formatted: ""}, oldPrice: {formatted: ""}, quantity: 0};
        for (let attr_i = 0; attr_i < product?.attrs.length; attr_i++) {
            let isEqual = true;
            product?.attrs[attr_i].variation.map(variation => {
                isEqual = isEqual && ((variation.name in oldAttrs) && oldAttrs[variation.name] === variation.value);
            })
            if (isEqual) {
                selectedAttr = product?.attrs[attr_i];
                break;
            }

        }
        setAttr(selectedAttr);
        setPrice(selectedAttr?.price?.formatted);
        setOldPrice(selectedAttr?.oldPrice?.formatted);
        setQuantity(selectedAttr?.quantity);
        if (selectedAttr?.quantity == 0) {
            setAmount(0);
        } else {
            setAmount(1);
        }
    }
    const calcDeliveryRate = () => {
        calcDeliveryAddress({
            product: product.id,
            quantity: amount,
            deliveryAddress: selectedDeliveryAddress.id,
            isWholeSale: false,
            token: token
        }).then(data => {
            if (data.state == 'success') {
                setDeliveryRate(data.res);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const handleAddClick = (e) => {
        e.stopPropagation();
        if (cartable) {
            // addItem(data);
            addProductToCart({
                product: product?.id,
                deliveryRate: deliveryRate?.id,
                quantity: amount,
                billingAddress: selectedDeliveryAddress?.id,
                productAttribute: attr?.id,
                token: token
            }).then(data => {
                if (data.state == 'success') {
                    setCart({
                        items: data.res.items,
                        cartPrice: data.res.price,
                        deliveryPrice: data.res.deliveryPrice,
                        totalPrice: data.res.total
                    });
                    toast.success(intl.formatMessage({
                        id: "product.detail.addedCart",
                        defaultMessage: "Added to cart"
                    }), {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                    });
                } else {
                    toast.error(intl.formatMessage({
                        id: "product.detail.addedCartFailed",
                        defaultMessage: "Add to cart failed"
                    }), {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                    });
                }
            }).catch(err => {
                console.log(err);
                toast.error(intl.formatMessage({
                    id: "product.detail.addedCartFailed",
                    defaultMessage: "Add to cart failed"
                }), {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            });
        } else {
            toast.error(intl.formatMessage({
                id: "product.detail.selectAttributes",
                defaultMessage: "Please select attributes and delivery address correctly!"
            }), {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }
    };

    const handleRemoveClick = (e) => {
        e.stopPropagation();
    };

    const handleDeliveryAddress = (deliveryAddress) => {
        setSelectedDeliveryAddress(deliveryAddress);
    }
    const handleAmountAddClick = () => {
        if (amount < quantity) {
            setAmount(amount => amount + 1);
        }
    }
    const handleAmountRemoveClick = () => {
        if (amount > 1) {
            setAmount(amount => amount - 1);
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            <ProductDetailsWrapper className='product-card' dir='ltr'>
                {!isRtl && (
                    <ProductPreview>
                        <CarouselWithCustomDots
                            items={product?.assets}
                            deviceType={deviceType}
                        />
                        <div className="PopularGoods"><FavouriteIcon width="14px" height="14px"/>
                            <FormattedMessage id="product.detail.favorite" values={{favorite: product.sold}}/>
                        </div>
                    </ProductPreview>
                )}

                <ProductInfo dir={isRtl ? 'rtl' : 'ltr'}>
                    <ProductTitlePriceWrapper>
                        <ProductTitle>{product.title}</ProductTitle>
                    </ProductTitlePriceWrapper>
                    <PriceAndRatingWrapper>
                        <ProductPriceWrapper>
                            <ProductPriceText>
                                <FormattedMessage id="product.detail.price" defaultMessage="价格"/>
                            </ProductPriceText>
                            <ProductPrice>
                                {price}
                            </ProductPrice>
                            {product.oldPrice ? (
                                <ProductSaleWrapper>
                                    <ProductPriceText>
                                        <FormattedMessage id="product.detail.oldPrice" defaultMessage="原价"/>
                                    </ProductPriceText>
                                    <SalePrice>
                                        {oldPrice}
                                    </SalePrice>
                                </ProductSaleWrapper>
                            ) : null}
                        </ProductPriceWrapper>
                        <RatingWrapper>
                            <Rating>
                                {product?.rating?.total}
                                <span>
                                    <FormattedMessage id="product.detail.rating" defaultMessage="累计评论"/>
                                </span>
                            </Rating>
                            <Divider/>
                            <Sold>
                                {product?.sold}
                                <span>
                                    <FormattedMessage id="product.detail.sold" defaultMessage="交易成功"/>
                                </span>
                            </Sold>
                        </RatingWrapper>
                    </PriceAndRatingWrapper>
                    <DeliveryWrapper>
                        <InfoTitle>
                            <FormattedMessage id="product.detail.delivery" defaultMessage="配送"/>
                        </InfoTitle>
                        <AttributesValues>
                            <span>{product.seller?.address?.city ?? "?"}</span>
                            <span><FormattedMessage id="product.detail.deliveryTo" defaultMessage="至"/></span>
                            <DeliveryAddresses>
                                <Button className="dropbtn" size="small" type="button" variant="outlined">
                                    {selectedDeliveryAddress?.region?.name},{selectedDeliveryAddress?.city}<ChevronDown/></Button>
                                <div className="dropdown-content">
                                    {
                                        deliveryAddresses?.map((addr, idx) => (
                                            <a key={idx}
                                               onClick={(e) => handleDeliveryAddress(addr)}>{addr?.region?.name},{addr?.city}</a>
                                        ))
                                    }
                                </div>
                            </DeliveryAddresses>
                            <span>{deliveryRate?.amount?.formatted}</span>
                            <span>
                                <FormattedMessage
                                    id="product.detail.deliveryDays"
                                    defaultMessage="付款后 {days}天内发货"
                                    values={{days: deliveryRate?.deliveryDays ?? 0}}/>
                            </span>
                        </AttributesValues>
                    </DeliveryWrapper>
                    {product?.attrs && (
                        <AttributesWrapper>
                            {variationKeys?.map((variation, idx) => {
                                return (<Attributes key={idx}>
                                    <InfoTitle>{variation}</InfoTitle>
                                    <AttributesValues>
                                        {variations[variation]?.map((attr, attr_idx) => {
                                            return (
                                                <Button key={attr_idx}
                                                        className={(variation in selectedAttributes) && selectedAttributes[variation] === attr ? 'active' : ''}
                                                        onClick={(e) => handleAttributes(e, variation, attr)}
                                                        type={'button'}>{attr}</Button>
                                            )
                                        })}
                                    </AttributesValues>
                                </Attributes>)
                            })}
                        </AttributesWrapper>)
                    }
                    <ProductAmountWrapper>
                        <InfoTitle><FormattedMessage id="product.detail.quantity" defaultMessage="数量"/></InfoTitle>
                        <Counter
                            value={amount}
                            onDecrement={handleAmountRemoveClick}
                            onIncrement={handleAmountAddClick}
                            className='amount-counter'
                            variant='lightHorizontal'
                        />
                        <Quantity><FormattedMessage id="product.detail.quantityDesc" defaultMessage="件 (库存 {quantity}件)"
                                                    values={{quantity: quantity}}/></Quantity>
                    </ProductAmountWrapper>
                    <ProductCartWrapper>
                        <Button
                            className="buy-button"
                            variant="outlined"
                            size="big"
                            disabled={!cartable}
                        >
                            <FormattedMessage id="product.detail.buynow" defaultMessage="立即购买"/>
                        </Button>
                        <ProductCartBtn>
                            <Button
                                className='cart-button'
                                variant='primary'
                                size='big'
                                onClick={handleAddClick}
                            >
                                <CartIcon mr={2}/>
                                <ButtonText>
                                    <FormattedMessage
                                        id='addToCartButton'
                                        defaultMessage='Add to cart'
                                    />
                                </ButtonText>
                            </Button>
                        </ProductCartBtn>
                    </ProductCartWrapper>
                    <PayMethod>
                        <div><FormattedMessage id="payment.payment-list" defaultMessage="支付訂單"/></div>
                        <div><img src={JBC} alt="JBC"/>JBC</div>
                        <div><img src={Visa} alt="Visa-Card"/>Visa</div>
                        <div><img src={MasterCard} alt="Master-Card"/>Master</div>
                    </PayMethod>
                </ProductInfo>

                <ProductMetaInfo>
                    <ProductShop>
                        <ProductShopTitle>
                            {product?.category?.name}
                        </ProductShopTitle>
                        <ProductShopDetail>
                            <FormattedMessage id="product.detail.shop" defaultMessage="店主"/>：{product?.seller?.name}
                            <br/>
                            <FormattedMessage id="product.detail.contact" defaultMessage="聯係"/>：{product?.seller?.name}
                            <br/>
                            <ProductShopDetailButton>
                                <button><FormattedMessage id="product.detail.enterShop" defaultMessage="進入店鋪"/></button>
                                <button><FormattedMessage id="product.detail.favShop" defaultMessage="收藏店鋪"/></button>
                            </ProductShopDetailButton>
                        </ProductShopDetail>
                    </ProductShop>
                    <RelatedProduct>
                        <RelatedProductTitle>
                            <FormattedMessage id="product.detail.popProducts" defaultMessage="熱門查看商品"/>
                        </RelatedProductTitle>
                        <RelatedProductContent>
                            {top_rated_products?.map((item, idx) => {
                                return (
                                    <Link href='/products/[slug]' as={`/products/${item.slug}`} key={idx}>
                                        <a style={{textDecoration: 'none', color: 'black'}}>
                                            <RelatedEachProduct>
                                                <img src={item?.thumbnail?.thumbnail || item?.assets[0]?.thumbnail}
                                                     alt=""/>
                                                {item?.price?.formatted}
                                            </RelatedEachProduct>
                                        </a>
                                    </Link>
                                )
                            })}
                        </RelatedProductContent>
                    </RelatedProduct>
                </ProductMetaInfo>

                {isRtl && (
                    <ProductPreview>
                        <CarouselWithCustomDots
                            items={product.assets}
                            deviceType={deviceType}
                        />
                    </ProductPreview>
                )}
            </ProductDetailsWrapper>
            <ProductDetailsWrapper1>
                <MatchingPackage>
                    <MatchingPackageTitle>
                        <FormattedMessage id="product.detail.package" defaultMessage="配搭套餐"/>
                    </MatchingPackageTitle>
                    <MatchingPackageContent>
                        {matching_package_products?.map((item, idx) => {
                            return (
                                <Link href='/products/[slug]' as={`/products/${item.slug}`} key={idx}>
                                    <a style={{textDecoration: 'none', color: 'black', display: 'flex'}}>
                                        <MatchingPackageContentProduct key={idx}>
                                            <img src={item?.thumbnail?.thumbnail || item?.assets[0]?.thumbnail} alt=""/>
                                            <div className="title">
                                                {item?.title}
                                            </div>
                                            <br/>
                                            {item.price?.formatted}
                                        </MatchingPackageContentProduct>
                                        {idx < matching_package_products.length - 1 && (<div className="plus">+</div>)}
                                    </a>
                                </Link>
                            )
                        })}
                        <MatchingPackageContentTotal>
                            <FormattedMessage id="product.detail.packagePrice"
                                              defaultMessage="套餐價格"/>：<span>￥9560</span>
                            <Button
                                className='cart-button'
                                variant='primary'
                                size='big'
                                type="button"
                            >
                                3 <FormattedMessage id="product.detail.packageBuy" defaultMessage="件商品加入購物車"/>
                            </Button>
                        </MatchingPackageContentTotal>
                    </MatchingPackageContent>
                </MatchingPackage>

                <ProductDescriptionWrapper>
                    <ProductDescriptionSidebar>
                        <div className="productDescriptionSidebarSearch">
                            <input type="search" placeholder="搜本店"/>
                            <button><SearchIcon/></button>
                        </div>
                        <div className="productDescriptionSidebarCategories">
                            <div className="productDescriptionSidebarCategoriesTitle">
                                <FormattedMessage id="product.detail.categories" defaultMessage="商品分類"/>
                            </div>
                            {product_description_sidebar_categories?.map((item, idx) => {
                                return (
                                    <div key={idx} className="productDescriptionSidebarCategory">
                                        <a href={"/productfilter?category=" + item.slug}>{item.name}</a>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="productDescriptionSidebarRanking">
                            <div className="productDescriptionSidebarRankingTitle">
                                <FormattedMessage id="product.detail.salesRanking" defaultMessage="商品銷量排行榜"/>
                            </div>
                            {ranking_products?.map((item, idx) => {
                                return (
                                    <Link href='/products/[slug]' as={`/products/${item.slug}`} key={idx}>
                                        <a style={{textDecoration: 'none', color: 'black'}}>
                                            <div key={idx} className="rankingProduct">
                                                <img src={item?.thumbnail?.thumbnail} alt="product-image"/>
                                                <div className="rankingProductDetail">
                                                    <span className="rankingProductTitle">{item?.title}</span>
                                                    <br/>
                                                    <span>{item?.price?.formatted}</span>
                                                    <br/>
                                                    <FormattedMessage id="product.detail.soldOut"
                                                                      values={{count: item?.sold}}/>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })}
                            <div className="readmore">
                                <FormattedMessage id="product.detail.viewMoreSales" defaultMessage="查看更多商品銷量"/>
                            </div>
                        </div>
                    </ProductDescriptionSidebar>
                    <ProductDescriptionDetail>
                        <div className="productDescriptionDetailTitle">
                            <div className={tabID == 0 ? "active" : ""}>
                                <a onClick={() => SetTabID(0)}>商品詳情</a>
                            </div>
                            <div className={tabID == 1 ? "active" : ""}>
                                <a onClick={() => SetTabID(1)}>纍計評論</a>
                            </div>
                            <div className="blank"></div>
                        </div>
                        {!tabID ?
                            <div className="detail">
                                {ReactHtmlParser(product?.description)}
                            </div> :
                            <div className="review">

                            </div>}
                    </ProductDescriptionDetail>
                </ProductDescriptionWrapper>
                <Divider/>
            </ProductDetailsWrapper1>
        </>
    );
};

export default ProductDetails;
