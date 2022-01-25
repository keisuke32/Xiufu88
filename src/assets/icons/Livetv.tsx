import React from 'react'

export const LiveTv = ({color='currentColor'}) => {
    return (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M30.6237 8.75008H19.5549L24.3529 3.95216L23.332 2.91675L17.4987 8.75008L11.6654 2.91675L10.6299 3.95216L15.4424 8.75008H4.3737C2.76953 8.75008 1.45703 10.048 1.45703 11.6667V29.1668C1.45703 30.7709 2.76953 32.0834 4.3737 32.0834H30.6237C32.2279 32.0834 33.5404 30.7709 33.5404 29.1668V11.6667C33.5404 10.048 32.2279 8.75008 30.6237 8.75008ZM30.6237 29.1668H4.3737V11.6667H30.6237V29.1668ZM13.1237 14.5834V26.2501L23.332 20.4167L13.1237 14.5834Z" fill={color}/>
            </g>
        </svg>
    )
}