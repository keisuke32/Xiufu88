import React, {useEffect, useRef, useState} from 'react';
import {
    CartMobileCategory,
    CartMobileFooter,
    CartMobileHeader,
    CartMobileWrapper,
    CartProductWrapper,
    CartStoreWrapper,
    HeaderIconWrap
} from "./buyer-dashboard-mobile.style";
import {useCart} from "../../contexts/cart/use-cart";
import {AuthContext} from "../../contexts/auth/auth.context";
import {calcDeliveryAddress, selectCartItems, updateProductCart} from "../../data/use-checkout";
import {StoreIcon} from "../../assets/icons/StoreIcon";
import {ArrowRight} from "../../assets/icons/ArrowRight";
import {FormattedMessage} from "react-intl";
import {ArrowLeft} from "../../assets/icons/ArrowLeft";
import MobileModal from "../modal/mobile-modal";
import {MobileHeaderMenu, MobileHeaderNavigation} from "../../layouts/header/header.style";
import {MainMenuItem} from "../../layouts/header/bottombar/bottombar.style";
import NavLink from "../nav-link/nav-link";
import {
    GETLIVE_MENU_ITEM,
    LIVEPRODUCT_MENU_ITEM,
    PROFILE_MENU_ITEM,
    SHOPLIVE_MENU_ITEM
} from "../../site-settings/site-navigation";
import {ShopLiveIcon} from "../../assets/icons/ShopLive";
import {LiveProductIcon} from "../../assets/icons/LiveProduct";
import {GetLiveIcon} from "../../assets/icons/GetLive";
import {UserAvatarIcon} from "../../assets/icons/UserAvatar";
import {CURRENCY} from "../../utils/constant";
import {Counter} from "../counter/counter";
import {router} from "next/client";
import Router from "next/router";
import {MoreIcon} from "../../assets/icons/MoreIcon";

const BuyerDashboardMobile: React.FunctionComponent = () => {

    const {
        items,
        totalPrice,
        getPrice,
        setCart,
        cartItemsCount,
        cartLoading,
        setCartLoading,
        getItems
    } = useCart();

    const {itemsCart, sellers, store_shipping_methods} = getItems();

    const {authState} = React.useContext<any>(AuthContext);

    const quantityBox = useRef(null);
    const quantityCounter = useRef(null);

    const addItem = (product) => {
        updateProduct(product.id, product.product.id, product.deliveryAddress.id, product.quantity + 1);
    }

    const removeItem = (product) => {
        updateProduct(product.id, product.product.id, product.deliveryAddress.id, product.quantity - 1);
    }

    const checkAllState = () => {
        let status = true;
        items.map(item => {
            status = status && item.selected;
        })
        return status;
    }

    const checkStoreState = (store_id) => {
        let status = true;
        items.map(item => {
            if (item.product.seller.id == store_id)
                status = status && item.selected;
        })
        return status;
    }

    const checkSelectedCount = () => {
        return items.filter(item => item.selected).length;
    }

    const handleQuantity = (id) => {

    }

    const selectItem = (product, selectType = 'item') => {
        let ids = [];
        let selected = true;
        if (selectType == 'item') {
            ids.push(product.id);
            selected = product.selected;
        } else if (selectType == 'store') {
            product.store_products?.map(product => {
                ids.push(product.id);
                selected = selected && product.selected;
            })
        } else {
            items.map(item => {
                ids.push(item.id);
                selected = selected && item.selected;
            })
        }
        selectCartItems({ids: ids, selected: !selected, token: authState?.token}).then(data => {
            if (data.state == 'success') {
                setCart({
                    items: data.res.items,
                    cartPrice: data.res.price,
                    deliveryPrice: data.res.deliveryPrice,
                    totalPrice: data.res.total
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    const updateProduct = (cart, product, deliveryAddress, quantity) => {
        setCartLoading(true);
        calcDeliveryAddress({
            product: product,
            deliveryAddress: deliveryAddress,
            quantity: quantity,
            isWholeSale: false,
            token: authState?.token
        }).then(data => {
            if (data.state == 'success') {
                updateProductCart({
                    cart_id: cart,
                    deliveryRate: data.res.id,
                    quantity: quantity,
                    token: authState?.token
                }).then(data => {
                    if (data.state == 'success') {
                        setCart({
                            items: data.res.items,
                            cartPrice: data.res.price,
                            deliveryPrice: data.res.deliveryPrice,
                            totalPrice: data.res.total
                        });
                        setCartLoading(false);
                    }
                }).catch(error => {
                    console.log(error);
                    setCartLoading(false);
                });
            }
        }).catch(error => {
            console.log(error);
        })

    }

    const handleCheckout = () => {
        Router.push('/checkout')
    }

    return (
        <>
            <CartMobileHeader>
                <span><ArrowLeft /></span>
                <span>
                        <FormattedMessage id="mobile.buyer.dashboard.title" defaultMessage="我的訂單" />
                </span>
                <span>
                    <HeaderIconWrap>
                        <MoreIcon color="white"/>
                        <span><FormattedMessage id="more" defaultMessage="更多"/></span>
                    </HeaderIconWrap>
                </span>
            </CartMobileHeader>
            <CartMobileCategory>
                <div className="all">
                    <FormattedMessage id="liveproduct.brand.all-brand" defaultMessage="全部" />
                </div>
                <div className="delivered">
                    <FormattedMessage id="mobile.buyer.dashboard.delivered" defaultMessage="待发货" />
                </div>
                <div className="all">
                    <FormattedMessage id="mobile.buyer.dashboard.shipped" defaultMessage="已发货" />
                </div>
            </CartMobileCategory>
            <CartMobileWrapper>
                {
                    itemsCart.map((store, idx) => (
                        <CartStoreWrapper key={idx}>
                            <CartProductWrapper>
                                <div className="custom-control custom-checkbox select_option">
                                    <input
                                        id={"select-store-" + store.store_id}
                                        name={"select-store-" + store.store_id}
                                        type="checkbox"
                                        className="custom-control-input select-all"
                                        checked={checkStoreState(store.store_id)}
                                        onChange={() => selectItem(store, 'store')}
                                    />
                                    <label htmlFor={"select-store-" + store.store_id} className="custom-control-label" />
                                </div>
                                <div className="product_detail">
                                    <StoreIcon color="#BDBDBD"/>&nbsp;&nbsp;&nbsp;
                                    <span className="store_name">{store.store_name}</span>&nbsp;
                                    <ArrowRight />
                                </div>
                            </CartProductWrapper>
                            {
                                store?.store_products?.map((product, idp) => (
                                    <CartProductWrapper key={idp}>
                                        <div className="custom-control custom-checkbox select_option">
                                            <input
                                                id={"select-product-" + product.product.id}
                                                name={"select-product-" + product.product.id}
                                                type="checkbox"
                                                className="custom-control-input select-all"
                                                checked={product.selected}
                                                onChange={() => selectItem(product, 'item')}
                                            />
                                            <label htmlFor={"select-product-" + product.product.id} className="custom-control-label" />
                                        </div>
                                        <div className="product_detail">
                                            <div className="product_image">
                                                <img
                                                    src={product?.product?.thumbnail?.thumbnail || product.product.assets[0]?.thumbnail || product.product.assets[0]?.url || ""}
                                                    alt=""/>
                                            </div>
                                            <div className="product_description">
                                                <div className="product_title">
                                                    {product.product?.title}
                                                </div>
                                                <div className="price_quantity">
                                                    <div className="product_price">
                                                        {product.product?.price?.formatted}
                                                    </div>
                                                    <div className="product_quantity">
                                                    <span
                                                        ref={quantityBox}
                                                        className="quantity-box show"
                                                        onClick={(e) => handleQuantity(product.product.id)}
                                                    >
                                                        x {parseInt(product?.quantity)}
                                                    </span>
                                                        <Counter
                                                            className="quantity-counter hide"
                                                            value={parseInt(product?.quantity)}
                                                            onDecrement={() => removeItem(product)}
                                                            onIncrement={() => addItem(product)}
                                                            variant="lightHorizontal"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CartProductWrapper>
                                ))
                            }
                        </CartStoreWrapper>
                    ))
                }
            </CartMobileWrapper>
            <CartMobileFooter>
                <div className="custom-control custom-checkbox all_selection">
                    <input
                        id="select-all"
                        name="select-all"
                        type="checkbox"
                        className="custom-control-input select-all"
                        checked={checkAllState()}
                        onChange={() => selectItem(null, 'all')}

                    />
                    <label htmlFor="select-all"
                           className="custom-control-label"><FormattedMessage
                        id="mobile.cart.select.all"
                        defaultMessage="全選"/></label>
                </div>
                <div className="operation">
                    <div className="total_price">
                        <FormattedMessage id="mobile.cart.total" defaultMessage="合計" />:
                        <span> {CURRENCY} {getPrice()}</span>
                    </div>
                    <div className="operation_button">
                        <button onClick={handleCheckout} disabled={checkSelectedCount() == 0}>
                            <FormattedMessage id="mobile.cart.settlement" defaultMessage="結算" />{checkSelectedCount() != 0 && ("(" + checkSelectedCount() + ")")}
                        </button>
                    </div>
                </div>
            </CartMobileFooter>
        </>
    );
};

export default BuyerDashboardMobile;
