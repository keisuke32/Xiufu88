import React,{useState,useEffect,useRef} from 'react'
import {GetLive} from './mobile.style'
import {Setting} from 'assets/icons/Setting'
import {SwitchCamera} from 'assets/icons/SwitchCamera'
import baglive from 'assets/images/bagliveicon.png'
import bag from 'assets/images/categoryIcons/bag.png'
import mic from 'assets/images/categoryIcons/mic.png'
import video from 'assets/images/categoryIcons/video.png'
import share from 'assets/images/categoryIcons/share.png'
import {Heart,Person,PersonGroup,More} from 'assets/icons/Person'
import {startstreaming,stopstreaming,livestreamlistening} from 'graphql/mutation/livestream';
import {MediaStream} from '../../components/getlive/mediastream';
import {initializeApollo} from '../../utils/apollo'
import ProductOverlay from '../../components/shoplive/modal/ProductOverlay'
import ProfileList from './ProfileList'
import Modal from 'react-modal'
let timer = null;

Modal.setAppElement('#__next');
export default function GetLiveMobile({livestream,privatethreadid,publicthreadid,messagethread,setmessagethread,keypress,onchange,state,messageitem})
{
    const [index,setindex] = useState(0)
    const [profileshow,setprofileshow] = useState(false)
    const [second,setsecond] = useState(0)
    const [play,setplay] = useState(false)
    const [opened,setopened] = useState(false)
    const videoref = useRef(null)
    const client = initializeApollo()

    useEffect(()=>{
        if(timer){
            window.clearTimeout(timer)
        }
        if(play)
        {
           timer =  window.setTimeout(()=>{
                setsecond(second + 1)
            },1000)
        }
        else
        {
            setsecond(0)
        }

        return () => {
            if(timer){window.clearTimeout(timer)}
        }
    },[play,second])
    
    const onplay = () => {
        setplay(true)
    }

    const onend = () => {
        setindex((index + 1) % livestream.channel.record.sources.length)

        setsecond(0)
        setplay(false)
    }

    const gettimestring = () => {
        let time = "";
        let timelist = [];
        let secondtime = second + 0

        while(secondtime > 0)
        {
            timelist.push(secondtime % 60)
            secondtime = Math.floor(secondtime / 60)
        }

        for(let index = 2;index>=0;index--)
        {
            if(!timelist[index])
            {
                time += '00';
            }
            else
            {
                time += timelist[index] > 9?timelist[index]:'0'+timelist[index];
            }

            if(index > 0)
            {
                time += ':';
            }
        }

        return time;
    }

    const gethash =(s) => {
        var hash=0,c=(typeof s == 'string')?s.length:0,i=0;
        while(i<c)
        {
        hash = ((hash<<5)-hash)+s.charCodeAt(i++);
        //hash = hash & hash; // Convert to 32bit integer
        }

        return ( hash < 0 )?((hash*-1)+0xFFFFFFFF):hash; // convert to unsigned
    }

    const startedstreaming = () => {
        setplay(true)
        client.mutate({mutation:startstreaming,variables:{id:livestream.channel.id}});
    }

    const stopedstreaming = () => {
        setplay(false)
        client.mutate({mutation:stopstreaming,variables:{id:livestream.channel.id}})
    }

    const getparticipants = () => {
        let list = []
        for(let item in privatethreadid)
        {
            for(let itemparticipant in privatethreadid[item].participants)
            {
                if(privatethreadid[item].participants[itemparticipant].id != livestream.streamer.id && privatethreadid[item].participants[itemparticipant].isOnline)
                {
                    list.push(privatethreadid[item].participants[itemparticipant])
                }
            }
        }

        return list;
    }
    

    return (
        <GetLive>
            {
                livestream.channel.status == 'FINISHED' && (
                    <video src={livestream.channel.record.sources[index].source} autoPlay onEnded={onend} onPlay={onplay}></video>
                )
            }
            {
                (livestream.channel.status == "PENDING" && livestream.channel.status == 'STREAMING') && (
                    <MediaStream videoref={videoref} channelRoomId={gethash(livestream.id)} onStartBroadCasting={startedstreaming} onStopBroadCasting={stopedstreaming}></MediaStream>
                )
            }
            <div className="header">
                <div className="status">
                    <div className="statusitem live">直播中</div>
                    <div className="statusitem">
                        {gettimestring()}
                    </div>
                </div>
                <span className="stopbutton">結束直播</span>
                {/* <div style={{display:'flex'}}>
                    <span style={{marginRight:'15px'}}><SwitchCamera color="white"/></span>
                    <span><Setting color="white"/></span>
                </div> */}
            </div>
            <div className="headerstatus">
                <div className="item">
                    <Person color="white"/>
                    <span style={{marginLeft:'5px'}}>观看{livestream.views}</span>
                </div>
                <div className="item">
                    <Heart color="white"/>
                    <span style={{marginLeft:'5px'}}>讚 {livestream.likes}</span>
                </div>
                <div className="item">
                    {livestream.title}
                </div>
            </div>
            <div className="content">
                {
                    messageitem.map((item,index)=>(
                        <div className="messageitem" key={index}>
                            {
                                item.author.id != livestream.streamer.id && (
                                    <span className="profileitem" style={{color:`${item.author.color.background?item.author.color.background:'white'}`}}>{item.author.name}</span>
                                )
                            }
                            <span className="messagecontent">{item.data}</span>
                        </div>
                    ))
                }
            </div>
            <div className="bottom">
                <span onClick={()=>setopened(true)}><img src={baglive}></img></span>
                <div className="switchbtn">
                    <div className={messagethread == publicthreadid?"item active":"item"} onClick={()=>setmessagethread(publicthreadid)}>
                        <PersonGroup/>
                        <div>公開</div>
                    </div>
                    <div className={(messagethread != publicthreadid)?"item active":"item"} onClick={()=>setprofileshow(true)}>
                        <Person/>
                        <div>私訊</div>
                    </div>
                </div>
                <div style={{flex:1,marginRight:'10px'}}>
                    <input type="text" className="messageinput" placeholder="聊天..." onKeyPress={keypress} onChange={onchange} value={state.message}></input>
                </div>
                {/* <input type="text" className="messageinput" placeholder="聊天..."></input> */}
                <div className="btn">
                    <div className="circlebtn">
                        <SwitchCamera/>
                    </div>
                    <span>镜头转换</span>
                </div>
                <div className="btn">
                    <div className="circlebtn">
                        <img src={mic}></img>
                    </div>
                    <span>関音訊</span>
                </div>
                <div className="btn">
                    <div className="circlebtn">
                        <img src={video}></img>
                    </div>
                    <span>関畫面</span>
                </div>
                <div className="btn">
                    <div className="circlebtn">
                        <More/>
                    </div>
                    <span>更多</span>
                </div>
            </div>
            <Modal
                isOpen={opened}
                onRequestClose={()=>setopened(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.25)',
                        zIndex:100
                    },
                    content:{
                        top:'30%',
                        zIndex:1000,
                        bottom:0,
                        width:'100vw',
                        left:0,
                        position:'absolute'
                    },
                    bottom:{
                        zIndex:1000
                    }
                }}
                ariaHideApp={true}
            >
                <ProductOverlay productdurations={livestream.productDurations}/>
            </Modal>
            <Modal
                isOpen={profileshow}
                onRequestClose={()=>setprofileshow(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.25)',
                        zIndex:100
                    },
                    content:{
                        top:'30%',
                        zIndex:1000,
                        bottom:0,
                        width:'100vw',
                        left:0,
                        position:'absolute'
                    },
                    bottom:{
                        zIndex:1000
                    }
                }}
                ariaHideApp={true}
            >
                <ProfileList privatethreadid={privatethreadid?privatethreadid:[]} setmessagethread={setmessagethread} messageid={messagethread} streamer={livestream.streamer} close={()=>setprofileshow(false)} onkeypress={keypress} onchange={onchange} state={state}></ProfileList>
            </Modal>
        </GetLive>
    )
}