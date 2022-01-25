import React from 'react';

export const MoreIcon = ({width = '14',height = '14', color='currentColor'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 4 12" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M2.41992 3C3.24492 3 3.91992 2.325 3.91992 1.5C3.91992 0.675 3.24492 0 2.41992 0C1.59492 0 0.919922 0.675 0.919922 1.5C0.919922 2.325 1.59492 3 2.41992 3ZM2.41992 4.5C1.59492 4.5 0.919922 5.175 0.919922 6C0.919922 6.825 1.59492 7.5 2.41992 7.5C3.24492 7.5 3.91992 6.825 3.91992 6C3.91992 5.175 3.24492 4.5 2.41992 4.5ZM2.41992 9C1.59492 9 0.919922 9.675 0.919922 10.5C0.919922 11.325 1.59492 12 2.41992 12C3.24492 12 3.91992 11.325 3.91992 10.5C3.91992 9.675 3.24492 9 2.41992 9Z" fill={color}/>
        </svg>
    )
}