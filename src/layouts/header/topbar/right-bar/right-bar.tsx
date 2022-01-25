import React from 'react';
import dynamic from 'next/dynamic';
import NavLink from 'components/nav-link/nav-link';
import { TOPBAR_MENU_ITEMS } from 'site-settings/site-navigation';
import { RightBarBox, QRCodeView } from './right-bar.style';
import {QRCodeIcon} from 'assets/icons/QRCodeIcon';
const AuthTopbarMenu = dynamic(() => import('../auth-topbar-menu'), { ssr: false });

type Props = {
    isAuthenticated: boolean;
};

export const RightBar: React.FC<Props> = ({
                                               isAuthenticated,
                                           }) => {
    return (
        <RightBarBox>
            <AuthTopbarMenu
                isAuthenticated={isAuthenticated}
            />
            {TOPBAR_MENU_ITEMS.map((item, idx) => (
                <NavLink
                    key={idx}
                    className={`menu-item ${item.href === "/mobile_show"?"mobile_show":""}`}
                    href={item.href}
                    label={item.defaultMessage}
                    intlId={item.id}
                />
            ))}
            <QRCodeView className="qr-code-view">
                <QRCodeIcon />
            </QRCodeView>
        </RightBarBox>
    );
};
