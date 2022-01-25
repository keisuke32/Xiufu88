import useSWR from 'swr';
import Fuse from 'fuse.js';
import {request} from 'graphql-request';

import {GET_LIVESTREAMS} from "../graphql/query/livestreams.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

import {useMemo, useState} from 'react';

const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.3,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    minMatchCharLength: 2,
    keys: ['title'],
};

function search(list, pattern) {
    const fuse = new Fuse(list, options);

    return fuse.search(pattern).map((current) => current.item);
}

// import productFetcher from 'utils/api/product';

interface Props {
    text?: any;
    category?: any;
    status?: Array<string>;
    isFeatured?: boolean
    offset?: number;
    limit?: number;
    feature?:any;
    sort?:any;
}

export default function useLivestreams(variables: Props) {
    // console.log(useMemo(() => (variables.status), [variables.status]));
    let fetcher = async (query, category, isFeatured, text, status, offset, limit, sort, feature) => await request(url, query, {
        category: category ?? undefined,
        isFeatured: isFeatured,
        search: text,
        status: status ?? undefined,
        offset: offset,
        limit: limit,
        sort: sort,
        feature: feature,
    });

    const {category, isFeatured, text, status, offset, limit, sort, feature} = variables;

    // const { data, mutate, error } = useSWR('/api/products.json', productFetcher);
    const {data, mutate, error} = useSWR([GET_LIVESTREAMS, category, isFeatured, text, status, offset, limit, sort, feature], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;
    // need to remove when you using real API integration
    const [formattedData, setFormattedData] = useState(false);
    console.log('graphqlerror',data);
    let livestreams = data?.liveStreams?.collection;
    let pager = data?.liveStreams?.pager;
    if (livestreams != undefined) {
        livestreams = livestreams.map(item => ({...item, slug: item.id}));
    }

    let localOffset = offset;
    let localLimit = limit;
    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
    };
    // console.log('object');
    // data: [
    //   ...state.data,
    //   ...state.total.slice(
    //     state.data.length,
    //     state.data.length + state.limit
    //   ),
    // ],
    // need to implement fetchMore
    const hasMore = pager?.total > localOffset + localLimit;
    return {
        loading,
        error,
        data: livestreams,
        hasMore,
        mutate,
        fetchMore,
    };
}
