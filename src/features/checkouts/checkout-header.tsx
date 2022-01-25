import React from 'react';
import { useRouter } from 'next/router';
import {
    CheckoutHeaderWrapper,
} from './checkout-feature/checkout-feature.style';

import NavLink from "../../components/nav-link/nav-link";
import {FormattedMessage} from "react-intl";

type CheckoutHeaderProps = {
    activeTab?: number;
}

const CheckoutHeader: React.FC<CheckoutHeaderProps> = ({activeTab}) => {

    const {pathname} = useRouter();

    return (
        <CheckoutHeaderWrapper>
            <ul>
                <li className={activeTab > 0 && "active"}>
                    <span className="checkout-step-number">1</span>
                    <span><FormattedMessage id="checkout.header.check" defaultMessage="查看購物車" /></span>
                </li>
                <li className={activeTab > 1?"active":""} >
                    <span className="checkout-step-mark"></span>
                    <span className="checkout-step-number">2</span>
                    <span><FormattedMessage id="checkout.header.payment" defaultMessage="付款" /></span>
                </li>
                <li className={activeTab > 2?"active":""} >
                    <span className="checkout-step-mark"></span>
                    <span className="checkout-step-number">3</span>
                    <span><FormattedMessage id="checkout.header.receipt" defaultMessage="確認收貨" /></span>
                </li>
                <li className={activeTab > 3?"active":""} >
                    <span className="checkout-step-mark"></span>
                    <span className="checkout-step-number">4</span>
                    <span><FormattedMessage id="checkout.header.evaluation" defaultMessage="評價" /></span>
                </li>
            </ul>
        </CheckoutHeaderWrapper>
    );
};

export default CheckoutHeader;
