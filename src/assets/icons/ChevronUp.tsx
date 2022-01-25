import React from 'react';

export const ChevronUp = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
        <svg width={width} height={height}
             viewBox="0 0 407.436 407.436">
        <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "
                 fill={color}
        />
        <g>
        </g>
        </svg>
    )
}

export const ChevronDown = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 407.436 407.436">
            <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "
            fill={color}
            />
        <g>
        </g>
        </svg>
    )
}

export const ChevronLeft = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" aria-labelledby="chevronLeftIconTitle" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <title id="chevronLeftIconTitle">Chevron Left</title>
            <polyline points="14 18 8 12 14 6 14 6" fill={color}/>
        </svg>
    )
}

export const ChevronRight = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width={width} height={height}  viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <title id="chevronRightIconTitle">Chevron Right</title>
            <polyline points="10 6 16 12 10 18 10 18" fill={color}/>
        </svg>
    )
}
