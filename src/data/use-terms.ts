import {request, GraphQLClient} from 'graphql-request';

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
import useSWR from "swr";
import {TERMSANDCONDITIONS} from "../graphql/query/termsandconditions.query";

interface TermsInterface {
    language: string;
}

export function getTermsAndConditions({language}: TermsInterface) {

    const fetcher = async (query, language) => await request(url, query, {
        language: language
    })

    const {data, mutate, error} = useSWR([TERMSANDCONDITIONS, language], fetcher, {
        refreshInterval: 0,
    });

    const loading = !data && !error;
    const res = data?.termsandcoditions;
    return {
        terms: res,
        mutate,
        error,
        loading,
    };
}
