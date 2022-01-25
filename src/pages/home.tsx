import React from 'react';

import {Modal} from '@redq/reuse-modal';
import dynamic from 'next/dynamic';

import DesktopHome from "./home/home-desktop";
import MobileHome from "./home/home-mobile";

import {ModalProvider} from "../contexts/modal/modal.provider";
import {SEO} from "../components/seo";
import {siteMetadata} from "../site-settings/site-metadata";

const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
    ssr: false,
});

export default function HomePage({deviceType}) {

    return (
        <>
        <SEO title={siteMetadata.home.title} description={siteMetadata.home.description} />
        <ModalProvider>
            <Modal>
                {
                    deviceType.desktop ?
                        <DesktopHome />
                        :
                        <MobileHome />
                }
                {
                    // deviceType.desktop && <CartPopUp deviceType={deviceType}/>
                }
            </Modal>
        </ModalProvider>
        </>
    );
}
