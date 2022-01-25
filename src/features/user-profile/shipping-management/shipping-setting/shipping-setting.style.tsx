import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ShippingSettingContainer = styled.div`
    padding: 10px;
    border: 1px solid ${themeGet('colors.gray.700')};
`;

export const TabContainer = styled.div`
    padding: 50px 100px;
`;

export const TabHeader = styled.h3`
    font-size: ${themeGet('fontSizes.placeholder')}px;
    margin-bottom: 2rem;
`
export const TabContent = styled.div`
    
`;

export const FieldSet = styled.fieldset`
    display: grid;
    grid-template-columns: 20% auto;
    align-items: center;
    label {
        width: 100%;
        padding-right: 2rem;
        margin: 0px;
        text-align: right;
    }
    .input-group {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        
        input {
            width: 100%;
            padding: 0.45rem 1.5rem;
            font-size: ${themeGet('fontSizes.base')}px;
            border: 1px solid ${themeGet('colors.gray.700')};
            border-radius: none;
            transition: all 0.3s;
            
            &:focus {
                border-color: ${themeGet('colors.primary.regular')};
            }
            
            &:focus, &:hover: {
                outline: none;
            }
        }
        
        a {
            width: 25%;
            padding-left: 15px;
        }
    }
    
`;
