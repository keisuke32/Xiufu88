import React from 'react';

export const ShoppingCart = ({width = '14',height = '14', color='currentColor'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 19 18" fill={color} xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width={width} height={height}>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.50781 1.5V3H3.00781L5.70781 8.6925L4.69531 10.5225C4.14781 11.5275 4.86781 12.75 6.00781 12.75H15.0078V11.25H6.00781L6.83281 9.75H12.4203C12.9828 9.75 13.4778 9.4425 13.7328 8.9775L16.4178 4.11C16.6953 3.615 16.3353 3 15.7653 3H4.66531L3.96031 1.5H1.50781ZM6.0078 13.5C5.1828 13.5 4.5153 14.175 4.5153 15C4.5153 15.825 5.1828 16.5 6.0078 16.5C6.8328 16.5 7.5078 15.825 7.5078 15C7.5078 14.175 6.8328 13.5 6.0078 13.5ZM12.0153 15C12.0153 14.175 12.6828 13.5 13.5078 13.5C14.3328 13.5 15.0078 14.175 15.0078 15C15.0078 15.825 14.3328 16.5 13.5078 16.5C12.6828 16.5 12.0153 15.825 12.0153 15Z" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
                <rect x="0.0078125" width={width} height={height} fill={color}/>
            </g>
        </svg>
)
}
