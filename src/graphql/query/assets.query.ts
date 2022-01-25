import {gql} from '@apollo/client';

export const uploadAsset = gql`
    mutation uploadasset($file: Upload!){
        uploadAsset(file: $file){
            id
            path
            url
            status
            type
        }
    }
`;
