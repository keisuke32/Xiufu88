import React, {useEffect} from 'react';
import Router, { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import Topbar from "./topbar/topbar";
import Bottombar from "./bottombar/bottombar";
import { RightMenu } from "./mainbar/right-menu/right-menu";
import { LeftMenu } from "./mainbar/left-menu/left-menu";
import {HeaderWrapper, MainbarWrapper, CenterBox, MiniCategoryNavigation, SavedSearchQuery} from './header.style';
import LogoImage from 'assets/images/logos/JiTeng_001_white 1.svg';
import UserImage from 'assets/images/user.svg';
import HeaderGetLive from './header_getlive';
import Search from 'features/search/search';
import useCategory from "data/use-category";
import {useAppDispatch, useAppState} from "contexts/app/app.provider";
import AuthenticationForm from "../../features/authentication-form";
import { openModal } from '@redq/reuse-modal';

type Props = {
    className?: string;
};

const Header: React.FC<Props> = ({ className }) => {

    const router = useRouter();
    const { pathname, query } = router;
    const stateCategories = useAppState('categories');
    let swrCategories = {data: stateCategories, error: null, loading: null};
    const appDispatch = useAppDispatch();

    const searchTerms = ['月饼', '华为', '口罩', 'NIKE', '国潮李宁', '粮油调味'];

    if(stateCategories.length == 0) {
        const {data, error, loading} = useCategory({hasProduct: true});
        swrCategories.data = data;
        swrCategories.error = error;
        swrCategories.loading = loading;
        useEffect(() =>{
            if(!loading){
                appDispatch({type: 'SET_CATEGORIES', payload: data});
            }
            return () => null;
        }, [])
    }

    const {
        authState: { isAuthenticated },
        authDispatch,
    } = React.useContext<any>(AuthContext);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            localStorage.removeItem('phone');
            authDispatch({ type: 'SIGN_OUT' });
            Router.push('/');
        }
    };

    const handleJoin = () => {
        if(router.pathname == '/register' || router.pathname == '/reset_password'){
            router.push('/login');
        }else {
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
        }
    };
    if(pathname.split('/')[1] == 'getlive' || pathname == '/addgetlive' || pathname == '/livevideo')
    {
        return <HeaderGetLive></HeaderGetLive>
    }

    let token = "";

    if(typeof window != 'undefined')
    {
        token = localStorage.getItem('access_token');
    }

    const handleSignUp = () => {
        authDispatch({
            type: 'SIGNUP',
        });
    };
    const setSearchTerm = (text) => {
        router.push({
            pathname: '/productfilter',
            query: {  text: text, category: query?.category },
        });
    }

    return (
        <HeaderWrapper>
            <Topbar className={className} />
            <MainbarWrapper className={className} id="layout-header">
                <div className="container container-flex">
                    <LeftMenu logo={LogoImage} />
                    <CenterBox>
                        <Search minimal={false} className="headerSearch" />
                        <MiniCategoryNavigation>
                            {searchTerms.map((text, idx) => <SavedSearchQuery key={idx}><a href="#" onClick={() => setSearchTerm(text)}>{text}</a></SavedSearchQuery>)}
                        </MiniCategoryNavigation>
                    </CenterBox>
                    <RightMenu
                        isAuthenticated={isAuthenticated}
                        onJoin={handleJoin}
                        onSignUp={handleSignUp}
                        onLogout={handleLogout}
                        avatar={UserImage}
                    />
                </div>
            </MainbarWrapper>
            <Bottombar categoryData={swrCategories.data} />
        </HeaderWrapper>
    );
};

export default Header;
