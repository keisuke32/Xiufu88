import React from 'react';
import dynamic from 'next/dynamic';
import NavLink from 'components/nav-link/nav-link';
import { OFFER_MENU_ITEM, HELP_MENU_ITEM } from 'site-settings/site-navigation';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { CartIconX } from 'assets/icons/CartIconX';
import {UserVector} from 'assets/icons/UserVector';
import { RightMenuBox } from './right-menu.style';
import {Envelope} from 'assets/icons/Envelope';
const AuthMenu = dynamic(() => import('../auth-menu'), { ssr: false });

type Props = {
  onLogout: () => void;
  onJoin: () => void;
  avatar: string;
  isAuthenticated: boolean;
};

export const RightMenu: React.FC<Props> = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin,
}) => {
  return (
    <RightMenuBox>
      <UserVector/>
      <ul className="register_menu">
        <li><a>登录</a></li>
        <li><a>免费註册</a></li>
      </ul>
      <CartIconX/>
      <a className="carticon">我的购物车</a>
    </RightMenuBox>
  );
};

export const GetLiveRightMenu: React.FC<Props> = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin
}) => {
  return (
    <RightMenuBox>
      <ul className="rightmenu">
        <li><Envelope/>  &nbsp;消息</li>
        <li>我的權限</li>
        <li onClick={onLogout}>退出</li>
      </ul>
    </RightMenuBox>
  )
}
