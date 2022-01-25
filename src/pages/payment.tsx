import React from 'react';
import { NextPage } from 'next';
import { Modal } from '@redq/reuse-modal';
import { SEO } from 'components/seo';
import PaymentFeature from "features/payment/payment";
import { ProfileProvider } from 'contexts/profile/profile.provider';
import ErrorMessage from 'components/error-message/error-message';
import {AuthContext} from "contexts/auth/auth.context";
import {getUserInfoByPhone} from "data/use-auth";

type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
const PaymentPage: NextPage<Props> = ({ deviceType }) => {

    const {authState: {isAuthenticated, phone, token}} = React.useContext<any>(AuthContext);
    if(!isAuthenticated || phone == ''){
        return <div>loading...</div>
    }

    const { user, error } = getUserInfoByPhone({phone: phone});
    if (error) return <ErrorMessage message={error.message} />;
    if (!user) return <div>loading...</div>;

    return (
        <>
            <SEO title="Checkout - JiTeng" description="Checkout Details" />
            <ProfileProvider initData={user}>
                <Modal>
                    <PaymentFeature deviceType={deviceType} />
                </Modal>
            </ProfileProvider>
        </>
    );
};

export default PaymentPage;
