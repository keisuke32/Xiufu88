import {gql} from '@apollo/client'

export const updateproduct = gql`
    mutation updateproduct($livestream:ID!,$productdurations:[StreamProductDurationInput]){
        updateLiveStreamProducts(liveStream:$livestream,productDurations:$productdurations)
        {
            id
            title
            preview{
                id
                path
                url
                thumbnail
            }
            channel{
                id
                status
                finishedAt,
                record{
                    sources{
                        source
                        id
                    }
                }
            }
            statistics{
                likes
                viewers
            }
            streamer{
                id
                photo {
                    id
                    url
                }
                name
                address{
                    city
                }
                color{
                    background
                    text
                }
            }
            city {
                id
                name
                photo
            }
            productDurations{
                product{
                    id
                    slug
                    price{
                        amount
                        currency
                        formatted
                    }
                    title
                    assets{
                        id,
                        url,
                        thumbnail
                    }
                    thumbnail{
                        id,
                        url,
                        thumbnail
                    }
                    
                }
                duration
                
            }
            likes
            views
        }
    }
`

