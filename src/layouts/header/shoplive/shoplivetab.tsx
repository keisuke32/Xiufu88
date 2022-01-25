import React from 'react'
import {Tab} from './shoplive.style'
import {useAppDispatch,useAppState} from '../../../contexts/app/app.provider'

export default function ShopLiveTab({active})
{
    const setActiveTab = useAppDispatch()
    const livetab = useAppState('tab')
    
    const settab = (tab) => {
        setActiveTab({type:"SET_TAB",payload:tab})
    }
    return (
        <Tab>
            <li className={livetab == "livebroadcast"?"active":""} onClick={()=>settab('livebroadcast')}><span>直播</span></li>
            <li className={livetab == "featured"?"active":""} onClick={()=>settab('featured')}><span>关注</span></li>
            <li className={livetab == "paststream"?"active":""} onClick={()=>settab('paststream')}><span>视频</span></li>
        </Tab>
    )
}