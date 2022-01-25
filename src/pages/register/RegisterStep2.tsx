import React from 'react';
import {Input as InputStyle, Input} from 'components/forms/input';
import {FormattedMessage, useIntl} from 'react-intl';
import {AuthContext} from 'contexts/auth/auth.context';
import {
    checkPhoneExistence,
    checkUsernameExistence,
    checkEmailExistence
} from "../../data/use-auth";

import {
    Button,
    Placeholder, InputWrapper, StepContainer,
    Wrapper, ErrorMsg
} from "../../features/authentication-form/authentication-form.style";

export default function RegisterStep2(props) {
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passError, setPassError] = React.useState('');
    const [confirmError, setConfirmError] = React.useState('');
    const profile = props.value;
    const intl = useIntl();

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    const checkUsername = async () => {
        const regex = /^[a-zA-Z0-9_]{4,}$/;
        if (profile?.username == '') {
            setNameError('register.invalid_username');
            return false;
        } else {
            if (regex.test(profile?.username)) {
                const existence = await checkUsernameExistence({name: profile?.username});
                if (existence) {
                    setNameError('register.username_exists_error')
                    return false;
                }
                setNameError('');
                return true;
            } else {
                setNameError('register.invalid_username');
                return false;
            }
        }
    }

    const checkEmail = async () => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (profile?.email == '') {
            setEmailError('register.invalid_email');
            return false;
        } else {
            if (regex.test(profile?.email)) {
                const existence = await checkEmailExistence({email: profile?.email});
                if (existence) {
                    setEmailError('register.email_exists_error')
                    return false;
                }
                setEmailError('');
                return true;
            } else {
                setEmailError('register.invalid_email');
                return false;
            }
        }
    }

    const checkPassword = () => {
        const regex = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
        if (profile?.password == '') {
            setPassError('register.invalid_password');
            return false;
        } else {
            if (regex.test(profile?.password)) {
                setPassError('');
                return true;
            } else {
                setPassError('register.invalid_password');
                return false;
            }
        }
    }

    const checkPasswordConfirm = () => {
        if (profile?.password_confirm == '') {
            setConfirmError('register.invalid_password_confirm');
            return false;
        } else {
            if (profile?.password == profile?.password_confirm) {
                setConfirmError('');
                return true;
            } else {
                setConfirmError('register.invalid_password_confirm');
                return false;
            }
        }
    }

    const handleChange = (new_profile) => {
        props.onChange(new_profile);
    }

    const nextStep = () => {
        let check = checkUsername();
        check = checkEmail() && check;
        check = checkPassword() && check;
        check = checkPasswordConfirm() && check;
        if (check) {
            handleChange({...profile, step: 3});
            props.nextStep();
        }
    }

    return (
        <Wrapper>
            <StepContainer>
                <form onSubmit={onSubmitHandler}>
                    {nameError !== '' && (
                        <ErrorMsg>
                            <FormattedMessage id={nameError} defaultMessage='Error'/>
                        </ErrorMsg>
                    )}
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='login.username'
                                defaultMessage='Login Name'
                            />
                        </Placeholder>
                        <InputStyle
                            type='text'
                            placeholder={intl.formatMessage({
                                id: 'login.username_placeholder',
                                defaultMessage: 'LoginName',
                            })}
                            value={profile?.username}
                            onChange={(event) => handleChange({...profile, username: event.target.value})}
                            height='48px'
                            backgroundColor='#F7F7F7'
                            mb='10px'
                        />
                    </InputWrapper>
                    {emailError !== '' && (
                        <ErrorMsg>
                            <FormattedMessage id={emailError} defaultMessage='Error'/>
                        </ErrorMsg>
                    )}
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='login.email'
                                defaultMessage='Email'
                            />
                        </Placeholder>
                        <InputStyle
                            type='text'
                            placeholder={intl.formatMessage({
                                id: 'login.email_placeholder',
                                defaultMessage: 'Email',
                            })}
                            value={profile?.email}
                            onChange={(event) => handleChange({...profile, email: event.target.value})}
                            height='48px'
                            backgroundColor='#F7F7F7'
                            mb='10px'
                        />
                    </InputWrapper>
                    {passError !== '' && (
                        <ErrorMsg>
                            <FormattedMessage id={passError} defaultMessage='Error'/>
                        </ErrorMsg>
                    )}
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='login.password'
                                defaultMessage='password'
                            />
                        </Placeholder>
                        <InputStyle
                            type='password'
                            placeholder={intl.formatMessage({
                                id: 'login.password_placeholder',
                                defaultMessage: 'Password',
                            })}
                            value={profile?.password}
                            onChange={(event) => handleChange({...profile, password: event.target.value})}
                            height='48px'
                            backgroundColor='#F7F7F7'
                            mb='10px'
                        />
                    </InputWrapper>
                    {confirmError !== '' && (
                        <ErrorMsg>
                            <FormattedMessage id={confirmError} defaultMessage='Error'/>
                        </ErrorMsg>
                    )}
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='login.confirm'
                                defaultMessage='Confirm'
                            />
                        </Placeholder>
                        <InputStyle
                            type='password'
                            placeholder={intl.formatMessage({
                                id: 'login.confirm_placeholder',
                                defaultMessage: 'confirm',
                            })}
                            value={profile?.password_confirm}
                            onChange={(event) => handleChange({...profile, password_confirm: event.target.value})}
                            height='48px'
                            backgroundColor='#F7F7F7'
                            mb='10px'
                        />
                    </InputWrapper>

                    <Button
                        variant='primary'
                        size='big'
                        style={{width: 'calc(100% - 88px)', marginLeft: 'auto'}}
                        type='submit'
                        onClick={nextStep}
                    >
                        <FormattedMessage id='continueBtn' defaultMessage='Continue'/>
                    </Button>

                </form>
            </StepContainer>
        </Wrapper>
    );
}
