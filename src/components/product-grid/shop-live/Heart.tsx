import React from 'react'
import {HeartContainer} from './shop-live-style'
import hearticon from '../../../assets/images/heart.png'

export const Heart = ({likes,setlike}) => {
    return (
        <HeartContainer onClick={setlike}>
            <img src={hearticon} className="hearticon"></img>
            <span className="likescount">{likes}</span>
        </HeartContainer>
    )
}