import React, {useEffect, useRef, useState} from 'react';
import { NextPage } from 'next';
import { Modal } from '@redq/reuse-modal';
import { ProfileProvider } from 'contexts/profile/profile.provider';

import ProfileContent from 'features/user-profile/user-profile';
import SettingsContent from 'features/user-profile/settings/settings';
import OrdersContent from 'features/user-profile/order/order';
import ShippingManagement from "../features/user-profile/shipping-management/shipping-management";
import {
  PageWrapper,
  ProfileContainer,
  SidebarSection,
  ContentBox,
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import { SEO } from 'components/seo';
import ErrorMessage from 'components/error-message/error-message';
import useUser from 'data/use-user';
import Router, {useRouter} from "next/router";
import {AuthContext} from "../contexts/auth/auth.context";
import ProfileBreadCrumbs from "../features/user-profile/profile-breadcrumbs";
import Loader from "../components/loader/loader";
import PageLoader from "../components/loader/page-loader";

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const ProfilePage: NextPage<Props> = ({ deviceType }) => {
  const router = useRouter();
  const { pathname, query, asPath } = router;

  let activeTab = 'buyer';
  let activeMenu = '';

  const {authState: {isAuthenticated}} = React.useContext<any>(AuthContext);
  useEffect(() => {
    if(!isAuthenticated){
      router.push('/login?redirect_to=' + router.asPath);
    }
  }, [isAuthenticated]);
  if(query.t) {
    activeTab = String(query.t);
  }
  if(query.p){
    activeMenu = String(query.p);
  }
  const handleSelectTab = (tab_id) => {
    router.push({pathname, query: 't=' + tab_id});
  }
  const handleSelectMenu = (menu_id: string) => {
    router.push({pathname, query: 't=' + activeTab + "&p=" + menu_id});
  }

  const { user, error } = useUser();
  if (error) return <ErrorMessage message={error.message} />;
  if (!user) return <PageLoader />;


  return (
      <>
        <SEO title="Profile - xiufu88" description="Profile Details" />
        <ProfileProvider initData={user}>
          <Modal>
            <PageWrapper>
              <ProfileContainer>
                <SidebarSection>
                  <Sidebar handleSelectTab={handleSelectTab} handleSelectMenu={handleSelectMenu} activeTab={activeTab} activeMenu={activeMenu} />
                </SidebarSection>
                <ContentBox>
                    <ProfileBreadCrumbs breadcrumbs={activeMenu} />
                  {(activeMenu == "" || activeMenu == "profile.profile-setting")&&(<ProfileContent />)}
                  {(activeMenu.includes("personal-information"))&&<SettingsContent />}
                    {(activeMenu.includes("profile.order"))&&<OrdersContent />}
                    {(activeMenu.includes("profile.ship-tool"))&&<ShippingManagement />}
                </ContentBox>
              </ProfileContainer>
            </PageWrapper>
          </Modal>
        </ProfileProvider>
      </>
  );
};

export default ProfilePage;
