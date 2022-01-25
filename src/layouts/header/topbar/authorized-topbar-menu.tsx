import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavLink from 'components/nav-link/nav-link';
import { AUTHORIZED_TOPBAR_MENU_ITEMS } from 'site-settings/site-navigation';

export const AuthorizedTopbarMenu: React.FC = () => {
    return (
        <>
            {AUTHORIZED_TOPBAR_MENU_ITEMS.map((item, idx) => (
                <NavLink
                    key={idx}
                    className="menu-item"
                    href={item.href}
                    label={item.defaultMessage}
                    intlId={item.id}
                />
            ))}
        </>
    );
};
