import useSWR from 'swr';
import {GET_BILLING_ADDRESS, GET_DELIVERY_ADDRESSES, getUserByPhone, UpdateUser} from "../graphql/query/userAuth.query";
import {request, GraphQLClient } from 'graphql-request';
import React from "react";
import {AuthContext} from "../contexts/auth/auth.context";
import {uploadAsset} from "../graphql/query/assets.query";
const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

//
// const fetcher = (url) => fetch(url).then((res) => res.json());
// // const end_point_url = '/'

export default function useUser() {

  const fetcher = async (query, phone) => await request(url, query, {
    phone: '+' + phone
  })

  const {authState} = React.useContext<any>(AuthContext);
  if(!authState?.isAuthenticated || authState?.phone == ''){
    // redirect to sign in page
  }

  const {data, mutate, error} = useSWR([getUserByPhone, authState?.phone], fetcher, {
    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  // const { data, mutate, error } = useSWR('/api/user.json', fetcher);

  const addOrUpdateContactNumber = async (contact) => {
    console.log(contact, 'contact');
    // return await fetch(end_point_url,{method: 'POST', body: contact });
  };
  const addOrUpdateAddress = async (address) => {
    console.log(address, 'address');

    // return await fetch(end_point_url,{method: 'POST', body: address });
  };
  const addOrUpdatePaymentCard = async (payment_card) => {
    console.log(payment_card, 'payment_card');

    // return await fetch(end_point_url,{method: 'POST', body: payment_card });
  };
  const deleteContactNumber = async (contactId) => {
    console.log(contactId, 'contactId');

    // return await fetch(end_point_url,{method: 'POST', body: contactId });
  };
  const deleteAddress = async (addressId) => {
    console.log(addressId, 'addressId');

    // return await fetch(end_point_url,{method: 'POST', body: addressId });
  };
  const deletePaymentCard = async (cardId) => {
    console.log(cardId, 'cardId');

    // return await fetch(end_point_url,{method: 'POST', body: cardId });
  };

  return {
    // loggedOut,
    user: data?.getUserByPhone,
    mutate,
    error,
    addOrUpdateContactNumber,
    addOrUpdateAddress,
    addOrUpdatePaymentCard,
    deleteContactNumber,
    deleteAddress,
    deletePaymentCard,
  };
}

export async function updateUserPhoto(file, token){
  const client = new GraphQLClient(url, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  const variables = {file: file};
  return client.request(uploadAsset, variables)
      .then((data) => {
        return data?.uploadAsset
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
}

export function getDeliveryAddresses(){
  const {authState} = React.useContext<any>(AuthContext);
  const fetcher = async (query, token) => {
    const client = new GraphQLClient(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return client.request(query)
        .then((data) => {
          return data;
        })
  }
  const {data, mutate, error} = useSWR([GET_DELIVERY_ADDRESSES, authState?.token], fetcher, {
    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  const res = data?.deliveryAddresses;
  return {
    deliveryAddresses: res,
    mutate,
    error,
  };
}

export function getBillingAddresses(){
  const {authState} = React.useContext<any>(AuthContext);
  const fetcher = async (query, token) => {
    const client = new GraphQLClient(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return client.request(query)
        .then((data) => {
          return data;
        })
  }
  const {data, mutate, error} = useSWR([GET_BILLING_ADDRESS, authState?.token], fetcher, {
    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  const res = data?.billingAddresses;
  return {
    billingAddresses: res,
    mutate,
    error,
  };
}
