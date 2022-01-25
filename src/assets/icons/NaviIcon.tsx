import React from 'react';
export const NaviIcon = ({
                              color = 'currentColor',
                              width = '18',
                              height = '18',
                          }) => {
    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M10 12h30v4H10z" fill={color} />
            <path d="M10 22h30v4H10z" fill={color} />
            <path d="M10 32h30v4H10z" fill={color} />
        </svg>
    );
};
