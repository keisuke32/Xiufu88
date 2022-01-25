import {gql} from '@apollo/client';

export const USER = gql`
    fragment UserDetail on User{
        id
        email
        name
        phone
        address{
            street
            city
            region{
                id
                name
            }
            country{
                id
                name
                currency
            }
            zipCode
            addressId
            description
        }
        photo{
            id
            url
        }
        gender
        color{
            background
            text
        }
    }
`;

export const UserAuth = gql`
    mutation Authorize($email: String!, $password: String!){
        generateAccessToken(data: {
            email: $email,
            password: $password
        })
    }
`;

export const UserAuthByPhone = gql`
    mutation Authorize($phone: String!, $password: String!){
        generateAccessTokenByPhone(data: {
            phone: $phone,
            password: $password
        })
    }
`;

export const AddUser = gql`
    mutation addUser($email: String!, $password: String!){
        addUser(data: {
            email: $email,
            password: $password
        }){
            ...UserDetail
        }
    }
    ${USER}
`;

export const UpdateUser = gql`
    mutation updateUser($email: String, $name: String, $photo: ID){
        updateUser(data: {name: $name, email: $email, photo: $photo}){
            ...UserDetail
        }
    }
    ${USER}
`;

export const AddUserByPhone = gql`
    mutation addUserByPhone($phone: String!, $countryCode: String!,  $password: String!){
        addUserByPhone(data: {
            phone: $phone,
            countryCode: $countryCode,
            password: $password
        }){
            ...UserDetail
        }
    }
    ${USER}
`;

export const SendVerificationToPhone = gql`
    mutation sendVerificationCode2Phone($phone: String!, $countryCode: String!){
        sendVerificationCode2Phone(data:{
            phone:$phone,
            countryCode:$countryCode})
        {
            id
        }
    }
`;

export const CheckVerificationToPhone = gql`
    mutation checkPhoneVerificationCode($request_id: String!, $code: String!){
        checkPhoneVerificationCode(data:{
            request_id:$request_id,
            code:$code})
        {
            result
            message
        }
    }
`;

export const checkUserByPhone = gql`
    query getUserByPhone($phone: String!){
        getUserByPhone(phone: $phone){
            ...UserDetail
        }
    }
    ${USER}
`;

export const getUserByPhone = gql`
    query getUserByPhone($phone: String!){
        getUserByPhone(phone: $phone){
            ...UserDetail
        }
    }
    ${USER}
`;

export const getUserByName = gql`
    query getUserByName($name: String!){
        getUserByName(name: $name){
            ...UserDetail
        }
    }
    ${USER}
`;

export const getUserByEmail = gql`
    query getUserByEmail($email: String!){
        getUserByEmail(email: $email){
            ...UserDetail
        }
    }
    ${USER}
`;

export const GET_DELIVERY_ADDRESSES = gql`
    query deliveryaddr{
        deliveryAddresses{
            id
            label
            street
            city
            region{
                id
                name
            }
            country{
                id
                name

            }
            zipCode
            isDeliveryAvailable
            addressId
            description
            shippingAddress
        }
    } 
`;

export const GET_BILLING_ADDRESS = gql`
    query{
        billingAddresses{
            id
            label
            street
            city
            region{
                id
                name
            }
            country{
                id
                name
                currency
            }
            zipCode
            isDeliveryAvailable
            addressId
            description
            shippingAddress
        }
    }
`;
