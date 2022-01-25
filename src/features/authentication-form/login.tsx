import React, {useContext, useEffect} from 'react';
import Router, {useRouter} from 'next/router';

import {
    LinkButton,
    Button,
    IconWrapper,
    LoginWrapper,
    Container,
    ModalBar,
    Heading,
    SubHeading,
    Offer,
    AdditionLoginWrapper,
    AdditionLoginButton,
    InputWrapper,
    InputIcon,
    Divider,
    ErrorMsg, OtherSettingWrapper
} from './authentication-form.style';

import {AuthContext} from 'contexts/auth/auth.context';
import {FormattedMessage, useIntl} from 'react-intl';
import {closeModal} from '@redq/reuse-modal';
import {Input as InputStyle} from 'components/forms/input';

import {UserAuthByPhone} from "../../graphql/query/userAuth.query";
import {request} from 'graphql-request';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import cn from 'react-phone-input-2/lang/cn.json'

import PhoneIcon from 'assets/images/phone-icon.svg';
import PasswordIcon from 'assets/images/password-icon.svg';

import WechatpayIcon from 'assets/images/wechatpay-icon.png';
import AlipayIcon from 'assets/images/alipay-icon.png';

import Cookie from "js-cookie";
import AuthenticationForm from "./index";
import { openModal } from '@redq/reuse-modal';
import ForgotPasswordModal from "./forgot-password";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
export default function SignInModal() {
    const intl = useIntl();
    const {authDispatch} = useContext<any>(AuthContext);
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorId, setErrorId] = React.useState('')
    const {query: {redirect_to}} = useRouter();
    const [isModal, setIsModal] = React.useState(true);

    useEffect(() => {
        console.log(Router.pathname);
        if(Router.pathname.includes('/login')){
            setIsModal(false);
        }else{
            setIsModal(true);
        }
    }, [])

    const toggleSignUpForm = () => {
        authDispatch({
            type: 'SIGNUP',
        });
    };

    const toggleForgotPassForm = () => {
        if(Router.pathname == '/register' || Router.pathname.includes('/login')){
            Router.push('/reset_password');
        }else {
            authDispatch({
                type: 'FORGOTPASS',
            });

            openModal({
                show: true,
                overlayClassName: 'quick-view-overlay',
                closeOnClickOutside: true,
                component: ForgotPasswordModal,
                closeComponent: '',
                config: {
                    enableResizing: false,
                    disableDragging: true,
                    className: 'quick-view-modal',
                    width: 458,
                    height: 'auto',
                },
            });
        }
    };

    const localSetting = Cookie.get('locale');
    // console.log(localSetting);
    let phoneDefCountry = 'us'
    switch (localSetting) {
        case 'en':
            phoneDefCountry = 'us';
            break;
        case 'zh':
            phoneDefCountry = 'cn';
            break;
        default:
            phoneDefCountry = localSetting;
            break;
    }
    const loginCallback = (event) => {
        event.preventDefault();
        if (phone == '') {
            setErrorId('login.invalid_phone');
            return false;
        }
        if (password == '') {
            setErrorId('login.invalid_password');
            return false;
        }
        if (password.length < 6) {
            setErrorId('login.min_password');
            return false;
        }
        const res = request(url, UserAuthByPhone, {phone: '+' + `${phone}`, password: `${password}`}).then((data) => {
            if (typeof window !== 'undefined' && data && data.generateAccessTokenByPhone !== undefined) {
                localStorage.setItem('access_token', data.generateAccessTokenByPhone);
                localStorage.setItem('phone', phone);
                authDispatch({type: 'SIGNIN_SUCCESS', payload: {phone: phone, token: data.generateAccessTokenByPhone}});
                if (redirect_to) {
                    if(typeof redirect_to === "object") {
                        Router.push(redirect_to[0]);
                    }else{
                        Router.push(redirect_to);
                    }
                } else {
                    Router.push('/');
                }
            }
        }).catch((err) => {
            console.log(err);
            switch (err.response.errors[0].message) {
                case 'Invalid login or password':
                    setErrorId('login.invalid_user');
                    break;
                case 'Internal server error':
                    setErrorId('login.internal_error');
                    break;
                default:
                    setErrorId('login.invalid_user');
                    break;
            }
        });
    };

    return (
        <LoginWrapper>
            <ModalBar/>
            <Container>
                <Heading>
                    <FormattedMessage id='welcomeBack' defaultMessage='Welcome Back'/>
                </Heading>

                <SubHeading>
                    <FormattedMessage
                        id='loginText'
                        defaultMessage='Login with your phone &amp; password'
                    />
                </SubHeading>
                {errorId && (
                    <ErrorMsg>
                        <FormattedMessage
                            id={errorId ? errorId : 'login.invalid_username'}
                            defaultMessage=""
                        />
                    </ErrorMsg>
                )}
                <form onSubmit={loginCallback}>
                    <InputWrapper>
                        <InputIcon>
                            <img src={PhoneIcon} alt=""/>
                        </InputIcon>
                        <PhoneInput
                            country={phoneDefCountry}
                            value={phone}
                            onChange={setPhone}
                            placeholder={intl.formatMessage({
                                id: 'login.phone_placeholder',
                                defaultMessage: 'Phone'
                            })}
                            localization={localSetting !== 'en' && cn}
                        />
                    </InputWrapper>
                    {isModal &&
                    <Offer>
                        <LinkButton onClick={toggleSignUpForm}>
                            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up'/>
                        </LinkButton>
                    </Offer>
                    }
                    <InputWrapper>
                        <InputIcon>
                            <img src={PasswordIcon} alt=""/>
                        </InputIcon>
                        <InputStyle
                            type='password'
                            placeholder={intl.formatMessage({
                                id: 'passwordPlaceholder',
                                defaultMessage: 'Password (min 6 characters)',
                            }, {minCharacter: 6})}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            backgroundColor='#F7F7F7'
                        />
                    </InputWrapper>

                    {isModal &&
                    <Offer>
                        <LinkButton onClick={toggleForgotPassForm}>
                            <FormattedMessage id='resetText' defaultMessage='Reset It'/>
                        </LinkButton>
                    </Offer>
                    }
                    {!isModal &&
                    <OtherSettingWrapper>
                        <Offer>
                            <LinkButton onClick={toggleForgotPassForm}>
                                <FormattedMessage id='resetText' defaultMessage='Reset It'/>
                            </LinkButton>
                        </Offer>

                        <Offer>
                            <LinkButton onClick={toggleSignUpForm}>
                                <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up'/>
                            </LinkButton>
                        </Offer>
                    </OtherSettingWrapper>
                    }
                    <Button
                        variant='primary'
                        size='big'
                        style={{width: '100%'}}
                        type='submit'
                    >
                        <FormattedMessage id='continueBtn' defaultMessage='Continue'/>
                    </Button>
                </form>
                {/*<Divider>*/}
                {/*  <span>*/}
                {/*    <FormattedMessage id='orText' defaultMessage='or'/>*/}
                {/*  </span>*/}
                {/*</Divider>*/}
                {/*<AdditionLoginWrapper>*/}
                {/*    <AdditionLoginButton>*/}
                {/*        <Button*/}
                {/*            variant='primary'*/}
                {/*            size='big'*/}
                {/*            onClick={loginCallback}*/}
                {/*            style={{background: 'transparent'}}*/}
                {/*        >*/}
                {/*            <IconWrapper>*/}
                {/*                <img src={AlipayIcon}/>*/}
                {/*            </IconWrapper>*/}
                {/*        </Button>*/}
                {/*        <span>*/}
                {/*            <FormattedMessage id="alipay-login" defaultMessage="Alipay"/>*/}
                {/*        </span>*/}
                {/*    </AdditionLoginButton>*/}
                {/*    <AdditionLoginButton>*/}
                {/*        <Button*/}
                {/*            variant='primary'*/}
                {/*            size='big'*/}
                {/*            onClick={loginCallback}*/}
                {/*            style={{background: 'transparent'}}*/}
                {/*        >*/}
                {/*            <IconWrapper>*/}
                {/*                <img src={WechatpayIcon}/>*/}
                {/*            </IconWrapper>*/}
                {/*        </Button>*/}
                {/*        <span>*/}
                {/*            <FormattedMessage id="wechatpay-login" defaultMessage="Wechatpay"/>*/}
                {/*        </span>*/}
                {/*    </AdditionLoginButton>*/}
                {/*</AdditionLoginWrapper>*/}
            </Container>
        </LoginWrapper>
    );
}
