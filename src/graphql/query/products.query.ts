import { gql } from '@apollo/client';

export const PRODUCT = gql`
    fragment ProductInfo on Product{
        id
        title
        description
        sold
        slug
        rating{
            average
            total
        }
        attrs{
            id
            price(currency:CNY){
                amount
                amountISO
                currency
                formatted
            }
            oldPrice(currency:CNY){
                amount
                amountISO
                currency
                formatted
            }
            quantity
            variation{
                name
                value
            }
            asset{
                url
                thumbnail
            }
            sku
        }
        seller{
            id
            name
            organization {
                id
                address {
                    street
                    city
                }
            }
            address {
                street
                city
            }
            color{
                background
                text
            }
        }
        price(currency:CNY){
            amount
            currency
            amountISO
            formatted
        }
        oldPrice(currency:CNY){
            amount
            amountISO
            currency
            formatted
        }
        quantity
        assets{
            id
            url
            thumbnail
        }
        thumbnail{
            id
            url
            thumbnail
        }
        category{
            id
            name
            slug
            parent{
                id
                name
                slug
            }
            parents{
                id
                name
                slug
            }
        }
        shippingBox{
            id
            label
            width
            height
            length
            weight
            unit
            unitWeight
        }
        customCarrier{
            id
            name
        }
        customCarrierValue(currency:CNY){
            amount
            amountISO
            currency
            formatted
        }
    }
`;

export const GET_PRODUCTS = gql`
    query Products(
        $offset: Int, 
        $limit: Int, 
        $category: [ID!], 
        $feature: ProductSortFeature! = CREATED_AT, 
        $sort: SortTypeEnum! = DESC, 
        $isFeatured: Boolean, 
        $search: String, 
        $sellers: [ID!],
        $variations: [VariationInput],
    ){
        products(
            filter:{
                sellers: $sellers,
                searchQuery: $search,
                categories: $category,
                isFeatured: $isFeatured,
                variations: $variations
            },
            page: {
                skip: $offset,
                limit: $limit
            },
            sort: {
                feature: $feature,
                type: $sort
            }){
            collection {
                ...ProductInfo
            },
            pager {
                total,
                skip,
                limit
            }
        }
    }
    ${PRODUCT}
`;

export const GET_PRODUCT = gql`
    query Product($slug: String!){
        productBySlug(slug: $slug){
            ...ProductInfo
        }
    }
    ${PRODUCT}
`;
