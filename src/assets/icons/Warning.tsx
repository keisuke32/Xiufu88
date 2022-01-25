import React from 'react';

export const Warning = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 19 18" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4373 0H2.0373C1.0473 0 0.246305 0.81 0.246305 1.8L0.237305 18L3.8373 14.4H16.4373C17.4273 14.4 18.2373 13.59 18.2373 12.6V1.8C18.2373 0.81 17.4273 0 16.4373 0ZM10.1373 10.8H8.3373V9H10.1373V10.8ZM10.1373 7.2H8.3373V3.6H10.1373V7.2Z" fill={color}/>
        </svg>
)
}
