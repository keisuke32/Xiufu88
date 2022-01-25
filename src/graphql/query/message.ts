import {gql} from '@apollo/client';

export const messages = gql`
    query messages($thread:ID!,$skip:Date,$limit:Int!){
        messages(thread:$thread,skip:$skip,limit:$limit){
            id
            isRead
            createdAt
            videoTime
            author{
                id
                name
                photo{
                    url
                }
                phone
                color{
                    background
                    text
                }
            }
            type
            thread{
                id
            }
            data
        }
    }
`;



