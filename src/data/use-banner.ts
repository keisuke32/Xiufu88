import {request, GraphQLClient} from 'graphql-request';

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
import useSWR from "swr";
import {BANNERS} from "../graphql/query/banner.query";

interface BannerInterface {
    searchQuery?: string,
    sitePath?: string,
    bannerType?: string,
    adType?: string,
    layout?: string,
    identifiers?: any,
    offset?: number,
    limit?: number,
    feature?: string,
    sortType?: string,
}

export function getBanners({searchQuery, sitePath, bannerType, adType, layout, identifiers, offset, limit, feature, sortType}: BannerInterface) {

    const variables = {
        searchQuery: searchQuery,
        sitePath: sitePath,
        bannerType: bannerType,
        adType: adType,
        layout: layout,
        identifiers: identifiers,
        offset: offset,
        limit: limit,
        feature: feature,
        sortType: sortType,
    };

    const fetcher = async (query) => {
        const client = new GraphQLClient(url);

        return client.request(query, variables)
            .then((data) => {
                return data;
            })
    }

    const {data, mutate, error} = useSWR([BANNERS], fetcher, {
        refreshInterval: 0,
    });

    const loading = !data && !error;
    const res = data?.banners?.collection;
    const total = data?.banners?.pager?.total;
    return {
        banners: res,
        total,
        mutate,
        error,
        loading,
    };
}
