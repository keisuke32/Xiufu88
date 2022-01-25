import React, {useEffect, useState} from 'react';
import {PaymentMethodSelectionWrapper} from "./payment-method-selection.style";
import {FormattedMessage} from "react-intl";
import ChinaBank from "../../assets/images/china-bank.png";
import VisaBank from "../../assets/images/visa.png";
import AliPayBank from "../../assets/images/alipay.png";
import PaypalBank from "../../assets/images/paypal.png";
import StripeBank from "../../assets/images/stripe.png";
import {ArrowRight} from "../../assets/icons/ArrowRight";
import {CheckIcon} from "../../assets/icons/Check";
import {CloseButton} from "../product-details/product-mobile/product-mobile.style";

export const PaymentMethodSelection = ({onRequestClose}) => {
    return (
        <PaymentMethodSelectionWrapper>
            <CloseButton>
                <button
                    type='button'
                    onClick={onRequestClose}
                >
                    &#x2715;
                </button>
            </CloseButton>
            <div className="method_header">
                <FormattedMessage id="mobile.cart.payment.method.selection.title" defaultMessage="付款方式选择" />
            </div>
            <div className="method_content">
                <div className="method">
                    <div className="payment_icon">
                        <img src={ChinaBank} alt=""/>
                    </div>
                    <div className="card_number">
                        587 **** 986
                    </div>
                    <div className="selection_icon">
                        <span>
                            <CheckIcon width="12px" height="12px"/>
                        </span>
                    </div>
                </div>
                <div className="method">
                    <div className="payment_icon">
                        <img src={VisaBank} alt=""/>
                    </div>
                    <div className="card_number">
                        8627 75** ****  5641
                    </div>
                    <div className="selection_icon">

                    </div>
                </div>
                <div className="method">
                    <div className="payment_icon">
                        <span className="add_payment">
                            +
                        </span>
                    </div>
                    <div className="card_number">
                        使用新的 信用卡 / 銀行卡
                    </div>
                    <div className="selection_icon">
                        <ArrowRight />
                    </div>
                </div>
                <div className="method">
                    <div className="payment_icon">
                        <img src={AliPayBank} alt=""/>
                    </div>
                    <div className="card_number">
                        餘額
                    </div>
                    <div className="selection_icon">

                    </div>
                </div>
                <div className="method">
                    <div className="payment_icon">
                        <img src={PaypalBank} alt=""/>
                    </div>
                    <div className="card_number">
                        587 **** 986
                    </div>
                    <div className="selection_icon">

                    </div>
                </div>
                <div className="method">
                    <div className="payment_icon">
                        <img src={StripeBank} alt=""/>
                    </div>
                    <div className="card_number">
                        587 **** 986
                    </div>
                    <div className="selection_icon">

                    </div>
                </div>
            </div>
        </PaymentMethodSelectionWrapper>
    );
};
