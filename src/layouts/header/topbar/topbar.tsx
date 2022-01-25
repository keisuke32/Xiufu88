import React from 'react';
import Router, { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import { RightBar } from './right-bar/right-bar';
import { LeftBar } from './left-bar/left-bar';
import TopbarWrapper from './topbar.style';
type Props = {
    className?: string;
};

const Topbar: React.FC<Props> = ({ className }) => {
    const isBrowser = typeof window !== 'undefined';

    const {
        authState: { isAuthenticated },
    } = React.useContext<any>(AuthContext);

    return (
        <TopbarWrapper className={className} id="layout-header">
            <div className="container container-flex">
                <LeftBar isAuthenticated={isAuthenticated} />
                <RightBar isAuthenticated={isAuthenticated} />
            </div>
        </TopbarWrapper>
    );
};

export default Topbar;
