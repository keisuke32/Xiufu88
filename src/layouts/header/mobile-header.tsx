import React from 'react';
import MobileDrawer from './mobile-drawer';
import {
    MobileHeaderWrapper,
    MobileHeaderInnerWrapper,
    MobileHeaderTop,
    MobileHeaderBottom,
    HeaderNavLinkWrap,
    SearchWrapper,
    UserSection,
    HeaderIconWrap,
    MobileHeaderNavigation,
    MobileHeaderMenu, UserAvatar
} from './header.style';
import Search from 'features/search/search';
import {ShoppingCartIcon} from "assets/icons/ShoppingCart";
import {FormattedMessage} from "react-intl";
import {ScanIcon} from "assets/icons/ScanIcon";

import {
    LIVEPRODUCT_MENU_ITEM,
    SHOPLIVE_MENU_ITEM,
    GETLIVE_MENU_ITEM,
    WHOLESALEPRODUCT_MENU_ITEM,
    PROFILE_MENU_ITEM
} from "site-settings/site-navigation";
import {MainMenuItem} from "./bottombar/bottombar.style";
import NavLink from "components/nav-link/nav-link";
import {ShopLiveIcon} from "assets/icons/ShopLive";
import {LiveProductIcon} from "assets/icons/LiveProduct";
import {WholesaleProductIcon} from "assets/icons/WholesaleProduct";
import {GetLiveIcon} from "assets/icons/GetLive";
import {UserAvatarIcon} from "assets/icons/UserAvatar";
import {useAppState} from '../../contexts/app/app.provider'
import ShopliveTab from './shoplive/shoplivetab'
import ShopliveCategory from './shoplive/shoplivecategories'
import {UserImage} from "../../assets/icons/UserImage";
import {LocationWhite} from "../../assets/icons/Location";
import {Button} from "../../components/button/button";
import {LiveProductCategoryList} from "../../components/liveproduct/liveproduct.style";
import {Link} from 'react-scroll'

type MobileHeaderProps = {
    className?: string;
    closeSearch?: any;
    livestream?:any,
    liveproduct?:any,
    enableheader?:any
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className,livestream=false, liveproduct={show: false, themes: null, activeCategory: null, setActiveCategory: null}}) => {

    const livebroadcast = useAppState('type')
    const stream = useAppState('stream')
    if(livebroadcast || stream)
    {
        return null;
    }

    return (
        <MobileHeaderWrapper style={livestream ?{padding:'82px'}:{}}>
            <MobileHeaderInnerWrapper className={className}>
                <MobileHeaderTop>
                    <HeaderIconWrap>
                        <ScanIcon width={20} height={20} />
                        <span><FormattedMessage id="mobile-header.scan" defaultMessage="扫一扫" /></span>
                    </HeaderIconWrap>
                    <SearchWrapper
                        className='searchIconWrapper'
                    >
                        <Search
                            className='header-modal-search'
                            showButtonText={false}
                            minimal={true}
                        />
                    </SearchWrapper>
                    <UserSection>
                        <HeaderIconWrap>
                            <LocationWhite width="20px" height="20px" />
                            <NavLink
                                href="/news"
                                label="消息"
                                intlId="mobile-header.news"
                            />
                        </HeaderIconWrap>
                        <HeaderIconWrap>
                            <UserImage width="20px" height="20px" />
                            <NavLink
                                href="/profile"
                                label="我的"
                                intlId="mobile-header.myaccount"
                            />
                        </HeaderIconWrap>
                        <HeaderIconWrap>
                            <ShoppingCartIcon iconID="smallIcon" width={20} height={20} />
                            <NavLink
                                href="/cart"
                                label="购物车"
                                intlId="mobile-header.cart"
                            />
                        </HeaderIconWrap>
                    </UserSection>
                </MobileHeaderTop>
                {
                    livestream && (
                        <MobileHeaderBottom>
                            <ShopliveTab active="livebroadcast"/>
                        </MobileHeaderBottom>
                    )
                }
                <MobileHeaderBottom>
                    {
                        livestream ? (
                            <ShopliveCategory activeitem=""/>
                        ):<HeaderNavLinkWrap/>
                    }
                    {
                        liveproduct.show ? (
                            <LiveProductCategoryList>
                                {
                                    liveproduct.themes?.map((item, idx)=>(
                                        <li key={idx} className={liveproduct.activeCategory == item.id?"active":""}>
                                            <Link
                                                activeClass="active"
                                                to={item.id}
                                                spy={true}
                                                smooth={true}
                                                offset={-130}
                                                duration={500}
                                                onClick={() => liveproduct.setActiveCategory(item.id)}
                                                onSetActive={() => liveproduct.setActiveCategory(item.id)}
                                            >{item.name}</Link>
                                        </li>
                                    ))
                                }
                            </LiveProductCategoryList>
                        ):<HeaderNavLinkWrap/>
                    }
                    <MobileDrawer />
                </MobileHeaderBottom>
            </MobileHeaderInnerWrapper>
            <MobileHeaderNavigation>
                <MobileHeaderMenu>
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
                    <MainMenuItem>
                        <NavLink
                            className="menu-item"
                            href={PROFILE_MENU_ITEM.href}
                            label={PROFILE_MENU_ITEM.defaultMessage}
                            intlId={PROFILE_MENU_ITEM.id}
                            icon={<UserAvatarIcon width="28" height="28" />}
                        />
                    </MainMenuItem>
                </MobileHeaderMenu>
            </MobileHeaderNavigation>
        </MobileHeaderWrapper>
    );
};

export default MobileHeader;
