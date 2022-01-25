import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const RightBarBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  position: relative;

  .menu-item {
    a {
      padding: 0px 2rem;
      font-family: ${themeGet('fonts.body', 'Roboto')};
      font-size: ${themeGet('fontSizes.base', '14')}px;
      font-weight: ${themeGet('fontWeights.regular', '400')};
      color: ${themeGet('colors.text.light', '#747474')};
      line-height: 1.15rem;
      display: block;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      border-right: 1px solid ${themeGet('colors.text.light', '#747474')};

      @media (max-width: 1400px) {
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }
      &:hover {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
    }
    &.mobile_show {
        a {
            border-right: 56px;
        }
    
        
        &:hover ~ .qr-code-view {
            opacity: 1;
        }
    }
  }
`;


export const QRCodeView = styled.div`
    position: absolute;
    background: ${themeGet('colors.white')};
    padding: 5px;
    border-radius: 4px;
    top: 35px;
    right: 40px;
    box-shadow: 2px 2px 2px ${themeGet('colors.gray.900')};
    opacity: 0;
    transition: all 0.3s;
    
    &:before {
        content: "";
        position: absolute;
        top: -10px;
        left: 25px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 10px solid ${themeGet('colors.white')};
    }
`;
