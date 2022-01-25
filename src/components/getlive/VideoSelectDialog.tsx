import React,{useState,useEffect} from 'react';
import {CenterModal} from 'react-spring-modal';
import {ModalDialog} from './getlivestyle';
import {initializeApollo} from 'utils/apollo';
import {assets} from 'graphql/query/asset';

export default function VideoSelectDialog({open,setopen,selectvideo,selectedvideo})
{
    const [data,setdata] = useState([]);
    const [selecteddata,selectdata] = useState([])
    const client = initializeApollo();
    useEffect(()=>{
        client.query({query:assets,variables:{limit:10,skip:0}}).then(result=>{
            if(result.data && !result.error)
            {
                setdata(result.data.assets.collection);
            }
        }).catch(err=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        selectdata([...selectedvideo])
    },[open])

    const addvideo = (itemvideo) => {
        var index = -1;
        for(let item in selecteddata)
        {
            if(selecteddata[item].id == itemvideo.id)
            {
                index = Number(item)
            }
        }
        var videolist = [...selecteddata]
        if(index > -1)
        {
            videolist.splice(index,1)
            selectdata(videolist)
        }
        else
        {
            videolist.push(itemvideo)
            selectdata(videolist)
        }
    }

    const submitvideo = () => {
        selectvideo(selecteddata)
        setopen(false)
    }

    const isselected = (video) => {
        for(let item in selecteddata)
        {
            if(selecteddata[item].id == video.id)
            {
                return true
            }
        }

        return false
    }

    return (
        <CenterModal isOpen={open} onRequestClose={()=>setopen(false)}>
            <ModalDialog>
                <h1 className="title">上传短视频</h1>
                <div className="listcontainer">
                    {
                        data.map(item=>{
                            return (
                                <div key={item.id} className={isselected(item)?"selected item":"item"} onClick={()=>addvideo(item)}>
                                    <video src={item.url} style={{objectFit:'cover',width:'100%',height:'200px'}} controls></video>
                                    <p>{item.filename}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="buttoncontainer">
                    <button className="submit" onClick={()=>submitvideo()}>确认</button>
                    <button className="submit" style={{marginLeft:'15px'}} onClick={()=>window.location.href = "/livevideo"}>实况视频</button>
                    <button className="cancel" onClick={()=>setopen(false)}>取消</button>
                </div>
            </ModalDialog>
        </CenterModal>
    )
}
