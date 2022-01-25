import React, { useContext } from 'react';
import {
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  // Input,
  Button,
  LinkButton,
  Offer,
} from './authentication-form.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { AuthContext } from 'contexts/auth/auth.context';
import { Input } from 'components/forms/input';
import AuthenticationForm from "./index";
import { openModal } from '@redq/reuse-modal';
import Router from "next/router";

export default function ForgotPasswordModal() {
  const { authDispatch } = useContext<any>(AuthContext);
  const intl = useIntl();
  const toggleSignInForm = () => {
    if(Router.pathname == '/register' || Router.pathname.includes('/reset_password')){
      Router.push('/login');
    }else {
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
    }
  };
  return (
    <Wrapper>
      <Container style={{ paddingBottom: 30 }}>
        <Heading>
          <FormattedMessage
            id='forgotPassText'
            defaultMessage='Forgot Password'
          />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='sendResetPassText'
            defaultMessage="We'll send you a link to reset your password"
          />
        </SubHeading>

        <Input
          type='text'
          placeholder={intl.formatMessage({
            id: 'emailAddressPlaceholder',
            defaultMessage: 'Email Address or Contact No.',
          })}
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />

        <Button
          variant='primary'
          size='big'
          style={{ width: '100%' }}
          type='submit'
        >
          <FormattedMessage
            id='resetPasswordBtn'
            defaultMessage='Reset Password'
          />
        </Button>
        <Offer style={{ padding: '20px 0 0' }}>
          {/*<FormattedMessage id='backToSign' defaultMessage='Back to' />{' '}*/}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
