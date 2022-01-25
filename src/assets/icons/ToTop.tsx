import React from 'react';
export const ToTop = ({
                         color = 'currentColor',
                         width = '18px',
                         height = '18px',
                     }) => {
    return (
        <svg width={width}
             height={height}
             viewBox="0 0 16 18"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8H7V18H9V8H12L8 4L4 8ZM0 0V2H16V0H0Z" fill="white"/>
        </svg>

);
};
