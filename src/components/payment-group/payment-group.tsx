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
                        <div className="total-price">支付 CNY <span className="payment-price">2268.42</span></div>
                        <div className="service">含服務費 CNY <span className="service-price">4.92</span>
                            <div className="rule">
                                <a>交易細則</a>
                                <div className="payment-rule-info">
                                    <p>服務費 = 訂單金額 x 3.0%</p>
                                    <p>完成退款申請後，買家將會收到退款，如何收款視乎買家的支付方式。使用信用卡支付的買家，該筆款項將會在支付寶帳戶被凍結，信用卡公司會於大約七個工作天後退回有關款項於買家的信用卡中。</p>
                                    <p>爲什麽要支付服務費？
                                        服務費是平臺爲了維持日常交易服務收取的費用。</p>
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
                            <label htmlFor="expiration-date-input">有效期 <span>Expiration Date</span></label>
                            <div className="expiration-date">
                                <input type="month" id="expiration-date-input" name="expiration-date-input"/>
                            </div>
                            <label htmlFor="security-code-input">安全碼 <span>Security Code</span></label>
                            <div className="security-code">
                                <input type="text" id="security-code-input" className="security-code-input"/>
                            </div>
                            <label htmlFor="">賬單地址 <span>Billing Address</span></label>
                            <div className="billing-address">
                                <span>中国 广东省 广州市 嘉禾街道嘉禾望岗上胜东街上胜工业区7号楼3楼B室</span>
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
                    <FormattedMessage id="payment.confirm-button" defaultMessage="確定"/>
                </button>
            </PaymentConfirmButton>
        </PaymentGroupContainer>
    );
};

export default PaymentGroup;
