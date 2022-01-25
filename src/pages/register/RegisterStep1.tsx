import React, {useEffect} from 'react';
import {Input as InputStyle, Input} from 'components/forms/input';
import {FormattedMessage, useIntl} from 'react-intl';

import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
import cn from 'react-phone-input-2/lang/cn.json'
import {
    Button, Placeholder, InputWrapper, StepContainer, ResendBtnWrapper, CountDownWrapper, Wrapper, ErrorMsg
} from "../../features/authentication-form/authentication-form.style";

import {sendCode2Phone, checkCode2Phone, checkPhoneExistence} from "../../data/use-auth";

import Cookie from "js-cookie";

export default function RegisterStep1(props: { value: any; onChange: (arg0: any) => void; goToStep?: (arg0: any) => void;}) {
    const intl = useIntl();
    const [phoneError, setPhoneError] = React.useState('');
    const [otpError, setOtpError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [count, setCount] = React.useState(60);
    const [countActive, setCountActive] = React.useState(false);
    const profile = props.value;
    const localSetting = Cookie.get('locale');

    useEffect(() => {
        let interval = null;
        if (countActive) {
            interval = setInterval(() => {
                setCount(count => count - 1);
            }, 1000);
        }
        if (count <= 0) {
            clearInterval(interval);
            setCountActive(false);
            props.onChange({...profile, phoneVerify: 0, verifyID: '', otp: ''});
        }
        return () => clearInterval(interval);
    }, [countActive, count]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    const nextStep = (event) => {
        handleChange({...profile, step: 2});
        // props.nextStep();
        props.goToStep(props.value.step);

    }
    const sendRequest = async (e) => {
        setLoading(true);
        if (profile?.phone.length < 10 || profile?.countryCode === '') {
            setPhoneError('register.invalid_phone');
        } else {
            const existence = await checkPhoneExistence({phone: profile?.phone});
            if (existence) {
                setPhoneError('register.phone_exists_error');
            } else {
                const data = await sendCode2Phone({
                    phone: profile?.phone,
                    countryCode: profile?.countryCode,
                });
                if (data && data.state == 'success') {
                    if (data.res) {
                        setCount(60);
                        setCountActive(true);
                        handleChange({...profile, phoneVerify: 1, verifyID: data.res});
                    } else
                        setPhoneError('register.invalid_phone');
                } else {
                    if (data) setPhoneError(data.res);
                    else setPhoneError('register.invalid_phone');
                }
            }
        }
        setLoading(false);
    }
    const verify = async (e) => {
        setLoading(true);
        if (profile?.verifyID === '' || profile?.otp === '') {
            setPhoneError('register.invalid_otp');
        } else {
            const data = await checkCode2Phone({
                verifyId: profile?.verifyID,
                otp: profile?.otp,
            });
            if (data && data.state == 'success') {
                if (data.res) {
                    setCountActive(false);
                    setCount(60);
                    handleChange({...profile, phoneVerify: 2});
                    // props.nextStep();
                } else
                    setPhoneError('register.invalid_otp');
            } else {
                if (data) setPhoneError(data.res);
                else setPhoneError('register.invalid_otp');
            }
        }
        setLoading(false);
    }
    const handleChange = (value) => {
        props.onChange(value);
    }

    return (
        <Wrapper>
            <StepContainer>
                {phoneError !== '' && (
                    <ErrorMsg>
                        <FormattedMessage id={phoneError} defaultMessage='Error'/>
                    </ErrorMsg>
                )}
                <form onSubmit={onSubmitHandler}>
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='login.phone'
                                defaultMessage='Phone'
                            />
                        </Placeholder>
                        <PhoneInput
                            country='cn'
                            value={profile?.phone}
                            onChange={(phone, country, e, formattedValue) => {
                                if(profile?.phone != phone && ("countryCode" in country)) {
                                    setPhoneError('');
                                    handleChange({
                                        ...profile,
                                        phone: phone,
                                        countryCode: country.countryCode,
                                        phoneVerify: 0,
                                        step: 1
                                    });
                                }
                            }}
                            placeholder={intl.formatMessage({
                                id: 'login.phone_placeholder',
                                defaultMessage: 'Phone'
                            })}
                            localization={localSetting !== 'en' && cn}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='register.phone_verify'
                                defaultMessage='phone_verify'
                            />
                        </Placeholder>
                        <InputStyle
                            type='text'
                            onChange={(event) => handleChange({...profile, otp: event.target.value})}
                            placeholder={intl.formatMessage({
                                id: 'register.phone_verify_placeholder',
                                defaultMessage: 'Password',
                            })}
                            value={profile?.otp}
                            height='48px'
                            backgroundColor='#F7F7F7'
                            mb='10px'
                        />
                        {profile?.phoneVerify === 1 && (
                            <ResendBtnWrapper>
                                <Button
                                    variant='text'
                                    size='small'
                                    type='submit'
                                    onClick={sendRequest}>
                                    <FormattedMessage id='register.resend_code' defaultMessage='Continue'/>
                                </Button>
                            </ResendBtnWrapper>
                        )}
                        {countActive && (
                            <CountDownWrapper>
                                {count}<FormattedMessage id='register.countdown' defaultMessage='Seconds left'/>
                            </CountDownWrapper>
                        )}
                    </InputWrapper>
                    {profile?.phoneVerify === 0 && (
                        <Button
                            variant='primary'
                            size='big'
                            style={{width: 'calc(100% - 88px)', margin: '0 auto'}}
                            type='submit'
                            loading={loading}
                            onClick={sendRequest}>
                            <FormattedMessage id='sendrequestBtn' defaultMessage='Continue'/>
                        </Button>
                    )}
                    {profile?.phoneVerify === 1 && (
                        <Button
                            variant='primary'
                            size='big'
                            style={{width: 'calc(100% - 88px)', marginLeft: 'auto'}}
                            type='submit'
                            onClick={verify}
                            loading={loading}>
                            <FormattedMessage id='verifyBtn' defaultMessage='Continue'/>
                        </Button>
                    )}
                    {profile?.phoneVerify === 2 && (
                        <Button
                            variant='primary'
                            size='big'
                            style={{width: 'calc(100% - 88px)', marginLeft: 'auto'}}
                            type='submit'
                            onClick={nextStep}
                        >
                            <FormattedMessage id='continueBtn' defaultMessage='Continue'/>
                        </Button>
                    )}

                </form>
            </StepContainer>
        </Wrapper>
    );
}
