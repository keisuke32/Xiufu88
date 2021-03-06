import React from 'react'

export function Person({width='13px',height='13px',color="currentColor"})
{
    return (
        <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.42685 0.195801C4.68273 0.195801 3.27007 1.58568 3.27007 3.30167C3.27007 5.01766 4.68273 6.40753 6.42685 6.40753C8.17097 6.40753 9.58363 5.01766 9.58363 3.30167C9.58363 1.58568 8.17097 0.195801 6.42685 0.195801ZM6.42685 7.184C4.3197 7.184 0.113281 8.22447 0.113281 10.2899V12.6193H12.7404V10.2899C12.7404 8.22447 8.534 7.184 6.42685 7.184Z" fill={color}/>
        </svg>
    )
}

export function Heart({color="currentColor",width='14px',height='13px'})
{
    return (
        <svg width={width} height={height} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.16091 12.6193L6.17922 11.7256C2.69252 8.56387 0.390625 6.47862 0.390625 3.91946C0.390625 1.83421 2.02903 0.195801 4.11428 0.195801C5.29231 0.195801 6.42295 0.744194 7.16091 1.61079C7.89887 0.744194 9.02951 0.195801 10.2075 0.195801C12.2928 0.195801 13.9312 1.83421 13.9312 3.91946C13.9312 6.47862 11.6293 8.56387 8.1426 11.7324L7.16091 12.6193Z" fill={color}/>
        </svg>

    )
}

export function PersonGroup({width='17px',height='13px',color="currentColor"})
{
    return (
        <svg width={width} height={height} viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2344 7.79785C13.2619 8.49535 13.9819 9.44035 13.9819 10.7004V12.9504H16.9819V10.7004C16.9819 9.06535 14.3044 8.09785 12.2344 7.79785Z" fill={color}/>
            <path d="M6.48047 6.95044C8.13732 6.95044 9.48047 5.60729 9.48047 3.95044C9.48047 2.29359 8.13732 0.950439 6.48047 0.950439C4.82361 0.950439 3.48047 2.29359 3.48047 3.95044C3.48047 5.60729 4.82361 6.95044 6.48047 6.95044Z" fill={color}/>
            <path d="M10.9819 6.95044C12.6394 6.95044 13.9819 5.60794 13.9819 3.95044C13.9819 2.29294 12.6394 0.950439 10.9819 0.950439C10.6294 0.950439 10.2994 1.02544 9.98438 1.13044C10.6069 1.90294 10.9819 2.88544 10.9819 3.95044C10.9819 5.01544 10.6069 5.99794 9.98438 6.77044C10.2994 6.87544 10.6294 6.95044 10.9819 6.95044Z" fill={color}/>
            <path d="M6.48047 7.70044C4.47797 7.70044 0.480469 8.70544 0.480469 10.7004V12.9504H12.4805V10.7004C12.4805 8.70544 8.48297 7.70044 6.48047 7.70044Z" fill={color}/>
        </svg>

    )
}

export function More({width="28px",height="28px",color="currentColor"})
{
    return (
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.28917" cy="14.7025" r="1.82432" fill={color}/>
            <circle cx="13.504" cy="14.7025" r="1.82432" fill={color}/>
            <circle cx="18.7189" cy="14.7025" r="1.82432" fill={color}/>
        </svg>
    )
}