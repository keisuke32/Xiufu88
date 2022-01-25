import React from 'react';
import { AuthorizedTopbarMenu } from './authorized-topbar-menu';

interface Props {
    isAuthenticated: boolean;
}

const AuthMenu = ({ isAuthenticated }: Props) => {
    return !isAuthenticated ? (
        <></>
    ) : (
        <AuthorizedTopbarMenu />
    );
};
export default AuthMenu;
