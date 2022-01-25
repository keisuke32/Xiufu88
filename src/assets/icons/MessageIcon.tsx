import React from 'react';

export const MessageIcon = ({width = '14px',height = '14px', color='currentColor', strokeColor='currentColor'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0889 11.3405L16.7729 11.6482L16.8389 11.5014V11.3405V2.94053C16.8389 1.75666 15.8738 0.790527 14.6896 0.790527H3.49502C2.3061 0.790527 1.35292 1.76133 1.3527 2.94011C1.3527 2.94018 1.3527 2.94024 1.3527 2.94031C1.3527 2.94038 1.3527 2.94045 1.3527 2.94053L1.3457 15.5401L1.3447 17.3528L2.62616 16.0707L5.20511 13.4905H14.6896C15.113 13.4905 15.4567 13.2995 15.6959 13.1118C15.9387 12.9213 16.1365 12.6858 16.2852 12.4806C16.4368 12.2713 16.5568 12.0664 16.638 11.9164C16.6791 11.8405 16.7114 11.7765 16.7341 11.7302C16.7454 11.707 16.7544 11.6881 16.7609 11.6742L16.7688 11.6572L16.7713 11.6517L16.7722 11.6497L16.7726 11.6489L16.7727 11.6485C16.7728 11.6483 16.7729 11.6482 16.0889 11.3405Z" stroke={strokeColor} strokeWidth="1.5"/>
            <path d="M12.7904 5.24033H5.39453V4.84033H12.7904V5.24033ZM12.7904 7.34033H5.39453V6.94033H12.7904V7.34033ZM12.7904 9.44033H5.39453V9.04033H12.7904V9.44033Z" fill={color} stroke={strokeColor}/>
        </svg>
    )
}
