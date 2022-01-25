import React, {useContext, useState, useEffect} from 'react';
import Router from 'next/router';
import {CURRENCY} from 'utils/constant';
import CheckoutWrapper, {
    CheckoutContainer,
    CheckoutInformation,
    InformationBox,
    AddressWrapper,
    ShippingMethodWrapper,
    ShippingMethodTitle,
    ShippingMethodBox,
    ShippingMethodItem,
    CartWrapper,
    CartContainer,
    CartHeader,
    CartContent,
    StoreItemWrapper,
    StoreHeader,
    ProductList,
    ProductItem,
    ProductItemName,
    StoreFooter,
    StoreOption,
    StoreTotalAmount,
    CheckoutFooter, InformationBoxHeaderWrapper
} from './checkout-feature.style';

import CheckoutHeader from "../checkout-header";

import {ProfileContext} from 'contexts/profile/profile.context';
import {FormattedMessage} from 'react-intl';
import {useCart} from 'contexts/cart/use-cart';
import {useLocale} from 'contexts/location/location.provider';
import {useWindowSize} from 'utils/useWindowSize';
import {AddressIcon} from "assets/icons/AddressIcon";

// The type of props Checkout Form receives
interface MyFormProps {
    token: string;
    nextStep: any;
}

type CartItemProps = {
    product: any;
};

const CheckoutFeature: React.FC<MyFormProps> = ({token, nextStep}) => {
    // const [hasCoupon, setHasCoupon] = useState(false);
    const {state} = useContext(ProfileContext);
    const {isRtl} = useLocale();
    const {
        items,
        totalPrice,
        getPrice,
        setCart,
        cartItemsCount,
        cartLoading,
        setCartLoading,
        getItems,
    } = useCart();
    const [loading, setLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const [shippingMethods, setShippingMethods] = useState({});
    const {name, phone, address, contact, card, schedules} = state;

    const handleSubmit = async () => {
        setLoading(true);
        if (isValid) {
            // clearCart();
            Router.push('/order-received');
        }
        setLoading(false);
    };

    const {itemsCart, sellers, store_shipping_methods} = getItems(true);

    const calcStoreProducts = (store_id) => {
        let price = 0;
        items?.map(item => {
            price += (item.product?.seller?.id == store_id) ? item.total?.amountISO : 0;
        })
        return price;
    }

    const handleShippingMethods = (idx) => {
        let newState = shippingMethods;
        console.log(newState['idx']);
        if (newState[idx] == undefined)
            newState[idx] = true;
        else
            newState[idx] = !newState[idx];
        setShippingMethods(newState);
    }

    const returnToCart = () => {
        Router.push('/cart');
    }
    return (
        <>
            <CheckoutInformation>
                <InformationBoxHeaderWrapper>
                    <span>確認收貨地址</span>
                    <span>管理收貨地址</span>
                </InformationBoxHeaderWrapper>
                <InformationBox>

                    <AddressWrapper>
                        <div>
                            <AddressIcon/>
                            <span className="send-to">
                                        <FormattedMessage id="checkout.address.send-to" defaultMessage="Send to"/>
                                    </span>
                            <span className="address-text">
                                        <input type="radio" value="" defaultChecked/>
                                {address.street} {address.city} {address.zipcode} {address.country?.name}
                                    </span>
                        </div>
                        <div className="address-tool">
                            <a className="modify-address-button" href="#">
                                <FormattedMessage id="checkout.address.modify-address" defaultMessage="Modify Address"/>
                            </a>
                        </div>
                    </AddressWrapper>
                    <button className="use-another-address">
                        <FormattedMessage id="checkout.address.use-another-address"
                                          defaultMessage="Use Another Address"/>
                    </button>
                </InformationBox>

                <InformationBox>
                </InformationBox>
            </CheckoutInformation>
            <CartWrapper>
                        <span>
                            <FormattedMessage id="checkout.cart.confirm-order" defaultMessage="确认订单信息"/>
                        </span>
                <CartContainer>
                    <CartHeader>
                        <span><FormattedMessage id="checkout.cart.header.store" defaultMessage="店铺宝贝"/></span>
                        <span><FormattedMessage id="checkout.cart.header.attribute" defaultMessage="商品属性"/></span>
                        <span><FormattedMessage id="checkout.cart.header.unit" defaultMessage="单价"/></span>
                        <span><FormattedMessage id="checkout.cart.header.quantity" defaultMessage="数量"/></span>
                        <span><FormattedMessage id="checkout.cart.header.promotion" defaultMessage="优惠方式"/></span>
                        <span><FormattedMessage id="checkout.cart.header.subtotal" defaultMessage="小计"/></span>
                    </CartHeader>
                    <CartContent>
                        {
                            itemsCart.map((store, idx) => (
                                <StoreItemWrapper key={idx}>
                                    <StoreHeader>
                                        <FormattedMessage id="cart.product.list.store" defaultMessage="Store"/>:
                                        <span>{store.store_name}</span>
                                        <FormattedMessage id="cart.product.list.seller" defaultMessage="Seller"/>:
                                        <span>{store.store_name}</span>
                                    </StoreHeader>
                                    <ProductList> {
                                        store.store_products.map((product, idp) => (
                                            <ProductItem key={idp}>
                                                <ProductItemName>
                                                    <div className="product-image">
                                                        <img
                                                            src={product.product?.thumbnail?.thumbnail || product.product?.thumbnail?.url || product.product?.assets[0]?.thumbnail || product.product?.assets[0]?.url}
                                                            alt=""/>
                                                    </div>
                                                    <div className="product-name">
                                                        <span>{product.product.title}</span>
                                                        <span><FormattedMessage id="cart.product.item.no-support"
                                                                                defaultMessage="此商品性质不支持7天退货"/></span>
                                                    </div>
                                                </ProductItemName>
                                                {/*<span className="attribute">{product.description}</span>*/}
                                                <span className="attribute">
                                                    {
                                                        product?.productAttribute?.variation?.map((variation, idx) => {
                                                            return (
                                                                <div className="product-attribute"
                                                                     key={idx}>{variation?.name}: {variation?.value}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </span>
                                                <span className="price">
                                                             {product.product?.price?.formatted}
                                                        </span>
                                                <span className="quantity">
                                                            {product?.quantity}
                                                        </span>
                                                <span className="discount">
                                                            {/*{product.product.discount}*/}
                                                        </span>
                                                <span className="amount">
                                                    {product.total?.formatted}
                                                        </span>
                                            </ProductItem>
                                        ))
                                    }
                                    </ProductList>

                                    <ShippingMethodWrapper>
                                        <ShippingMethodTitle>
                                            <span><FormattedMessage id="checkout.shipping.title" defaultMessage="配送方式"/></span>
                                            <span><FormattedMessage id="checkout.shipping.description"
                                                                    defaultMessage="商家至转运仓所需运费计算，请以下方店铺信息为准"/></span>
                                        </ShippingMethodTitle>
                                        <ShippingMethodBox>
                                            {
                                                store_shipping_methods[idx] &&
                                                (
                                                    <ShippingMethodItem>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio"
                                                                   id={"shipping-method-" + store_shipping_methods[idx]?.id}
                                                                   name={"shipping_method-" + store.store_id}
                                                                   className="custom-control-input"
                                                                   value={shippingMethods[idx]}
                                                                   onChange={event => {
                                                                       handleShippingMethods(idx)
                                                                   }}
                                                            />
                                                            <label className="custom-control-label"
                                                                   htmlFor={"shipping-method-" + store_shipping_methods[idx]?.id}>
                                                                <span
                                                                    className="shipping-name">{store_shipping_methods[idx]?.name}</span>
                                                                <span
                                                                    className="shipping-price">{store_shipping_methods[idx]?.formatted}</span>
                                                            </label>
                                                            {
                                                                (store_shipping_methods[idx]?.amount != 0) &&
                                                                <a href="#" className="detail">
                                                                    <FormattedMessage id="detail" defaultMessage="詳情"/>
                                                                </a>
                                                            }
                                                        </div>
                                                    </ShippingMethodItem>
                                                )
                                            }
                                        </ShippingMethodBox>
                                    </ShippingMethodWrapper>
                                    <StoreFooter>
                                        <StoreOption>
                                            <div className="message-to-seller">
                                                <label htmlFor="message-to-seller"><FormattedMessage
                                                    id="cart.store.footer.message-to-seller"
                                                    defaultMessage="给卖家留言："/></label>
                                                <textarea name="message-to-seller" id="message-to-seller" rows={5}
                                                          cols={30}/>
                                            </div>
                                            <div className="shipping-service">
                                                <span>普通配送快递 免邮</span>
                                                <span className="shipping-price">
                                                    {/*{CURRENCY} {shippingMethods[idx] && store_shipping_methods[idx]?.amountISO}*/}
                                                </span>
                                            </div>
                                        </StoreOption>
                                        <StoreTotalAmount>
                                            <FormattedMessage id="cart.store.footer.store-total-amount"
                                                              defaultMessage="店铺合计(含运费)"/>
                                            <span>{CURRENCY} {calcStoreProducts(store.store_id)}</span>
                                        </StoreTotalAmount>
                                    </StoreFooter>
                                </StoreItemWrapper>
                            ))
                        }
                    </CartContent>
                </CartContainer>
            </CartWrapper>
            <CheckoutFooter>
                <div className="checkout-detail">
                    <div className="real-payment">
                        <span><FormattedMessage id="checkout.footer.real-payment" defaultMessage="实付款："/></span>
                        <span className="total-amount">{CURRENCY} {getPrice()}</span>
                    </div>
                    <div className="address">
                        <span><FormattedMessage id="checkout.address.send-to" defaultMessage="Send to"/></span>
                        <span>{address.street} {address.city} {address.zipcode} {address.country?.name}</span>
                    </div>
                    <div className="buyer">
                        <span><FormattedMessage id="checkout.footer.buyer" defaultMessage="收貨人"/></span>
                        <span>{name} {phone}</span>
                    </div>
                </div>
                <div className="checkout-footer-buttons">
                    <button className="back-to-cart" onClick={returnToCart}>
                        <FormattedMessage id="checkout.footer.back-to-cart"
                                          defaultMessage="返回購物車"/>
                    </button>
                    <button className="place-order" onClick={() => nextStep(2)}>
                        <FormattedMessage id="checkout.footer.place-order"
                                          defaultMessage="提交訂單"/>
                    </button>
                </div>
                <div className="checkout-footer-note">
                    <span className="notification"><FormattedMessage id="checkout.footer.notification"
                                                                     defaultMessage="请仔细阅读“海外购物须知”，提交订单表示您已同意相关条款"/></span>
                </div>
            </CheckoutFooter>
        </>
    );
};

export default CheckoutFeature;
