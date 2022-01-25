import {gql} from '@apollo/client';

export const addlivestream = gql`
    mutation addlivestream($data:LiveStreamInput!){
        addLiveStream(data:$data){
            id
            slug
        }
    }
`;


export const addrecordtolivestream = gql`
    mutation addStreamRecord($liveStream:ID!,$streamRecord:String!){
        addStreamRecord(liveStream:$liveStream,streamRecord:$streamRecord){
            id
        }
    }
`;

export const startstreaming = gql`
    mutation startstreaming($id:ID!){
        startStreaming(id:$id){
            id
        }
    }
`;

export const stopstreaming = gql`
    mutation stopstreaming($id:ID!){
        stopStreaming(id:$id){
            id
        }
    }
`;

export const livestreamlistening = gql`
    subscription livestream($id:ID!){
        liveStream(id:$id){
            id
            privateMessageThreads{
                id
                participants{
                    id
                    name
                    isOnline
                }
            }
        }
    }
`;

export const likelivestream = gql`
    mutation livestream($id:ID!){
        updateLiveStreamCount(data:{id:$id,playLength:10,view:like,tag:real}){
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
                
            }
            likes
            views
        }
    }
`

export const updateLiveStreamCount = gql`
    mutation viewlivestream($id:ID!){
        updateLiveStreamCount(data:{id:$id,playLength:10,view:view,tag:real}){
            id
            views
        }
    }
`