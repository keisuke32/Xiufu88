import React from 'react';
import {ModalProvider} from "../contexts/modal/modal.provider";
import {Modal} from '@redq/reuse-modal';

import StepWizard from 'react-step-wizard';
import Nav, {NavMobile} from './register/nav';
import RegisterStep1 from './register/RegisterStep1';
import RegisterStep2 from './register/RegisterStep2';
import RegisterStep3 from './register/RegisterStep3';

import {StepWizardWrapper} from "../features/authentication-form/authentication-form.style";
import {useIntl} from "react-intl";
import {SEO} from "../components/seo";
import RegisterMobile from "./register/register-mobile";

export default function RegisterPage({deviceType}) {
    const intl = useIntl();
    const nav_titles = [
        intl.formatMessage({id: 'register.step1', defaultMessage: 'Step1',}),
        intl.formatMessage({id: 'register.step2', defaultMessage: 'Step2',}),
        intl.formatMessage({id: 'register.step3', defaultMessage: 'Step3',}),
    ];
    const [profile, setProfile] = React.useState({
        phone: '',
        countryCode: '',
        verifyID: '',
        otp: '',
        phoneVerify: 0,
        username: '',
        email: '',
        password: '',
        password_confirm: '',
        step: 1
    });
    const handleChange = (new_profile) => {
        setProfile(new_profile);
    }

    return (
        <>
            <SEO title="SignUp - JiTeng" description="JiTeng SignUp" />
            <ModalProvider>
                <Modal>
                    {/*{deviceType.desktop ?*/}
                        <StepWizardWrapper>
                            <StepWizard nav={deviceType.desktop ? <Nav navs={nav_titles} value={profile}/> : <NavMobile value={profile}/>}>
                                <RegisterStep1 key={1} onChange={handleChange} value={profile}/>
                                <RegisterStep2 key={2} onChange={handleChange} value={profile}/>
                                <RegisterStep3 key={3} value={profile}/>
                            </StepWizard>
                        </StepWizardWrapper>
                    {/*:*/}
                    {/*    <RegisterMobile onChange={handleChange} value={profile} />}*/}
                </Modal>
            </ModalProvider>
        </>
    );

}
