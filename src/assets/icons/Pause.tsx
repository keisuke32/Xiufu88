import React from 'react'
import play from '../images/categoryIcons/play.png'
import mute from '../images/categoryIcons/mute.png'
export const Pause = ({
    color="currentColor",
    width='12px',
    height="15px"
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.69531 0V14.626" stroke={color} stroke-width="3"/>
            <path d="M9.63672 0V14.626" stroke={color} stroke-width="3"/>
        </svg>
    )
}

export const Audio = ({
    color="currentcolor",
    width="19px",
    height="19px"
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00976562 6.31297V12.313H4.00977L9.00977 17.313V1.31297L4.00977 6.31297H0.00976562ZM13.5098 9.31297C13.5098 7.54297 12.4898 6.02297 11.0098 5.28297V13.333C12.4898 12.603 13.5098 11.083 13.5098 9.31297ZM11.0098 0.542969V2.60297C13.8998 3.46297 16.0098 6.14297 16.0098 9.31297C16.0098 12.483 13.8998 15.163 11.0098 16.023V18.083C15.0198 17.173 18.0098 13.593 18.0098 9.31297C18.0098 5.03297 15.0198 1.45297 11.0098 0.542969Z" fill={color}/>
        </svg>
    )
}

export const Play = ({
    width='19px',
    height='19px'
}) => {
    return(
        <img src={play} style={{width:width,height:height}}/>
    )
}

export const Mute = ({
    width = '19px',
    height='19px'
}) => {
    return (
        <img src={mute} style={{width,height}}></img>
    )
}