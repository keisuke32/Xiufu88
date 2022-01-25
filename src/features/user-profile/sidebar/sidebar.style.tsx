import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import NavLink from 'components/nav-link/nav-link';

const SidebarWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.gray.600')};
`;

const SidebarTab = styled.ul`
  display: flex;
  width: 100%;
`;
const TabHeader = styled.li`
    display: block;
    padding: 0;
    width: 50%;
    color: ${themeGet('colors.gray.800')};
    cursor: pointer;
    
    &:first-child {
        box-shadow: inset -2px -2px 2px ${themeGet('colors.gray.800')};
    }
    
    &:last-child {
        box-shadow: inset 2px -2px 2px ${themeGet('colors.gray.800')};
    }
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        width: 100%;
        border-bottom: 1px solid transparent;
    }
    
    &.active, &:hover {
        padding: 0 2px;
        box-shadow: 2px -2px 2px ${themeGet('colors.gray.800')};
        color: ${themeGet('colors.black', '#000000')};
        font-weight: ${themeGet('fontWeights.heading', 700)};
        
        span {
            border-bottom-color: ${themeGet('colors.gray.500')};
        }
    }
`;

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 0;
    box-shadow: 2px 2px 2px ${themeGet('colors.gray.800')};
`;
const SidebarMenuTitle = styled.div`
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.primary.regular', '#009e7f')};
    transition: color 0.35s ease;
    padding: 10px 20px;
`;
const SidebarMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  .menu-item {
    width: 100%;
    
    a {
        display: block;
        font-family: ${themeGet('fonts.body', 'Lato')};
        font-size: ${themeGet('fontSizes.base', '15')}px;
        font-weight: ${themeGet('fontWeights.bold', '700')};
        color: ${themeGet('colors.black', '#0D1136')};
        transition: color 0.35s ease;
        padding: 10px 20px;
        cursor: pointer;
        
        &.current-page {
          color: ${themeGet('colors.primary.regular', '#009e7f')};
          border-left: 5px solid ${themeGet('colors.primary.regular', '#009e7f')};
        }
        
        &:hover {
          color: ${themeGet('colors.primary.regular', '#009e7f')};
        }
        
        &:last-child {
          margin-bottom: 0;
        }
    }
  }
`;

const SidebarChildContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
    
    .menu-item {
        a {
            color: ${themeGet('colors.gray.900', '#0D1136')};
        
            &.current-page {
              color: ${themeGet('colors.primary.regular', '#009e7f')};
              border-left: none;
            }
        }
    }
`;

const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  transition: color 0.35s ease;
  padding: 15px 20px;
  outline: 0;

  &:hover {
    color: ${themeGet('colors.primary.regular', '#009e7f')};
  }

  &:focus {
    box-shadow: none;
  }

  margin-bottom: 0;
`;

export { SidebarWrapper, SidebarTab, TabHeader, SidebarContent, SidebarMenuTitle, SidebarMenu, SidebarChildContent, LogoutButton };
