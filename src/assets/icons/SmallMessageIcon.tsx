import React from 'react';
export const SmallMessageIcon = ({
                        color = "#31F1CF",
                        width = 20,
                        height = 20
                                 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.952 2.23242H4.26202C3.45834 2.23242 2.80809 2.88998 2.80809 3.69367L2.80078 16.8449L5.72327 13.9224H15.952C16.7557 13.9224 17.4132 13.2648 17.4132 12.4611V3.69367C17.4132 2.88998 16.7557 2.23242 15.952 2.23242ZM14.4907 10.9999H5.72327V9.53864H14.4907V10.9999ZM14.4907 8.80802H5.72327V7.34677H14.4907V8.80802ZM14.4907 6.61615H5.72327V5.15491H14.4907V6.61615Z" fill="url(#smallmessageicongradient)"/>
            <defs>
                <linearGradient id="smallmessageicongradient" x1="2.80078" y1="16.8449" x2="2.80078" y2="2.23242" gradientUnits="userSpaceOnUse">
                    <stop stopColor={color}/>
                    <stop offset="1" stopColor={color}/>
                </linearGradient>
            </defs>
        </svg>
    )
}
