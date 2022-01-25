import {gql} from '@apollo/client';

export const CATEGORY_DETAIL = gql`
    fragment ProductCategoryDetail on ProductCategory{
        id
        name
        level
        hasChildren
        parent{
            id
            name
            level
            image{
                id
                url
                thumbnail
            }
            slug
            productVariations{
                id
                name
                description
                values
                keyName
                displayName
            }
        }
        parents{
            id
            name
            level
            image{
                id
                url
                thumbnail
            }
            slug
            productVariations{
                id
                name
                description
                values
                keyName
                displayName
            }
        }
        image{
            id
            url
            thumbnail
        }
        slug
        productVariations{
            id
            name
            description
            values
            keyName
            displayName
        }
        order
        icon{
            id
            url
            thumbnail
        }
    }
`;

export const Get_SUB_CATEGORY = gql`
    query getsubcategory($parent:ID, $hasProduct: Boolean){
        productCategories(parent:$parent, hasProduct: $hasProduct){
            ...ProductCategoryDetail
        }
    }
    ${CATEGORY_DETAIL}
`;

export const GET_CATEGORIES = gql`
    query productCategories($hasProduct: Boolean){
        productCategories(hasProduct: $hasProduct){
            ...ProductCategoryDetail
        }
    }
    ${CATEGORY_DETAIL}
`;

export const GET_ALL_CATEGORIES = gql`
    query productAllCategories($hasProduct: Boolean){
        fullProductCategories(hasProduct: $hasProduct){
            ...ProductCategoryDetail
        }
    }
    ${CATEGORY_DETAIL}
`;

export const GET_LIVESTREAM_CATEGORIES = gql`
    query{
        liveStreamCategories{
            id
            name
            image
        }
    }
`;

export const GET_PRODUCT_CATEGORY_BY_SLUG = gql`
    query getProductCategoryBySlug($slug:String!){
        productCategoryBySlug(slug:$slug){
            ...ProductCategoryDetail
        }
    }
    ${CATEGORY_DETAIL}
`;
