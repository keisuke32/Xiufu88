import {gql} from '@apollo/client';

export const GET_PRODUCT_VARIATIONS = gql`
    query getProductvariations(
        $searchQuery: String, 
        $feature: ThemeSortFeature , 
        $type: SortTypeEnum, 
        $offset: Int, 
        $limit: Int
    ){
        productVariations(
            filter:{searchQuery: $searchQuery}
            sort: {feature: $feature, type: $type}
            page: {skip: $offset, limit: $limit}
        ){
            collection{
                id
                name
                description
                values
                keyName
                displayName
            }
            pager{
                total
                skip
                limit
            }
        }
    }
`;

export const GET_PRODUCT_VARIATION_BY_ID = gql`
    query getProductVariationByKeyName(
        $id: ID!, 
    ){
        productVariationByKeyName(keyName: $id){
            id
            name
            description
            values
            keyName
            displayName
        }
    }
`;

export const GET_PRODUCT_VARIATION_BY_KEYNAME = gql`
    query getProductVariationByKeyName(
        $keyName: String!, 
    ){
        productVariationByKeyName(keyName: $keyName){
            id
            name
            description
            values
            keyName
            displayName
        }
    }
`
export const GET_PRODUCT_VARIATION_BY_KEYWORD = gql`
    query ($keyword: String!){
        attributeFilter(data: {searchQuery: $keyword}){
            productVariations{
                id
                name
                description
                values
                keyName
                displayName
            }
            productCategories{
                id
                name
                level
                slug
            }
        }
    }
`;
