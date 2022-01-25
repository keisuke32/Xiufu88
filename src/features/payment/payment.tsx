import React, {useEffect, useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {useCart} from 'contexts/cart/use-cart';
import {CURRENCY} from "../../utils/constant";
import {ProductGrid} from "../../components/product-grid/product-grid-two";
import {OperationSuccess} from "../../assets/icons/OperationSuccess";
import {checkout, getItemsFromCart, paymentTransactionProcessed} from "../../data/use-checkout";
import {AuthContext} from "../../contexts/auth/auth.context";
import {useRouter} from "next/router";

import PageLoader from "../../components/loader/page-loader";

import {
    PaymentBox, PaymentConfirmButton,
    PaymentGroupBox, PaymentGroupContainer,
    PaymentGroupTitle,
    PaymentItem
} from "../../components/payment-group/payment-group.style";

import PayPal from "../../components/payment-steps/paypal";
import StripePaymentForm from '../../components/payment-steps/stripe-form';
import Alipay from "../../components/payment-steps/alipay";

import {
    CardHeader,
    PaymentHead,
    OrderDetailWrapper,
    OrderDetailItem,
    PaymentTool,
    PaymentGroupWrapper,
} from './payment.style';

import {PaymentState} from "../../components/payment-steps/payment-result";
import ErrorMessage from "../../components/error-message/error-message";
import {paymentGateways} from "../../site-settings/site-constant";

interface Props {
    deviceType: any;
    increment?: boolean;
    token?: string;
    nextStep?: any;
}

const Payment = ({deviceType, token, increment = false, nextStep}: Props) => {

    const [paymentGateway, setPaymentGateway] = useState(null);
    const [paymentStep, setPaymentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [paymentError, setPaymentError] = useState('');
    const [stripeSecretClient, setStripeSecretClient] = useState('');
    const [stripePubKey, setStripePubKey] = useState('');

    const {authState} = React.useContext<any>(AuthContext);

    const app_url = process.env.NEXT_PUBLIC_APP_URL || "https://xiufu88.com";

    const {
        getPrice,
        getItems,
        setCart,
        cartLoading,
        setCartLoading

    } = useCart();

    const router = useRouter();

    useEffect(() => {
        if (router.query.p) {
            setPaymentGateway(router.query.p);
            if (router.query.paymentId || router.query.p == 'UnionPay') {
                setPaymentStep(3);
            } else {
                setPaymentStep(4);
            }
        }
    }, [router.query]);

    useEffect(() => {
        if(paymentStep == 3){
            // paymentTransactionProcessed({token})
        }
    }, [paymentStep]);

    const {itemsCart} = getItems(true);

    const orderDetail = itemsCart.map((store, idx) => (
        !cartLoading ?
            <OrderDetailItem key={idx}>
                <div className="seller-name"><FormattedMessage id="cart.product.list.seller"
                                                               defaultMessage="Seller"/> : {store.store_name}</div>
                <div className="product-list">
                    {
                        store.store_products.map((product, ipx) => (
                            <div className="product-name" key={ipx}>
                                {product.product.title}
                            </div>
                        ))
                    }
                </div>
            </OrderDetailItem>
            :
            <PageLoader/>
    ))

    const getPaymentGatewayPage = () => {
        if (loading)
            return <PayPal/>
        if(paymentError)
            return <ErrorMessage message={paymentError} />
        switch (paymentGateway) {
            case 'PayPal':
            case 'UnionPay':
                return <PayPal/>
            case 'Stripe':
                return <StripePaymentForm
                    stripeSecretClient={stripeSecretClient}
                    stripePubKey={stripePubKey}
                    nextStep={setPaymentStep}
                />
            case 'Alipay':
                return <Alipay/>
        }
    }

    const processPaymentGateway = () => {
        if(itemsCart && itemsCart.length > 0) {
            setLoading(true);
            setPaymentStep(2);
            checkout({
                currency: 'USD',
                provider: paymentGateway,
                redirectSuccess: app_url + '/checkout?t=2&p=' + paymentGateway,
                redirectFailed: app_url + router.asPath,
                token: authState?.token
            }).then(data => {
                if (data.state == 'success') {
                    switch (paymentGateway) {
                        case "PayPal":
                            if (data.res?.paymentClientSecret) {
                                router.push(data.res?.paymentClientSecret);
                            }
                            break;
                        case "Stripe":
                            if (data.res?.paymentClientSecret && data?.res?.publishableKey) {
                                setStripeSecretClient(data.res.paymentClientSecret);
                                setStripePubKey(data.res.publishableKey);
                            }
                            break;
                        case "Alipay":
                            break;
                        case 'UnionPay':
                            if (data.res?.paymentClientSecret) {
                                router.push(data.res?.paymentClientSecret);
                            }

                            break;
                        default:
                            break;
                    }
                    setLoading(false);
                } else {
                    setLoading(false);
                    setPaymentError(data.res.message);
                }
            }).catch(error => {
                setLoading(false);
                setPaymentError(error.message);
            })
        }
    }

    return (
        <>
            {(paymentStep == 1 || paymentStep == 2) &&
            (
                <>
                    <CardHeader>
                        <PaymentHead>
                            <FormattedMessage
                                id="payment.order-detail"
                                defaultMessage="訂單詳情"
                            />
                        </PaymentHead>
                        <OrderDetailWrapper>
                            {orderDetail}
                            <div className="total-price">
                                {CURRENCY} {getPrice()}
                            </div>
                        </OrderDetailWrapper>
                    </CardHeader>
                    <PaymentGroupWrapper>
                        <PaymentHead>
                            <FormattedMessage
                                id="payment.payment-list"
                                defaultMessage="支付訂單"
                            />
                        </PaymentHead>
                        <PaymentTool>
                            <span><FormattedMessage id="payment.note" defaultMessage="你可選擇以下的付款方式"/></span>
                            <a className="how-to-pay"><FormattedMessage id="payment.payment-method.question"
                                                                        defaultMessage="如何付款？"/></a>
                        </PaymentTool>
                        {paymentStep == 1 ? (
                            <PaymentGroupContainer>
                                {
                                    paymentGateways.map((paymentGroup, idx) => (
                                        <PaymentGroupBox key={idx}>
                                            <PaymentGroupTitle>
                                                {paymentGroup.group_name}
                                            </PaymentGroupTitle>
                                            <PaymentBox>
                                                {
                                                    paymentGroup.payments.map((payment, ipx) => (
                                                        <PaymentItem key={ipx}>
                                                            <div className="custom-control custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    id={"payment-" + paymentGroup.group_id + "-" + payment.payment_id}
                                                                    name={"payment-group"}
                                                                    className="custom-control-input"
                                                                    checked={paymentGateway == payment.payment_name}
                                                                    onChange={() => setPaymentGateway(payment.payment_name)}
                                                                />
                                                                <label className="custom-control-label"
                                                                       htmlFor={"payment-" + paymentGroup.group_id + "-" + payment.payment_id}>
                                                                    <img src={payment.payment_image}
                                                                         alt={payment.payment_name}/>
                                                                </label>
                                                            </div>
                                                        </PaymentItem>
                                                    ))
                                                }
                                            </PaymentBox>
                                        </PaymentGroupBox>
                                    ))
                                }
                                <PaymentConfirmButton>
                                    <button type="button" className="btn btn-outline-secondary" disabled={!paymentGateway}
                                            onClick={processPaymentGateway}>
                                        <FormattedMessage id="payment.confirm-button" defaultMessage="確定"/>
                                    </button>
                                </PaymentConfirmButton>
                            </PaymentGroupContainer>
                        ) : (
                            getPaymentGatewayPage()
                        )
                        }
                    </PaymentGroupWrapper>
                    <div className="d-flex flex-row-reverse pt-4">
                        {
                            paymentGateway ? (
                                <button type="button" className="btn btn-outline-secondary" disabled>
                                    <FormattedMessage id="order.next" defaultMessage="下一步"/>
                                </button>
                            ) : (
                                <button type="button" className="btn btn-outline-danger"
                                        onClick={() => setPaymentStep(1)}>
                                    <FormattedMessage id="order.next" defaultMessage="下一步"/>
                                </button>
                            )
                        }
                        {
                            paymentGateway && paymentStep == 2 && (
                                <button className="btn btn-outline-primary mr-1"
                                        onClick={() => setPaymentStep(1)}>
                                    <FormattedMessage id="payment.prev-payment" defaultMessage="返回選擇付款方式"/>
                                </button>
                            )
                        }
                    </div>
                </>
            )}

            {paymentStep == 3 && <PaymentState status="success" nextStep={nextStep} />}
            {paymentStep == 4 && <PaymentState status="failed" nextStep={nextStep} />}
        </>
    );
};

export default Payment;
