import React from 'react';
import Router, { useRouter } from 'next/router';
import { openModal } from '@redq/reuse-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import { FooterWrapper } from './footer.style';

import TopFooter from "./top-footer/top-footer";
import MidFooter from "./mid-footer/mid-footer";
import BotFooter from "./bot-footer/bot-footer";

type Props = {
    className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
    const {
        authState: { isAuthenticated },
        authDispatch,
    } = React.useContext<any>(AuthContext);
    const { pathname, query } = useRouter();
    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            localStorage.removeItem('phone');
            authDispatch({ type: 'SIGN_OUT' });
            Router.push('/');
        }
    };

    const handleJoin = () => {
        authDispatch({
            type: 'SIGNIN',
        });

        openModal({
            show: true,
            overlayClassName: 'quick-view-overlay',
            closeOnClickOutside: true,
            component: AuthenticationForm,
            closeComponent: '',
            config: {
                enableResizing: false,
                disableDragging: true,
                className: 'quick-view-modal',
                width: 458,
                height: 'auto',
            },
        });
    };

    const handleSignUp = () => {
        authDispatch({
            type: 'SIGNUP',
        });

        openModal({
            show: true,
            overlayClassName: 'quick-view-overlay',
            closeOnClickOutside: true,
            component: AuthenticationForm,
            closeComponent: '',
            config: {
                enableResizing: false,
                disableDragging: true,
                className: 'quick-view-modal',
                width: 458,
                height: 'auto',
            },
        });
    };

    return (
        <FooterWrapper>
            <TopFooter/>
            <MidFooter />
            <BotFooter />
        </FooterWrapper>
    );
};

export default Footer;
