import {gql} from '@apollo/client';

export const TERMSANDCONDITIONS = gql`
    query termsandconditions(
        $language: LanguageList!,
    ) {
        termsandcoditions (language: $language){
            id
            prefix
            englishTitle
            title
            html
        }
    }
`;
