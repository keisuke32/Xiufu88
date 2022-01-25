import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import {themeGet} from '@styled-system/theme-get';
import {FormattedMessage} from 'react-intl';
import {CURRENCY} from 'utils/constant';
import {useLocale} from 'contexts/location/location.provider';
import {useCart} from 'contexts/cart/use-cart';
import {Counter} from "components/counter/counter";
import {NoProductImg, NoProductMsg} from "../features/carts/cart.style";
import {NoCartBag} from "assets/icons/NoCartBag";
import {EditButtonIcon} from "assets/icons/EditButtonIcon";
import {SmallMessageIcon} from "assets/icons/SmallMessageIcon";
import Router, {useRouter} from "next/router";
import {AuthContext} from "../contexts/auth/auth.context";
import {
    calcDeliveryAddress,
    clearProductCart,
    deleteProductCart, getItemsFromCart, selectCartItems,
    updateProductCart
} from "../data/use-checkout";
import {SEO} from "../components/seo";
import PageLoader from "../components/loader/page-loader";
import CartMobile from "../components/cart-mobile/cart-mobile";

export default function CartPage({deviceType}) {
    const {
        items,
        totalPrice,
        getPrice,
        setCart,
        cartItemsCount,
        cartLoading,
        setCartLoading,
        getItems
    } = useCart();

    const {isRtl} = useLocale();
    const {authState} = React.useContext<any>(AuthContext);

    const router = useRouter();
    const {itemsCart, sellers, store_shipping_methods} = getItems();
    useEffect(() => {
        if (!authState.isAuthenticated) {
            router.push('/login?redirect_to=' + router.asPath);
        }
    }, [authState]);
    //
    // const {cartProducts, cartPrice, deliveryPrice, totalPrice: c_totalPrice, error: c_error, mutate, loading: c_loading} = getItemsFromCart({token: authState?.token});
    //
    // useEffect(() => {
    //     if (authState.isAuthenticated) {
    //         if (!c_error && !c_loading) {
    //             setCart({items: cartProducts, cartPrice, deliveryPrice, totalPrice: c_totalPrice})
    //         }
    //     }
    // }, [cartProducts])

    const checkAllState = () => {
        let status = true;
        items.map(item => {
            status = status && item.selected;
        })
        return status;
    }

    const checkStoreState = (store_id) => {
        let status = true;
        items.map(item => {
            if (item.product.seller.id == store_id)
                status = status && item.selected;
        })
        return status;
    }

    const checkSelectedCount = () => {
        return items.filter(item => item.selected).length;
    }
    const updateProduct = (cart, product, deliveryAddress, quantity) => {
        setCartLoading(true);
        calcDeliveryAddress({
            product: product,
            deliveryAddress: deliveryAddress,
            quantity: quantity,
            isWholeSale: false,
            token: authState?.token
        }).then(data => {
            if (data.state == 'success') {
                updateProductCart({
                    cart_id: cart,
                    deliveryRate: data.res.id,
                    quantity: quantity,
                    token: authState?.token
                }).then(data => {
                    if (data.state == 'success') {
                        setCart({
                            items: data.res.items,
                            cartPrice: data.res.price,
                            deliveryPrice: data.res.deliveryPrice,
                            totalPrice: data.res.total
                        });
                        setCartLoading(false);
                    }
                }).catch(error => {
                    console.log(error);
                    setCartLoading(false);
                });
            }
        }).catch(error => {
            console.log(error);
        })

    }
    const addItem = (product) => {
        updateProduct(product.id, product.product.id, product.deliveryAddress.id, product.quantity + 1);
    }

    const removeItem = (product) => {
        updateProduct(product.id, product.product.id, product.deliveryAddress.id, product.quantity - 1);
    }

    const clearCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearProductCart({token: authState?.token}).then(data => {
            if (data.state == 'success') {
                setCart({
                    items: data.res.items,
                    cartPrice: data.res.price,
                    deliveryPrice: data.res.deliveryPrice,
                    totalPrice: data.res.total
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    const removeFromCart = (product) => {
        deleteProductCart({cart_id: product.id, token: authState?.token}).then(data => {
            if (data.state == 'success') {
                setCart({
                    items: data.res.items,
                    cartPrice: data.res.price,
                    deliveryPrice: data.res.deliveryPrice,
                    totalPrice: data.res.total
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }

    const editProduct = (product) => {
        router.push({
            pathname: '/products/' + product.product.slug
        });
    }

    const addWhishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const itemShare = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const selectItem = (product, selectType = 'item') => {
        let ids = [];
        let selected = true;
        if (selectType == 'item') {
            ids.push(product.id);
            selected = product.selected;
        } else if (selectType == 'store') {
            product.store_products?.map(product => {
                ids.push(product.id);
                selected = selected && product.selected;
            })
        } else {
            items.map(item => {
                ids.push(item.id);
                selected = selected && item.selected;
            })
        }
        selectCartItems({ids: ids, selected: !selected, token: authState?.token}).then(data => {
            if (data.state == 'success') {
                setCart({
                    items: data.res.items,
                    cartPrice: data.res.price,
                    deliveryPrice: data.res.deliveryPrice,
                    totalPrice: data.res.total
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }
    const getSelectedPrice = () => {
        return items.reduce((acc, item) => {
            return acc += item.selected ? item.price.amountISO * item.quantity : 0
        }, 0);
    }
    return (
        <>
            <SEO title="Checkout - JiTeng" description="Checkout Details"/>
            {
                deviceType.desktop ?
                    <CartBox>
                        {!!items?.length ? (
                            <CartWrapper>
                                <CartHeader>
                                    <CartHeaderTab>
                                        <li className="tab-item">
                                            <a href="#">
                                                <FormattedMessage id="cart.tab.all-product"
                                                                  defaultMessage="All Product"/>
                                                <span>{cartItemsCount}</span>
                                            </a>
                                        </li>
                                        <li className="tab-item">
                                            <a href="#">
                                                <FormattedMessage id="cart.tab.sale-product"
                                                                  defaultMessage="Sale Product"/>
                                                <span>{cartItemsCount}</span>
                                            </a>
                                        </li>
                                        <li className="tab-item">
                                            <a href="#">
                                                <FormattedMessage id="cart.tab.out-of-stock"
                                                                  defaultMessage="Out of Stock"/>
                                                <span>{cartItemsCount}</span>
                                            </a>
                                        </li>
                                    </CartHeaderTab>
                                    <CartTotalAmount>
                                        <FormattedMessage id="cart.total-amount" defaultMessage="Total Amount"/>
                                        <span>{totalPrice?.formatted}</span>
                                        <button className="checkout" onClick={(e) => {
                                            Router.push('/checkout')
                                        }} disabled={checkSelectedCount() === 0}>
                                            <FormattedMessage id="cart.checkout" defaultMessage="Checkout"/>
                                        </button>
                                    </CartTotalAmount>
                                </CartHeader>
                                <CartContainer>
                                    <ProductListWrapper>
                                        <ProductListHeader>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    id="select-all"
                                                    name="select-all"
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    checked={checkAllState()}
                                                    onChange={() => selectItem(null, 'all')}

                                                />
                                                <label htmlFor="select-all"
                                                       className="custom-control-label"><FormattedMessage
                                                    id="cart.product.header.select-all"
                                                    defaultMessage="Select All"/></label>
                                            </div>
                                            <div>
                                                <FormattedMessage id="cart.product.header.unit" defaultMessage="Unit"/>
                                            </div>
                                            <div>
                                                <FormattedMessage id="cart.product.header.quantity"
                                                                  defaultMessage="Quantity"/>
                                            </div>
                                            <div>
                                                <FormattedMessage id="cart.product.header.total"
                                                                  defaultMessage="Total"/>
                                            </div>
                                            <div>
                                                <FormattedMessage id="cart.product.header.operation"
                                                                  defaultMessage="Operation"/>
                                            </div>
                                        </ProductListHeader>
                                        {
                                            itemsCart.map((store, idx) => (
                                                <ProductListContainer key={idx}>
                                                    <ProductListOption>
                                                        <div className="custom-control custom-checkbox">
                                                            <input
                                                                id={"store-" + store.store_id}
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                checked={checkStoreState(store.store_id)}
                                                                onChange={() => selectItem(store, 'store')}
                                                            />
                                                            <label htmlFor={"store-" + store.store_id}
                                                                   className="custom-control-label">
                                                                <FormattedMessage id="cart.product.list.store"
                                                                                  defaultMessage="Store"/>:
                                                                <span>{store.store_name}</span>
                                                            </label>
                                                        </div>
                                                        <button>
                                                            <SmallMessageIcon/>
                                                        </button>
                                                    </ProductListOption>
                                                    <ProductListContent>
                                                        {
                                                            store?.store_products?.map((product, idp) => (
                                                                <ProductItemWrapper key={idp}>
                                                                    <ProductItemContent>
                                                                        <div className="product-select">
                                                                            <div
                                                                                className="custom-control custom-checkbox">
                                                                                <input type="checkbox"
                                                                                       className={"custom-control-input store-" + store.store_id}
                                                                                       id={"product-" + product.id}
                                                                                       checked={product.selected}
                                                                                       onChange={() => selectItem(product, 'item')}
                                                                                />
                                                                                <label className="custom-control-label"
                                                                                       htmlFor={"product-" + product.id}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="product-image">
                                                                            <img
                                                                                src={product?.product?.thumbnail?.thumbnail || product.product.assets[0]?.thumbnail || product.product.assets[0]?.url || ""}
                                                                                alt=""/>
                                                                        </div>
                                                                        <div className="product-name">
                                                                            {product.product?.title}
                                                                        </div>
                                                                        <div className="product-detail">
                                                                            {
                                                                                product?.productAttribute?.variation?.map((variation, idx) => {
                                                                                    return <div
                                                                                        className="product-attribute"
                                                                                        key={idx}>{variation?.name}: {variation?.value}</div>
                                                                                })
                                                                            }
                                                                        </div>
                                                                        <button className="edit-button"
                                                                                onClick={() => editProduct(product)}>
                                                                            <EditButtonIcon/></button>
                                                                    </ProductItemContent>
                                                                    <ProductItemUnitPrice>
                                            <span
                                                className="old-price"> {product.product?.oldPrice?.formatted}</span>
                                                                        <span
                                                                            className="price"> {product.product?.price?.formatted}</span>
                                                                    </ProductItemUnitPrice>
                                                                    <ProductItemQuantity>
                                                                        <Counter
                                                                            className="quantity-counter"
                                                                            value={parseInt(product?.quantity)}
                                                                            onDecrement={() => removeItem(product)}
                                                                            onIncrement={() => addItem(product)}
                                                                            variant="lightHorizontal"
                                                                        />
                                                                    </ProductItemQuantity>
                                                                    <ProductItemAmount>
                                    <span>
                                        {product.total?.formatted}
                                    </span>
                                                                    </ProductItemAmount>
                                                                    <ProductItemOperation>
                                                                        <button className="wishlist-button">
                                                                            <FormattedMessage
                                                                                id="cart.product.item.wishlist"
                                                                                defaultMessage="To Wishlist"/>
                                                                        </button>
                                                                        <button className="remove-button"
                                                                                onClick={() => removeFromCart(product)}>
                                                                            <FormattedMessage
                                                                                id="cart.product.item.remove"
                                                                                defaultMessage="Remove"/>
                                                                        </button>
                                                                        <button className="similar-button">
                                                                            <FormattedMessage
                                                                                id="cart.product.item.similar"
                                                                                defaultMessage="Similar"/>
                                                                        </button>
                                                                    </ProductItemOperation>
                                                                </ProductItemWrapper>
                                                            ))
                                                        }
                                                    </ProductListContent>
                                                </ProductListContainer>
                                            ))
                                        }
                                    </ProductListWrapper>
                                </CartContainer>
                                <CartFooter>
                                    <CartFooterOperation>
                                        <div className="custom-control custom-checkbox">
                                            <input id="footer-select-all" name="select-all" type="checkbox"
                                                   className="custom-control-input"
                                                   checked={checkAllState()}
                                                   onChange={() => selectItem(null, 'all')}
                                            />
                                            <label htmlFor="footer-select-all"
                                                   className="custom-control-label"><FormattedMessage
                                                id="cart.product.header.select-all"
                                                defaultMessage="Select All"/></label>
                                        </div>
                                        <li>
                                            <a href="#" onClick={(e) => clearCart(e)}>
                                                <FormattedMessage id="cart.footer.remove" defaultMessage="Remove"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(e) => addWhishlist(e)}>
                                                <FormattedMessage id="cart.footer.wishlist" defaultMessage="Wishlist"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={(e) => itemShare(e)}>
                                                <FormattedMessage id="cart.footer.share" defaultMessage="Share"/>
                                            </a>
                                        </li>
                                    </CartFooterOperation>
                                    <CartFooterResult>
                                        <li>
                                            <FormattedMessage id="cart.footer.selected-products"
                                                              defaultMessage="Selected"/>
                                            <span className="cart-item-count">
                        {checkSelectedCount()}
                    </span>
                                            {cartItemsCount > 1 ? (
                                                <FormattedMessage id='cartItems' defaultMessage='items'/>
                                            ) : (
                                                <FormattedMessage id='cartItem' defaultMessage='item'/>
                                            )}
                                        </li>
                                        <li>
                                            <FormattedMessage id="cart.footer.total-real-amount"
                                                              defaultMessage="Total (excluding freight):"/>
                                            <span> {CURRENCY} {getPrice()} </span>
                                            <button className="checkout" onClick={(e) => {
                                                Router.push('/checkout')
                                            }} disabled={checkSelectedCount() === 0}>
                                                <FormattedMessage id="cart.checkout" defaultMessage="Checkout"/>
                                            </button>
                                        </li>
                                    </CartFooterResult>
                                </CartFooter>
                            </CartWrapper>
                        ) : (cartLoading && items ? (
                            <PageLoader/>
                        ) : (
                            <>
                                <NoProductImg>
                                    <NoCartBag/>
                                </NoProductImg>
                                <NoProductMsg>
                                    <FormattedMessage
                                        id='noProductFound'
                                        defaultMessage='No products found'
                                    />
                                </NoProductMsg>
                            </>
                        ))}
                    </CartBox>
                :
                    <CartMobile />
            }
        </>
    )
}

const CartBox = styled.div`
    background: ${themeGet('colors.white', '#FFFFFF')};
`;
const CartWrapper = styled.div<any>(
    css({
        position: 'relative',
        padding: ['0 0 100px', '0 0 50px', '0 2rem 50px'],
        maxWidth: '1150px',
        margin: '0 auto',
    })
);
const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 30px;
    border-bottom: 1px solid ${themeGet('colors.gray.800', '#C4C4C4')};
`;
const CartHeaderTab = styled.ul`
    display: flex;
    
    li.tab-item {
        padding: 10px 0;
        border-bottom: 1px solid ${themeGet('regular.transparent', 'transparent')};
        font-size: ${themeGet('fontSizes.md', '18')}px;
        cursor: pointer;
        
        &:hover {
            border-bottom: 1px solid ${themeGet('colors.primary.regular', '#F00000')};
            a {
                color: ${themeGet('colors.primary.regular', '#F00000')};
            }
        }
        a {
            color: ${themeGet('colors.black', '#000000')};
            text-decoration: none;
            padding: 0 20px;
            span {
                color: ${themeGet('colors.primary.regular', '#F00000')};
                font-size: ${themeGet('fontSizes.sm', '14')}px;
                padding-left: 10px;
            }
        }
        
        &:not(:first-child) a {
            border-left: 1px solid ${themeGet('colors.gray.800', '#C4C4C4')};
        }
    }
    
`;
const CartTotalAmount = styled.div`
    padding-bottom: 10px;
    span {
        color: ${themeGet('colors.primary.regular', '#F00000')};
        padding-left: 10px;
    }
    button.checkout {
        padding: 5px 15px;
        border: none;
        border-radius: 4px;
        background: ${themeGet('colors.primary.regular', '#F00000')};
        color: ${themeGet('colors.white', '#FFFFFF')};
        margin-left: 10px;
        cursor: pointer;
        
        &:hover {
            background: ${themeGet('colors.primary.hover', '#EF1D00')};
    }
`;
const CartContainer = styled.div`
`;
const ProductListWrapper = styled.div`
`;
const ProductListHeader = styled.div<any>(
    css({
        display: 'grid',
        gridColumnGap: '20px',
        gridRowGap: ['5px', '10px', '0'],
        gridTemplateColumns: [
            'minmax(0, 1fr) 10% 10% 10% 10%',
        ],
        padding: '20px 0 0 20px',

        'label': {
            cursor: 'pointer',
            marginLeft: '10px',
            '&:hover': {
                color: 'primary.regular',
            }
        }
    })
);
const ProductListContainer = styled.div`
    padding-top: 20px;
`;
const ProductListOption = styled.div`
    padding-left: 30px;
    display: flex;
    
    label {
        cursor: pointer;
        
        &:hover {
            color: ${themeGet('colors.primary.regular', '#F00000')};
        }
        span {
            margin-left: 10px;
        }
    }
    button {
        border: none;
        background: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        opacity: 0.7;
        transition: all 0.3s;
        
        &:hover {
            opacity: 1;
        }
    }
`;
const ProductListContent = styled.div`
    padding: 20px 0 0 20px;
`;
const ProductItemWrapper = styled.div<any>(
    css({
        display: 'grid',
        gridColumnGap: '20px',
        gridRowGap: ['5px', '10px', '0'],
        gridTemplateColumns: [
            'minmax(0, 1fr) 10% 10% 10% 10%',
        ],
        padding: '20px 0',
        border: '1px solid',
        borderColor: 'gray.700',
        backgroundColor: 'gray.100',

        '&:not(:first-child)': {
            borderTop: '0px',
        },
        '&:hover': {
            background: '#FFF3F7',
            borderColor: '#FFD3E2',

            '.edit-button, .similar-button': {
                opacity: 1,
            }
        },
        '.edit-button': {
            position: 'absolute',
            right: '10px',
            top: '-10px',
            zIndex: 1,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            opacity: 0,
            transition: 'all 0.3s'
        }
    })
);
const ProductItemContent = styled.div`
    position: relative;
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    
    div {
        padding: 0 5px;
    }
    
    .product-select {
        display: flex;
        align-items: center;
        label {
            &:before, &:after {
                top: 0;
                left: -5px;
            }
        }
    }
    
    .product-image {
        width: 85px;
        height: 85px;
        overflow: hidden;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .product-name {
        width: calc((100% - 120px) / 2);        
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .product-detail {
        width: calc((100% - 120px) / 2);
        color: ${themeGet('colors.gray.900', '#8E8E8E')};
    }
`;
const ProductItemUnitPrice = styled.div`
    font-size: ${themeGet('fontSizes.xs', '12')}px;
    span { 
        display: block;
    }
    .old-price {
        color: ${themeGet('colors.gray.900', '#8E8E8E')};
        text-decoration: line-through;
    }
`;

const ProductItemQuantity = styled.div`
    .quantity-counter {
        border: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
    }
`;
const ProductItemAmount = styled.div`
`;
const ProductItemOperation = styled.div`
    button {
        border: none;
        margin-bottom: 5px;
        display: block;
        background: transparent;
        cursor: pointer;
        
        &:hover {
            color: ${themeGet('colors.primary.regular', '#F00000')};
        }
        
        &.similar-button {
            opacity: 0;
            transition: all 0.3s;
            
            color: ${themeGet('colors.primary.regular', '#F00000')};
            
            &:hover {
                color: ${themeGet('colors.primary.hover', '#F00000')};
            }
        }
    }
`;
const CartFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    background: ${themeGet('colors.gray.600', '#C4C4C4')};
`;
const CartFooterOperation = styled.ul`
    display: flex;
    
    label {
        cursor: pointer;
        margin-left: 10px;
        
        &:hover {
            color: ${themeGet('colors.primary.regular', '#F00000')};
        }
    }
    
    a {
        padding-left: 20px;
        color: ${themeGet('colors.black', '#000000')};
        
        &:hover {
            color: ${themeGet('colors.primary.regular', '#F00000')};
        }
    }
`;
const CartFooterResult = styled.ul`
    display: flex;
    
    li {
        display: flex;
        margin-left: 30px;
        align-items: center;
        
        span {
            color: ${themeGet('colors.primary.regular', '#F00000')};
            padding: 0 10px;
            font-size: ${themeGet('fontSizes.xl', '24')}px;
        }
        span.cart-item-count {
            font-size: ${themeGet('fontSizes.sm', '13')}px;
        }
        button.checkout {
            padding: 15px 30px;
            border: none;
            background: ${themeGet('colors.primary.regular', '#F00000')};
            font-size: ${themeGet('fontSizes.lg', '21')}px;
            color: ${themeGet('colors.white', '#FFFFFF')};
            margin-left: 10px;
            cursor: pointer;
            
            &:hover {
                background: ${themeGet('colors.primary.hover', '#EF1D00')};
            }
        }
    }
`;
