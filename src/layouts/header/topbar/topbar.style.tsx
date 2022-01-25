import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const TopbarWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 999999;
  width: 100%;
  background-color: #EEEEEE;
  
  @media (max-width: 990px) {
    display: none !important;
  }
`;

export default TopbarWrapper;
