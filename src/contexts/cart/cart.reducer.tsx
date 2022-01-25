// export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {

export const cartItemsTotalPrice = (items, coupon = null, selected=false) => {
    if (items === null || items.length === 0) return 0;
    // const discountRate = 1 - discountInPercent;
    // const discount = coupon
    //   ? (itemCost * Number(coupon.discountInPercent)) / 100
    //   : 0;
    // itemCost * discountRate * TAX_RATE + shipping;
    // return itemCost * discountRate;
    return items.reduce((total, item) => {
        if (item.price && (!selected || (item.selected))) {
            return total + item.price.amountISO * item.quantity;
        }
        return total;
    }, 0); // - discount;
};

export const cartStoreItemsPrice = (items, store, selected=false) => {
    if (items === null || items.length === 0) return 0;
    return items.reduce((total, item) => {
        if (item.seller?.id == store && (!selected || (item.selected))) {
            return total + item.price.amountISO * item.quantity;
        }
        return total;
    }, 0);
}

// cartItems, cartItemToAdd
const addItemToCart = (state, action) => {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
    );

    if (existingCartItemIndex > -1) {
        const newState = [...state.items];
        newState[existingCartItemIndex].quantity = action.payload.quantity;
        return newState;
    }
    return [...state.items];
};

// cartItems, cartItemToRemove
const removeItemFromCart = (state, action) => {
    return state.items.reduce((acc, item) => {
        if (item.id === action.payload.id) {
            const newQuantity = item.quantity - action.payload.quantity;

            return newQuantity > 0
                ? [...acc, {...item, quantity: newQuantity}]
                : [...acc];
        }
        return [...acc, item];
    }, []);
};

const clearItemFromCart = (state, action) => {
    return state.items.filter((item) => item.id !== action.payload.id);
};

const selectItem = (state, action) => {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
    );
    const newState = [...state.items];
    if (existingCartItemIndex > -1) {
        const newState = [...state.items];
        newState[existingCartItemIndex].selected = action.payload.selected;
        return newState;
    }
    return [...state.items, action.payload];
};

const selectItemStore = (state, action) => {
    const newState = [...state.items];
    newState.map(item => {
        if(item.seller.id == action.payload.store)
            item.selected = action.payload.selected;
    });
    return newState;
};
const selectItemAll = (state, action) => {
    const newState = [...state.items];
    newState.map(item => item.selected = action.payload.selected);
    return newState;
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_QUANTITY_OF_CART':
            return {...state, items: addItemToCart(state, action)};
        case 'REMOVE_ITEM':
            return {...state, items: removeItemFromCart(state, action)};
        case 'CLEAR_ITEM_FROM_CART':
            return {...state, items: clearItemFromCart(state, action)};
        case 'CLEAR_CART':
            return {...state, items: []};
        case 'SET_CART':
            return {...state, ...action.payload};
        case 'SET_LOADING':
            return {...state, loading: action.payload};
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};
