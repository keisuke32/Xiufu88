import { gql } from '@apollo/client';

export const GET_BRANDS = gql`
    query brands($offset: Int, $limit: Int){
        searchBrand(page:{skip:$offset, limit:$limit}){
            collection{
                id
                name
                brandCategories{
                    id
                    name
                    isRecommended
                }
                productCategories{
                    id
                    name
                }
                images{
                    url
                    thumbnail
                }
            }
        }
    }
`

export const allBrands = gql`
    query allBrands($livestream:Boolean)
    {
        allBrands(hasLiveStream:$livestream)
        {
            id
            name
            brandCategories{
                id
                name
                isRecommended
            }
            productCategories{
                id
                name
            }
            images{
                url
                thumbnail
            }
        }
    }
`