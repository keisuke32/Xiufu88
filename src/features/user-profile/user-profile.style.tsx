import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';

const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: ${themeGet('colors.white', '#ffffff')};

  @media only screen and (max-width: 990px) {
    padding: 100px 0 60px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1280px) {
    padding: 130px 15px 60px;
  }
`;

const ProfileContainer = styled.div<any>(
    css({
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        padding: ['20px 0 100px', '20px 0 50px', '20px 2rem 50px'],
        maxWidth: '1150px',
        width: '100%',
        margin: '0 auto',
    })
);
const SidebarSection = styled.div`
  width: 200px;
  flex-shrink: 0;
  margin-right: 20px;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const ContentBox = styled.div`
  width: calc(100% - 220px);
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1199px) {
    width: 100%;
    border: 0;
    padding: 20px;
  }
`;

const ProfileContentWrapper = styled.div`

`;
const SectionHeader = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        background: ${themeGet('colors.fog.alternate', '#F3F3FF')};
        border: 1px solid ${themeGet('colors.fog.regular', '#F3F3FF')};
        
        &.recommend-product-section-header {
                background: #8987FF;
                color: ${themeGet('colors.white', '#FFFFFF')};
        }
        .header-content {
                display: flex;
                justify-content: center;
                align-items: center;
                .profile-avatar {
                        display: flex;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        overflow: hidden;
                        
                        img {
                                object-position: center;
                                object-fit: contain;
                        }
                        div.avatar {
                                width: 100%;
                                text-align: center;
                                line-height: 50px;
                                font-size: ${themeGet("fontSizes.xl")}px;
                                font-weight: ${themeGet("fontWeights.bold")};
                        }
                }
                .header-name {
                        margin-left: 15px;
                }
        }
        
        a.header-tool {
                color: ${themeGet('colors.black', '#000000')};
                cursor: pointer;
        }
        
        a.header-tool-button {
                padding: 4px 8px;
                cursor: pointer;
                border: 1px solid ${themeGet('colors.gray.800', '#FFFFFF')};
                background: ${themeGet('colors.gray.300', '#FFFFFF')};
                color: ${themeGet('colors.gray.1000', '#FFFFFF')};
                font-size: ${themeGet('fontSizes.xs', 12)}px;
        }
`;

const SectionContent = styled.div`;
        border: 1px solid ${themeGet('colors.gray.700', '#FFFFFF')};
        padding: 30px 20px;
        &.recommend-product-section-content {
                background: ${themeGet('colors.fog.light', '#F8F8FF')};
        }
`;

const SectionFooter = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        
        .expand-more {
                cursor: pointer;
                color: ${themeGet('colors.gray.1000', '#FFFFFF')};
                font-size: ${themeGet('fontSizes.sm', 13)}px;
        }
`
const ProfileSummarySection = styled.div`
        margin-bottom: 30px;

.profile-status {
        display: grid;
        grid-template-columns: minmax(0,1fr) 20% 20% 20% 20%;
        padding: 20px 0;
        border: 1px solid ${themeGet('colors.fog.regular', '#F3F3FF')};
        
        li {
                text-align: center;
                padding: 0 10px;
                
                &:not(:first-child) {
                        border-left: 1px solid ${themeGet('colors.fog.regular', '#F3F3FF')};
                }
                
                span {
                        margin-left: 5px;
                        color: ${themeGet('colors.primary.regular', '#FFFFFF')};
                }
        }
        
}
`;

const ShippingStatusSection = styled.div`
        margin-bottom: 30px
`;

const ProductItem = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid ${themeGet('colors.gray.500', '#FFFFFF')};
        
        .shipping-detail {
                display: flex;
                align-items: center;
                .product-image {
                        width: 74px;
                        height: 74px;
                        overflow: hidden;
                        
                        img {
                                width: 100%;
                                height: auto;
                        }
                }
                
                .shipping-status {
                        margin-left: 34px;
                }
        }
        
        a.check-invoice {
                padding: 4px 8px;
                margin-right: 10px;
                cursor: pointer;
                border: 1px solid ${themeGet('colors.gray.800', '#FFFFFF')};
                background: ${themeGet('colors.gray.300', '#FFFFFF')};
                color: ${themeGet('colors.gray.1000', '#FFFFFF')};
                font-size: ${themeGet('fontSizes.xs', 12)}px;
        }
`;
const RecommendProductSection = styled.div`
`;
const ProfileBreadCrumbsWrapper = styled.ul`
        display: flex;
        padding: 10px 20px;
        color: ${themeGet('colors.black', '#FFFFFF')};
        background: ${themeGet('colors.gray.400')};
        border: 1px solid ${themeGet('colors.gray.700')};
        margin-bottom: 5px;
        
        li {
                position: relative;
        }
        li:not(:first-child) {
                padding-left: 35px;
        }
        
        li:not(:last-child):after {
                content: ">";
                position: absolute;
                right: -25px;
        }
        
        li:last-child {
                color: ${themeGet('colors.primary.regular', '#FFFFFF')};
        }
`;

export { PageWrapper, ProfileContainer, SidebarSection, ContentBox, ProfileContentWrapper, SectionHeader, SectionContent, SectionFooter, ProfileSummarySection, ShippingStatusSection, ProductItem, RecommendProductSection, ProfileBreadCrumbsWrapper };
