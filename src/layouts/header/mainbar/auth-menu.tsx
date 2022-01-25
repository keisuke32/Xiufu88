import React from 'react';
import {Button} from 'components/button/button';
import {FormattedMessage} from 'react-intl';
import {AuthMenuBox, CartBox} from "./auth-menu.style";
import {UserAvatarIcon} from "assets/icons/UserAvatar";
import {ShoppingCartIcon} from "assets/icons/ShoppingCart";
import NavLink from "components/nav-link/nav-link";
import {useCart} from "../../../contexts/cart/use-cart";

interface Props {
    isAuthenticated: boolean;
    onJoin: () => void;
    onSignUp: () => void;
    onLogout: () => void;
    avatar: string;
}

const AuthMenu = ({isAuthenticated, onJoin, onSignUp, onLogout, avatar}: Props) => {
    const {itemsCount} = useCart();

    return !isAuthenticated ? (
        <AuthMenuBox>
            <UserAvatarIcon color="white"/>
            <Button variant="link" onClick={onJoin}>
                <FormattedMessage id="joinButton" defaultMessage="Sign In"/>
            </Button>
            <Button variant="link" onClick={onSignUp} className="register-button">
                <FormattedMessage id="signUpBtnText" defaultMessage="Sign Up"/>
            </Button>
        </AuthMenuBox>
    ) : (
        <>
            <AuthMenuBox>
                <UserAvatarIcon/>
                <Button variant="link" onClick={onLogout}>
                    <FormattedMessage id="logoutButton" defaultMessage="Log Out"/>
                </Button>
            </AuthMenuBox>
            <CartBox>
                <ShoppingCartIcon itemsCount={itemsCount} />
                <NavLink
                    className="menu-item"
                    href="/cart"
                    label="My Cart"
                    intlId="cartButton"
                />
            </CartBox>
        </>
    );
};
export default AuthMenu;
