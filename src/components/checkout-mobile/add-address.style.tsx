import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const AddAddressWrapper = styled.div`
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
    .add_address_form {
        padding-top: 50px;
        .input_row {
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
            .input_title {
                width: 20%;
            }
            .input_div {
                width: 60%;
                input {
                    width: 100%;
                    border: 0;
                }
            }
            .input_operation {
                width: 20%;
                text-align: right;
            }
        }
        .option_row {
            display: flex;
            padding: 10px 0;
            .option_div {
                width: 20%;
                .custom-classname.react-toggle .react-toggle-track {
                    background-color: #C4C4C4;
                }
                .custom-classname.react-toggle--checked .react-toggle-track {
                    background-color: ${themeGet('colors.primary.regular', '#F00000')};
                }
            }
            .option_content {
                width: 80%;
            }
        }
    }
    button {
        margin-top: 50px;
        width: calc(100% - 20px);
        border: 0;
        background-color: ${themeGet('colors.primary.regular', '#F00000')};
        border-radius: 20px;
        padding: 10px 0;
        color: ${themeGet('colors.white', '#FFFFFF')};
    }
`;