import {gql} from '@apollo/client';

export const addmessage = gql`
    mutation addmessage($input:MessageInput!)
    {
        addMessage(input:$input)
        {
            id
            isRead
            thread
            author{
                id
            }
            type
            createdAt
        }
    }
`;

