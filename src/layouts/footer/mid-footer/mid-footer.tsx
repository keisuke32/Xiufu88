import React from 'react';
import Router, { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import MidFooterWrapper from './mid-footer.style';
type Props = {
    className?: string;
};

const MidFooter: React.FC<Props> = ({ className }) => {
    const {
        authState: { isAuthenticated },
    } = React.useContext<any>(AuthContext);
    return (
        <MidFooterWrapper className={className} id="layout-header">
        </MidFooterWrapper>
    );
};

export default MidFooter;
