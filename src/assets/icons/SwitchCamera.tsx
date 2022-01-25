import React from 'react'

export function SwitchCamera({color="currentColor",width="24px",height="25px"})
{
    return (
        <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4.5H16.83L15 2.5H9L7.17 4.5H4C2.9 4.5 2 5.4 2 6.5V18.5C2 19.6 2.9 20.5 4 20.5H20C21.1 20.5 22 19.6 22 18.5V6.5C22 5.4 21.1 4.5 20 4.5ZM15 16V13.5H9V16L5.5 12.5L9 9V11.5H15V9L18.5 12.5L15 16Z" fill={color}/>
        </svg>
    )
}