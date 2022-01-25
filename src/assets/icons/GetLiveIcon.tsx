import React from 'react';

export const Assignment = ({width = '18px',height = '20px',color='rgba(0,0,0,0.5)'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4167 2.75008H11.585C11.2 1.68675 10.1917 0.916748 9 0.916748C7.80833 0.916748 6.8 1.68675 6.415 2.75008H2.58333C1.575 2.75008 0.75 3.57508 0.75 4.58341V17.4167C0.75 18.4251 1.575 19.2501 2.58333 19.2501H15.4167C16.425 19.2501 17.25 18.4251 17.25 17.4167V4.58341C17.25 3.57508 16.425 2.75008 15.4167 2.75008ZM9 2.75008C9.50417 2.75008 9.91667 3.16258 9.91667 3.66675C9.91667 4.17091 9.50417 4.58341 9 4.58341C8.49583 4.58341 8.08333 4.17091 8.08333 3.66675C8.08333 3.16258 8.49583 2.75008 9 2.75008ZM10.8333 15.5834H4.41667V13.7501H10.8333V15.5834ZM13.5833 11.9167H4.41667V10.0834H13.5833V11.9167ZM13.5833 8.25008H4.41667V6.41675H13.5833V8.25008Z" fill={color}/>
        </svg>
    );
}

export const Flag = ({width='22px',height = '22px',color = 'rgba(0,0,0,0.5)'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2002 5.50008L12.8335 3.66675H4.5835V19.2501H6.41683V12.8334H11.5502L11.9168 14.6667H18.3335V5.50008H13.2002Z" fill={color}/>
        </svg>

    )
}

export const Toggle = ({width = '15px',height='15px'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="9" height="5">
        <path d="M4.63125 5.36875L3.75 6.25L7.5 10L11.25 6.25L10.3688 5.36875L7.5 8.23125L4.63125 5.36875Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <rect y="15" width="15" height="15" transform="rotate(-90 0 15)" fill="black" fillOpacity="0.54"/>
        </g>
        </g>
        </svg>

    );
}
