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
                    <span onClick={() => router.push('/cart')}><FormattedMessage id="mobile.cart.title" defaultMessage="????????????" /></span>
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
                                            ????????????: ?????????48?????????
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
                                        ????????????
                                    </div>
                                    <div className="note_detail">
                                        ????????????????????????????????????
                                    </div>
                                </div>
                                <div className="subtotal_price">
                                    ???{parseInt(product?.quantity)}??? ??????:
                                    <span>{product.total?.formatted}</span>
                                </div>
                            </div>
                            <DeliveryAddressWrapper>
                                <div className="address_header">
                                    ????????? 38974772
                                </div>
                                <div className="address_description">
                                    <div className="icon_div">
                                        <div className="location_icon">
                                            <LocationIcon color="white" width="30px" height="30px" />
                                        </div>
                                    </div>
                                    <div className="address_detail">
                                        ???????????????????????????????????????????????????????????????????????????668?????????????????????15??????3???
                                    </div>
                                    <div className="see_detail" onClick={() => setAddressModalOpen(true)}>
                                        <ArrowRight />
                                    </div>
                                </div>
                            </DeliveryAddressWrapper>
                            <DeliveryMethodWrapper>
                                <div className="delivery_method_header">
                                    ????????????
                                </div>
                                <div className="delivery_method_description">
                                    ?????????????????????????????????????????????????????????????????????
                                </div>
                                <div className="delivery_plan">
                                    <div className="plan">
                                        <div className="plan_name">
                                            ???????????? 1
                                        </div>
                                        <div className="plan_price">
                                            ???9.70 ???
                                        </div>
                                    </div>
                                    <div className="plan">
                                        <div className="plan_name">
                                            ???????????? 2
                                        </div>
                                        <div className="plan_price">
                                            ???6.00 ???
                                        </div>
                                    </div>
                                </div>
                            </DeliveryMethodWrapper>
                            <PaymentMethodWrapper>
                                <div className="payment_method_header">
                                    <div className="title">
                                        ????????????
                                    </div>
                                    <div className="operation" onClick={() => setModalOpen(true)}>
                                        ?????????&nbsp;&nbsp;&nbsp;
                                        <span><ArrowRight /></span>
                                    </div>
                                </div>
                                <div className="payment_method_detail">
                                    ????????????
                                </div>
                                <div className="total_price">
                                    <div className="total_price_title">
                                        ???????????????
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
                    ???3??? ??????:&nbsp;
                    <span>{CURRENCY} {getPrice()}</span>
                </div>
                <div>
                    <button onClick={() => nextStep(2)}>
                        <FormattedMessage id="mobile.cart.purchase" defaultMessage="?????????" />
                    </button>
                </div>
            </div>
        </CheckoutMobileWrapper>}
            {activeTab == 2 && <CheckoutFinishedMobile />}
        </>
    );
};

export default CheckoutMobile;
