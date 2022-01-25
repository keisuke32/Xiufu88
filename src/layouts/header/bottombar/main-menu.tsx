import React from 'react';
import NavLink from 'components/nav-link/nav-link';
import { GetLiveIcon } from "assets/icons/GetLive";
import { ShopLiveIcon } from "assets/icons/ShopLive";
import { LiveProductIcon } from "assets/icons/LiveProduct";
import { WholesaleProductIcon } from "assets/icons/WholesaleProduct";
import { MainMenuBox, MainMenuItem } from "./bottombar.style";
import {
    LIVEPRODUCT_MENU_ITEM,
    SHOPLIVE_MENU_ITEM,
    GETLIVE_MENU_ITEM,
    WHOLESALEPRODUCT_MENU_ITEM
} from "site-settings/site-navigation";

const MainMenu: React.FC<{}> = () => {
    return (
        <MainMenuBox>
            <MainMenuItem>
                <NavLink
                    className="menu-item"
                    href={SHOPLIVE_MENU_ITEM.href}
                    label={SHOPLIVE_MENU_ITEM.defaultMessage}
                    intlId={SHOPLIVE_MENU_ITEM.id}
                    icon={<ShopLiveIcon />}
                />
            </MainMenuItem>
            <MainMenuItem>
                <NavLink
                    className="menu-item"
                    href={LIVEPRODUCT_MENU_ITEM.href}
                    label={LIVEPRODUCT_MENU_ITEM.defaultMessage}
                    intlId={LIVEPRODUCT_MENU_ITEM.id}
                    icon={<LiveProductIcon />}
                />
            </MainMenuItem>
            {/*<MainMenuItem>*/}
            {/*    <NavLink*/}
            {/*        className="menu-item"*/}
            {/*        href={WHOLESALEPRODUCT_MENU_ITEM.href}*/}
            {/*        label={WHOLESALEPRODUCT_MENU_ITEM.defaultMessage}*/}
            {/*        intlId={WHOLESALEPRODUCT_MENU_ITEM.id}*/}
            {/*        icon={<WholesaleProductIcon />}*/}
            {/*    />*/}
            {/*</MainMenuItem>*/}
            <MainMenuItem>
                <NavLink
                    className="menu-item"
                    href={GETLIVE_MENU_ITEM.href}
                    label={GETLIVE_MENU_ITEM.defaultMessage}
                    intlId={GETLIVE_MENU_ITEM.id}
                    icon={<GetLiveIcon />}
                />
            </MainMenuItem>
        </MainMenuBox>
    );
}

export default MainMenu;
