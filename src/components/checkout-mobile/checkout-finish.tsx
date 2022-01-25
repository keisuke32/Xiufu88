import React, {useEffect, useState} from 'react';
import {CheckoutFinishedWrapper} from "./checkout-finish.style";
import {FormattedMessage} from "react-intl";
import {MoreIcon} from "../../assets/icons/MoreIcon";
import {ProductGridMobile} from "../product-grid/product-grid-mobile";
export const CheckoutFinishedMobile = () => {
    return (
        <CheckoutFinishedWrapper>
            <div className="final_header">
                <div className="final_header_title">
                    <FormattedMessage id="mobile.checkout.successful" defaultMessage="支付成功" />
                </div>
                <div className="more_menu">
                    <MoreIcon color="#828282"/>
                    <span><FormattedMessage id="more" defaultMessage="更多"/></span>
                </div>
            </div>
            <div className="order_detail">
                <div className="order_price">
                    ￥1320.70
                </div>
                <div className="order_operation">
                    <div className="check_order">
                        <FormattedMessage id="mobile.checkout.successful.check.order" defaultMessage="查看訂單" />
                    </div>
                    <div className="back_home">
                        <FormattedMessage id="mobile.checkout.successful.back.homepage" defaultMessage="返回首頁" />
                    </div>
                </div>
            </div>
            <div className="product_list">
                <div className="list_header">
                    <span>
                        <FormattedMessage id="payment.recommend" defaultMessage="猜你喜歡" />
                    </span>
                </div>
                <ProductGridMobile isFeatured={true} />
            </div>
        </CheckoutFinishedWrapper>
    );
};
