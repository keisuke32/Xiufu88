import {gql} from '@apollo/client';
import {CATEGORY_DETAIL} from "./category.query";
import {LIVESTREAM} from "./livestream.query";
import {PRODUCT} from "./products.query";

export const THEME = gql`
    fragment ThemeDetail on Theme{
        id
        name
        thumbnail{
            id
            thumbnail
            url
        }
        hashtags
        order
        productCategories{
            ...ProductCategoryDetail
        }
        brandCategories{
            id
            name
            isRecommended
            hashtags
        }
        brands{
            id
            name
            images{
                id
                thumbnail
                url
            }
            brandCategories{
                id
                name
                isRecommended
                hashtags
            }
            productCategories{
                ...ProductCategoryDetail
            }
        }
        liveStreams{
            ...LivestreamDetail
        }
        liveStreamCategories{
            id
            name
            image
            slug
            hashtags
        }
        type
        start_time
        end_time
    }
    ${CATEGORY_DETAIL}
    ${LIVESTREAM}
`;

export const GET_THEME = gql`
    query theme(
        $id: ID!
    ){
        theme(id: $id){
            ...ThemeDetail
        }
    }
    ${THEME}
`;

export const GET_THEMES = gql`
    query themes(
        $searchQuery: String, 
        $themeType: ThemeType, 
        $themeTime: Date, 
        $feature: ThemeSortFeature! = CREATED_AT, 
        $sortType: SortTypeEnum! = DESC,
        $skip: Int,
        $limit: Int
    ){
        themes(
            filter: {
                searchQuery: $searchQuery
                type: $themeType
                time: $themeTime
            }
            sort: {
                feature: $feature
                type: $sortType
            }
            page: {
                skip: $skip
                limit: $limit
            }
            
        ){
            collection {
                ...ThemeDetail
            }
            pager {
                total
                skip
                limit
            }
        }
    }
    ${THEME}
`;

export const GET_PRODUCTS_BY_THEME = gql`
    query (
        $theme: ID!, 
        $feature: ProductSortFeature! = CREATED_AT, 
        $sortType: SortTypeEnum! = DESC,
        $skip: Int,
        $limit: Int
    ){
        productsByTheme(
            theme: $theme
            sort: {
                feature: $feature
                type: $sortType
            }
            page: {
                skip: $skip
                limit: $limit
            }
            
        ){
            collection {
                ...ProductInfo
            }
            pager {
                total
                skip
                limit
            }
        }
    }
    ${PRODUCT}
`;
