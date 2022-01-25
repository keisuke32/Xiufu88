import React, {useContext, useState} from 'react';
import Router from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import {
  SidebarWrapper,
  SidebarTab,
  TabHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuTitle,
  SidebarChildContent,
  LogoutButton,
} from './sidebar.style';
import { FormattedMessage } from 'react-intl';
import {
  BUYER_PROFILE_MENU_ITEMS,
  SELLER_PROFILE_MENU_ITEMS, SHOPLIVE_MENU_ITEM,
} from 'site-settings/site-navigation';

type SidebarCategoryProps = {
  handleSelectTab?: any;
  handleSelectMenu?: any;
  activeTab?: string;
  activeMenu?: string;
}
const SidebarCategory: React.FC<SidebarCategoryProps> = ({handleSelectTab, handleSelectMenu, activeTab, activeMenu}) => {
  const { authDispatch } = useContext<any>(AuthContext);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('phone');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };
  return (
      <SidebarWrapper>
        <SidebarTab>
          <TabHeader className={activeTab == 'buyer' && "active"} onClick={(e) => handleSelectTab('buyer')}>
            <span><FormattedMessage id="profile.buyer" defaultMessage="Buyer" /></span>
          </TabHeader>
          <TabHeader className={activeTab == 'seller' && "active"} onClick={(e) => handleSelectTab('seller')}>
            <span><FormattedMessage id="profile.seller" defaultMessage="Seller" /></span>
          </TabHeader>
        </SidebarTab>

        <SidebarContent>
          <SidebarMenuTitle>
            <FormattedMessage id="profile.all-functions" defaultMessage="All Functions" />
          </SidebarMenuTitle>
          {activeTab == 'buyer' && BUYER_PROFILE_MENU_ITEMS.map((item, index) => (
              <SidebarMenu key={index}>
                <div className="menu-item">
                  <a className={activeMenu.includes(item.id)?"current-page":""} onClick={(e)=>handleSelectMenu(item.id)}><FormattedMessage id={item.id} defaultMessage={item.defaultMessage} /></a>
                </div>
                {
                  (activeMenu.includes(item.id)) &&
                  <SidebarChildContent>
                  {
                    item.children.map((child_item, idx) => (
                        <SidebarMenu key={idx}>
                          <div className="menu-item">
                            <a className={activeMenu.includes(child_item.id)?"current-page":""} onClick={(e)=>handleSelectMenu(item.id + "_" + child_item.id)}><FormattedMessage id={child_item.id} defaultMessage={child_item.defaultMessage} /></a>
                          </div>
                        </SidebarMenu>
                    ))
                  }
                  </SidebarChildContent>
                }
              </SidebarMenu>
          ))}
          {activeTab == 'seller' && SELLER_PROFILE_MENU_ITEMS.map((item, index) => (
              <SidebarMenu key={index}>
                <div className="menu-item">
                  <a className={activeMenu.includes(item.id)?"current-page":""} onClick={(e)=>handleSelectMenu(item.id)}><FormattedMessage id={item.id} defaultMessage={item.defaultMessage} /></a>
                </div>
                {
                  (activeMenu.includes(item.id)) &&
                  <SidebarChildContent>
                    {
                      item.children.map((child_item, idx) => (
                          <SidebarMenu key={idx}>
                            <div className="menu-item">
                              <a className={activeMenu.includes(child_item.id)?"current-page":""} onClick={(e)=>handleSelectMenu(item.id + "_" + child_item.id)}><FormattedMessage id={child_item.id} defaultMessage={child_item.defaultMessage} /></a>
                            </div>
                          </SidebarMenu>
                      ))
                    }
                  </SidebarChildContent>
                }
              </SidebarMenu>
          ))}
          <LogoutButton type="button" onClick={handleLogout}>
            <FormattedMessage id="nav.logout" defaultMessage="Logout" />
          </LogoutButton>
        </SidebarContent>
      </SidebarWrapper>
  );
};

export default SidebarCategory;
