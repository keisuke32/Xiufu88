import {ThemeProvider} from 'styled-components';
import {Router} from "next/router";
import {useEffect, useState} from "react";
import {defaultTheme} from 'site-settings/site-theme/default';
import {AppProvider} from 'contexts/app/app.provider';
import {AuthProvider} from 'contexts/auth/auth.provider';
import {LocationProvider} from "contexts/location/location.provider";
import {CartProvider} from 'contexts/cart/use-cart';
import {useMedia} from 'utils/use-media';
import AppLayout from 'layouts/app-layout';
import PageLoader from 'components/loader/page-loader';

// External CSS import here
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'emoji-mart/css/emoji-mart.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'components/multi-carousel/multi-carousel.style.css';
import 'react-spring-modal/dist/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'components/scrollbar/scrollbar.css';
import '@redq/reuse-modal/lib/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-dropzone-uploader/dist/styles.css';
import {GlobalStyle} from 'assets/styles/global.style';

// Language translation messages
import {messages} from 'site-settings/site-translation/messages';
import 'typeface-lato';
import 'typeface-poppins';
import {CheckoutProvider} from "../contexts/checkout/checkout.provider";



// need to provide types
export default function ExtendedApp({Component, pageProps}) {
    const mobile = useMedia('(max-width: 580px)');
    const tablet = useMedia('(max-width: 991px)');
    const desktop = useMedia('(min-width: 992px)');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Router.events.on('routeChangeStart', (url) => {
            setLoading(true);
        })
        Router.events.on('routeChangeComplete', () => {
            setLoading(false)
        })
        Router.events.on('routeChangeError', (err) => {
            setLoading(false)
            console.log(`error===>>${err}`)
        })
    }, [])

    return (
            <ThemeProvider theme={defaultTheme}>
                <LocationProvider messages={messages}>
                    <CartProvider>
                        <CheckoutProvider>
                            <AppProvider>
                                <AuthProvider>
                                    <AppLayout deviceType={{mobile, tablet, desktop}}>
                                        {loading ? <PageLoader /> : <Component
                                            {...pageProps}
                                            deviceType={{mobile, tablet, desktop}}
                                        />}
                                    </AppLayout>
                                    <GlobalStyle/>
                                </AuthProvider>
                            </AppProvider>
                        </CheckoutProvider>
                    </CartProvider>
                </LocationProvider>
            </ThemeProvider>
    );
}
