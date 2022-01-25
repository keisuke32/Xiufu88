// export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {
import {addProductToCart, calcDeliveryAddress} from "../../data/use-checkout";

const calculateDeliveryAddress = async (state, action) => {
    const deliveryRate = await calcDeliveryAddress({
        product: action.payload.id,
        quantity: action.payload.quantity,
        deliveryAddress: action.payload.address,
        isWholeSale: false,
        token: action.payload.token
    })
    console.log(deliveryRate);
    console.log(state.items);
    // return deliveryRate;
    if(deliveryRate.state == 'success'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload.id
        );
        if (existingCartItemIndex > -1) {
            const newState = [...state.items];
            newState[existingCartItemIndex].quantity = action.payload.quantity;
            newState[existingCartItemIndex].deliveryRate = deliveryRate.res;
            return newState;
        }else{
            return [...state.items, {...action.payload, deliveryRate: deliveryRate.res}];
        }
    }else{
        return [...state.items];
    }
}
// cartItems, cartItemToAdd
const addItemToCart = (state, action) => {
    const cartId = addProductToCart({
        product: action.payload.id,
        quantity: action.payload.quantity,
        deliveryRate: state.deliveryRate.id,
        billingAddress: action.payload.address,
        productAttribute: action.payload.attribute,
        token: action.payload.token
    });

    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
    );
    if(existingCartItemIndex > -1){
        const newState = [...state.items];
        newState[existingCartItemIndex].quantity = action.payload.quantity;
        return newState;
    }
    return [...state.items, {...action.payload}];
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'CALC_DELIVERY_RATE':
            return {...state, items: calculateDeliveryAddress(state, action)};
        case 'ADD_ITEM':
            return {...state, items: addItemToCart(state, action)};
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};
