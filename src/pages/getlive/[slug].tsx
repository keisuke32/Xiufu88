import React,{useState,useEffect,useRef} from 'react';
import {Modal} from '@redq/reuse-modal';
import {LeftSidebar} from '../../components/getlive/LeftSidebar';
import {MainContainer,Card,Title,TabListGetLive,Officialstart,CardBox} from '../../components/getlive/getlivestyle';
import {MediaStream} from '../../components/getlive/mediastream';

import post1 from '../../assets/images/post1.png';
import post2 from 'assets/images/post2.png';
import {useRouter} from 'next/router';

import {startstreaming,stopstreaming,livestreamlistening} from 'graphql/mutation/livestream';
import {messages} from 'graphql/query/message';
import {GET_LIVESTREAM} from 'graphql/query/livestreams.query';
import {addmessage,messageadded} from 'graphql/mutation/messages';
import {SearchIcon} from 'assets/icons/SearchIcon';
import {CloseCircle} from 'assets/icons/CloseCircle';
import {useAppDispatch} from "../../contexts/app/app.provider";
import {ChatFragment} from '../../components/shoplive/VideoStyle';
import smile from 'assets/images/smile.png';
import {initializeApollo} from 'utils/apollo';
import {Picker} from 'emoji-mart';
import {updateproduct} from '../../graphql/mutation/product'
import moment from 'moment'
import {AddProduct} from '../../components/getlive/AddProduct';
import useproduct from 'data/use-products'
import {getuserbytoken} from '../../data/use-auth'
import PageLoader from 'components/loader/page-loader';
import GetLiveMobile from 'components/addgetlive/getlive-mobile';
export default function getlive({deviceType})
{
    const client = initializeApollo();
    const [loading,setloading] = useState(false)
    const router = useRouter();
    const [productindex,setindex] = useState(0)
    const videoref = useRef(null);
    const [tab,setTab] = React.useState(1);
    const [from,setform] = useState(new Date())
    const [to,setto] = useState(new Date())
    let id = router.query.slug as string;
    const [privatemessage,setprivate] = useState(false);
    const [privatethreadid,setprivatethreadid] = useState([]);
    const [publicthreadid,setpublicthreadid] = useState(null);
    const [messagethread,setmessagethread] = useState(null);
    const [mounted,setmounted] = useState(false);
    const [userid,setuserid] = useState(false)
    const [update,setupdate] = useState(false)
    const [productopen,setProductopen] = useState(false)
    const [state,setState] = useState({
        message:"",
        time:false
    })
    
    const [messageitem,setmessageitem] = useState([]);
    const [phone,setphone] = useState(null);
    const [time,settime] = useState(0);

    const [addedmessage,setaddedmessage] = useState(null);

    const refmessage = useRef(null);

    let timer = null;
    console.log(id);

    const [emoji,showemoji] = useState(false);

    let productlist = []

    let productinfo = useproduct({offset:0,limit:20,sellers:userid?userid:undefined})

    if(productinfo && productinfo.data && !productinfo.error)
    {
        productlist = productinfo.data
    }

    const [livestream,setlivestream] = useState(null)
    // let {livestream,loading} = useLiveStream({id,update});

 
    
    const [recorditem,setrecorditem] = useState((livestream && livestream.channel.record.sources.length > 0)?livestream.channel.record.sources[0].source:null);

    const selectitem = (index) => {
        let sources = livestream.record.sources;
        setrecorditem(sources[index].source);
    }

    const getparticipant = (participants) => {
        for(let item in participants)
        {
            if(participants[item].id != livestream.streamer.id && participants[item].isOnline)
            {
                return participants[item].name;
            }
        }
        
        return false;
    }

    useEffect(()=>{
        if(id)
        {
            client.query({query:GET_LIVESTREAM,variables:{slug:id}}).then(res=>{
                let {error,data} = res
                if(data && !error)
                {
                    setlivestream(data.liveStreamBySlug)
                }
            }).catch(err=>console.log(err))
        }
        
    },[id])

    const messagedisplay = (messages) => {
        let author = null;
        let lasttime = 0;
        let index = messageitem.length - 1;
        let component = [];
        while(index >= 0)
        {
            let time = 0;
            if(videoref.current)
            {
                time = videoref.current.currentTime;
            }

            if(state.time && messages[index].videoTime < time)
            {
                index --;
                continue;
            }   

            if(messages[index].author.phone == author && Math.abs(new Date(messages[index].createdAt).getTime() - lasttime) < 60000)
            {
                index--;
                continue;
            }

            if(messages[index].author.phone != '+' + phone)
            {
                component.push(
                    <div className="receive">
                        <img className="avatar" src={messages[index].author.photo?messages[index].author.photo.url:''}></img>
                        <div className="message_content">
                            <div className="header">
                                <div className="profile">{messages[index].author.name}</div>
                                <div className="time">{new Date(messages[index].createdAt).getHours()} : {new Date(messages[index].createdAt).getMinutes()}</div>
                            </div>
                            {
                                subcontent(messages[index],index,false)
                            }
                        </div>
                    </div>
                );
            }
            else
            {
                component.push(
                    <div className="send">
                       <div className="message_content">
                            {
                                subcontent(messages[index],index,true)
                            }
                            <div className="header">
                                <div className="profile">我</div>
                                <div className="time">{new Date(messages[index].createdAt).getHours()} : {new Date(messages[index].createdAt).getMinutes()}</div>
                            </div>
                        </div>
                    </div>
                );
            }

            author = messages[index].author.phone;
            lasttime = new Date(messages[index].createdAt).getTime();
            index--;
        }

        

        return component;
        
    }

 
    const subcontent = (message,index,sended) => {
        let componentlist = [];
        console.log('length',messageitem.length);
        for(let itemindx = index;itemindx>=0;itemindx --)
        {
            let sendeditem = messageitem[itemindx].author.phone == '+' + phone;
            if(sendeditem != sended)
            {
                return componentlist;
            }

            if(Math.abs(new Date(messageitem[itemindx].createdAt).getTime() - new Date(message.createdAt).getTime()) < 60000)
            {
                componentlist.push(
                    <div className="content">{messageitem[itemindx].data}</div>
                )
            }
            else
            {
                return componentlist;
            }
        }

        return componentlist;
    }

    useEffect(()=>{
        setphone(localStorage.getItem('phone'))
        setmounted(true);
        let access_token = localStorage.getItem('access_token');
        
        if(access_token && id)
        {
            client.query({query:GET_LIVESTREAM,variables:{slug:id}}).then(result=>{
                let {data,error} = result;
                if(data && !error && data.liveStreamBySlug)
                {
                    if(data.liveStreamBySlug.publicMessageThread)
                    {
                        setpublicthreadid(data.liveStreamBySlug.publicMessageThread.id);
                        setmessagethread(data.liveStreamBySlug.publicMessageThread.id);
                    }
                    
                    if(data.liveStreamBySlug.privateMessageThreads.length > 0)
                    {
                        setprivatethreadid(data.liveStreamBySlug.privateMessageThreads);
                    }
                }
            }).catch(err=>console.log(err))

            getuserbytoken({token:access_token}).then(user_id=>{
                setuserid(user_id)
            }).catch(err=>console.log(err))
        }
    },[])

    useEffect(()=>{
        if(livestream && livestream.channel)
        {
            setrecorditem(livestream.channel.record.sources.length>0?livestream.channel.record.sources[0].source:null);
        }
    },[livestream,privatemessage])

    useEffect(()=>{
        if(livestream && livestream.id)
        {
            client.subscribe({query:livestreamlistening,variables:{id:livestream.id}}).subscribe({
                next(result){
                    console.log('resultdata',result);
                    setprivatethreadid(result.data.liveStream.privateMessageThreads);
                },
                error(err)
                {
                    console.log('error',err);
                }
            })
    
        }
    },[livestream]);
    
    useEffect(()=>{
        if(messagethread)
        {
            console.log('privatethread',privatethreadid);
            client.query({query:messages,variables:{thread:messagethread,limit:20}}).then(res=>{
                setmessageitem(res.data.messages);
            })

            client.subscribe({query:messageadded,variables:{threads:messagethread}}).subscribe({
                next(result){
                    console.log('added',result);
                    if(result.data.messageAdded.author.phone != '+' + phone)
                    {
                        setaddedmessage(result.data.messageAdded);
                    }
                },
                error(err)
                {
                    console.log(err);
                }
            })
        }
    },[messagethread])

    useEffect(()=>{
        if(addedmessage && messageitem[0].id != addedmessage.id)
        {
            addmessageitem({...addedmessage});
            setaddedmessage(null);
        }
    },[addedmessage])

    const addmessageitem = (message) => {
        console.log('messageitems',messageitem);
        setmessageitem([message,...messageitem]);
    }

    const getproductlist = () => {
        let list = []
        for(let item in livestream.productDurations)
        {
            list.push(livestream.productDurations[item].product.id)
        }

        return list;
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
    
    const submitvalue = () => {
        if(!messagethread)
        {
            return;
        }

        let time = 0;
        if(state.time && videoref.current)
        {
            time = videoref.current.currentTime;
        }
        let data = {
            data:state.message,
            videoTime:time,
            type:'TEXT',
            thread:messagethread
        }

        let token = localStorage.getItem('access_token');
        client.mutate({mutation:addmessage,variables:{input:data}}).then(res=>{
            setState({...state,message:""});
            let {data,errors} = res;
            console.log(data);
            if(data && !errors)
            {
                let messagearray = [...messageitem];
                //messagearray.push(data.addMessage);
                console.log(messagearray);
                setmessageitem([data.addMessage,...messagearray]);
            }
        }).catch(err=>console.log(err))
    }

    const keypress = (e) => {
        if(e.keycode == 13 || e.which == 13)
        {   
            submitvalue();
        }
    }

    const startstream = () => {
        let token = localStorage.getItem('access_token');
        client.mutate({mutation:startstreaming,variables:{id:livestream.channel.id}}).then(res=>{
            window.location.reload();
        })
    }

    const startedstreaming = () => {
        starttimer();
        let token = localStorage.getItem('access_token');
        client.mutate({mutation:startstreaming,variables:{id:livestream.channel.id},context:{headers:{Authorization:'Bearer ' + token}}});
    }

    const stopedstreaming = () => {
        stoptimer();
        let token = localStorage.getItem('access_token');
        client.mutate({mutation:stopstreaming,variables:{id:livestream.channel.id},context:{headers:{Authorization:'Bearer ' + token}}})
    }

    const starttimer = () => {
        setState({
            ...state,
            time:true
        })
    }

    const stoptimer = () => {
        setState({
            ...state,
            time:false
        })
    }

    useEffect(()=>{
        if(refmessage.current)
        {
            refmessage.current.scrollTop = refmessage.current.scrollHeight;
        }
    },[messageitem])

    const handledate = (type,value) => {
        var datevalue = moment(from).format("YYYY-MM-DD") + " " + value;
        console.log(datevalue)
        var date = new Date(datevalue)
        console.log(date);
        if(type == 'from')
        {
            setform(date)
        }
        else
        {
            setto(date)
        }
    }

    const updateliveproduct = () => {
        let productdurations = JSON.parse(JSON.stringify(livestream.productDurations))
        let durationlist = productdurations[productindex].duration?productdurations[productindex].duration.split(','):[];
        durationlist.push(moment(from).format('HH:mm:ss') + " - " + moment(to).format('HH:mm:ss'));
        productdurations[productindex].duration = durationlist.join(',')

        let productdurationinput = []
        for(let item in productdurations)
        {
            productdurationinput.push({
                product:productdurations[item].product.id,
                duration:productdurations[item].duration
            })
        }

        client.mutate({mutation:updateproduct,variables:{livestream:id,productdurations:productdurationinput}}).then(res=>{
            let {data,errors} = res;
            if(!errors && data)
            {
                setlivestream(data.updateLiveStreamProducts)
            }
        })
    }

    const removeduration = (index) => {
        let productdurations = JSON.parse(JSON.stringify(livestream.productDurations))
        let durationlist = productdurations[productindex].duration.split(',');
        durationlist.splice(index,1);
        productdurations[productindex].duration = durationlist.join(',')
        let productdurationinput = []
        for(let item in productdurations)
        {
            productdurationinput.push({
                product:productdurations[item].product.id,
                duration:productdurations[item].duration
            })
        }

        client.mutate({mutation:updateproduct,variables:{livestream:livestream.id,productdurations:productdurationinput}}).then(res=>{
            let {data,errors} = res;
            if(!errors && data)
            {
                setlivestream(data.updateLiveStreamProducts)
            }
        })
    }

    const addproduct = (products) => {
        let productlist = [];
        let productitems = [...products]
        for(let item in livestream.productDurations)
        {
            if(productitems.indexOf(livestream.productDurations[item].product.id) > -1)
            {
                productlist.push({
                    product:livestream.productDurations[item].product.id,
                    duration:livestream.productDurations[item].duration
                })

                productitems.splice(productitems.indexOf(livestream.productDurations[item].product.id),1)
            }
        }

        for(let item in productitems)
        {
            productlist.push({
                product:productitems[item],
                duration:""
            })
        }

        client.mutate({mutation:updateproduct,variables:{livestream:livestream.id,productdurations:productlist}}).then(res=>{
            let {data,errors} = res
            if(data && !errors)
            {
                setlivestream(data.updateLiveStreamProducts)
            }
        })
    }
    
    console.log('devicetype',state)

    if(!livestream)
    {
        return (<PageLoader/>)
    }
    
    if(deviceType.mobile)
    {
        return <GetLiveMobile 
            livestream={livestream} 
            privatethreadid={privatethreadid} 
            publicthreadid={publicthreadid} 
            messagethread={messagethread}
            setmessagethread={setmessagethread}
            keypress={keypress}
            state={state}
            onchange={e=>setState({...state,message:e.target.value})}
            messageitem={messageitem}
            />
    }

    return (
        <Modal>
            <div style={{display:'flex',marginTop:'110px',paddingTop:'20px'}}>
                <LeftSidebar/>
                <MainContainer>
                    <Card style={{background:'white',padding:'15px 30px',display:'flex'}}>
                        <Title>{livestream.title}</Title>
                        <select style={{marginLeft:'auto',marginRight:'120px'}}>
                            <option value="">同步到</option>
                        </select>
                        <Officialstart>正式开播</Officialstart>
                    </Card>
                    <div style={{display:'flex',width:'100%',marginTop:'20px'}}>
                        <div style={{flex:1}}>
                            <Card style={{flex:1}}>
                                {
                                    (livestream.channel.status == 'FINISHED') && (
                                        <video ref={videoref} controls src={recorditem} autoPlay onPlay={()=>{starttimer()}} onEnded={()=>stoptimer()}  style={{width:'100%'}}/>
                                    )
                                }
                                {
                                    (livestream.channel.status == 'PENDING' || livestream.channel.status == 'STREAMING') && (
                                        <MediaStream videoref={videoref}  channelRoomId={gethash(livestream.id)} onStartBroadCasting={startedstreaming} onStopBroadCasting={stopedstreaming}></MediaStream>
                                    )
                                }
                            </Card>
                            <Card style={{marginTop:'20px'}}>
                                <div className="card-header">短视步实时数据</div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <p>观看人数</p>
                                    <p>{livestream.views}</p>
                                </div>
                            </Card>
                            <div style={{marginTop:'40px',display:'flex'}}>
                                <img src={post1} style={{marginRight:'20px',flex:1}}></img>
                                <img src={post2} style={{flex:1}}></img>
                            </div>
                            <CardBox style={{marginTop:'20px'}}>
                                <div className="title">
                                    <span className="">萤火虫播件</span>
                                    <ul style={{marginLeft:'auto'}}>
                                        <li>月度报告</li>
                                        <li>切片工具</li>
                                    </ul>
                                </div>
                                <div style={{marginTop:'10px'}}>
                                    <div className="tabcontainer">
                                        <ul className="tab">
                                            <li className="select">宝贝管理</li>
                                            <li>宝贝库</li>
                                            <li>场次管理</li>
                                            <li>发优惠券</li>
                                            <li>失注卡片</li>
                                            <li>公告发送</li>
                                            <li>自动回复</li>
                                            <li>小黑屋</li>
                                            <li style={{flex:1}}></li>
                                        </ul>
                                        <div className="tabcontent">
                                            <div className="dialogcontent">
                                                <div className="input-group">
                                                    <input className="form-control" value={(livestream && livestream.productDurations[productindex])?livestream.productDurations[productindex].product.slug:''}></input>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"><SearchIcon/></span>
                                                    </div>
                                                </div>
                                                <div style={{marginTop:'10px',display:'flex'}}>
                                                    <div className="imagecontent">
                                                        <img src={(livestream && livestream.productDurations[productindex])?livestream.productDurations[productindex].product.thumbnail.url:''} style={{width:'300px',height:'300px'}}/>
                                                    </div>
                                                    <div className="content">
                                                        {
                                                            (livestream && livestream.productDurations[productindex] && livestream.streamer.id == userid) && (
                                                                <>
                                                                    <p className="productname">{livestream.productDurations[productindex].product.title}</p>
                                                                    <p className="price">{livestream.productDurations[productindex].product.price.formatted}</p>
                                                                    {
                                                                        livestream.productDurations[productindex].duration && (
                                                                            <div className="list">
                                                                                {
                                                                                    livestream.productDurations[productindex].duration.split(',').map((item,key)=>{
                                                                                        return (
                                                                                            <div key={key} className="item">
                                                                                                <span>回访出弹时间</span>
                                                                                                <span className="time">{item}</span>
                                                                                                <span style={{marginLeft:'auto',cursor:'pointer'}} onClick={()=>removeduration(key)}><CloseCircle width='15px' height='15px'></CloseCircle></span>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        )
                                                                    }
                                                                </>
                                                            )
                                                        }
                                                        
                                                        {/* <div className="list">
                                                            <div className="item">
                                                                <span>回访出弹时间</span>
                                                                <span className="time">01: 04: 16 - 01: 17: 20</span>
                                                                <span style={{marginLeft:'auto',cursor:'pointer'}}><CloseCircle width='15px' height='15px'></CloseCircle></span>
                                                            </div>
                                                            <div className="item">
                                                                <span>回访出弹时间</span>
                                                                <span className="time">01: 04: 16 - 01: 17: 20</span>
                                                                <span style={{marginLeft:'auto',cursor:'pointer'}}><CloseCircle width='15px' height='15px'></CloseCircle></span>
                                                            </div>
                                                            <div className="item">
                                                                <span>回访出弹时间</span>
                                                                <span className="time">01: 04: 16 - 01: 17: 20</span>
                                                                <span style={{marginLeft:'auto',cursor:'pointer'}}><CloseCircle width='15px' height='15px'></CloseCircle></span>
                                                            </div>
                                                            <div className="item">
                                                                <span>回访出弹时间</span>
                                                                <span className="time">01: 04: 16 - 01: 17: 20</span>
                                                                <span style={{marginLeft:'auto',cursor:'pointer'}}><CloseCircle width='15px' height='15px'></CloseCircle></span>
                                                            </div>
                                                        </div> */}
                                                        <div style={{marginTop:'20px',display:'flex',alignItems:'center'}}>
                                                            <span>添加弹出时间</span>
                                                            <input type="time" style={{marginLeft:'20px',marginRight:'20px'}} value={moment(from).format('HH:mm')} onChange={e=>handledate('from',e.target.value)}/>
                                                            <span>  ~  </span>
                                                            <input type="time" style={{marginLeft:'20px',marginRight:'20px'}} min={moment(from).format('HH:mm')} value={moment(to).format('HH:mm')} onChange={e=>handledate('to',e.target.value)}></input>
                                                            <span className="btn btn-success" style={{marginLeft:'auto'}} onClick={updateliveproduct}>确认</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dialogcontent" style={{marginTop:'20px'}}>
                                                <div style={{display:'flex'}}>
                                                    {
                                                        livestream && livestream.productDurations.map((item,index)=>{
                                                            return (
                                                                <span className="btn btn-danger item" onClick={()=>setindex(index)}>{index + 1}</span>
                                                            )
                                                        })
                                                    }
                                                    <span className="btn btn-default item" onClick={()=>setProductopen(true)}>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </CardBox>
                        </div>
                        <Card style={{marginLeft:'20px',background:'white',maxHeight:'600px'}}>
                            <TabListGetLive>
                                <li className={publicthreadid == messagethread?'selected':''} onClick={()=>setmessagethread(messagethread)}>主播说</li>
                                {
                                    privatethreadid.map(item=>{
                                        return getparticipant(item.participants)?(
                                            <li className={item.id == messagethread?'selected':''} onClick={()=>setmessagethread(item.id)}>{getparticipant(item.participants)}</li>
                                        ):null
                                    })
                                }
                                {/* <li className={tab == 2?'selected':''} onClick={()=>setTab(2)}>大家说</li>
                                <li className={tab == 3?'selected':''} onClick={()=>setTab(3)}>禁言用户</li> */}
                            </TabListGetLive>
                            <ChatFragment style={{width:'100%'}}>
                                <div ref={refmessage} className="chatcontainer">
                                    {messagedisplay(messageitem)}
                                </div>
                                <div className="inputcontainer">
                                    <div style={{position:'relative'}}>
                                        <img src={smile} onClick={()=>showemoji(!emoji)} style={{cursor:'pointer'}}></img>
                                        {
                                            emoji && (
                                                <div style={{position:'absolute'}}>
                                                    <Picker onSelect={(emoji)=>{console.log(emoji); setState({...state,message:state.message + emoji.native}); showemoji(false)}}></Picker>
                                                </div>
                                            )
                                        }
                                    </div>
                                    
                                    {/* <Picker onEmojiClick={(evt,emoji)=>setState({...state,message:state.message + emoji.emoji})}></Picker> */}
                                    <input onChange={e=>setState({...state,message:e.target.value})} value={state.message} onKeyPress={keypress}/>
                                    <span className="button" onClick={()=>submitvalue()}>傳送</span>
                                </div>

                            </ChatFragment>
                        </Card>
                    </div>
                    <AddProduct
                    open={productopen} 
                    setOpen={setProductopen} 
                    selected={getproductlist()} 
                    data={productlist}
                    setSelected={(products)=>{addproduct(products)}}/>                         
                </MainContainer>
            </div>
        </Modal>
    )
}
