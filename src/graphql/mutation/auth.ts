import {gql} from '@apollo/client';

export const Authentication = gql`
    mutation($email:String!,$password:String!){
        generateAccessToken(data:{email:$email,password:$password})
    }
`