import React from 'react';
import styled from 'styled-components';

import SignInModal from 'features/authentication-form/login'

export default function LoginPage() {
    return (
        <PageContainer>
            <LoginContainer>
                <SignInModal />
            </LoginContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    background: white;
`;
const LoginContainer = styled.div`
    max-width: 480px;
    margin: 0 auto;
    padding: 30px 0;
`;
