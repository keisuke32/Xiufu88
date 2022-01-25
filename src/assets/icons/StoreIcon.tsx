import React from 'react';

export const StoreIcon = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 19 17" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M1.91667 10.5207V9.77067H1.16667H0.875V8.5116L1.78152 3.979H17.2185L18.125 8.5116V9.77067H17.8333H17.0833V10.5207V16.0207H16.5V10.5207V9.77067H15.75H11.5833H10.8333V10.5207V16.0207H1.91667V10.5207ZM9.5 15.4373H10.25V14.6873V10.5207V9.77067H9.5H3.25H2.5V10.5207V14.6873V15.4373H3.25H9.5ZM1.91667 0.854004H17.0833V1.43734H1.91667V0.854004Z" stroke={color} strokeWidth="1.5"/>
        </svg>
    )
}
