import React, {useReducer, useState} from 'react';
import { AuthContext } from './auth.context';
import Router, { useRouter } from 'next/router';
// import {CenterModal} from "react-spring-modal";
// import CenterModal from "../../components/modal/center-modal";

const isBrowser = typeof window !== 'undefined';
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  phone: isBrowser?localStorage.getItem('phone'):'',
  currentForm: 'signIn',
  token: isBrowser?localStorage.getItem('access_token'):'',
};

// const [modalOpen, setModalOpen] = useState(true);
// const handleModal = () => {
//   setModalOpen(false);
// }

function reducer(state: any, action: any) {

  switch (action.type) {
    case 'SIGNIN':
        // const router = useRouter();
        // console.log(router);
        // router.push({
        //     pathname: '/login',
        //     query: router.asPath != '/' && router.asPath != '/login' ? {
        //         redirect_to:  router.asPath
        //     }: {}
        // });
      // <CenterModal isOpen={modalOpen} onRequestClose={handleModal} children={"ddd"}/>
      return {
        ...state,
        currentForm: 'signIn',
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        phone: action.payload.phone,
        token: action.payload.token
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
        phone: '',
        token: '',
      };
    case 'SIGNUP':
      Router.push('/register');
      return {
        ...state,
        currentForm: 'signUp',
      };
    case 'SIGNUP_ID':
      return {
          ...state,
        user_id: action.payload
      }
    case 'FORGOTPASS':
      return {
        ...state,
        currentForm: 'forgotPass',
      };
    case 'SET_PHONE':
      return {
          ...state,
        phone: action.payload
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
