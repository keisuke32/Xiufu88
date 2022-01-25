import React, { Fragment } from "react";
import {FormattedMessage} from "react-intl";
import {ProductGrid} from "../product-grid/product-grid-two";
import {PAYSUCCESS} from "../../features/payment/payment.style";
import {OperationSuccess} from "../../assets/icons/OperationSuccess";
import {OperationFailed} from "../../assets/icons/OperationFailed";
import {useCart} from "../../contexts/cart/use-cart";
import {CURRENCY} from "../../utils/constant";

export const PaymentState = ({nextStep, status}) => {
    const {
        getPrice,
        getItems,
        setCart,
        cartLoading,
        setCartLoading
    } = useCart();

    const {itemsCart} = getItems(true);
    console.log(itemsCart);
    return (
        <PAYSUCCESS>
            <div className="pay-detail">
                <p className="total-price">
                    {status == 'success' ? <OperationSuccess/> : <OperationFailed /> }
                    &nbsp;
                    <label><FormattedMessage id='payment.success' defaultMessage='你已成功付款' /></label>&nbsp;
                    <span className="price">{CURRENCY} {getPrice()}</span>
                </p>
                {itemsCart.map((store, idx) => {
                    return store.store_products.map((product, ipx) => (
                        <Fragment key={idx}>
                            <p>
                                <label><FormattedMessage id='payment.shipto' defaultMessage='貨物寄送至' />: </label>
                                <span className="ship-to">
                                {product.deliveryAddress?.region?.name} {product.deliveryAddress?.city} {product.deliveryAddress?.street}
                                </span>
                                <span className="default-address">默認地址</span>
                            </p>
                            <p className="purchased-goods">
                                <label><FormattedMessage id='payment.products' defaultMessage='購買了商品' />: </label>
                                <span className="product-title">
                                {product.product.title}
                                </span>
                                <span className="order-detail"><FormattedMessage id='payment.order' defaultMessage='訂單詳情' /></span>
                            </p>
                            <p>
                                <label><FormattedMessage id='payment.contact' defaultMessage='聯係賣家' />: </label>
                                {product.product.seller.name}
                            </p>
                        </Fragment>
                    ))
                })}

            </div>
            <button type="button" className="btn btn-outline-danger" onClick={() => nextStep(3)}>
                <FormattedMessage id="order.next" defaultMessage="下一步"/>
            </button>
            <div className="favourite-goods">
                <div className="goods-header"><FormattedMessage id='payment.recommend' defaultMessage="猜你喜歡" /></div>
                <ProductGrid fetchLimit={12}/>
            </div>
        </PAYSUCCESS>
    );
}
