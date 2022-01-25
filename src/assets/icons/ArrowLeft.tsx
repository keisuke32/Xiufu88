import React from 'react';

export const ArrowLeft = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
    <svg width={width} height={height} viewBox="0 0 8 13" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.65316 1.91L6.24316 0.5L0.243164 6.5L6.24316 12.5L7.65316 11.09L3.07316 6.5L7.65316 1.91Z" fill={color}/>
    </svg>
)
}
