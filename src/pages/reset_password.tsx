import React from 'react';
import styled from 'styled-components';

import ForgotPasswordModal from "../features/authentication-form/forgot-password";

export default function ResetPasswordPAge() {
    return (
        <PageContainer>
            <LoginContainer>
                <ForgotPasswordModal />
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
