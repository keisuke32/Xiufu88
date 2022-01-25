import {gql} from '@apollo/client';

export const addAssetsurl = gql`
    mutation addAssetUrl($path:String!,$filename:String){
        addAssetUrl(data:{path:$path,mimetype:"video/mp4",filename:$filename}){
            id
        }
    }
`;

export const addAssetImage = gql`
    mutation addAssetUrl($path:String!,$filename:String!){
        addAssetUrl(data:{path:$path,mimetype:"image/png",filename:$filename}){
            id
        }
    }
`