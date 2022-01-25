import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LayoutWrapper = styled.div`
  background-color: ${themeGet('colors.gray.200', '#F8F8F8')};

  @media (max-width: 990px) {
    background-color: ${themeGet('colors.white', '#ffffff')};
  }

  .reuseModalHolder {
    padding: 0;
    overflow: auto;
    border-radius: ${themeGet('radii.small', '3px')}
      ${themeGet('radii.small', '3px')} 0 0;
    border: 0;
  }
`;

export const FooterContainer = styled.div`
  display:grid;
  grid-gap:0px;
  grid-template-columns:repeat(4, minmax(240px, 1fr));
  width:100%;
  padding-bottom:32px;
  border-bottom:1px solid #E0E0E0;

  .item
  {
    padding:20px;
    justify-content:center;
    align-items:center;
    display:flex;
    .brand
    {
      width:40px;
      height:40px;
      border-radius:20px;
      border:3px solid #F30036;
      padding:2px;
      color:#F30036;
      font-size:20px;
      display:flex;
      justify-content:center;
      align-items:center;
      font-weight:bold;
    }

    .infocontainer
    {
      margin-left:15px;
      text-align:left;
      .title
      {
        font-size:18px;
      }

      .info
      {
        color:#828282;
        font-size:18px;
      }
    }
  }
`;

export const FooterContainer1 = styled.div`
  display:grid;
  grid-gap:0px;
  grid-template-columns:repeat(5, minmax(240px, 1fr));
  width:100%;
  padding:24px 80px;
  border-bottom:1px solid #E0E0E0;

  h1
  {
    font-size:15px;
  }

  li
  {
    font-size:15px;
  }
`;

export const FooterContainer2 = styled.div`
  padding:22px;
  .item
  {
    display:flex;
    justify-content:center;
    margin-bottom:25px;
  }
  ul
  {
    li
    {
      font-size:15px;
      float:left;
      border-right:1px solid black;
      padding:0px 2px;
      font-weight:600;
    }

    li:last-child
    {
      border-right:none;
    }
  }

  p{
    line-height:16px;
    font-size:12px;
    text-align:center;
    margin-bottom:15px;
    color: #4F4F4F;
  }
`;
