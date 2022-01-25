import React, {useEffect, useRef, useState} from 'react';
import {
    CartMobileHeader,
    CartMobileProduct,
    CheckoutMobileWrapper,
    DeliveryAddressWrapper, DeliveryMethodWrapper, PaymentMethodWrapper,
    ProductItemQuantity
} from "./checkout-mobile.style";
import {ArrowLeft} from "../../assets/icons/ArrowLeft";
import {FormattedMessage} from "react-intl";
import {useCart} from "../../contexts/cart/use-cart";
import {Counter} from "../counter/counter";
import {calcDeliveryAddress, updateProductCart} from "../../data/use-checkout";
import {AuthContext} from "../../contexts/auth/auth.context";
import {LocationIcon} from "../../assets/icons/LocationIcon";
import {ArrowRight} from "../../assets/icons/ArrowRight";
import {CURRENCY} from "../../utils/constant";
import MobileModal from "../modal/mobile-modal";
import {PaymentMethodSelection} from "./payment-method-selection";
import {AddressMobile} from "./address-mobile";
import {useRouter} from "next/router";
import {CheckoutFinishedMobile} from "./checkout-finish";

const CheckoutMobile: React.FunctionComponent = () => {

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

    const {itemsCart, sellers, store_shipping_methods} = getItems(true);

    const {authState} = React.useContext<any>(AuthContext);

    const addItem = (product) => {
        updateProduct(product.id, product.product.id, product.deliveryAddress.id, product.quantity + 1);
    }

    const removeItem = (product) => {
        updateProduct(product.id, product.product.id, product.deliveryAddress.id, product.quantity - 1);
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

    const [modalOpen, setModalOpen] = useState(false);

    const [modalAddressOpen, setAddressModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(false);
    }

    const handleAddressModal = () => {
        setAddressModalOpen(false);
    }

    const router = useRouter();
    const {pathname, query, asPath} = router;

    useEffect(() => {
        if (!authState?.isAuthenticated) {
            router.push('/login?redirect_to=' + router.asPath);
        }
    }, [authState?.isAuthenticated]);

    let activeTab = 1;
    if (query.t) {
        activeTab = parseInt(String(query.t));
    }

    const nextStep = (step) => {
        router.push({pathname, query: 't=' + step});
    }
    console.log(itemsCart)
    return (
        <>
            {activeTab == 1 && <CheckoutMobileWrapper>
            <MobileModal isOpen={modalOpen} isCloseButton={false} onRequestClose={handleModal} children={<PaymentMethodSelection onRequestClose={handleModal} />}/>
            <MobileModal isOpen={modalAddressOpen} isCloseButton={false} onRequestClose={handleAddressModal} children={<AddressMobile onRequestClose={handleAddressModal} nextStep={nextStep} />}/>
            <CartMobileHeader>
                <div>
                    <ArrowLeft color="white"/>
                </div>
                <div className="header_title">
                    <span onClick={() => router.push('/cart')}><FormattedMessage id="mobile.cart.title" defaultMessage="確認訂單" /></span>
                </div>
            </CartMobileHeader>
            {
                itemsCart.map((store, idx) => (
                    store?.store_products?.map((product, idp) => (
                        <CartMobileProduct key={idp}>
                            <div className="product_detail">
                                <div className="product_description">
                                    <img
                                        src={product?.product?.thumbnail?.thumbnail || product.product.assets[0]?.thumbnail || product.product.assets[0]?.url || ""}
                                        alt=""/>
                                    <div className="description">
                                        <div className="product_name">
                                            {product.product?.title}
                                        </div>
                                        <div className="product_size">
                                            {
                                                product?.productAttribute?.variation?.map((variation, idx) => {
                                                    return <div
                                                        className="product-attribute"
                                                        key={idx}>{variation?.name}: {variation?.value}</div>
                                                })
                                            }
                                        </div>
                                        <div className="delivery_time">
                                            發貨時間: 付款後48小時内
                                        </div>
                                    </div>
                                    <div className="product_price">
                                        {product.product?.price?.formatted}
                                    </div>
                                </div>
                                <div className="purchase_quantity">
                                    <div className="pq_title">
                                        <FormattedMessage id="mobile.cart.purchaseQuantity" defaultMessage="Quantity" />
                                    </div>
                                    <ProductItemQuantity>
                                        <Counter
                                            className="quantity-counter"
                                            value={parseInt(product?.quantity)}
                                            onDecrement={() => removeItem(product)}
                                            onIncrement={() => addItem(product)}
                                            variant="lightHorizontal"
                                        />
                                    </ProductItemQuantity>
                                </div>
                                <div className="order_note">
                                    <div className="note_header">
                                        订单备注
                                    </div>
                                    <div className="note_detail">
                                        選填，請先和商家協商一致
                                    </div>
                                </div>
                                <div className="subtotal_price">
                                    共{parseInt(product?.quantity)}件 小计:
                                    <span>{product.total?.formatted}</span>
                                </div>
                            </div>
                            <DeliveryAddressWrapper>
                                <div className="address_header">
                                    鈡凱明 38974772
                                </div>
                                <div className="address_description">
                                    <div className="icon_div">
                                        <div className="location_icon">
                                            <LocationIcon color="white" width="30px" height="30px" />
                                        </div>
                                    </div>
                                    <div className="address_detail">
                                        广东省，广州市，白云区，钟落潭镇，大纲领中纲路自编668号，海景大樓，15樓，3室
                                    </div>
                                    <div className="see_detail" onClick={() => setAddressModalOpen(true)}>
                                        <ArrowRight />
                                    </div>
                                </div>
                            </DeliveryAddressWrapper>
                            <DeliveryMethodWrapper>
                                <div className="delivery_method_header">
                                    配送方式
                                </div>
                                <div className="delivery_method_description">
                                    商家至转运仓所需运费计算，请以下方店铺信息为准
                                </div>
                                <div className="delivery_plan">
                                    <div className="plan">
                                        <div className="plan_name">
                                            配送方案 1
                                        </div>
                                        <div className="plan_price">
                                            ￥9.70 起
                                        </div>
                                    </div>
                                    <div className="plan">
                                        <div className="plan_name">
                                            配送方案 2
                                        </div>
                                        <div className="plan_price">
                                            ￥6.00 起
                                        </div>
                                    </div>
                                </div>
                            </DeliveryMethodWrapper>
                            <PaymentMethodWrapper>
                                <div className="payment_method_header">
                                    <div className="title">
                                        支付方式
                                    </div>
                                    <div className="operation" onClick={() => setModalOpen(true)}>
                                        請選擇&nbsp;&nbsp;&nbsp;
                                        <span><ArrowRight /></span>
                                    </div>
                                </div>
                                <div className="payment_method_detail">
                                    支付明細
                                </div>
                                <div className="total_price">
                                    <div className="total_price_title">
                                        訂單總金額
                                    </div>
                                    <div className="price">
                                        {CURRENCY} {getPrice()}
                                    </div>
                                </div>
                            </PaymentMethodWrapper>
                        </CartMobileProduct>
                    ))
                ))
            }
            <div className="final_price_operation">
                <div className="description">
                    共3件 合計:&nbsp;
                    <span>{CURRENCY} {getPrice()}</span>
                </div>
                <div>
                    <button onClick={() => nextStep(2)}>
                        <FormattedMessage id="mobile.cart.purchase" defaultMessage="去支付" />
                    </button>
                </div>
            </div>
        </CheckoutMobileWrapper>}
            {activeTab == 2 && <CheckoutFinishedMobile />}
        </>
    );
};

export default CheckoutMobile;
