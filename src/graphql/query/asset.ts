import {gql} from '@apollo/client';


export const assets = gql`
    query assets($limit:Int,$skip:Int){
        assets(filter:{type:VIDEO},page:{limit:$limit,skip:$skip})
        {
            collection{
                id
                url
                filename
            }
        }
    }
`;