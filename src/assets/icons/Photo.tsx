import React from 'react';
export const Photo = ({
                          color = 'currentColor',
                          width = '18px',
                          height = '18px',
                      }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.55404 3.88932H0.970703V7.84766H0.97862L0.970703 14.9727C0.970703 15.8435 1.6832 16.556 2.55404 16.556H16.804V14.9727H2.55404V3.88932ZM18.3874 2.30599H12.054L10.4707 0.722656H5.7207C4.84987 0.722656 4.14529 1.43516 4.14529 2.30599L4.13737 11.806C4.13737 12.6768 4.84987 13.3893 5.7207 13.3893H18.3874C19.2582 13.3893 19.9707 12.6768 19.9707 11.806V3.88932C19.9707 3.01849 19.2582 2.30599 18.3874 2.30599ZM6.51237 11.0143L10.0749 6.26432L12.8457 9.83474L14.8249 7.45182L17.5957 11.0143H6.51237Z" fill="white" fillOpacity="0.5"/>
        </svg>

    );
};
