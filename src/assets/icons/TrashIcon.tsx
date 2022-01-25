import React from 'react';
export const TrashIcon = ({
                         color = 'currentColor',
                         width = '18px',
                         height = '18px',
                     }) => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.17643 13.0827C4.17643 13.816 4.77643 14.416 5.50977 14.416H10.8431C11.5764 14.416 12.1764 13.816 12.1764 13.0827V5.08268H4.17643V13.0827ZM12.8431 3.08268H10.5098L9.8431 2.41602H6.50977L5.8431 3.08268H3.50977V4.41602H12.8431V3.08268Z" fill={color}/>
        </svg>

    );
};
