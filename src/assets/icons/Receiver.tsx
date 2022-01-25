import React from 'react';

export const Receiver = ({width = '14px',height = '14px', color='currentColor'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 16 18" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M7.91113 0.583984C3.97655 0.583984 0.786133 3.7744 0.786133 7.70898V13.2507C0.786133 14.5648 1.84697 15.6257 3.16113 15.6257H5.53613V9.29232H2.36947V7.70898C2.36947 4.64523 4.84738 2.16732 7.91113 2.16732C10.9749 2.16732 13.4528 4.64523 13.4528 7.70898V9.29232H10.2861V15.6257H13.4528V16.4173H7.91113V18.0007H12.6611C13.9753 18.0007 15.0361 16.9398 15.0361 15.6257V7.70898C15.0361 3.7744 11.8457 0.583984 7.91113 0.583984Z" fill={color}/>
        </svg>

)
}