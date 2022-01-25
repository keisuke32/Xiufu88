import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

const hideSearch = keyframes`
  from {
    display: none;
  }

  to {
    display: flex;
  }
`;

export const SearchWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  width: calc(100% - 150px);
  svg {
    display: block;
    width: 17px;
    height: auto;
  }

  @media only screen and (min-width: 991px) and (max-width: 1366px) {
    opacity: 0;
  }
`;
export const HeaderWrapper = styled.header`
`;

export const UserSection = styled.div`
    display: flex;
`

export const HeaderIconWrap = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 30px;
    span {
        padding-top: 5px;
        font-size: 9px;
        text-transform: uppercase;
        color: ${themeGet('colors.white')};
    }
    
    &:not(:first-child) {
        margin-left: 10px;
    }
`;
export const GetLiveHeaderWrapper = styled.header`
/* padding: 30px 60px; */
padding: 20px 30px;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
z-index: 99999;
top: 0;
left: 0;
width: 100%;
background-color: ${themeGet('colors.white', '#ffffff')};
box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
transition: all 0.3s ease;
&.home {
  position: absolute;
  background-color: transparent;
  box-shadow: none;
}

@media (min-width: 1600px) {
  padding: 25px 40px;
}

@media (max-width: 990px) {
  display: none;
}

.headerSearch {
  margin: 0 30px;

  @media only screen and (min-width: 991px) and (max-width: 1200px) {
    margin: 0 15px;

    input {
      width: 80%;
    }

    .buttonText {
      display: none;
    }
  }
}

&.unSticky {
  animation: ${positionAnim} 0.3s ease;
  .headerSearch {
    animation: ${hideSearch} 0.3s ease;
    display: none;
  }
}

&.sticky {
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: fixed;
  box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 1400px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .headerSearch {
    display: flex;

    form {
      background-color: ${themeGet('colors.gray.400', '#F3F3F3')};

      input {
        background-color: ${themeGet('colors.gray.400', '#F3F3F3')};
      }
    }

    @media only screen and (min-width: 991px) and (max-width: 1200px) {
      .buttonText {
        display: none;
      }
    }
  }
}

.popover-wrapper {
  .popover-content {
    padding: 20px 0;

    .menu-item {
      a {
        margin: 0;
        padding: 12px 30px;
        border-bottom: 1px solid ${themeGet('colors.gray.200', '#F7F7F7')};
        cursor: pointer;
        white-space: nowrap;

        &:last-child {
          border-bottom: 0;
        }
        &:hover {
          color: ${themeGet('colors.primary.regular', '#009e7f')};
        }
        &.current-page {
          color: ${themeGet('colors.primary.regular', '#009e7f')};
        }

        .menu-item-icon {
          margin-right: 15px;
        }
      }
    }
  }
}

.headerSearch {
  input {
    @media (max-width: 1400px) {
      padding: 0 15px;
      font-size: ${themeGet('fontSizes.base', '15')}px;
    }

    @media only screen and (min-width: 991px) and (max-width: 1200px) {
    }
  }
  button {
    @media (max-width: 1400px) {
      padding: 0 15px;
      font-size: ${themeGet('fontSizes.base', '15')}px;
    }
  }
}
`;


export const MainbarWrapper = styled.div`
  padding: 15px 40px 5px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${themeGet('colors.red', '#ffffff')};
  box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  transition: all 0.3s ease;
  &.home {
    position: relative;
    box-shadow: none;
  }

  @media (max-width: 990px) {
    display: none;
  }

  .headerSearch {
    margin: 0 30px;

    @media only screen and (min-width: 991px) and (max-width: 1200px) {
      margin: 0 15px;

      input {
        width: 80%;
      }

      .buttonText {
        display: none;
      }
    }
  }

  &.unSticky {
    animation: ${positionAnim} 0.3s ease;
  }

  &.sticky {    
    box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  }  

    .headerSearch {
      display: flex;

      form {
        background-color: ${themeGet('colors.gray.400', '#F3F3F3')};

        input {
          background-color: ${themeGet('colors.gray.400', '#F3F3F3')};
        }
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
        .buttonText {
          display: none;
        }
      }
    }

  .popover-wrapper {
    .popover-content {
      padding: 20px 0;

      .menu-item {
        a {
          margin: 0;
          padding: 12px 30px;
          border-bottom: 1px solid ${themeGet('colors.gray.200', '#F7F7F7')};
          cursor: pointer;
          white-space: nowrap;

          &:last-child {
            border-bottom: 0;
          }
          &:hover {
            color: ${themeGet('colors.primary.regular', '#009e7f')};
          }
          &.current-page {
            color: ${themeGet('colors.primary.regular', '#009e7f')};
          }

          .menu-item-icon {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .headerSearch {
    input {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
      }
    }
    button {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }
    }
  }
`;

export const CenterBox = styled.div`
    position: relative;
    // display: flex;
    width: 50%;
`;

export const MiniCategoryNavigation = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 20px;
    overflow: hidden;
    margin-left: 30px;
    margin-top: 10px;
`;

export const SavedSearchQuery = styled.div`
    margin-right: 39px;
    color: ${themeGet('colors.white')};
    font-size: ${themeGet('fontSizes.base')}px;
    white-space: nowrap;
    a { 
        color: ${themeGet('colors.white')};
    }
`;

export const MobileHeaderWrapper = styled.header`
    padding: 56px;
    @media (min-width: 991px) {
        display: none;
    }
`;

export const MobileHeaderInnerWrapper = styled.div`
    background: linear-gradient(to right, ${themeGet('colors.primary.regular')}, ${themeGet('colors.red')});
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const MobileHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  transition: 0.25s ease-in-out;
`;

export const MobileHeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  transition: 0.25s ease-in-out;
  
    
    .drawer__handler {
        padding: 4px 8px;
        border-radius: 20px;
        background: #FA4C4C;
        color: ${themeGet('colors.white')};
        
        span {
            padding-left: 5px;
        }
    }
`;

export const HeaderNavLinkWrap = styled.div`
    display: flex;
`;

export const DrawerBody = styled.div`
  .drawer-scrollbar {
    height: 100%;
  }
`;
export const DrawerContentWrapper = styled.div`
  padding-top: 60px;
`;

export const DrawerClose = styled.div`
  display: block;
  position: absolute;
  left: 35px;
  top: 14px;
  color: ${themeGet('colors.text.regular', '#77798c')};
  cursor: pointer;
  padding: 10px;
  z-index: 1;
  svg {
    display: block;
    width: 12px;
    height: auto;
  }
`;

export const DrawerProfile = styled.div`
  background-color: ${themeGet('colors.gray.200', '#F7F7F7')};
  padding: 45px;
`;

export const LogoutView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .sign_in {
    /* background: transparent; */
    border: 0;
    padding-left: 0;
    padding-right: 25px;
  }
  .sign_in,
  .sign_up {
    height: 36px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const LoginView = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const UserDetails = styled.div`
  h3 {
    font-size: calc(${themeGet('fontSizes.base' + 'px', '15px')} - 1px);
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    margin-bottom: 10px;
    line-height: 1.2;
  }
  span {
    display: block;
    font-size: ${themeGet('fontSizes.xs', '12')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
  }
`;

export const DrawerMenu = styled.div`
  padding: 40px 0;
`;

export const DrawerMenuItem = styled.div`
  &:last-child {
    .drawer_menu_item {
      margin-bottom: 0;
    }
  }
  .drawer_menu_item {
    a,
    .logoutBtn {
      display: block;
      padding: 5px 45px;
      font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
      font-weight: ${themeGet('fontWeights.regular', '400')};
      color: ${themeGet('colors.text.bold', '#0D1136')};
      margin-bottom: 19px;
      position: relative;
      transition: 0.15s ease-in-out;

      &:hover {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: transparent;
      }
      &.current-page {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
        font-weight: ${themeGet('fontWeights.bold', '700')};
        &:before {
          background-color: ${themeGet('colors.primary.regular', '#009e7f')};
        }
      }
    }
  }
`;

export const UserOptionMenu = styled.div`
  padding: 45px 0;
  border-top: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
`;

export const MobileHeaderNavigation = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: white;
    z-index: 999;
`;

export const MobileHeaderMenu = styled.ul`
    display: flex;
    justify-content: space-around;
    
    li {
        margin: 0 !important;
    }
    
    .menu-item {
        a {
            flex-flow: column;
            align-items: center;
            
            span {
                margin: 0;
            }    
        }
    }
`;
export default HeaderWrapper;
