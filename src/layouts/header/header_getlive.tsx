import React from 'react';
import Router, { useRouter } from 'next/router';
import { openModal } from '@redq/reuse-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import { GetLiveRightMenu } from './menu/right-menu/right-menu';
import { LeftMenu,LeftMenuGetLive } from './menu/left-menu/left-menu';
import {GetLiveHeaderWrapper} from './header.style';
import LogoImage from 'assets/images/logos/logo_getlive.png';
import UserImage from 'assets/images/user.jpg';
import { isCategoryPage } from '../is-home-page';
import Search from 'features/search/search';
type Props = {
  className?: string;
};

const HeaderGetLive: React.FC<Props> = ({ className }) => {
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  const { pathname, query } = useRouter();
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('phone');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };

  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN',
    });

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };
  const showSearch =
    isCategoryPage(query.type) ||
    pathname === '/furniture-two' ||
    pathname === '/grocery-two' ||
    pathname === '/bakery';
  return (
    <GetLiveHeaderWrapper style={{backgroundColor:'#F5F2F2'}} className={className} id="layout-header">
      <LeftMenuGetLive logo={LogoImage} />
      <GetLiveRightMenu
        isAuthenticated={isAuthenticated}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </GetLiveHeaderWrapper>
  );
};

export default HeaderGetLive;
