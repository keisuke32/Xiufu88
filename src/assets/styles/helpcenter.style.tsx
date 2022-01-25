import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import HelpCenter from "../../assets/images/helpcenter.png";

const HelpCenterWrapper = styled.div`
`;

export const HelpCenterMenu = styled.div`
  width: 100%;
  background-color: ${themeGet('baseColor.black', '#000000')};
  color: ${themeGet('baseColor.white', '#ffffff')};
  padding: 10px 100px;
  font-size: ${themeGet('fontSizes.rating', '18')}px;
`;

export const HelpCenterContent = styled.div`
  width: 100%;
  padding: 10px 50px;
  display: flex;
`;

export const HelpCenterContentCategory = styled.div`
  width: 20%;
  padding: 10px 30px;
  background-color: ${themeGet('baseColor.white', '#ffffff')};
  li.active { 
    color: ${themeGet('baseColor.red', '#BE0000')};
  }
  li {
    font-size: ${themeGet('fontSizes.base', '14')}px;
    padding: 10px 10px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    svg {
        float: right;
        margin-top: 5px;
    }
    ul {
        padding-top: 15px;
    }
    &:hover {
        color: ${themeGet('baseColor.red', '#BE0000')};
        cursor: pointer;
        ul {
            color: ${themeGet('baseColor.black', '#000000')};
        }
    }
  }
`;

export const HelpCenterContentWrapper = styled.div`
  width: 80%;
  margin-left: 50px;
  background-color: ${themeGet('baseColor.white', '#ffffff')};
  .content_hero {
    background-image: url(${HelpCenter});
    background-color: black;
    height: 320px;
    position: relative;
    form {
        width: 80%;
        position: absolute;
        top: calc(50% - 20px);
        left: 10%;
    }
  }
  .content {
    padding: 20px 50px;
    .content_header {
        font-size: ${themeGet('fontSizes.rating', '18')}px;
    }
    .content_content {
        ul {
            list-style-type: circle;
            padding: 20px 50px;
            display: inline-grid;
            grid-template-columns: 50% 50%;
            width:100%;
            li {
                padding-bottom: 20px;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                    top: 8px;
                    left: -10px;
                }
            }
        }
    }
  }
`

export const HelpCenterDetailContentWrapper = styled.div`
  width: 80%;
  margin-left: 50px;
  background-color: ${themeGet('baseColor.white', '#ffffff')};
  .search-form {
      margin-top: 100px;
      margin-left: 10%;
      form {
        width: 80%;
        margin-bottom: 20px;
      }
  }
  .detail-header {
      width: 90%;
      margin: 0 auto;
      padding: 30px 0;
      border-bottom: 1px solid ${themeGet('colors.gray.800', '#ffffff')};
  }
  .detail-content {
      padding: 20px;
      height: calc(100% - 250px);
      iframe {
        display: block;
        border: none;
        width: 100%;
        height: 100%;
        padding: 20px;
      }
  }
`

export default HelpCenterWrapper;
