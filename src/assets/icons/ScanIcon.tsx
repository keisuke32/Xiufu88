import React from 'react';
export const ScanIcon = ({
    width = 20,
    height = 20,
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 0H5.09991V1.5H1.5V5.09999H0V1C0 0.447715 0.447715 0 1 0ZM0 11.9V16C0 16.5523 0.447715 17 1 17H5.09991V15.5H1.5V11.9H0ZM15.5 11.9V15.5H11.8999V17H16C16.5523 17 17 16.5523 17 16V11.9H15.5ZM17 5.09999V1C17 0.447715 16.5523 0 16 0H11.8999V1.5H15.5V5.09999H17Z" fill="white"/>
            <rect y="7.6499" width={width} height="1.5" fill="white"/>
        </svg>
    );
};
