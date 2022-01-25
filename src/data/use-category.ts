import useSWR from 'swr';
import {request} from 'graphql-request';

import {
  GET_CATEGORIES,
  GET_ALL_CATEGORIES,
  Get_SUB_CATEGORY,
  GET_PRODUCT_CATEGORY_BY_SLUG
} from "../graphql/query/category.query";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

interface CategoryProps {
  level?: number;
  parent?: string;
  hasProduct?: boolean;
}

interface allCategoryProps {
  hasProduct?: boolean;
}


const fetcher = async (query, hasProduct) => await request(url, query, {hasProduct: hasProduct})
const fetcher_level = async (query, parent, hasProduct) => await request(url, query, {parent: parent, hasProduct: hasProduct})
const fetcher_by_slug = async (query, slug) => await request(url, query, {slug: slug})

export default function useCategory({hasProduct=true}: allCategoryProps) {

  const {data, mutate, error} = useSWR([GET_ALL_CATEGORIES, hasProduct], fetcher, {
    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  // const paginatedData = data?.slice(offset, limit);

  const loading = !data && !error;
  const categories = data?.fullProductCategories;
  let res = [];
  if (categories != undefined) {
    res = categories.filter(item => item.level == 1);
    res?.sort((a, b) => (parseInt(a.order) > parseInt(b.order)) ? 1 : -1 );

    let res1 = categories.filter(item => item.level == 2);
    res1?.sort((a, b) => (parseInt(a.order) > parseInt(b.order)) ? 1 : -1 );

    let res2 = categories.filter(item => item.level == 3);
    res2?.sort((a, b) => (parseInt(a.order) > parseInt(b.order)) ? 1 : -1 );

    res1?.map(item => {
      item.children = res2.filter(item_1 => item_1.parent?.id == item.id);
      return item;
    });
    res?.map(item => {
      item.children = res1.filter(item_1 => item_1.parent?.id == item.id);
      return item;
    });
  }
  return {
    loading,
    error,
    data: res,
    // loggedOut,
    // user: data,
    mutate,
  };
}

export function useCategoryLevel({parent, hasProduct=true}: CategoryProps) {

  const {data, mutate, error} = useSWR([Get_SUB_CATEGORY, parent, hasProduct], fetcher_level, {
    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  // const paginatedData = data?.slice(offset, limit);

  const loading = !data && !error;
  const categories = data?.productCategories;

  return {
    loading,
    error,
    data: categories,
    // loggedOut,
    // user: data,
    mutate,
  };
}

export function useProductCategoryBySlug(slug: any) {

  const {data, mutate, error} = useSWR([GET_PRODUCT_CATEGORY_BY_SLUG, slug], fetcher_by_slug, {
    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const loading = !data && !error;
  const category = data?.productCategoryBySlug;

  return {
    loading,
    error,
    data: category,
    mutate,
  };
}
