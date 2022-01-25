import React from 'react';
import NavLink from 'components/nav-link/nav-link';
import LocationSwitcher from '../location-switcher/location-switcher';
import { LeftBarBox } from './left-bar.style';
import {PROFILE_MENU_ITEM} from "site-settings/site-navigation";

type Props = {
    isAuthenticated: boolean;
};

export const LeftBar: React.FC<Props> = ({
                                             isAuthenticated,
                                         }) => {

    return (

        <LeftBarBox>
            <LocationSwitcher />
            {isAuthenticated && <NavLink className="menu-item" href={PROFILE_MENU_ITEM.href} label={PROFILE_MENU_ITEM.defaultMessage} intlId={PROFILE_MENU_ITEM.id} />}
        </LeftBarBox>
    );
};
