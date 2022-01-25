import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ConfirmMsgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    text-align: center;
    .message_wrapper {
        border-radius: 10px;
        margin: 0 auto;
        width: fit-content;
        background-color: ${themeGet('colors.white', '#FFFFFF')};
        margin-top: 40vh;
        .message_content {
            font-size: ${themeGet('fontSizes.xs', '12')}px;
            padding: 20px 50px;
        }
        .operation_button {
            font-size: ${themeGet('fontSizes.sm', '13')}px;
            display: flex;
            border-top: 1px solid ${themeGet('colors.gray.700', '#E0E0E0')};
            div {
                width: 50%;
                text-align: center;
                padding: 10px 0;
            }
            .operation_cancel {
                color: ${themeGet('colors.gray.900', '#828282')};
                border-right: 1px solid ${themeGet('colors.gray.700', '#E0E0E0')};
            }
            .operation_delete {
                color: ${themeGet('colors.primary.regular', '#F00000')};
            }
        }
    }
`;