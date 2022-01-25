import {gql} from '@apollo/client';

export const ISSUE_CATEGORIES = gql`
    query issueCategories{
        issueCategories{
            id
            name
            notifyEmails
        }
    }
`;
export const ISSUE_CATEGORY = gql`
    query issueCategory($id: ID!){
        issueCategory(id: $id){
            id
            name
            notifyEmails
        }
    }
`;

export const ISSUES = gql`
    query issues(
        $offset: Int,
        $limit: Int,
        $category: [ID!],
        $feature: IssueSortFeature! = CREATED_AT,
        $sort: SortTypeEnum! = DESC,
        $search: String,
    ){
        issues (
            filter:{
                searchQuery: $search,
                categories: $category,
            },
            page: {
                skip: $offset,
                limit: $limit
            },
            sort: {
                feature: $feature,
                type: $sort
            }
        ){
            collection {
                id
                name
                phone
                email
                urgency
                message
                attachments{
                    id
                    url
                    type
                }
                category{
                    id
                    name
                    notifyEmails
                }
                note
                status
            }
            pager {
                total
                skip
                limit
            }
        }
    }
`;

export const ISSUE = gql`
    query issue($id: ID!){
        issue(id: $id) {
            id
            name
            phone
            email
            urgency
            message
            attachments{
                id
                url
                type
            }
            category{
                id
                name
                notifyEmails
            }
            note
            status
        }
    }
`;

export const ADD_ISSUE = gql`
    mutation addIssue(
        $name: String!,
        $phone: String!,
        $email: String!,
        $urgency: IssueUrgency!,
        $message: String!,
        $category: String!,
        $attachments: [ID!]
    ){
        addIssue(data:{
            name: $name,
            phone: $phone,
            email: $email,
            urgency: $urgency,
            message: $message,
            category: $category,
            attachments: $attachments,
        }){
            id
            name
            phone
            email
            urgency
            message
            attachments{
                id
                url
                type
            }
            category{
                id
                name
                notifyEmails
            }
            note
            status
        }
    }
`;

export const UPDATE_ISSUE = gql`
    mutation updateIssue(
        $id: ID!,
        $name: String!,
        $phone: String!,
        $email: String!,
        $urgency: IssueUrgency!,
        $message: String!,
        $category: String!,
        $attachments: [ID!]
    ){
        updateIssue(id: $id, data:{
            name: $name,
            phone: $phone,
            email: $email,
            urgency: $urgency,
            message: $message,
            category: $category,
            attachments: $attachments,
        }){
            id
            name
            phone
            email
            urgency
            message
            attachments{
                id
                url
                type
            }
            category{
                id
                name
                notifyEmails
            }
            note
            status
        }
    }
`;

export const DELETE_ISSUE = gql`
    mutation deleteIssue($id: ID!){
        deleteIssue(id: $id)
    }
`;

