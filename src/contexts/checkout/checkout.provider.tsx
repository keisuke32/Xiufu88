import React, {useReducer, useContext, createContext} from 'react';
import {reducer} from './checkout.reducer';
import {useStorage} from 'utils/use-storage';

const CheckoutContext = createContext({} as any);
const INITIAL_STATE = {
    items: [],
};

const useCheckoutActions = (initialCart = INITIAL_STATE) => {
    const [state, dispatch] = useReducer(reducer, initialCart);

    const addItemHandler = (item, address, attribute, quantity = 1) => {
        dispatch({type: 'ADD_ITEM', payload: {...item, address, attribute, quantity}});
    };

    const calcDeliveryRateHandler = (item, address, quantity = 1) => {
        dispatch({type: 'CALC_DELIVERY_RATE', payload: {...item, address, quantity}});
    };

    return {
        state,
        addItemHandler,
        calcDeliveryRateHandler,
    };
};

export const CheckoutProvider = ({children}) => {
    const {
        state,
        addItemHandler,
        calcDeliveryRateHandler,
    } = useCheckoutActions();
    return (
        <CheckoutContext.Provider
            value={{
                items: state.items,
                cartItemsCount: state.items?.length,
                addItemQL: addItemHandler,
                calcDeliveryRateQL: calcDeliveryRateHandler,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckout = () => useContext(CheckoutContext);
