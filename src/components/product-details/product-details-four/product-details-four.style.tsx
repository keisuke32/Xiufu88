import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ProductDetailsWrapper = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;
export const ProductDetailsWrapper1 = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  padding: 40px 60px;
`;

export const ProductPreview = styled.div`
  width: 40%;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  

  img {
    display: block;
    max-width: 100%;
    max-height: 450px;
    height: auto;
  }
  
  .PopularGoods {
    padding-top: 20px;
    position: absolute;
    left: 120px;
    bottom: 40px;
  }

  @media (max-width: 990px) {
    padding: 30px 40px 60px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 30px 25px 60px;
    order: 0;
  }
`;

export const MatchingPackage = styled.div`
  border: 1px solid ${themeGet('colors.gray.800')};
  background-color: ${themeGet('colors.white')};
  padding: 20px 30px;
`;

export const MatchingPackageTitle = styled.div`
  
`;

export const MatchingPackageContent = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 50px;
  .plus {
      padding-top: 30px;
  }
  a {
      display: flex;
  }
`;

export const MatchingPackageContentProduct = styled.div`
  display: flex;
  flex-direction:column;
  padding-right: 10px;
  img {
      width: 100px;
      margin: 0 auto;
  }
  text-align: center; 
  .title {
      padding-top: 20px;
      color: ${themeGet('colors.text.blue', '#004FB9')};
      width: 150px;
      font-size: 15px;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-align: center;
  }
`;

export const MatchingPackageContentTotal = styled.div`
  padding-left: 100px;
  display: block !important;
  span {
      color: ${themeGet('colors.price', '#EF3900')};
  }
  button {
      margin-top: 20px;
  }
`;

export const ProductDescriptionWrapper = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  box-sizing: border-box;
  margin-bottom: 40px;

  * {
    box-sizing: border-box;
  }
  padding: 40px 0;
`;

export const ProductDescriptionSidebar = styled.div`
  width: 20%;
  .productDescriptionSidebarSearch {
      width: 100%;
      padding: 10px;
      border: 1px solid ${themeGet('colors.gray.700', '#828282')};
      input {
            width: 90%;
            height: 30px;
            border: 1px solid ${themeGet('colors.gray.700', '#828282')};
            border-right: none;
      }
      button {
            color: white;
            width: 10%;
            height: 30px;
            cursor: pointer;
            border: 0;
            background-color: ${themeGet('colors.primary.light', '#FC7171')};
      }
  }
  .productDescriptionSidebarCategories {
      width: 100%;
      .productDescriptionSidebarCategoriesTitle {
            background-color: black;
            color: white;
            padding: 5px 10px;
      }
      .productDescriptionSidebarCategory {
            padding: 5px 10px;
            border: 1px solid ${themeGet('colors.gray.700', '#828282')};
            border-top: none;
            a {
                  color: black;
            }
      }
  }
  .productDescriptionSidebarRanking {
      width: 100%;
      margin-top: 15px;
      border: 1px solid ${themeGet('colors.gray.700', '#828282')};
      .productDescriptionSidebarRankingTitle {
            background-color: black;
            color: white;
            padding: 5px 10px;
      }
      .rankingProduct {
            display: flex;
            padding: 10px;
            img {
                  width: 20%;
            }
            height: 100px;
            .rankingProductDetail {
                  span.rankingProductTitle {
                        color: ${themeGet('colors.blue.link', '#004FB9')};
                  }
                  width: 80%;
                  span {
                        color: ${themeGet('colors.price', '#EF3900')};
                  }
                  color: ${themeGet('colors.text.regular', '#4F4F4F')};
            }
      }
      .readmore {
            text-align: center;
            color: ${themeGet('colors.blue.link', '#004FB9')};
            padding-bottom: 10px;
      }
  }
`;

export const ProductDescriptionDetail = styled.div`
      width: 80%;
      div.productDescriptionDetailTitle {
            width: 100%;
            display: flex;
            div {
                  width : 150px;
                  border: 1px solid ${themeGet('colors.gray.700', '#828282')};
                  text-align: center;
                  .active {
                        border-bottom: none;
                  }
                  cursor: pointer;
                  a {
                        display: block;
                        padding: 10px 30px;
                  }
            }
            div.blank {
                  width: calc(100% - 150px - 150px);
            }
            div.active {
                  border-bottom: none;
                  border-top: 3px solid ${themeGet('colors.red', '#BE0000')};
                  color: ${themeGet('colors.price', '#EF1D00')}
            }
      }
      div.detail {
            padding: 40px;
      }
      div.review {
            padding: 40px;
      }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 999;

  @media (max-width: 990px) {
    top: 20px;
    left: 25px;
  }
  .reusecore__button {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.regular', '#77798C')};
    height: 30px;
    .btn-icon {
      margin-right: 5px;
    }
    .btn-text {
      padding: 0;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  border-left: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  padding: 55px 60px;

  @media (max-width: 990px) {
    padding: 30px 40px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 30px 25px;
    border: 0;
    order: 1;
  }
`;

export const PayMethod = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: flex-start;
  div {
    padding-right: 30px;
  }
`;

export const ProductMetaInfo = styled.div`
  width: 10%;
`;

export const ProductShop = styled.div`
  border: 1px solid ${themeGet('colors.price', '#EF3900')};
`;

export const ProductShopTitle = styled.div`
  border-bottom: 1px solid ${themeGet('colors.price', '#EF3900')};
  text-align: center;
  padding: 10px 30px;
  color: ${themeGet('colors.price', '#EF3900')};
  font-size: ${themeGet('fontSizes.badge', '17')}px;
`;

export const ProductShopDetail = styled.div`
  padding: 10px 10px;
  line-height: 30px;
`;

export const ProductShopDetailButton = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  button {
      border: 1px solid ${themeGet('colors.gray.800', '#828282')};
  }
`;

export const RelatedProduct = styled.div`
`;

export const RelatedProductTitle = styled.div`
  padding: 10px 10px;
`;

export const RelatedProductContent = styled.div`
  display: inline-grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10px;
  width:100%;
`;

export const RelatedEachProduct = styled.div`
  cursor: pointer;
  &:hover {
      border: 1px dashed ${themeGet('colors.red')};
  }
  text-align: center;
  color: ${themeGet('colors.price', '#EF3900')};
  padding-bottom: 20px;
  img {
      width: 100%;
      height: 100%;
  }
`;

export const SaleTag = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.yellow.alternate', '#f4c243')};
  padding: 0 10px;
  line-height: 24px;
  border-radius: ${themeGet('radii.medium', '12px')};
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const DiscountPercent = styled.span`
  font-size: ${themeGet('fontSizes.xs', '12')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  line-height: 24px;
  background-color: ${themeGet('colors.secondary.regular', '#ff5b60')};
  padding-left: 20px;
  padding-right: 15px;
  position: relative;
  display: inline-block;
  position: absolute;
  bottom: 180px;
  right: -60px;
  -webkit-transform: translate3d(0, 0, 1px);
  transform: translate3d(0, 0, 1px);

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 12px 0;
    border-color: transparent ${themeGet('colors.secondary.regular', '#ff5b60')}
      transparent transparent;
  }

  &:after {
    content: '';
    position: absolute;
    left: -8px;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 8px;
    border-color: transparent transparent
      ${themeGet('colors.secondary.regular', '#ff5b60')} transparent;
  }
`;

export const PriceAndRatingWrapper = styled.div`
  background: ${themeGet('colors.gray.300')};
  padding: 30px 10px;
`;

export const ProductTitlePriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;

  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h1`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.2xl', '30')}px;
  font-weight: ${themeGet('fontWeights.semiBold', '600')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.5;
  display: flex;

  @media (max-width: 767px) {
    word-break: break-word;
  }
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
export const ProductSaleWrapper = styled.div`
  margin-left: 20%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
export const RatingWrapper = styled.div`
      display: flex;
      justify-content: space-evenly;
`
export const Rating = styled.div`
      font-size: ${themeGet('fontSizes.rating', '18')}px;
      span {
            margin-left: 10px;
            font-size: ${themeGet('fontSizes.base', '14')}px;
      }
`
export const Sold = styled.div`
      font-size: ${themeGet('fontSizes.rating', '18')}px;
      span {
            margin-left: 10px;
            font-size: ${themeGet('fontSizes.base', '14')}px;
      }
`
export const Divider = styled.div`
      border: 1px solid ${themeGet('colors.gray.800', '#828282')};
`
export const ProductPriceText = styled.div`
  font-family: ${themeGet('fonts.body', 'Microsoft YaHei')};
  font-size: ${themeGet('fontSizes.base', '14')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.gray.900', '#828282')};
  margin-right: 25px;
`;
export const ProductPrice = styled.div`
  font-family: ${themeGet('fonts.body', 'Microsoft YaHei')};
  font-size: calc(${themeGet('fontSizes.xl2', '27')}px - 1px);
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.price', '#EF3900')};
  @media (max-width: 1024px) {
      font-size: ${themeGet('fontSizes.md', '19')}px;
  }
  @media (max-width: 400px) {
      font-size: calc(${themeGet('fontSizes.base', '14')}px + 1px);
  }
`;

export const SalePrice = styled.span`
  font-family: ${themeGet('fonts.body', 'Microsoft YaHei')};
  font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.gray.1000', '#4F4F4F')};
  padding: 0 5px;
  overflow: hidden;
  position: relative;
  // margin-left: 10px;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: ${themeGet('colors.gray.1000', '#4F4F4F')};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;
export const DeliveryWrapper = styled.div`
      display: flex;
      padding: 10px;
`
export const AttributesWrapper = styled.div`
      
`
export const ProductAmountWrapper = styled.div`
      display: flex;
      padding: 10px;
      .amount-counter {
            width: 25%;
            border-radius: 0;
            border: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
            margin-left: 5px;
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
            button: first-child {
                  border-right: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
            }
            button: last-child {
                  border-left: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
            }
                        
      }
`
export const Attributes = styled.div`
      display: flex;
      padding: 10px;
      line-height: 2rem;
`
export const InfoTitle = styled.div`
      margin-right: 10px;
      width: 5rem;
      min-width: 5rem;
      color: ${themeGet('colors.gray.900', '#828282')};
`
export const Quantity = styled.div`
      margin-left: 10px;
      color: ${themeGet('colors.gray.900', '#828282')};
      line-height: 2.5rem;
`
export const DeliveryAddresses = styled.div`
      .dropbtn {
            margin-top: -5px;
            border: 0;
            font-weight: ${themeGet('fontWeights.normal', '400')};
            svg {
                  margin-left: 5px;
                  margin-top: 2px;
            }
      }
      .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }
            a: hover { 
                background-color: #ddd;
            }
      }
      &:hover {
            .dropdown-content {
                  display: block;
                  text-align: left;
            }
      }
`;
export const AttributesValues = styled.div`
      display: flex;
      flex-flow: wrap;
      span {
            margin-left: 5px;
            background: ${themeGet('colors.white', '#FFFFFF')};
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
            font-size: ${themeGet('fontSizes.sm', '13')}px;
            
      }
      button {
            margin-left: 5px;
            margin-top: 5px;
            background: ${themeGet('colors.white', '#FFFFFF')};
            color: ${themeGet('colors.gray.1000', '#4F4F4F')};
            border: 1px solid ${themeGet('colors.gray.700', '#E0E0E0')};
            font-size: ${themeGet('fontSizes.sm', '13')}px;
      }
      .active {
            background: ${themeGet('colors.primary.regular', '#F00000')};
            color: ${themeGet('colors.white', '#FFFFFF')};
     }
`
export const ProductWeight = styled.div`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798C')};
`;

export const ProductDescription = styled.div`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.medium', '#424561')};
  line-height: 2;
  margin-top: 30px;
`;

export const ProductCartWrapper = styled.div`
  display: flex;
  flex-flow: wrap;

  margin-top: 60px;
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  .buy-button{
      border: 1px solid;
      margin-right: 20px;
  }
`;

export const ProductCartBtn = styled.div`
  .card-counter {
    height: 48px;
    width: 130px;

    .control-button {
      padding: 10px 15px;
    }
  }

  .cart-button {
    padding-left: 30px;
    padding-right: 30px;

    .btn-icon {
      margin-right: 5px;

      svg {
        width: 14px;
        height: auto;
        @media (max-width: 990px) {
          width: 14px;
          margin-right: 8px;
        }
      }
    }
  }
  .quantity {
    width: 115px;
    height: 38px;
  }
`;

export const ButtonText = styled.span`
  /* @media (max-width: 767px) {
    display: none;
  } */
`;

export const ProductMeta = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const MetaTitle = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798C')};
  flex-shrink: 0;
`;

export const MetaItem = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
  font-weight: ${themeGet('fontWeights.semiBold', '600')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin-right: 3px;
  letter-spacing: 0.3px;

  &:after {
    content: ', ';
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const MetaSingle = styled.p`
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;

  a {
    &::last-child {
      ${MetaItem} {
        &:after {
          content: '';
        }
      }
    }
  }
`;

export const RelatedItems = styled.div`
  margin-top: 70px;
  margin-left: 30px;
  margin-right: 30px;

  @media (max-width: 990px) {
    margin-top: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  > h2 {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.xl', '24')}px;
    font-weight: ${themeGet('fontWeights.semiBold', '600')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    line-height: 1.2;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-left: 0;
      margin-bottom: 25px;
    }
  }

  > div > div {
    flex: 0 0 20%;
    max-width: 20%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;

    @media (max-width: 1500px) {
      flex: 0 0 20%;
      max-width: 20%;
    }
    @media (max-width: 1400px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    @media (max-width: 1060px) {
      flex: 0 0 33.3333333%;
      max-width: 33.3333333%;
    }
    @media (max-width: 1199px) and (min-width: 991px) {
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (max-width: 768px) {
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
    }
    @media (max-width: 767px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;
