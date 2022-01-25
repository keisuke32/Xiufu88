import React from 'react';
import {
    StyledForm,
    StyledInput,
    StyledCategoryName,
    StyledSearchButton,
} from './search-helpcenter-box.style';
import { SearchIcon } from 'assets/icons/SearchIcon';

interface Props {
    onEnter: (e: React.SyntheticEvent) => void;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    name: string;
    minimal?: boolean;
    className?: string;
    showButtonText?: boolean;
    shadow?: string;
    [key: string]: unknown;
}

export const SearchHelpCenterBox: React.FC<Props> = ({
                                               onEnter,
                                               onChange,
                                               value,
                                               name,
                                               minimal,
                                               categoryType,
                                               buttonText,
                                               className,
                                               showButtonText = true,
                                               shadow,
                                               ...rest
                                           }) => {
    return (
        <StyledForm
            onSubmit={onEnter}
            className={className}
            boxShadow={shadow}
            minimal={minimal}
        >
            {minimal ? (
                <>
                    <SearchIcon color="rgba(189, 189, 189, 0.5)" style={{ marginLeft: 16, marginRight: 16 }} />
                    <StyledInput
                        type='search'
                        onChange={onChange}
                        value={value}
                        name={name}
                        {...rest}
                    />
                </>
            ) : (
                <>
                    <SearchIcon color="rgba(189, 189, 189, 0.5)" width="24px" height="24px" style={{ marginRight: 12, marginLeft: 12 }} />
                    <StyledInput
                        type='search'
                        onChange={onChange}
                        value={value}
                        name={name}
                        {...rest}
                    />
                    <StyledSearchButton>
                        {showButtonText && buttonText}
                    </StyledSearchButton>
                </>
            )}
        </StyledForm>
    );
};
