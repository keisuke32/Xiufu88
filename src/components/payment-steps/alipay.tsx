import React from "react";
import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';

export default function Alipay() {
    return (
        <AliPayLoading>
            <div className="alipay-text">
                Coming soon
            </div>
        </AliPayLoading>
    )
}

const AliPayLoading = styled.div`
    text-align: center;
    width: 50%;
    margin: 0 auto;
    font-size: 20px;
    padding: 30px;
    background: black;
    color: white;
`;
