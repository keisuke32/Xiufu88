import React,{useState} from 'react'
import {LiveTv} from '../../assets/icons/Livetv'
import {Theater} from '../../assets/icons/Theater'
import {BroadCast,Tab} from './mobile.style'
import styled from 'styled-components'
import css from '@styled-system/css'
import {useAppDispatch,useAppState} from '../../contexts/app/app.provider'
import {GetLiveLiveStream,GetPastStream} from './GetliveContainer'


const Grid = styled.div(
    css({
      display: 'grid',
      gridGap: '16px',
      gridTemplateColumns: 'repeat(3, minmax(114px, 1fr))',

      '@media screen and (min-width: 480px)': {
        gridTemplateColumns: 'repeat(3, minmax(114px, 1fr))',
      },

      '@media screen and (min-width: 740px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 991px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1200px)': {
        gridTemplateColumns: 'repeat(5, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1400px)': {
        gridTemplateColumns: 'repeat(5, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1700px)': {
        gridTemplateColumns: 'repeat(6, minmax(180px, 1fr))',
      },
    })
  );


export default function AddGetLiveMobile()
{
    const [state,setstate] = useState({
        type:'live',
        featured:false
    })

    const settype = useAppDispatch()

    const livevideo = (type) => {
      settype({type:"SET_TYPE",payload:type})
    }
 
    return (
        <div style={{background:'#F2F2F2',height:'calc(100vh - 186px)'}}>
            <div style={{padding:'15px',display:'flex'}}>
                <BroadCast onClick={()=>livevideo("livestream")}>
                    <LiveTv color="#BDBDBD"/>
                    <span>直播</span>
                </BroadCast>
                <BroadCast style={{background:'linear-gradient(0deg, #FF9A03 0%, #FFB904 100%)'}} onClick={()=>livevideo("paststream")}>
                    <Theater color="#BDBDBD"/>
                    <span>短视频</span>
                </BroadCast>
            </div>
            <div style={{backgroundColor:'white'}}>
                <Tab>
                    <li className={state.type == 'live'?"active":""} onClick={()=>setstate({type:"live",featured:false})}>直播</li>
                    <li className={(state.type == 'past' && !state.featured)?"active":""} onClick={()=>setstate({type:"past",featured:false})}>短视频</li>
                    <li className={state.featured?"active":""} onClick={()=>setstate({type:'past',featured:true})}>点赞</li>
                </Tab>
                <div style={{overflowY:'auto',padding:'15px',height:'calc(100vh - 350px)',backgroundColor:'white'}}>
                    {
                        state.type == 'live'?<GetLiveLiveStream/>:<GetPastStream isfeature={state.featured}></GetPastStream>
                    }
                    
                </div>
            </div>
        </div>
    )
}