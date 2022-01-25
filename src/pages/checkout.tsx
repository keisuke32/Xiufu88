import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import Router, {useRouter} from "next/router";
import {Modal} from '@redq/reuse-modal';
import {SEO} from 'components/seo';
import CheckoutFeature from "features/checkouts/checkout-feature/checkout-feature";
import {ProfileProvider} from 'contexts/profile/profile.provider';
import ErrorMessage from 'components/error-message/error-message';
import {AuthContext} from "contexts/auth/auth.context";
import {getUserInfoByPhone} from "data/use-auth";
import PageLoader from "components/loader/page-loader";
import PaymentFeature from "../features/payment/payment";
import CheckoutWrapper, {CheckoutContainer} from "../features/checkouts/checkout-feature/checkout-feature.style";
import CheckoutHeader from "../features/checkouts/checkout-header";
import LogisticsFeature from "../features/logistics/logistics";
import CommentFeature from "../features/comment/comment";
import CheckoutMobile from "../components/checkout-mobile/checkout-mobile";

type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
const CheckoutPage: NextPage<Props> = ({deviceType}) => {

    const router = useRouter();
    const {pathname, query, asPath} = router;

    const {authState} = React.useContext<any>(AuthContext);

    // const {authState: {isAuthenticated, phone, token}} = React.useContext<any>(AuthContext);


    useEffect(() => {
        if (!authState?.isAuthenticated) {
            router.push('/login?redirect_to=' + router.asPath);
        }
    }, [authState?.isAuthenticated]);

    let activeTab = 1;

    if (query.t) {
        activeTab = parseInt(String(query.t));
    }
    const handleSelectTab = (tab_id) => {
        router.push({pathname, query: 't=' + tab_id});
    }
    const {user, error} = getUserInfoByPhone({phone: authState?.phone});
    if (error) return <ErrorMessage message="Network Error"/>;
    if (!user) return <PageLoader/>;

    const nextStep = (step) => {
        router.push({pathname, query: 't=' + step});
    }

    return (
        <>
            <SEO title="Checkout - JiTeng" description="Checkout Details"/>
            {
                deviceType.desktop ?
                    <ProfileProvider initData={user}>
                        <Modal>
                            <CheckoutWrapper>
                                <CheckoutContainer>
                                    <CheckoutHeader activeTab={activeTab}/>
                                    {activeTab == 1 && <CheckoutFeature token={authState?.token} nextStep={nextStep}/>}
                                    {activeTab == 2 &&
                                    <PaymentFeature token={authState?.token} deviceType={deviceType} nextStep={nextStep}/>}
                                    {activeTab == 3 && <LogisticsFeature token={authState?.token} nextStep={nextStep}/>}
                                    {activeTab == 4 && <CommentFeature token={authState?.token} nextStep={nextStep}/>}
                                </CheckoutContainer>
                            </CheckoutWrapper>
                        </Modal>
                    </ProfileProvider>
                :
                    <CheckoutMobile />
            }
        </>
    );
};

export default CheckoutPage;
