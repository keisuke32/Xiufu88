import React, {useState} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {ArrowLeft} from "../../assets/icons/ArrowLeft";
import PhoneInput from "react-phone-input-2";
import Cookie from "js-cookie";
import cn from 'react-phone-input-2/lang/cn.json';
import {Input as InputStyle} from "../../components/forms/input";
import {Button} from "../../components/button/button";
import {ResendBtnWrapper} from "../../features/authentication-form/authentication-form.style";
import {checkPhoneExistence, sendCode2Phone} from "../../data/use-auth";
import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';

export default function RegisterMobile(props: { value: any; onChange: (arg0: any) => void; }) {
    const intl = useIntl();
    const profile = props.value;
    const [phoneError, setPhoneError] = React.useState('');
    const handleChange = (value) => {
        props.onChange(value);
    }
    const localSetting = Cookie.get('locale');
    const [loading, setLoading] = React.useState(false);
    const [count, setCount] = React.useState(60);
    const [countActive, setCountActive] = React.useState(false);
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
    return (
        <RegisterMobileWrapper>
            <BindMobileWrapper>
                <ArrowLeft width="20" height="20" />
                <div className="bind_text">
                    <FormattedMessage id="register.step1" defaultMessage="绑定手机号码"/>
                </div>
            </BindMobileWrapper>
            <InputWrapper>
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
                <InputStyle
                    type='text'
                    onChange={(event) => handleChange({...profile, otp: event.target.value})}
                    placeholder={intl.formatMessage({
                        id: 'register.phone_verify_placeholder',
                        defaultMessage: 'Password',
                    })}
                    value={profile?.otp}
                    height='35px'
                    backgroundColor='#F7F7F7'
                    border='1px solid #CACACA'
                    mb='10px'
                />
            </InputWrapper>
            <Button
                variant='primary'
                size='big'
                style={{width: '100%', height: '40px' , marginLeft: 'auto', marginTop: '50px', marginBottom: '50px', borderRadius: '4px'}}
                type='submit'
                loading={loading}
                onClick={sendRequest}>
                <FormattedMessage id='verifyBtn' defaultMessage='Verify'/>
            </Button>
            <HintWrapper>
                已阅读并同意以下协议吉腾平台服务协议、隐私权政策、法律声明、客户端服务协议
            </HintWrapper>
        </RegisterMobileWrapper>
    );
}

const BindMobileWrapper = styled.div`
    display: flex;
    .bind_text {
        width: 100%;
        text-align: center;
        font-size: ${themeGet('fontSizes.rating', '18')}px;
        color: ${themeGet('colors.black', '#000000')};
        line-height: 1;
    }
`;

const HintWrapper = styled.div`
    color: ${themeGet('colors.gray.900', '#828282')};
`;

const InputWrapper = styled.div`
    padding-top: 150px;
    .form-control {
        width: 100%;
    }
    input {
        margin-top: 20px;
    }
`;

const RegisterMobileWrapper = styled.div`
    padding: 20px;
`;
