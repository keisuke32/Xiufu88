import {request, GraphQLClient } from 'graphql-request';

import {
    SendVerificationToPhone,
    CheckVerificationToPhone,
    AddUserByPhone,
    UserAuthByPhone,
    UpdateUser,
    getUserByPhone,
    getUserByEmail,
    getUserByName, checkUserByPhone

} from "../graphql/query/userAuth.query";
import useSWR from "swr";
import {GET_PRODUCTS} from "../graphql/query/products.query";
import {me} from '../graphql/query/me'

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

interface SendCode2PhoneInterface {
    phone: string;
    countryCode: string;
}

interface CheckCode2PhoneInterface {
    verifyId: string;
    otp: string;
}

interface AddUserInterface {
    phone: string;
    countryCode: string;
    password: string;
}

interface UpdateUserInterface {
    token: string;
    email?: string;
    name?: string;
    photo?: string;
    countryCode?: string;
    gender?: string;
}

interface LoginInterface {
    phone: string;
    password: string;
}

interface CheckPhoneInterface{
    phone: string;
}

interface CheckUsernameInterface{
    name: string;
}

interface CheckEmailInterface{
    email: string;
}

interface TokenInterface{
    token:string;
}

export function sendCode2Phone({phone, countryCode}: SendCode2PhoneInterface) {
    const variables = {phone: '+' + phone, countryCode: countryCode};
    return request(url, SendVerificationToPhone, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data?.sendVerificationCode2Phone?.id
            }
        })
        .catch((err) => {
            let res_msg = 'register.invalid_phone';
            if (err.response?.errors[0].extensions.code == 'BAD_USER_INPUT')
                res_msg = 'register.invalid_phone'
            return {
                state: 'fail',
                res: res_msg
            }
        });
}

export function checkCode2Phone({verifyId, otp}: CheckCode2PhoneInterface) {
    const variables = {request_id: verifyId, code: otp};
    return request(url, CheckVerificationToPhone, variables)
        .then((data) => {
            console.log(data);
            return {
                state: 'success',
                res: data?.checkPhoneVerificationCode?.result,
            }
        })
        .catch((err) => {
            let res_msg = 'register.invalid_otp';
            if (err.response?.errors[0].extensions.code == 'BAD_USER_INPUT')
                res_msg = 'register.invalid_otp'
            return {
                state: 'fail',
                res: res_msg
            }
        });
}

export function addUserByPhone(data: AddUserInterface) {
    const variables = {phone: '+' + data.phone, countryCode: data.countryCode, password: data.password};
    return request(url, AddUserByPhone, variables)
        .then((data) => {
            if ('addUserByPhone' in data && 'id' in data.addUserByPhone)
                return data?.addUserByPhone?.id;
            else
                return null;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}


export function updateUserInfo(data: UpdateUserInterface) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + data.token
        }
    })
    const variables = {email: data.email, name: data.name, photo: data.photo, gender: data.gender};
    return client.request(UpdateUser, variables)
        .then((data) => {
            if ('updateUser' in data && 'id' in data.updateUser)
                return data?.updateUser?.id;
            else
                return null;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}


export function loginUserByPhone(data: LoginInterface) {
    const variables = {phone: '+' + data.phone, password: data.password};
    return request(url, UserAuthByPhone, variables)
        .then((data) => {
            if ('generateAccessTokenByPhone' in data) {
                return data.generateAccessTokenByPhone;
            }
            return null;
        }).catch((err) => {
            return null;
        });
}

export function checkPhoneExistence(data: CheckPhoneInterface){
    const variables = {phone: "+" + data.phone};
    return request(url, checkUserByPhone, variables)
        .then((data) => {
            return data?.getUserByPhone?.id;
        })
        .catch((err) => {
            console.log(err);
            return null;
        })
}
export function getUserInfoByPhone(variable: CheckPhoneInterface){

    const fetcher = async (query, phone) => await request(url, query, {
        phone: '+' + phone
    })

    const {data, mutate, error} = useSWR([getUserByPhone, variable.phone], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const user = data?.getUserByPhone;
    return {user, mutate, error};
}

export function checkUsernameExistence(data: CheckUsernameInterface){
    return request(url, getUserByName, data)
        .then((data) => {
            return data?.getUserByName?.id;
        })
        .catch((err) => {
            console.log(err);
            return null;
        })
}

export function checkEmailExistence(data: CheckEmailInterface){
    return request(url, getUserByEmail, data)
        .then((data) => {
            return data?.getUserByEmail?.id;
        })
        .catch((err) => {
            console.log(err);
            return null;
        })
}

export function getuserbytoken(data:TokenInterface)
{
    const client = new GraphQLClient(url,{
        headers:{
            Authorization:'Bearer ' + data.token
        }
    })

    return client.request(me).then(data=>{
        return data?.me?.id
    }).catch(err=>{
        return null;
    })
}

