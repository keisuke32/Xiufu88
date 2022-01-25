import React, {useEffect, useState} from 'react';
import {FormattedMessage} from "react-intl";
import {ProductMoreMenuMobileWrapper} from "./product-more-menu.style";
import {Alarm} from "../../../assets/icons/Alarm";
import {Home} from "../../../assets/icons/Home";
import {Receiver} from "../../../assets/icons/Receiver";
import {Warning} from "../../../assets/icons/Warning";

export const ProductMoreMenuMobile = ({onRequestClose}) => {
    return (
        <ProductMoreMenuMobileWrapper>
            <div className="more_title">
                <FormattedMessage id="mobile.product.detail.more.menu.title" defaultMessage="功能捷徑" />
            </div>
            <div className="more_menu">
                <div className="menu_content">
                    <Alarm color="white"/>
                    <div className="menu_title">
                        <FormattedMessage id="mobile-header.news" defaultMessage="消息" />
                    </div>
                </div>
                <div className="menu_content">
                    <Home />
                    <div className="menu_title">
                        <FormattedMessage id="nav.home.footer" defaultMessage="首页" />
                    </div>
                </div>
                <div className="menu_content">
                    <Receiver />
                    <div className="menu_title">
                        <FormattedMessage id="mobile.product.detail.more.menu.service" defaultMessage="客服" />
                    </div>
                </div>
                <div className="menu_content">
                    <Warning />
                    <div className="menu_title">
                        <FormattedMessage id="nav.feedback" defaultMessage="反馈" />
                    </div>
                </div>
            </div>
        </ProductMoreMenuMobileWrapper>
    );
};