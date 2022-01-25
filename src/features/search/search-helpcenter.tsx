import React, {useEffect, useRef} from 'react';
import { SearchBox } from 'components/search-box/search-box';
import { useAppState, useAppDispatch } from 'contexts/app/app.provider';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import {SearchHelpCenterBox} from "../../components/search-box/search-helpcenter-box";

interface Props {
    minimal?: boolean;
    showButtonText?: boolean;
    onSubmit?: () => void;
    [key: string]: unknown;
}

const SearchHelpCenter: React.FC<Props> = ({ onSubmit, ...props }) => {
    const searchTerm = useAppState('searchTerm');
    const dispatch = useAppDispatch();
    const router = useRouter();
    const intl = useIntl();
    const handleOnChange = (e) => {
        const { value } = e.target;
        dispatch({ type: 'SET_SEARCH_TERM', payload: value });
    };
    const { pathname, query } = router;
    const {text} = query;

    useEffect(() => {
        if (text && pathname=='/productfilter'){
            dispatch({ type: 'SET_SEARCH_TERM', payload: Array.isArray(text)?text[0]:text });
        }
        if (text == undefined){
            dispatch({type: 'SET_SEARCH_TERM', payload: ''});
        }
    }, [text]);

    const onSearch = (e) => {
        e.preventDefault();
        const { category } = query;

        router.push({
            pathname: '/productfilter',
            query: { category: category, text: searchTerm },
        });

        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <SearchHelpCenterBox
            onEnter={onSearch}
            onChange={handleOnChange}
            value={searchTerm}
            name="search"
            placeholder={intl.formatMessage({
                id: 'searchHelpCenterPlaceholder',
                defaultMessage: 'Search your problem from here',
            })}
            buttonText={intl.formatMessage({
                id: 'searchHelpCenterButtonText',
                defaultMessage: 'Search',
            })}
            {...props}
        />
    );
};

export default SearchHelpCenter;
