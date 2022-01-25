import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LeftBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  
  .menu-item a {
    padding: 0 40px;
    color: ${themeGet('colors.text.light', '#747474')};
    
    &:hover {
    color: ${themeGet('colors.primary.regular', '#009e7f')};
    }
  }
`;
