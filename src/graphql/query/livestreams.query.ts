import {gql} from '@apollo/client';
import {LIVESTREAM} from "./livestream.query";

export const GET_LIVESTREAMS = gql`
    query Livestreams($offset: Int, $limit: Int, $category: [ID!], $status: [StreamChannelStatus] = [STREAMING, PENDING],$isFeatured:Boolean = null, $feature:LiveStreamSortFeature = CREATED_AT, $sort: SortTypeEnum = DESC){
        liveStreams(sort:{feature:$feature, type:$sort}, filter:{categories: $category,statuses:$status,isFeatured:$isFeatured}, page: {skip: $offset, limit: $limit}){
            collection{
                ...LivestreamDetail
            }
            pager{
                total
                skip
                limit
            }
        }
    }
    ${LIVESTREAM}
`;

export const GET_PASTSTREAMS = gql`
    query Livestreams($offset: Int, $limit: Int, $category: [ID!],$isFeatured:Boolean = null){
        liveStreams(filter:{categories: $category,statuses:[FINISHED],isFeatured:$isFeatured}, page: {skip: $offset, limit: $limit},sort:{feature:CREATED_AT,type:DESC}){
            collection{
                ...LivestreamDetail
            }
            pager{
                total
                skip
                limit
            }
        }
    }
    ${LIVESTREAM}
`;


export const GET_LIVESTREAM = gql`
    query LiveStreamBySlug($slug: String!){
        liveStreamBySlug(slug:$slug){
            ...LivestreamDetail
        }
    }
    ${LIVESTREAM}
`;

export const SEARCH_LIVESTREAM = gql`
    query searchlivestream($categories:[ID],$experiences:[ID],$offset:Int,$limit:Int,$productfilter:ProductFilterInput,$status:[StreamChannelStatus],$isFeatured:Boolean)
    {
        liveStreams(filter:{categories: $categories,experiences:$experiences,productFilter:$productfilter,statuses:$status,isFeatured:$isFeatured}, page: {skip: $offset, limit: $limit},sort:{feature:CREATED_AT,type:DESC}){
            collection{
                ...LivestreamDetail
            }
            pager{
                total
                skip
                limit
            }
        }
    }
    ${LIVESTREAM}
`

export const nextqueue = gql`
    query nextQueue($liveStream:ID!,$currentRecord:ID!){
        nextQueue(liveStream:$liveStream,currentRecord:$currentRecord){
            liveStream{
                ...LivestreamDetail
            }

            record{
                id
            }

        }
    }
    ${LIVESTREAM}
`
