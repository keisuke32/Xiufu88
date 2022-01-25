import useSWR from 'swr';
import Fuse from 'fuse.js';
import {request} from 'graphql-request';

import {SEARCH_LIVESTREAM} from "../graphql/query/livestreams.query";

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

function checkproductfilter(productfilter)
{
    var enable = false;
    for(let item in productfilter)
    {
        console.log(Array.isArray(productfilter[item]))
        if(Array.isArray(productfilter[item]))
        {
            if(productfilter[item].length == 0)
            {
                productfilter[item] = undefined
            }
            else
            {
                enable = true
            }
        }
        else if(!productfilter[item])
        {
            productfilter[item] = undefined
        }
        else
        {
            enable = true;
        }
    }
    console.log(enable);

    if(enable)
    {
        productfilter.hasLivestream = true
    }
    return enable?productfilter:null
}

// import productFetcher from 'utils/api/product';

interface Props {
    categories:Array<String>,
    experiences?:Array<String>,
    offset:number,
    limit:number,
    productfilter:any,
    status?:any,
    isFeatured?:Boolean
}

export default function uselivestreamfilter(variables: Props) {
    // console.log(useMemo(() => (variables.status), [variables.status]));
    let fetcher = async (query, categories,experiences,offset,limit,status,productfilter,isFeatured) => await request(url, query, {
        categories: categories ?? [],
        offset: offset,
        limit: limit,
        experiences:experiences??[],
        status:status?status:['PENDING','FINISHED',"STREAMING"],
        productfilter:checkproductfilter({...productfilter}),
        isFeatured:isFeatured?isFeatured:undefined
    });

    const {categories,experiences,offset,limit,status,productfilter,isFeatured} = variables;

    // const { data, mutate, error } = useSWR('/api/products.json', productFetcher);
    const {data, mutate, error} = useSWR([SEARCH_LIVESTREAM, categories,experiences,offset,limit,status,productfilter,isFeatured], fetcher, {
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

    let localOffset = offset;
    let localLimit = limit;
    const fetchMore = async (os, lmt) => {
        localOffset = os;
        localLimit = lmt;
        setFormattedData(true);
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
        pager,
        mutate,
        fetchMore,
    };
}
