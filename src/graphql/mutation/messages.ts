import {gql} from '@apollo/client';

export const joinlivestream = gql`
    mutation joinlivestream($id:ID!)
    {
        joinLiveStream(id:$id){
            publicMessageThread{
                id
                unreadMessages
                participants{
                    id
                    name

                }
            }
            privateMessageThreads{
                id
              
            }
        }
    }
`;

export const messageadded = gql`
    subscription messageAdded($threads:[ID!])
    {
        messageAdded(threads:$threads)
        {
            id
            createdAt
            videoTime
            author{
                id
                photo{
                    url
                }
                name
                phone
                color{
                    background
                    text
                }
            }
            data
        }
    }
`;

export const addmessage = gql`
    mutation addmessage($input:MessageInput!)
    {
        addMessage(input:$input){
            id
            isRead
            createdAt
            videoTime
            author{
                id
                photo{
                    url
                }
                name
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