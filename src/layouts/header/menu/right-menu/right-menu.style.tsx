import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const RightMenuBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left:auto;
  .menu-icon {
    min-width: 14px;
    margin-right: 7px;
  }

  .register_menu
  {
    margin-right:30px;
    li{
      float:left;
      padding-left:15px;
      padding-right:15px;
      border-right:1px solid white;
      a{
        color:white;
      }
    }

    li:last-child
    {
      border:none;
    }
  }

  .carticon
  {
    margin-left:15px;
    margin-right:30px;
    color:white;
  }

  .menu-item {
    a {
      font-family: ${themeGet('fonts.body', 'Lato')};
      font-size: ${themeGet('fontSizes.base', '15')}px;
      font-weight: ${themeGet('fontWeights.bold', '700')};
      color: ${themeGet('colors.text.bold', '#0D1136')};
      line-height: 1.2em;
      display: block;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      margin-right: 45px;

      @media (max-width: 1400px) {
        margin-right: 35px;
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }
      &:hover {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
      &.current-page {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
    }
  }
  
  .rightmenu
  {
    li{
      color:#747474;
      font-size:14px;
      display:flex;
      align-items:center;
      padding-right:38px;
      padding-left:38px;
      border-right:1px solid #747474;
      float:left;
      cursor:pointer;
    }

    li:last-child
    {
      border:none;
    }
  }

  .user-pages-dropdown {
    .popover-handler {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .popover-content {
      .inner-wrap {
        /* padding: ; */
      }
    }
  }
`;


