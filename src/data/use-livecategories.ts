import useSWR from 'swr';
import {request} from 'graphql-request';
import {GET_CATEGORIES, GET_EXPERIENCES} from 'graphql/query/livestream';
const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

const fetcher = async (query, variables) => await request(url, query, variables ? {parent: variables} : null)

export default function useLiveCategory()
{
    const {data, mutate, error} = useSWR([GET_CATEGORIES], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      });

      const loading = !data || error;

      return {
          loading,
          data:loading?[]:data?.liveStreamCategories,
          error,
          mutate
      }
}