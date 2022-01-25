import React,{useEffect, useState,useRef} from 'react';
import {Container,ChatFragment} from './VideoStyle';
import {Video} from './Video';
import smile from 'assets/images/smile.png';
import {joinlivestream,addmessage,messageadded} from 'graphql/mutation/messages';
import {messages} from 'graphql/query/message';
import {initializeApollo} from 'utils/apollo';
import {Picker} from 'emoji-mart';

export const VideoContainer = ({stream,liveproduct,setstream}) => {
    const [messageid,setmessageid] = useState(null);
    const [privatemessageid,setprivatemessageid] = useState([]);
    const [time,settime] = useState(0);
    const [privatechannel,setprivate] = useState(false);
    const [messageitem,setmessages] = useState([]);
    const [state,setState] = useState({mesasge:''});
    const apollo = initializeApollo();
    const [phone,setphone] = useState(null);
    const [emoji,showemoji] = useState(false);
    const [update,setupdate] = useState(false);
    const [messagethreadid,setmessagethreadid] = useState(null);
    const [addedmessage,setaddedmessage] = useState(null);

    const refmessage = useRef(null);

    //let {data,error,loading} = useSubscription(messageadded,{variables:{thread:!privatechannel?messageid:privatemessageid.length > 0?privatemessageid[0].id:''}})
    // console.log('data',data);
    // console.log('error',error);
    // console.log('loading',loading);
    // cos
    useEffect(()=>{
        if(stream.id)
        {
            let token = localStorage.getItem('access_token');
            apollo.mutate({mutation:joinlivestream,variables:{id:stream.id}}).then(res=>{
                if(res.data && !res.errors)
                {
                    console.log(res.data.joinLiveStream);
                    setmessages([]);
                    if(res.data.joinLiveStream.publicMessageThread)
                    {
                        setmessageid(res.data.joinLiveStream.publicMessageThread.id);
                        setmessagethreadid(res.data.joinLiveStream.publicMessageThread.id);
                    }
                    else
                    {
                        setmessagethreadid(null);
                    }

                    if(res.data.joinLiveStream.privateMessageThreads)
                    {
                        setprivatemessageid(res.data.joinLiveStream.privateMessageThreads);
                    }

                }
            }).catch(err=>console.log(err))
        }
        setphone(localStorage.getItem('phone'));
    },[stream]);

    useEffect(()=>{
        if(addedmessage && messageitem[0].id != addedmessage.id)
        {
            console.log(messageitem);
            addmessageitem({...addedmessage});
            setaddedmessage(null);
        }
    },[addedmessage]);

    useEffect(()=>{
        if(messagethreadid)
        {
            apollo.query({query:messages,variables:{thread:messagethreadid,skip:null,limit:20}}).then(res=>{
                if(res.data && !res.error)
                {
                    setmessages(res.data.messages);
                }
            })

            let subscribe = apollo.subscribe({query:messageadded,variables:{threads:messagethreadid}})


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
    },[messagethreadid])



    const addmessageitem = (message) => {
        setmessages([message,...messageitem]);
    }

    const changechannel = (thread) => {
        setmessagethreadid(thread);
    }


    const addtime = () => {
        console.log('time',time);
        settime(time + 1);
    }

    const keypress = (e) => {
        if(e.keycode == 13 || e.which == 13)
        {
            submitvalue();
        }
    }

    const submitvalue = () => {
        let data = {
            data:state.mesasge,
            videoTime:parseInt(time + ""),
            type:'TEXT',
            thread:messagethreadid
        }

        let token = localStorage.getItem('access_token');
        apollo.mutate({mutation:addmessage,variables:{input:data}}).then(res=>{
            setState({...state,mesasge:""});
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

    const messagedisplay = (messages) => {
        let author = null;
        let lasttime = 0;
        let index = messageitem.length - 1;
        let component = [];
        while(index >= 0)
        {
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
        if(refmessage.current)
        {
            refmessage.current.scrollTop = refmessage.current.scrollHeight;
        }

    },[messageitem])


    return (
        <Container>
            <p className="title">焦点直播</p>
            <div className="videocontainer">
                <div className="getlive">
                    <Video stream={stream} addtime={settime} liveproduct={liveproduct} setstream={setstream}></Video>
                </div>
                <ChatFragment>
                    <div className="chattab">
                        <div className={messagethreadid == messageid?"chatitem select":"chatitem"} onClick={()=>changechannel(messageid)}>聊天</div>
                        {
                            privatemessageid.length > 0 && (
                                <div className={messagethreadid == privatemessageid[0].id?"chatitem select":"chatitem"} onClick={()=>changechannel(privatemessageid[0].id)}>私訊</div>
                            )
                        }

                    </div>
                    <div ref={refmessage} className="chatcontainer">
                        {
                            messagedisplay(messageitem)
                        }
                    </div>
                    <div className="inputcontainer">
                        <div style={{position:'relative'}}>
                            <img src={smile} onClick={()=>showemoji(!emoji)} style={{cursor:'pointer'}}></img>
                            {
                                emoji && (
                                    <div style={{position:'absolute',zIndex:100}}>
                                        <Picker onSelect={(emoji)=>{console.log(emoji); setState({...state,mesasge:state.mesasge + emoji.native}); showemoji(false)}}></Picker>
                                    </div>
                                )
                            }
                        </div>
                        <input onChange={e=>setState({...state,mesasge:e.target.value})} value={state.mesasge} onKeyPress={keypress} placeholder="跟主播聊什麽..."/>
                        <span className="button" onClick={()=>submitvalue()}>傳送</span>
                    </div>
                </ChatFragment>
            </div>
        </Container>
    )
}
