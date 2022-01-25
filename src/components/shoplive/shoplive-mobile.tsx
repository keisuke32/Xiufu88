import React,{useState} from 'react'
import {ShopLiveTab,ExperienceContent} from './shoplive.style'
import {PastStream,LiveStream,LiveStreamFilter} from '../../components/shoplive/modal/ShopLive'
import {useAppState} from '../../contexts/app/app.provider'
import FilterOption from './modal/FilterOption'
import {Collapse} from 'react-collapse'
import {CaretUpIcon} from '../../assets/icons/CaretUpIcon'
import {CaretDownIcon} from '../../assets/icons/CaretDownIcon'
import useexperiences from 'data/use-experience'
import {CheckMark} from '../../assets/icons/CheckMark'
import Mobile from './modal/Mobile'
export default function ShopLiveMobile({deviceType})
{
    const [isfeatured,setfeature] = useState(false)
    const [experience,setexperience] = useState(false)
    const [selectedexperience,setselected] = useState([])
    const [filteroption,setfilteroption] = useState({status:[],brands:[],price:{from:0,to:0}})
    const type = useAppState("tab")
    const stream = useAppState("stream")
    const {data,error,loading} = useexperiences()
    const isfilter = () => {
        if(filteroption.status.length > 0)
        {
            return true;
        }

        if(filteroption.brands.length > 0)
        {
            return true
        }

        if(filteroption.price.from > 0 || filteroption.price.to > 0)
        {
            return true;
        }

        return false;
    }

    if(!deviceType.mobile || loading)
    {
        return null;
    }

    if(stream)
    {
        return <Mobile stream={stream}></Mobile>;
    }

    return (
        <div style={{backgroundColor:'#D6D6D6',height:'calc(100vh - 186px)',position:'relative'}}>
            <div style={{position:'absolute',width:'100%',backgroundColor:'white',borderRadius:'0px 0px 8px 8px',top:'0px',zIndex:100}}>
                <ShopLiveTab>
                    <li className={!isfeatured?"active":""} onClick={()=>setfeature(false)}>最新</li>
                    <li className={isfeatured?"active":""} onClick={()=>setfeature(true)}>熱門</li>
                    <li className={experience?'active':''} onClick={()=>setexperience(!experience)}>视频主题 {experience?<CaretUpIcon/>:<CaretDownIcon/>}</li>
                    <FilterOption filteroption={filteroption} setfilteroption={setfilteroption} isfilter={isfilter()}/>
                </ShopLiveTab>
                <Collapse isOpened={experience}>
                    <ExperienceContent>
                        {
                            data.map((item,index)=>(
                                <div className="item" key={index}>{item.name}</div>
                            ))
                        }
                        <div className="btncontainer">
                            <div className="btnitem-left">重置</div>
                            <div className="btnitem-right">确定</div>
                        </div>
                    </ExperienceContent>
                </Collapse>
            </div>
            <div style={{paddingTop:'45px'}}>
            {
                (isfilter() || type == 'featured')?<LiveStreamFilter filteroption={filteroption} isfeature={type == 'featured'}></LiveStreamFilter>:type == 'livebroadcast'?<LiveStream></LiveStream>:<PastStream/>
            }
            </div>
        </div>
    )
}