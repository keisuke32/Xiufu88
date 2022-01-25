import {gql} from '@apollo/client';

export const GET_COUNTRY = gql`
    query{
        countries{
            id
            name
            currency
        }
    }
`;

export const GET_REGIONS = gql`
    query regions($countryid:ID!){
        regions(filter:{countryId:$countryid}){
            id
            name
        }
    }
`

export const GET_CITIES = gql`
    query cities($region:String){
        cities(filter:{region:$region}){
            id
            name
        }
    }
`