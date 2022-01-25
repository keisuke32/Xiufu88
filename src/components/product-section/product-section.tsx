import React, {useState} from 'react';
import Link from 'next/link';
import {FormattedMessage} from "react-intl";
import styled from 'styled-components';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import ErrorMessage from 'components/error-message/error-message';
import Router, {useRouter} from 'next/router';
import useProducts, {useThemeProducts} from 'data/use-products';
import {ProductCardDefault} from 'components/product-card/product-card-default';
import {ProductRanking} from './product-ranking';
import { ArrowNext } from 'assets/icons/ArrowNext';
import {LoaderItem, LoaderWrapper} from "../product-grid/product-list/product-list.style";
import Placeholder from "../placeholder/placeholder";

interface Props {
    loadMore?: boolean;
    fetchLimit?: number;
    style?: any;
    theme?: any;
    sort?: any;
    feature?: any;
}

const import_goods = [
    {id: 1, title: "糕点"},
    {id: 2, title: "坚果 "},
    {id: 3, title: "方便麵"},
    {id: 4, title: "饼乾"},
    {id: 4, title: "意面 "},
    {id: 4, title: "海产品"},
];

const local_goods = [
    {id: 1, title: "糕点"},
    {id: 2, title: "坚果 "},
    {id: 3, title: "方便麵"},
    {id: 4, title: "饼乾"},
    {id: 4, title: "意面 "},
];

export const ProductSection = (
    {
        theme,
        style,
        loadMore = true,
        fetchLimit = 6,
        sort = "DESC",
        feature = "CREATED_AT"
    }: Props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [brandCategory, setBrandCategory] = useState(0)

    const {themeProducts, error: themeProductsError, loading: themeProductsLoading} = useThemeProducts({theme: theme.id, feature, sortType: sort, limit:fetchLimit});

    function selectBrandCategory(brandCategoryID) {
        setBrandCategory(brandCategoryID);
    }

    if (!themeProducts) {
        return (
            <LoaderWrapper>
                <LoaderItem>
                    <Placeholder uniqueKey="1"/>
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="2"/>
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="3"/>
                </LoaderItem>
            </LoaderWrapper>
        );
    }

    const handleCategory = (e) => {
        Router.push('/productfilter?category=' + e);
    }

    return (
        <section>
            <SectionHeaderWrapper>
                <h3>{theme.name}</h3>
                {/*<a onClick={() => handleCategory(theme.id)}>*/}
                {/*    <MoreProductsButton>*/}
                {/*        <FormattedMessage id="more-products" defaultMessage="More" />*/}
                {/*        <ArrowNext width="16px" />*/}
                {/*    </MoreProductsButton>*/}
                {/*</a>*/}
            </SectionHeaderWrapper>
            <SectionCategoryWrapper>
                <div className="import_goods">
                    <label>进口货品</label>
                    <div>
                        {import_goods.map((item, idx) => {
                            return (
                                <SectionCategoryItem key={idx} onClick={() => selectBrandCategory(item.id)}>
                                    {item.title}
                                </SectionCategoryItem>
                            )
                        })}
                    </div>
                </div>
                <div className="ver_bar"/>
                <div className="local_goods">
                    <label>本地货品</label>
                    <div>
                        {local_goods.map((item, idx) => {
                            return (
                                <SectionCategoryItem key={idx} onClick={() => selectBrandCategory(item.id)}>
                                    {item.title}
                                </SectionCategoryItem>
                            )
                        })}
                    </div>
                </div>
            </SectionCategoryWrapper>
            <Grid style={style}>
                <ThemeWrap>
                    <CategoryImage>
                        <a href="#">
                            <img src={theme?.thumbnail?.thumbnail || theme?.thumbnail?.url } alt={theme?.name}/>
                        </a>
                    </CategoryImage>
                    <ProductGridWrapper>
                    {themeProducts.map((product, idx) => (
                        <ProductCardDefault data={product} key={idx}/>
                    ))}
                    </ProductGridWrapper>
                </ThemeWrap>
                <ProductRankingWrapper>
                    <ProductRanking categories={theme.productCategories} />
                </ProductRankingWrapper>
            </Grid>
        </section>
    );
};

const SectionHeaderWrapper = styled.div`
    display: flex;
    padding-bottom: 10px;
    justify-content: space-between;
    align-items: flex-end;
    
    h3 {
        font-weight: ${themeGet('fontWeights.heading')};
        font-size: ${themeGet('fontSizes.2xl')};    
        color: ${themeGet('colors.black')};
    }
`

const SectionCategoryWrapper = styled.div`
    padding: 20px;
    border-top: 3px solid #000000;
    background: ${themeGet('colors.gray.400', '#F2F2F2')};
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    div.ver_bar {
        border-left: 1px solid black;
    }
    div.import_goods, .local_goods {
        display: flex;
        width: 50%;
        label {
            margin-left: 50px;
            width: 120px;
            line-height: 5;
        }
        li {
            float: left;
            margin-bottom : 10px;
        }
        @media only screen and (max-width: 1200px) {
          display: block;
          padding-left: 50px;
        }
    }
`;

const MoreProductsButton = styled.div`
    cursor: pointer;
    
    svg {
        padding-left: 5px;
        transition: all 0.3s;
    }
    
    &:hover {
        svg {
            transform: translateX(5px);
        }
        
        color: ${themeGet('colors.gray.900')};
    }
`;


const Grid = styled.div(
    css({
        display: 'grid',
        gridGap: '0px',
        gridTemplateColumns: 'minmax(0,1fr) 20%',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'gray.700',
    })
);

const CategoryImage = styled.div`
    height: 100%;
    width: 100%;
    min-height: 580px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const ThemeWrap = styled.div`
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 28% auto;
`;
const ProductGridWrapper = styled.div`
`;

const ProductRankingWrapper = styled.div`
    background: #FFFFFF;
`;

const SectionCategoryItem = styled.li`
    padding: 5px 40px;
    margin-right: 20px;
    border: 1px solid ${themeGet('colors.gray.1000')};
    font-size: ${themeGet('fontSizes.sm')}px;
    color: ${themeGet('colors.black')};
    background: ${themeGet('colors.white')};
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover,
    &.active {
        background: ${themeGet('colors.gray.1000')};
        color: ${themeGet('colors.gray.300')};
    }
`;
