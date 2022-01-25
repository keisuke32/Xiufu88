import useSWR from 'swr';
import {request} from 'graphql-request';
import {ADD_ISSUE, ISSUE, ISSUE_CATEGORIES, ISSUE_CATEGORY, ISSUES, UPDATE_ISSUE} from "../graphql/query/issues.query";
import {GraphQLClient} from "graphql-request/dist";

const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;

interface IssuesProps{
    token: string;
    offset?: number;
    limit?: number;
    category?: any;
    feature?: string;
    sort?: string;
    search?: string;
}

export default function useIssues({token, offset, limit, category, feature, sort, search}: IssuesProps) {
    const variables = {
        offset: offset,
        limit: limit,
        category: category,
        feature: feature,
        sort: sort,
        search: search,
    }

    const fetcher = async (query) => await new GraphQLClient(url, {
        headers: {
            authorization: 'Bearer ' + token,
        }
    }).request(query, variables);

    const {data, mutate, error} = useSWR([ISSUES], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const loading = !data && !error;

    return {
        loading,
        error,
        data: data?.issues?.collection,
        mutate,
    };
}

interface IssueProps{
    id: string;
    token: string;
}

export function useIssue({token, id}: IssueProps) {
    const variables = {
        id: id,
    }

    const fetcher = async (query) => await new GraphQLClient(url, {
        headers: {
            authorization: 'Bearer ' + token,
        }
    }).request(query, variables);

    const {data, mutate, error} = useSWR([ISSUE], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;

    return {
        loading,
        error,
        data: data?.issues?.collection,
        mutate,
    };
}

export function useIssueCategories() {

    const fetcher = async (query) => await request(url, query);

    const {data, mutate, error} = useSWR([ISSUE_CATEGORIES], fetcher, {
        refreshInterval: 0,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    const loading = !data && !error;

    return {
        loading,
        error,
        data: data?.issueCategories,
        mutate,
    };
}

interface AddIssueProps {
    token: string;
    name: string;
    phone: string;
    email: string;
    urgency: string;
    message: string;
    category: string;
    attachments: any;
}

export function addIssue({token, name, phone, email, urgency, message, category, attachments}: AddIssueProps) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        name: name,
        phone: phone,
        email: email,
        urgency: urgency,
        message: message,
        category: category,
        attachments: attachments,
    };

    return client.request(ADD_ISSUE, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data.addIssue
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}

interface UpdateIssueProps {
    token: string;
    id: string;
    email: string;
    message: string;
    category: any;
}

export function updateIssue({token, id, email, message, category}: UpdateIssueProps) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        id: id,
        email: email,
        message: message,
        category: category,
    };

    return client.request(UPDATE_ISSUE, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data.updateIssue
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}

interface DeleteIssueProps {
    token: string;
    id: string;
}

export function deleteIssue({token, id}: DeleteIssueProps) {
    const client = new GraphQLClient(url, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    const variables = {
        id: id,
    };

    return client.request(UPDATE_ISSUE, variables)
        .then((data) => {
            return {
                state: 'success',
                res: data.deleteIssue
            }
        })
        .catch((err) => {
            console.log(err);
            return {
                state: 'failed',
                res: null
            }
        });
}
