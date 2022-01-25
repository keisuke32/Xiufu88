import useSWR from 'swr';
import Fuse from 'fuse.js';
import {request} from 'graphql-request';

import {GET_PASTSTREAMS} from "../graphql/query/livestreams.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

import {useState} from 'react';

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
    offset?: number;
    limit?: number;
    isFeatured?:boolean;
}

export default function usepaststream(variables: Props) {
    const [formattedData, setFormattedData] = useState(false);
    let fetcher = async (query, category, offset, limit,isFeatured) => await request(url, query, {
        category: category ? [category] : [],
        offset: offset,
        limit: limit,
        isFeatured:isFeatured
    })
    const {text, category, offset = 0, limit = 6,isFeatured} = variables ?? {};
    // const { data, mutate, error } = useSWR('/api/products.json', productFetcher);
    
    const {data, mutate, error} = useSWR([GET_PASTSTREAMS, category, offset, limit,isFeatured], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;
    // need to remove when you using real API integration
    
    console.log('graphqlerror',data);
    let livestreams = data?.liveStreams?.collection;
    let pager = data?.liveStreams?.pager;
    if (livestreams != undefined) {
        livestreams = livestreams.map(item => ({...item, slug: item.id}));
    }

    if (text) {
        livestreams = search(livestreams, text);
    }
    let localOffset = offset;
    let localLimit = limit;
    const fetchMore = async (lmt) => {
        localLimit = localLimit + lmt;
        setFormattedData(!formattedData)
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
