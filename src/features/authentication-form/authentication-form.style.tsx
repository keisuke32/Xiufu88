import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {Button} from 'components/button/button';

export {Button};

export const IconWrapper = styled.div`
  display: flex;
  margin-right: 6px;
`;

export const LoginWrapper = styled.div`
  text-align: center;
  background-color: ${themeGet('colors.white')};
`;

export const Wrapper = styled.div`
  text-align: center;
  padding: 50px 0;
`;

export const Container = styled.div`
  padding: 0 40px 60px 40px;

  @media (max-width: 768px) {
    padding: 0 30px 50px 30px;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 30px;

  img {
    max-width: 160px;
  }
`;

export const ModalBar = styled.div`
    min-height: 45px;
    margin-bottom: 15px;
    background: ${themeGet('colors.pink.highlight', '#FC7171')};
`;
export const Heading = styled.h3`
  margin-bottom: 10px;
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.2xl', '34')}px;
  font-weight: ${themeGet('fontWeights.semiBold', '600')};
  color: ${themeGet('colors.primary.regular', '#F00000')};
`;

export const SubHeading = styled.span`
  margin-bottom: 30px;
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  display: block;
`;

export const OfferSection = styled.div`
  padding: 20px;
  background-color: ${themeGet('colors.gray.200', '#F7F7F7')};
  color: ${themeGet('colors.primary.regular', '#009e7f')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Offer = styled.p`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  margin: 0;
  margin-bottom: 5px;
  text-align: right;
`;

export const AdditionLoginWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const AdditionLoginButton = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    
    span {
        padding-top: 10px;
        color: ${themeGet('colors.gray.900', '#828282')};
    }
`;

export const HelperText = styled.p`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  margin: 0;
  text-align: center;
  width: 100%;

  a {
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.blue.link', '#4285f4')};
    text-decoration: underline;
  }
`;

export const InputWrapper = styled.div`
    display: flex;
    margin-bottom: 25px;
    margin-right: auto;
    margin-left: auto;
    input {
        width: 80% !important;
        float: left;
        padding: 14px 30px;
        display: block!important;
        width: 100%!important;
        appearance: none!important;
        font-family: Microsoft YaHei!important;
        font-size: 15px!important;
        line-height: inherit!important;
        border: 1px solid!important;
        border-color: ${themeGet('colors.gray.600')} !important;
        border-radius: 0px !important;
        background-color: #ffffff!important;
        color: #0D1136!important;
        transition: all 0.25s ease!important;
        background-color: ${themeGet('colors.white')};
        height: 100% !important;
    }
    div.flag-dropdown{
        border-width: 0px !important;
    }
    ul > li {
        justify-content: space-between;
        display: flex;
        div.flag{
            display:none!important;
        }
    }
`;

export const InputIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 5px 10px;
    background: ${themeGet('colors.gray.800', '#C4C4C4')};
`;

// export const Input = styled.input`
//   width: 100%;
//   height: 48px;
//   border-radius: ${themeGet('radii.base', '6px')};
//   background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
//   border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
//   font-family: ${themeGet('fonts.body', 'Lato')};
//   font-size: ${themeGet('fontSizes.base', '15')}px;
//   font-weight: ${themeGet('fontWeights.regular', '400')};
//   color: ${themeGet('colors.text.bold', '#0D1136')};
//   line-height: 19px;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;
//   margin-bottom: 10px;

//   &:hover,
//   &:focus {
//     outline: 0;
//   }

//   &:focus {
//     border-color: ${themeGet('colors.primary.regular', '#009e7f')};
//   }

//   &::placeholder {
//     color: ${themeGet('colors.text.regular', '#77798c')};
//     font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
//   }

//   &::-webkit-inner-spin-button,
//   &::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }

//   &.disabled {
//     .inner-wrap {
//       cursor: not-allowed;
//       opacity: 0.6;
//     }
//   }
// `;

export const Divider = styled.div`
  padding: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.gray.900', '#828282')};
    line-height: 1;
    background-color: ${themeGet('colors.white', '#ffffff')};
    z-index: 1;
    position: relative;
    padding: 0 10px;
  }

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${themeGet('colors.gray.500', '#f1f1f1')};
    position: absolute;
    top: 50%;
  }
`;

export const LinkButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  box-shadow: none;
  padding: 0;
  font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.gray.900', '#828282')};
  cursor: pointer;
  &:hover {
    color: ${themeGet('colors.red')};
  }
`;


export const ErrorMsg = styled.span`
  margin-bottom: 30px;
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.error', '#b10000')};
  display: 'block';
`;


export const Placeholder = styled.label`
    font-family: ${themeGet('fonts.body', 'Microsoft YaHei')};
    font-size: ${themeGet('fontSizes.placeholder', '16')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    // white-space: nowrap;
    padding: 10px;
    margin-right: 18px;
    max-width: 150px;
    width: 150px;
    text-align: right;
    clear: both;
    float:left;
    // overflow: hidden;
    @media screen and (max-width: 768px) {
        display: none;
    };
`;

export const TextWrapper = styled.div`
    font-family: ${themeGet('fonts.body', 'Microsoft YaHei')};
    font-size: ${themeGet('fontSizes.placeholder', '16')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    white-space: nowrap;
    padding: 10px;
    margin-right: 18px;
    // max-width: 70px;
    width: 20%;
    text-align: right;
`;
export const CountDownWrapper = styled.div`
    font-family: ${themeGet('fonts.body', 'Microsoft YaHei')};
    font-size: ${themeGet('fontSizes.placeholder', '16')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.gray.900', '#828282')};
    white-space: nowrap;
    padding: 10px;
    margin-right: 18px;
    max-width: 70px;
    position: absolute;
    left: 70%;
    @media screen and (max-width: 1280px) {
        left: 75%;
    };
    @media screen and (max-width: 1024px) {
        left: 80%;
    };
    @media screen and (max-width: 768px) {
        left: 90%;
    };
    @media screen and (max-width: 400px) {
        left: 90%;
    };
`;

export const StepWizardWrapper = styled.div<any>`
    min-height: 400px;
    background: ${themeGet('colors.white', '#FFFFFF')};
    padding: 30px 0;
    overflow: hidden;
    height: 700px;
`;

export const ResendBtnWrapper = styled.div`
    position: absolute;
    right: 30%;
    padding-top: 5px;
    @media screen and (max-width: 1280px) {
        right: 25%;
    };
    @media screen and (max-width: 1024px) {
        right: 20%;
    };
    @media screen and (max-width: 768px) {
        right: 10%;
    };
    @media screen and (max-width: 400px) {
        right: 10%;
    };
`;

export const StepContainer = styled.div`
    max-width: 40%;
    @media screen and (max-width: 1280px) {
        margin-top:120px;
        max-width: 50%;
    };
    @media screen and (max-width: 1024px) {
        margin-top:80px;
        max-width: 60%;
    };
    @media screen and (max-width: 768px) {
        margin-top:20px;
        max-width: 80%;
    };
    @media screen and (max-width: 400px) {
        margin-top:0;
        max-width: 90%;
        margin: 0 0 0 1rem !important;
    };
    margin: 0 auto;

`;

export const OtherSettingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
`;
