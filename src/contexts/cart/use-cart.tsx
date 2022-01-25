import React, {useReducer, useContext, createContext} from 'react';
import {reducer, cartItemsTotalPrice, cartStoreItemsPrice} from './cart.reducer';
import {useStorage} from 'utils/use-storage';

const CartContext = createContext({} as any);
const INITIAL_STATE = {
    items: [],
    cartPrice: {},
    deliveryPrice: {},
    totalPrice: {},
    loading: false
};

const useCartActions = (initialCart = INITIAL_STATE) => {
    const [state, dispatch] = useReducer(reducer, initialCart);

    const setCartHandler = (cart) => {
        dispatch({type: 'SET_CART', payload: cart})
    };

    const addItemHandler = (item, quantity = 1) => {
        dispatch({type: 'ADD_ITEM', payload: {...item, quantity}});
    };

    const removeItemHandler = (item, quantity = 1) => {
        dispatch({type: 'REMOVE_ITEM', payload: {...item, quantity}});
    };

    const clearItemFromCartHandler = (item) => {
        dispatch({type: 'CLEAR_ITEM_FROM_CART', payload: item});
    };

    const clearCartHandler = () => {
        dispatch({type: 'CLEAR_CART'});
    };

    const isInCartHandler = (id) => {
        return state.items?.some((item) => item.id === id);
    };

    const getItemHandler = (id) => {
        return state.items?.find((item) => item.id === id);
    };

    const getCartItemsPrice = () => cartItemsTotalPrice(state.items).toFixed(2);

    const getCartItemsTotalPrice = (selected=false) =>
        cartItemsTotalPrice(state.items, state.coupon, selected).toFixed(2);

    const getItemsCount = state.items.length;

    const getQuantityOfCart = state.items?.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    const getCartStoreItemsPrice = (store: any, selected: boolean = false) => cartStoreItemsPrice(state.items, store, selected).toFixed(2);
    const setLoadingHandler = (status) => {
        dispatch({type: "SET_LOADING", payload: status});
    }

    const calcPrice = (selected=true) => {
        let price = 0;
        state.items.map(product => {
            if((selected && product.selected) || !selected){
                price += product.total.amountISO;
            }
        })
        return price.toFixed(2);
    }

    const getItemsHandler = (selected=false) => {
        let sellers = [];
        let store_shipping_methods = [];
        let itemsCart = [];
        state.items?.map(item => {
            const key = item?.product?.seller?.id;
            if (!sellers.includes(key) && (item.selected || !selected)) {
                sellers.push(key);
                store_shipping_methods.push({
                    id: item?.product?.customCarrier?.id,
                    name: item?.product?.customCarrier?.name, ...item?.product?.customCarrierValue
                });
                itemsCart.push({
                    store_id: key,
                    store_name: item?.product?.seller?.name,
                    store_products: state.items?.filter(item_key => item_key?.product?.seller?.id == key && (item_key.selected || !selected))
                });
            }
        });
        return {itemsCart, sellers, store_shipping_methods};
    }
    return {
        state,
        calcPrice,
        setCartHandler,
        setLoadingHandler,
        getItemsCount,
        addItemHandler,
        removeItemHandler,
        clearItemFromCartHandler,
        clearCartHandler,
        isInCartHandler,
        getItemHandler,
        getCartItemsTotalPrice,
        getCartItemsPrice,
        getCartStoreItemsPrice,
        getQuantityOfCart,
        getItemsHandler,
    };
};

export const CartProvider = ({children}) => {
    const {
        state,
        calcPrice,
        setCartHandler,
        setLoadingHandler,
        addItemHandler,
        removeItemHandler,
        clearItemFromCartHandler,
        clearCartHandler,
        isInCartHandler,
        getItemHandler,
        getCartItemsTotalPrice,
        getCartItemsPrice,
        getCartStoreItemsPrice,
        getQuantityOfCart,
        getItemsCount,
        getItemsHandler,
    } = useCartActions();

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                totalPrice: state.totalPrice,
                cartItemsCount: state.items?.length,
                cartLoading: state.loading,
                getPrice: calcPrice,
                setCart: setCartHandler,
                setCartLoading: setLoadingHandler,
                addItem: addItemHandler,
                removeItem: removeItemHandler,
                removeItemFromCart: clearItemFromCartHandler,
                clearCart: clearCartHandler,
                isInCart: isInCartHandler,
                getItem: getItemHandler,
                calculatePrice: getCartItemsTotalPrice,
                calculateSubTotalPrice: getCartItemsPrice,
                calculateStorePrice:getCartStoreItemsPrice,
                quantityOfCart: getQuantityOfCart,
                itemsCount: getItemsCount,
                getItems: getItemsHandler,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
