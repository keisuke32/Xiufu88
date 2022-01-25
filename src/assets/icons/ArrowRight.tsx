import React from 'react';
export const ArrowRight = ({
                             color = 'currentColor',
                             width = '12px',
                             height = '12px',
                         }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.59 11.2765L2 12.6865L8 6.68652L2 0.686524L0.589999 2.09652L5.17 6.68652L0.59 11.2765Z" fill="black" fillOpacity="0.25"/>
        </svg>

    );
};

export const ArrowRightWhite = ({
                               color = 'currentColor',
                               width = '12px',
                               height = '12px',
                           }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.59 11.2765L2 12.6865L8 6.68652L2 0.686524L0.589999 2.09652L5.17 6.68652L0.59 11.2765Z" fill={color} fillOpacity="1"/>
        </svg>

    );
};