import React from 'react';
import Router, { useRouter } from 'next/router';
import {FormattedMessage} from "react-intl";
import { AuthContext } from 'contexts/auth/auth.context';
import NavLink from "../../../components/nav-link/nav-link";

import BotFooterWrapper from './bot-footer.style';

import {
    SHOPPING_GUIDE_MENU_ITEM,
    XIUFU_GUARANTEE_MENU_ITEM,
    PAYMENT_METHOD_MENU_ITEM,
    SELLER_SERVICE_MENU_ITEM,
    BOT_FOOTER_NAV_ITEMS,
    BOT_FOOTER_TEXT,
    USER_GUIDE_MENU_ITEM,
    FAIRVIEW_POLICY_MENU_ITEM,
    PAYMENT_LOGISTICS_MENU_ITEM,
    MERCHANT_SERVICE_MENU_ITEM,
    AFTER_SALE_MENU_ITEM,
    BUSINESS_COOPERATION_MENU_ITEM,
    MALL_NEWS_MENU_ITEM,
    BOTTOM_FOOTER_NAVIGATIONS_ITEMS
} from "site-settings/site-navigation";
import {
    BotFooterNavigationOne,
    BotFooterNavigationOneItem,
    BotFooterNavigationTwo,
    BotFooterNavigationTwoWrapper,
    BotFooterNavigationTwoItem
} from './bot-footer.style';

import FooterLogo from 'assets/images/logos/footer-logo.png';

type Props = {
    className?: string;
};

const BotFooter: React.FC<Props> = ({ className }) => {
    return (
        <BotFooterWrapper className={className} id="layout-header">
            <BotFooterNavigationOne>
                {BOTTOM_FOOTER_NAVIGATIONS_ITEMS.map((items, idx) => (
                    <BotFooterNavigationOneItem key={idx}>
                        <h5>
                            <NavLink
                                key={idx}
                                className="menu-header"
                                href={items.href}
                                label={items.defaultMessage}
                                intlId={items.id}
                            />
                        </h5>
                        {items.children.map((item, idx) => (
                            <NavLink
                                key={idx}
                                className="menu-item"
                                href={item.href}
                                label={item.defaultMessage}
                                intlId={item.id}
                            />
                        ))}
                    </BotFooterNavigationOneItem>)
                )}

            </BotFooterNavigationOne>

            <BotFooterNavigationTwo>
                <BotFooterNavigationTwoWrapper>
                {BOT_FOOTER_NAV_ITEMS.map((item, idx) => (
                    <NavLink
                        key={idx}
                        className="menu-item"
                        href={item.href}
                        label={item.defaultMessage}
                        intlId={item.id}
                    />
                ))}
                </BotFooterNavigationTwoWrapper>
                {BOT_FOOTER_TEXT.map((item, idx) => (
                    <BotFooterNavigationTwoItem key={idx}>
                        <FormattedMessage
                            id={item.id}
                            defaultMessage={item.defaultMessage}
                            values={item.values}
                        />
                    </BotFooterNavigationTwoItem>
                ))}
                <BotFooterNavigationTwoItem>
                    <img src={FooterLogo} alt=""/>
                </BotFooterNavigationTwoItem>
            </BotFooterNavigationTwo>
        </BotFooterWrapper>
    );
};

export default BotFooter;
