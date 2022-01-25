import React, {useContext} from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {AuthContext} from 'contexts/auth/auth.context';
import {
    Button,
    Placeholder, InputWrapper, StepContainer, TextWrapper,
    Wrapper
} from "../../features/authentication-form/authentication-form.style";

import {addUserByPhone, loginUserByPhone, updateUserInfo} from "../../data/use-auth";
import Router from "next/router";

export default function RegisterStep3(props) {
    const {authDispatch} = useContext<any>(AuthContext);
    const profile = props.value;
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    const addUser = async () => {
        const res = await addUserByPhone({
            phone: profile?.phone,
            countryCode: profile?.countryCode,
            password: profile?.password
        });
        if (res) {
            await loginByPhone()
        }
    }

    const loginByPhone = async () => {
        const res = await loginUserByPhone({phone: profile?.phone, password: profile?.password});
        if (res) {
            if (typeof window !== 'undefined') {
                localStorage.setItem('access_token', res);
                localStorage.setItem('phone', profile?.phone);
                authDispatch({type: 'SIGNIN_SUCCESS', payload: {phone: profile?.phone, token: res}});
            }
            await updateUser(res);
        }
    }

    const updateUser = async (token) => {
        const res = await updateUserInfo({email: profile?.email, name: profile?.username, token: token});
        if (res) {
            console.log('success');
            await Router.push('/');
        } else {
            console.log('failed');
            await Router.push('/profile');
        }
    }

    return (
        <Wrapper>
            <StepContainer>
                <form onSubmit={onSubmitHandler}>
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='login.username'
                                defaultMessage='Login Name'
                            />
                        </Placeholder>
                        <TextWrapper>
                            {profile?.username}
                        </TextWrapper>
                    </InputWrapper>
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='login.email'
                                defaultMessage='Email'
                            />
                        </Placeholder>

                        <TextWrapper>
                            {profile?.email}
                        </TextWrapper>
                    </InputWrapper>
                    <InputWrapper>
                        <Placeholder>
                            <FormattedMessage
                                id='login.phone_complete'
                                defaultMessage='Phone'
                            />
                        </Placeholder>

                        <TextWrapper>
                            +{profile?.phone}
                        </TextWrapper>
                    </InputWrapper>

                    <Button
                        variant='primary'
                        size='big'
                        style={{width: 'calc(100% - 88px)', marginLeft: 'auto'}}
                        type='submit'
                        onClick={addUser}
                    >
                        <FormattedMessage id='continueBtn' defaultMessage='Finish'/>
                    </Button>

                </form>
            </StepContainer>
        </Wrapper>
    );
}
