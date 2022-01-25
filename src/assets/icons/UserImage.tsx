import React from 'react';

export const UserImage = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.36412 0.154297C6.77755 0.154297 4.68255 2.21551 4.68255 4.76036C4.68255 7.3052 6.77755 9.36642 9.36412 9.36642C11.9507 9.36642 14.0457 7.3052 14.0457 4.76036C14.0457 2.21551 11.9507 0.154297 9.36412 0.154297ZM9.36412 10.5179C6.23917 10.5179 0.000976562 12.061 0.000976562 15.124V18.5785H18.7273V15.124C18.7273 12.061 12.4891 10.5179 9.36412 10.5179Z" fill="white"/>
        </svg>
)
}