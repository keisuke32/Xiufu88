import React, {useEffect, useState} from 'react';
import {FormattedMessage} from 'react-intl';

import {
    PaymentGroupContainer,
    PaymentGroupBox,
    PaymentGroupTitle,
    PaymentBox,
    PaymentItem,
    PaymentConfirmButton,
    PaymentContent,
    PaymentForm,
    PaymentInformation,
    PaymentDetail,

} from './payment-group.style';
import {loadStripe} from "@stripe/stripe-js";
import {CardElement, Elements} from "@stripe/react-stripe-js";

interface PaymentCardType {
    id: number | string;
    type: string;
    lastFourDigit: string;
    name: string;
}

interface PaymentOptionType {
    showCard?: boolean;
    addedCard?: PaymentCardType[];
    mobileWallet?: boolean;
    cashOnDelivery?: boolean;
}

interface PaymentGroupProps {
    id?: any;
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    name: string;
    disabled?: boolean;
    label?: string;
    className?: string;
    value?: string;
    onChangeCard?: Function;
    items: any;
    onConfirmCard?: any;
    handleAddNewCard?: any;
    confirmCard: any;
    currentCard: any;
    stripeSecretClient?: any;
    stripePubKey?: any;
}

const PaymentGroup: React.FunctionComponent<PaymentGroupProps> = (
    {
        items,
        deviceType,
        className,
        name,
        onChangeCard,
        onConfirmCard,
        handleAddNewCard,
        confirmCard,
        currentCard,
        stripeSecretClient,
        stripePubKey
    }) => {
    // RadioGroup State

    const [stripePromise, setStripePromise] = useState(null);
    // Handle onChange Func
    const handleChangeCard = (item: any) => {
        onChangeCard(item);
    };

    const CARD_OPTIONS = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };

    useEffect(() => {
        if(stripePubKey != '') {
            const stripe = loadStripe(stripePubKey);
            setStripePromise(stripe);
        }
    }, [stripeSecretClient])

    if (confirmCard && currentCard)
        return (
            <PaymentGroupContainer>
                <PaymentContent>
                    <PaymentItem>
                        <div className="custom-control custom-radio custom-control-inline d-flex align-items-center">
                            <input type="radio" id={"payment-" + currentCard.payment_id} name={"payment-group"}
                                   className="custom-control-input" defaultChecked/>
                            <label className="custom-control-label" htmlFor={"payment-" + currentCard.payment_id}>
                                <img src={currentCard.payment_image} alt={currentCard.payment_name}/>
                            </label>
                        </div>
                    </PaymentItem>
                    <PaymentInformation>
                        <span>{"**3316"}</span>
                        <span>{"Credit Card"}</span>
                    </PaymentInformation>
                    <PaymentDetail>
                        <div className="total-price">?????? CNY <span className="payment-price">2268.42</span></div>
                        <div className="service">???????????? CNY <span className="service-price">4.92</span>
                            <div className="rule">
                                <a>????????????</a>
                                <div className="payment-rule-info">
                                    <p>????????? = ???????????? x 3.0%</p>
                                    <p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                    <p>??????????????????????????????
                                        ??????????????????????????????????????????????????????????????????</p>
                                </div>
                            </div>
                        </div>
                    </PaymentDetail>
                </PaymentContent>
                <PaymentForm>
                    {currentCard?.payment_name == 'Stripe' ?
                        (<Elements stripe={stripePromise}>
                            <CardElement options={CARD_OPTIONS}
                            />
                        </Elements>) :
                        (<>
                            <label htmlFor="expiration-date-input">????????? <span>Expiration Date</span></label>
                            <div className="expiration-date">
                                <input type="month" id="expiration-date-input" name="expiration-date-input"/>
                            </div>
                            <label htmlFor="security-code-input">????????? <span>Security Code</span></label>
                            <div className="security-code">
                                <input type="text" id="security-code-input" className="security-code-input"/>
                            </div>
                            <label htmlFor="">???????????? <span>Billing Address</span></label>
                            <div className="billing-address">
                                <span>?????? ????????? ????????? ???????????????????????????????????????????????????7??????3???B???</span>
                            </div>
                        </>)}
                </PaymentForm>
            </PaymentGroupContainer>
        );
    return (
        <PaymentGroupContainer>
            {
                items.map((paymentGroup, idx) => (
                    <PaymentGroupBox key={idx}>
                        <PaymentGroupTitle>
                            {paymentGroup.group_name}
                        </PaymentGroupTitle>
                        <PaymentBox>
                            {
                                paymentGroup.payments.map((payment, ipx) => (
                                    <PaymentItem key={ipx}>
                                        <div className="custom-control custom-radio">
                                            <input type="radio"
                                                   id={"payment-" + paymentGroup.group_id + "-" + payment.payment_id}
                                                   name={"payment-group"} className="custom-control-input"
                                                   onChange={() => handleChangeCard(payment)}/>
                                            <label className="custom-control-label"
                                                   htmlFor={"payment-" + paymentGroup.group_id + "-" + payment.payment_id}>
                                                <img src={payment.payment_image} alt={payment.payment_name}/>
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
                <button type="button" className="btn btn-outline-secondary" onClick={onConfirmCard}>
                    <FormattedMessage id="payment.confirm-button" defaultMessage="??????"/>
                </button>
            </PaymentConfirmButton>
        </PaymentGroupContainer>
    );
};

export default PaymentGroup;
