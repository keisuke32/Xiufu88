import {gql} from '@apollo/client';

export const me = gql`
    query{
        me{
            id
            photo{
                id
                url
            }
            name
            email
        }
    }
`;