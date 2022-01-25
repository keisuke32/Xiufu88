import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const AddressMobileWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${themeGet('colors.white')};
    padding: 0 10px;
    .address_header {
        display: flex;
        .address_title {
            width: 100%;
            text-align: center;
            font-size: ${themeGet('fontSizes.placeholder', '16')}px;
        }
    }
    button {
        position: absolute;
        bottom: 0;
        width: calc(100% - 20px);
        border: 0;
        background-color: ${themeGet('colors.primary.regular', '#F00000')};
        border-radius: 20px;
        padding: 10px 0;
        color: ${themeGet('colors.white', '#FFFFFF')};
    }
`;

export const MyShippingAddress = styled.div`
    padding-top: 50px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
    .address_header {
        padding-left: 15%;
        span {
            font-size: ${themeGet('fontSizes.xs', '12')}px;
            line-height: 2;
        }
    }
    .address_description {
        display: flex;
        .icon_div {
            width: 15%;
            .location_icon {
                width: 30px;
                height: 30px;
                background-color: ${themeGet('colors.primary.regular', '#F00000')};
                border-radius: 50%;
                margin-top: 4px;
            }
        }
        .address_detail {
            width: 80%;
            span {
                font-size: ${themeGet('fontSizes.ms', '10')}px;
                color: ${themeGet('colors.primary.alternate', '#FA4C4C')};
            }
            
        }
        .see_detail {
            width: 5%;
            text-align: right;
        }
    }
`;

export const AddressOperation = styled.div`
    padding: 20px 0;
    display: flex;
    .default_icon {
        width: 10%;
        span {
            padding: 1px 4px;
            border-radius: 50%;
            background-color: ${themeGet('colors.primary.regular', '#F00000')};
        }
    }
    .default_content {
        padding-left: 20px;
        width: 70%;
        font-size: ${themeGet('fontSizes.base', '14')}px;
        color: ${themeGet('colors.gray.1000', '#4F4F4F')};
    }
    .default_edit {
        width: 20%;
        text-align: right;
        font-size: ${themeGet('fontSizes.base', '14')}px;
        color: ${themeGet('colors.gray.1000', '#4F4F4F')};
    }
`;