import React from 'react';

export const LocationIcon = ({width='26px',height='26px', color='#BE0000'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="locationIconMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="4" width="10" height="15">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 4C9.24 4 7 6.24 7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4ZM9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C12.8932 6.5 13.7185 6.9765 14.1651 7.75C14.6116 8.5235 14.6116 9.4765 14.1651 10.25C13.7185 11.0235 12.8932 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9Z" fill="white"/>
            </mask>
            <g mask="url(#locationIconMask)">
                <rect width="24" height="24" fill={color}/>
            </g>
        </svg>
    )
}