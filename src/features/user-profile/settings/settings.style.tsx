import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Row as Rows, Col as Cols } from 'react-styled-flexboxgrid';

const SettingsForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeadingSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${themeGet('colors.gray.500', '#FFFFFF')};
  border-bottom: 1px solid ${themeGet('colors.gray.800', '#FFFFFF')};
  padding: 10px 25px;
  
  li {
    cursor: pointer;
    
    &:not(:first-child) {
      padding-left: 30px;
    }
    
    &.current-page {
      color: ${themeGet('colors.primary.regular', '#FFFFFF')};
    }
  }
`;

const SettingsFormContent = styled.div`
  margin-bottom: 50px;
  border: 1px solid ${themeGet('colors.gray.800', '#FFFFFF')};
  &:last-child {
    margin-bottom: 0;
  }
`;
const SettingsContainer = styled.div`
  padding: 35px 50px;
  
  .setting-note {
    margin-bottom: 25px;
    
    .profile-name {
      padding: 0 5px;
      color: ${themeGet('colors.blue.regular', '#FFFFFF')};
    }
  }
`;
const InformationContent = styled.div`
`;

const InformationItem = styled.div`
  display: grid;
  grid-template-columns: 15% minmax(0,1fr);
  
  span {
    text-align: right;
    padding-right: 20px;
    
    &.require {
      position: relative;
      
      &:before {
        content: "*";
        position: relative;
        left: -10px;
      }
    }
  }
  
  .profile-avatar {
    display: flex;
    width: 90px;
    height: 90px;
    border: 2px solid ${themeGet('colors.gray.700', '#FFFFFF')};
    overflow: hidden;
    img {
      object-fit: contain;
      object-position: center;
    }
  }
  
  .profile-input-group {
    display: flex;
    input {
      border: 1px solid ${themeGet('colors.gray.700', '#FFFFFF')};
      padding: 7px;
      font-size: ${themeGet('fontSizes.sm', 13)}px;
      max-width: 60%;
      
      &:focus {
        outline: none;
      }
      
      
    }
  }
  
  .profile-nickname .note {
    display: block;
    color: ${themeGet('colors.gray.900', '#FFFFFF')};
    padding-top: 5px;
    text-align: left;
  }
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  .profile-phone{
    input{
        margin-left: 40px;
    }
  }
`;

const UserAvatarSection = styled.div`
    overflow: hidden;
`;

const AvatarButtonGroup = styled.div`
    padding-bottom: 20px;
    
    button, label {
        svg {
            margin-right: 0.2rem;
        }
    }
`;

const UserAvatarContent = styled.div`
    display: grid;
    grid-template-columns: auto 50%;
    grid-gap: 4rem;
    
    p {
        color: ${themeGet('colors.gray.900')};
        margin-bottom: 0.3rem;
    }
    
`;

const MainAvatarContent = styled.div`
`;

const MainAvatar = styled.div`
    position: relative;
    background: ${themeGet('colors.gray.300')};
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 1;
    }
`;

const ExtraAvatarContent = styled.div`
    display: flex;
    flex-flow: column;
`;

const ExtraAvatarGrid = styled.div`
    display: grid;
    grid-template-columns: 60% auto;
    grid-gap: 2rem;
    height: 100%;
    align-items: center;
`;

const ExtraAvatar160 = styled.div`
    position: relative;
    background: ${themeGet('colors.gray.300')};
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    float: left;
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 1;
    }
    
    p {
        font-size: 0.75rem;
    }
    p:last-child {
        position: absolute;
        bottom: -30px;
    }
`;
const ExtraAvatar60 = styled.div`
    position: relative;
    background: ${themeGet('colors.gray.300')};
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    float: left;
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 1;
    }
    
    p {
        font-size: 0.3rem;
    }
`;
const ExtraAvatar30 = styled.div`
    position: relative;
    background: ${themeGet('colors.gray.300')};
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    float: left;
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 1;
    }
    
    p {
        font-size: 0.1rem;
    }
    
`;
export {
    SettingsForm,
    HeadingSection,
    SettingsFormContent,
    SettingsContainer,
    InformationContent,
    InformationItem,
    UserAvatarSection,
    AvatarButtonGroup,
    UserAvatarContent,
    MainAvatarContent,
    MainAvatar,
    ExtraAvatarContent,
    ExtraAvatarGrid,
    ExtraAvatar160,
    ExtraAvatar60,
    ExtraAvatar30,
};
