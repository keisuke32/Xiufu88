import React, {useContext} from 'react';
import Link from 'next/link';
import {Input} from 'components/forms/input';

import {
    Button,
    IconWrapper,
    Wrapper,
    Container,
    LogoWrapper,
    Heading,
    SubHeading,
    HelperText,
    Offer,
    // Input,
    Divider,
    LinkButton,
    ErrorMsg,
    ModalBar,
    OfferSection,
    AdditionLoginWrapper,
    AdditionLoginButton,
    // Input,
    InputWrapper,
    InputIcon,
} from './authentication-form.style';
import {AuthContext} from 'contexts/auth/auth.context';
import {FormattedMessage, useIntl} from 'react-intl';

import WechatpayIcon from 'assets/images/wechatpay-icon.png';
import AlipayIcon from 'assets/images/alipay-icon.png';

import PhoneIcon from 'assets/images/phone-icon.svg';
import PasswordIcon from 'assets/images/password-icon.svg';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import cn from 'react-phone-input-2/lang/cn.json'

import {closeModal} from '@redq/reuse-modal';

import Cookie from "js-cookie";

import {AddUser} from "../../graphql/query/userAuth.query";
import {request} from 'graphql-request';
import {useRouter} from "next/router";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

export default function SignOutModal() {
    const intl = useIntl();
    const {authDispatch} = useContext<any>(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorId, setErrorId] = React.useState('')

    const router = useRouter();

    const toggleSignInForm = () => {
        // router.push('/login');
        authDispatch({
            type: 'SIGNIN',
        });
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)) {
            setErrorId('login.invalid_email');
            return false;
        }
        if (password == '') {
            setErrorId('login.invalid_password');
            return false;
        }
        else if (password.length < 6) {
            setErrorId('login.min_password');
            return false;
        }
        request(url, AddUser, {email: email, password: password}).then((data) => {
            console.log(data);
            if(data){
                authDispatch({
                    type: 'SIGNUP_ID',
                    payload: data.addUser.id
                });
            }
        }).catch((err) => {
            switch(err.response.errors[0].message){
                case 'Email already taken':
                    setErrorId('register.email_exist');
                    break;
                default:
                    break;
            }
            console.log(err);
        })
        console.log(email, password);
    }
    return (
        <Wrapper>
            <ModalBar/>
            <Container>
                <Heading>
                    <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up'/>
                </Heading>
                <SubHeading>
                    <FormattedMessage
                        id='signUpText'
                        defaultMessage='Every fill is required in sign up'
                    />
                </SubHeading>
                {errorId && (
                    <ErrorMsg>
                        <FormattedMessage
                            id={errorId ? errorId : 'login.invalid_email'}
                            defaultMessage=""
                        />
                    </ErrorMsg>
                )}
                <form onSubmit={onSubmitHandler}>
                    <Input
                        type='text'
                        placeholder={intl.formatMessage({
                            id: 'emailOnlyPlaceholder',
                            defaultMessage: 'Email Address or Contact No.',
                        })}
                        value={email}
                        height='48px'
                        backgroundColor='#F7F7F7'
                        mb='10px'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type='password'
                        placeholder={intl.formatMessage({
                            id: 'passwordPlaceholder',
                            defaultMessage: 'Password (min 6 characters)',
                        })}
                        value={password}
                        height='48px'
                        backgroundColor='#F7F7F7'
                        mb='10px'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <HelperText style={{padding: '20px 0 30px'}}>
                        <FormattedMessage
                            id='signUpText'
                            defaultMessage="By signing up, you agree to JiTeng"
                        />
                        &nbsp;
                        <Link href='/'>
                            <a>
                                <FormattedMessage
                                    id='termsConditionText'
                                    defaultMessage='Terms &amp; Condition'
                                />
                            </a>
                        </Link>
                    </HelperText>
                    <Button variant='primary' size='big' width='100%' type='submit'>
                        <FormattedMessage id='continueBtn' defaultMessage='Continue'/>
                    </Button>
                </form>
                <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or'/>
          </span>
                </Divider>
                <Button
                    variant='primary'
                    size='big'
                    style={{
                        width: '100%',
                        backgroundColor: '#4267b2',
                        marginBottom: 10,
                    }}
                >
                    <IconWrapper>
                        <img src={AlipayIcon}/>
                    </IconWrapper>
                    <FormattedMessage
                        id='continueFacebookBtn'
                        defaultMessage='Continue with Facebook'
                    />
                </Button>
                <Button
                    variant='primary'
                    size='big'
                    style={{width: '100%', backgroundColor: '#4285f4'}}
                >
                    <IconWrapper>
                        <img src={WechatpayIcon}/>
                    </IconWrapper>
                    <FormattedMessage
                        id='continueGoogleBtn'
                        defaultMessage='Continue with Google'
                    />
                </Button>
                <Offer style={{padding: '20px 0'}}>
                    <FormattedMessage
                        id='alreadyHaveAccount'
                        defaultMessage='Already have an account?'
                    />{' '}
                    <LinkButton onClick={toggleSignInForm}>
                        <FormattedMessage id='loginBtnText' defaultMessage='Login'/>
                    </LinkButton>
                </Offer>
            </Container>
        </Wrapper>
    );
}
