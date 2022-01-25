import React, {useEffect, useRef} from 'react';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import Sticky from 'react-stickynode';
import {useAppDispatch, useAppState} from 'contexts/app/app.provider';
import Header from './header/header';
import Footer from "./footer/footer";
import {LayoutWrapper} from './layout.style';
import {isCategoryPage} from './is-home-page';
import {getItemsFromCart} from "../data/use-checkout";
import {AuthContext} from "../contexts/auth/auth.context";
import {useCart} from "../contexts/cart/use-cart";

const MobileHeader = dynamic(() => import('./header/mobile-header'), {
    ssr: false,
});

type LayoutProps = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    token?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = (
    {
        children,
        token,
        deviceType
    }) => {

    const {pathname, query} = useRouter();
    const isSticky = useAppState('isSticky');
    
    const setToggleState = useAppDispatch();

    const {authState} = React.useContext<any>(AuthContext);
    const {setCart, setCartLoading, cartLoading} = useCart();

    const {cartProducts, cartPrice, deliveryPrice, totalPrice, error, mutate, loading} = getItemsFromCart({token: authState?.token});
    
    console.log('queryname',query)
    useEffect(() => {
        if (pathname.includes('/home') || pathname.includes('/liveproduct')) {
            setToggleState({type: 'SET_TOGGLE_MENU', payload: true});
        } else {
            setToggleState({type: 'SET_TOGGLE_MENU', payload: false});
        }
    }, [pathname]);

    useEffect(() => {
        console.log('cart', cartLoading);
        if (authState.isAuthenticated) {
            setCartLoading(loading);
            if (!error && !loading)
                setCart({items: cartProducts, cartPrice, deliveryPrice, totalPrice})
        }
    }, [authState.isAuthenticated, cartProducts, loading]);

    console.log('pathname',pathname);
    return (
        <LayoutWrapper className={`layoutWrapper`}>
            <Sticky enabled={isSticky} innerZ={1001}>
                {
                    // !deviceType.desktop ?
                    //     <MobileHeader className={isSticky ? 'sticky' : 'unSticky'} livestream={pathname.includes('/shoplive')}/>
                    //     :
                    // deviceType.desktop ? <Header className={isSticky ? 'sticky' : 'unSticky'} />:<MobileHeader className={isSticky ? 'sticky' : 'unSticky'} livestream={pathname.includes('/shoplive')} enableheader={pathname.includes('/getlive') && query.slug != ""}/>
                    deviceType.desktop && <Header className={isSticky ? 'sticky' : 'unSticky'} />

                }
            </Sticky>
            {children}
            {
                deviceType.desktop && <Footer />
            }
        </LayoutWrapper>
    );
};

export default Layout;
