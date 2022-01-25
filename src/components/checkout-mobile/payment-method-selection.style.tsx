import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PaymentMethodSelectionWrapper = styled.div`
    position: relative;
    margin-top: 40vh;
    width: 100%;
    height: 60vh;
    background-color: ${themeGet('colors.white')};
    padding: 10px;
    .method_header {
        text-align: center;
        font-size: ${themeGet('fontSizes.base', '14')}px;
    }
    .method_content {
        padding-top: 20px;
        .method {
            display: flex;
            padding-bottom: 30px;
            .payment_icon {
                width: 20%;
                .add_payment {
                    color: ${themeGet('colors.white', '#FFFFFF')};
                    padding: 10px 15px;
                    border-radius: 4px;
                    background-color: ${themeGet('colors.primary.alternate', '#FA4C4C')};
                }
            }
            .card_number {
                padding-left: 20px;
                width: 70%;
                font-size: ${themeGet('fontSizes.base', '14')}px;
            }
            .selection_icon {
                width: 10%;
                text-align: right;
                span {
                    padding: 1px 4px;
                    border-radius: 50%;
                    background-color: ${themeGet('colors.primary.regular', '#F00000')};
                }
            }
        }
    }
`;