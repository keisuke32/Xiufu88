import {gql} from '@apollo/client';

export const BANNERS = gql`
    query Banners(
        $searchQuery: String, 
        $sitePath: String, 
        $bannerType: BannerType,
        $adType: BannerAdType,
        $layout: BannerLayoutType,
        $identifiers: [String!],
        $offset: Int = 0,
        $limit: Int = 10,
        $feature: BannerSortFeature! = CREATED_AT,
        $sortType: SortTypeEnum! = ASC
    ) {
        banners (
            filter:{
                searchQuery: $searchQuery
                sitePath: $sitePath
                type: $bannerType
                adType: $adType
                layout: $layout
                identifiers: $identifiers
            },
            sort: {
                type: $sortType,
                feature: $feature
            },
            page:{
                skip: $offset,
                limit: $limit
            }
            
        ){
            collection {
                id
                identifier
                name
                page
                sitePath
                assets{
                    image
                    link
                }
                adType
                type
                layout
                size{
                    width
                    height
                }
                time
            }
            pager{
                total
                skip
                limit
            }
        }
    }
`;
