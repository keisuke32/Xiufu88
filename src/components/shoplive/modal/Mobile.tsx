import React,{useState,useEffect} from 'react'
import {GetLive,HeartContainer} from 'components/addgetlive/mobile.style'
import {LiveContent} from './shopliveitem.style'
import nameInitials from 'name-initials'
import {Times} from 'assets/icons/Times'
import baglive from 'assets/images/bagliveicon.png'
import {Person,PersonGroup,More} from 'assets/icons/Person'
import hearticon from '../../../assets/images/heart.png'
import {MediaStream} from 'components/shoplive/mediastream'
import {useAppDispatch} from 'contexts/app/app.provider'
import {initializeApollo} from 'utils/apollo'
import {nextqueue} from 'graphql/query/livestreams.query'
import {updateLiveStreamCount,likelivestream} from 'graphql/mutation/livestream'
import {messages} from 'graphql/query/message';
import {joinlivestream,addmessage,messageadded} from 'graphql/mutation/messages'
import Modal from 'react-modal'
import ProductOverlay from './ProductOverlay'

Modal.setAppElement('#__next')
export default function Mobile({stream})
{
    const [livestream,setlivestream] = useState(stream)
    const [selectedvideo,setselectedvideo] = useState(0)
    const [phone,setphone] = useState(null)
    const [liked,setliked] = useState(false)
    const [open,setopen] = useState(false)
    const [messageid,setmessageid] = useState(null)
    const [messagethreadid,setmessagethreadid] = useState(null)
    const [privatemessageid,setprivatemessageid] = useState(null)
    const [addedmessage,setaddedmessage] = useState(null);
    const [messageitem,setmessages] = useState([]);
    const [state,setstate] = useState({message:""})
    const dispatch = useAppDispatch()
    const apollo = initializeApollo()
    
    useEffect(()=>{
        if(stream)
        {
            setlivestream(stream)
        }
        
    },[stream])

    const like = () => {
        if(livestream.id)
        {
            setliked(true)
            apollo.mutate({mutation:likelivestream,variables:{id:livestream.id}}).then(res=>{
                if(!res.errors)
                {
                    setlivestream(res.data.updateLiveStreamCount)
                }
                setliked(false)
            }).catch(err=>setliked(false))
        }
    }

    useEffect(()=>{
        if(livestream.id)
        {
            apollo.mutate({mutation:joinlivestream,variables:{id:livestream.id}}).then(res=>{
                if(res.data && !res.errors)
                {
                    console.log(res.data.joinLiveStream);
                    setmessages([]);
                    if(res.data.joinLiveStream.publicMessageThread)
                    {
                        setmessageid(res.data.joinLiveStream.publicMessageThread.id)
                        setmessagethreadid(res.data.joinLiveStream.publicMessageThread.id);
                    }
                    else
                    {
                        setmessageid(null)
                        setmessagethreadid(null);
                    }

                    if(res.data.joinLiveStream.privateMessageThreads && res.data.joinLiveStream.privateMessageThreads.length > 0)
                    {
                        setprivatemessageid(res.data.joinLiveStream.privateMessageThreads[0].id);
                    }
                    else
                    {
                        setprivatemessageid(null)
                    }

                }
            }).catch(err=>console.log(err))
            setphone(localStorage.getItem('phone'));
        }
    },[livestream])

    useEffect(()=>{
        if(messageid)
        {
            apollo.query({query:messages,variables:{thread:messageid,skip:null,limit:20}}).then(res=>{
                if(res.data && !res.error)
                {
                    setmessages(res.data.messages);
                }
            })

            let subscribe = apollo.subscribe({query:messageadded,variables:{threads:messageid}})


            subscribe.subscribe({
                next(data){
                    if(data.data.messageAdded.author.phone != '+' + phone)
                    {
                        setaddedmessage({...data.data.messageAdded});
                    }
                },
                error(err){
                    console.log('error',err)
                }
            })
        }
    },[messageid])

    useEffect(()=>{
        if(addedmessage && messageitem[0].id != addedmessage.id)
        {
            console.log(messageitem);
            addmessageitem({...addedmessage});
            setaddedmessage(null);
        }
    },[addedmessage]);


    const openproduct = () => {
        // openModal({
        //     show:true,
        //     overlayClassName: 'quick-view-overlay',
        //     closeOnClickOutside: true,
        //     component: ProductOverlay,
        //     closeComponent: '',
        //     config:{
        //         enableResizing: false,
        //         disableDragging: true,
        //         className: 'quick-view-modal',
        //         width: 458,
        //         height: 'auto'
        //     }
        // })
        setopen(true)
    }

    const submitvalue = () => {
        if(!messageid)
        {
            return null;
        }
        let data = {
            data:state.message,
            videoTime:0,
            type:'TEXT',
            thread:messageid
        }

        apollo.mutate({mutation:addmessage,variables:{input:data}}).then(res=>{
            setstate({...state,message:""});
            let {data,errors} = res;
            console.log(data);
            if(data && !errors)
            {
                let messagearray = [...messageitem];
                //messagearray.push(data.addMessage);
                console.log(messagearray);
                setmessages([data.addMessage,...messagearray]);
            }
        }).catch(err=>console.log(err))

    }

    const addmessageitem = (message) => {
        setmessages([message,...messageitem]);
    }


    const keypress = (e) => {
        if(e.keycode == 13 || e.which == 13)
        {
            submitvalue();
        }
    }

    const nextvideo = () => {
        if(livestream.channel.record.sources[selectedvideo])
        {
            apollo.query({query:nextqueue,variables:{liveStream:livestream.id,currentRecord:livestream.channel.record.sources[selectedvideo].id}}).then(res=>{
                let {data,error,loading} = res

                if(!error && !loading)
                {
                    viewstream(data.nextQueue.liveStream)
                    if(!data.nextQueue.record)
                    {
                        setselectedvideo(0)
                    }
                    else
                    {
                        for(let item in data.nextQueue.liveStream.channel.record.sources)
                        {
                            if(data.nextQueue.liveStream.channel.record.sources[item].id == data.nextQueue.record.id)
                            {
                                setselectedvideo(Number(item))
                            }
                        }
                    }
                }
            }).catch(err=>console.log(err))
        }
    }

    const viewstream = (streaminfo) => {
        apollo.mutate({mutation:updateLiveStreamCount,variables:{id:streaminfo.id}}).then(res=>{
            if(!res.errors)
            {
                setlivestream({
                    ...streaminfo,
                    views:res.data.updateLiveStreamCount.views
                })
            }
        }).catch(err=>setlivestream(streaminfo))
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

    const removestream = () => {
        dispatch({type:"SET_STREAM",payload:null})
    }

    if(!livestream)
    {
        return null;
    }
    return (
        <GetLive id="main">
            {
                (livestream.channel.status == 'FINISHED' && livestream.channel.record.sources.length > 0) && (
                    <video src={livestream.channel.record.sources[selectedvideo].source} autoPlay onEnded={nextvideo}></video>
                )
            }
            {
                ((livestream.channel.status == "PENDING" && livestream.channel.status == "STREAMING") && livestream.id)&& (
                    <MediaStream channelRoomId={gethash(livestream.id)} publisher={false}></MediaStream>
                )
            }
            <LiveContent>
                <div className="headerprofile">
                    <div className="profileinfo">
                        {
                            livestream.streamer.photo?
                                <img className="avatar" src={livestream.streamer.photo.url}></img>:
                                <div className="avatar"  style={{backgroundColor: livestream?.streamer?.color?.background, color: livestream?.streamer?.color?.text}}>{nameInitials(livestream?.streamer?.name)}</div>
                        }
                        <div style={{marginLeft:'15px'}}>
                            <div className="title">{livestream.title}</div>
                            <div className="description">
                                {livestream.views} 观看 | {livestream.streamer?.address?.city}
                            </div>
                        </div>
                    </div>
                    <span onClick={removestream}>
                        <Times/>
                    </span>
                </div>
                <div className="content">
                    {
                        messageitem.map((item,index)=>(
                            <div className="messageitem" key={index}>
                                {
                                    item.author.phone != phone && (
                                        <span className="profileitem" style={{color:`${item.author.color.background?item.author.color.background:'white'}`}}>{item.author.name}</span>
                                    )
                                }
                                <span className="messagecontent">{item.data}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="bottom">
                    <span onClick={openproduct}><img src={baglive}></img></span>
                    <div className="switchbtn">
                        <div className={messageid == messagethreadid?"item active":"item"} onClick={()=>setmessageid(messagethreadid)}>
                            <PersonGroup/>
                            <div>公開</div>
                        </div>
                        <div className={(privatemessageid && messageid == privatemessageid)?"item active":"item"} onClick={()=>setmessageid(privatemessageid)}>
                            <Person/>
                            <div>私訊</div>
                        </div>
                    </div>
                    <input type="text" className="messageinput" placeholder="聊天..." onKeyPress={keypress} onChange={e=>setstate({...state,message:e.target.value})} value={state.message}></input>
                    <div className="circlebtn" style={{color:'white',marginLeft:'5px'}}>
                        <More/>
                    </div>
                    <HeartContainer onClick={like}>
                        <img src={hearticon} style={{width:'27px',height:'25px'}}></img>
                        <span className="likescount" style={{width:'38px',height:'18px'}}>{livestream.likes}</span>
                        {
                            liked && 
                        (<>
                            <img src={hearticon} className="animate_heart"></img>
                            <img src={hearticon} className="animate_heart"></img>
                            <img src={hearticon} className="animate_heart"></img>
                            <img src={hearticon} className="animate_heart"></img>
                            <img src={hearticon} className="animate_heart"></img>
                            <img src={hearticon} className="animate_heart"></img>
                            <img src={hearticon} className="animate_heart"></img>
                            <img src={hearticon} className="animate_heart"></img>
                            <img src={hearticon} className="animate_heart"></img>
                        </>)}
                    </HeartContainer>
                </div>
            </LiveContent>

            <Modal
                isOpen={open}
                onRequestClose={()=>setopen(false)}
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
        </GetLive>
    )
}