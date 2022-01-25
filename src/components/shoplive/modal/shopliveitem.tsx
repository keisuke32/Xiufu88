import React from 'react'
import { isBuffer } from 'util'
import {ShopliveContainer} from './shopliveitem.style'
import nameInitials from 'name-initials'
import {useAppDispatch} from '../../../contexts/app/app.provider'

export default function ShopliveItem({data})
{
    const dispatch = useAppDispatch()
    const getclassname = () => {
        switch(data.channel.status)
        {
            case 'STREAMING':
                return 'livestreaming';
            case 'PENDING':
                return 'pending';
            case 'FINISHED':
                return 'finished'
        }
    }

    const getstatustitle = () => {
        switch(data.channel.status)
        {
            case 'STREAMING':
                return '直播中';
            case 'PENDING':
                return '視頻中';
            case 'FINISHED':
                return '回放中'
        }
    }

    const setstream = () => {
        dispatch({type:"SET_STREAM",payload:data})
    }
    return (
        <ShopliveContainer style={{backgroundImage:`url('${data?.preview[0]?.thumbnail || data?.preview[0]?.url}')`}} onClick={setstream}>
            <div className="backgroundcontainer"></div>
            <div className="shoplivecontainer">
                <div className={getclassname()}>
                    {getstatustitle()}
                </div>
                <div style={{padding:'0px 5px'}}>{data.views}观看</div>
            </div>
            <div className="profile">
                {
                    data.streamer.photo?
                        <img className="avatar" src={data.streamer.photo.url}></img>:
                        <div className="avatar"  style={{backgroundColor: data?.streamer?.color?.background, color: data?.streamer?.color?.text}}>{nameInitials(data?.streamer?.name)}</div>
                }
                <div style={{marginLeft:'15px'}}>
                    <h1 className="streamer">{data.streamer.name}</h1>
                    <p className="location">{data.streamer?.address?.city}</p>
                </div>
            </div>
        </ShopliveContainer>
    )
}