import {gql} from '@apollo/client';
export const GET_CATEGORIES = gql`
    query{
        liveStreamCategories{
            id
            name
            image
        }
    }
`;

export const GET_EXPERIENCES = gql`
    query{
        liveStreamExperiences{
            id
            name
            image
        }
    }
`;