import React,{useCallback, useState,useRef,useEffect} from 'react';
import axios from 'axios';
import {initializeApollo} from 'utils/apollo';
import Janus from 'utils/janus';
import {addrecordtolivestream} from 'graphql/mutation/livestream';



export const MediaStream = ({
    channelRoomId = 123,
    publisher = true,
    videoref,
    stopped = false,
    wsServer = "wss://marketplace.shoclef.com",
    onReady= ()=>{},
    onStartListening = () => {},
    onStartBroadCasting = () => {},
    onStopBroadCasting = (ref) => {}
}) => {
    let janus = null;
    let sfu = null;
    let remoteFeed = null;
    let opaqueId = 'sfutest-' + Janus.randomString(12);
    const [state,setState] = useState({
        visible:false,
        videosrc:null,
        videosrckey:null
    })

    const apollo = initializeApollo();
    
    const globaljsep = useRef(false);
    const initconfigured = useRef(false);
    const published = useRef(false);
   

    const {visible,videosrc,videosrckey} = state;

    useEffect(()=>{
        if(stopped && janus)
        {
            janus.destroy()
        }
    },[stopped])

    useEffect(() => {
        janusstart();
        return () => {};
    }, []);
    const janusstart = useCallback(()=>{
        Janus.init({
            debug:true,
            callback:function(){
                janus_init();
            },
            error:function(err)
            {
                console.log(err)
            }
        });
    },[visible]);

    const publishOwnFeed = useCallback((useaudio)=>{
        sfu.createOffer({
            media:{
                audioRecv:false,
                videoRecv:false,
                audioSend:useaudio,
                videoSend:true
            },
            success:function(jsep)
            {
                globaljsep.current = jsep;
                onReady();

                //.current.play();

                var request = {request:'configure',audio:true,video:true};

                sfu.send({message:request,jsep:jsep,success:function(){
                    
                }})

            },
            error:function(error)
            {
                console.log('error',error);
                if(useaudio)
                {
                    publishOwnFeed(false)
                }
            }
        })
    },[]);

    const joinpublish = useCallback(()=>{
        let joinandconfigure = {
            request:'joinandconfigure',
            ptype:'publisher',
            room:channelRoomId,
            id:sfu.getId(),
            record:true,
            videoorient_ext:false,
            filename:'/opt/janus/share/janus/recordings/' + channelRoomId
        };

        sfu && sfu.send({
            message:joinandconfigure,
            success:()=>{
                // publishOwnFeed(true);
            },
            error:(error)=>{
                //Janus.error("Can't join room");
            }
        })
    },[]);

    const getparticipant = useCallback(()=>{
        var data = {request:'listparticipants',room:channelRoomId};
        sfu && sfu.send({
            message:data,
            success:function(msg){},
            error:function(){}
        })
    },[]);

    const startstreaming = useCallback(()=>{
        sfu && sfu.send({
            message:{request:'create',room:channelRoomId,videoorient_ext:false},
            success:(roominfo)=>{
                joinpublish();
            }
        })
    },[])

    const existstreaming = useCallback(()=>{
        var data = {request:'exists',room:channelRoomId};
        sfu && sfu.send({
            message:data,
            success:function(msg){
                if(msg.exists)
                {
                    joinpublish();
                }
                else
                {
                    startstreaming()
                }
            }
        })
    },[]);

    const newRemoteFeed = useCallback((id)=>{
        janus.attach({
            plugin:'janus.plugin.videoroom',
            opaqueId:opaqueId,
            success:function(pluginhandle){
                remoteFeed = pluginhandle;
                var listen = {
                    request:'join',
                    room:channelRoomId,
                    ptype:'subscriber',
                    feed:id
                }

                remoteFeed.send({
                    message:listen,
                    success:()=>{},
                    error:(error)=>{
                        
                    }
                })
            },
            error: (error) => {
                // Alert.alert('  -- Error attaching plugin...', error);
                setState((s) => ({...s, visible: false}));
            },
            onmessage: (msg, jsep) => {
                let event = msg.videoroom;
                if (event !== undefined && event !== null) {
                    if (event === 'attached') {
                    } else if (event === 'event') {
                        console.log('xxxx-videoRoom eventIs: event', msg);
                        if (msg.started) {
                            onStartListening();
                            setState((s) => ({...s, visible: false}));
                        } else if (msg.error !== undefined && msg.error !== null) {
                            setState((s) => ({...s, visible: false}));
                        }
                    }
                }
                if (jsep !== undefined && jsep !== null) {
                    //Janus.log('xxx-newRemoteFeed func - Handling SDP as well...');
                    remoteFeed.createAnswer({
                        jsep: jsep,
                        media: {audioSend: false, videoSend: false},
                        success: (jsep) => {
                           // Janus.log('xxx-newRemoreFeed Success: createAnswer cbFunc');
                            let body = {request: 'start', room: channelRoomId};
                            remoteFeed.send({message: body, jsep: jsep});
                        },
                        error: (error) => {
                            // console.log('WebRTC error:', error);
                        },
                    });
                }
            },
            webrtcState: (on) => {},
            onlocalstream: (stream) => {},
            onremotestream: (stream) => {
                console.log('🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩', stream.toURL());
               // Janus.debug(stream);
                //videoref.srcObject = stream;
                setState((s) => ({
                    ...s,
                    videosrckey: Math.floor(Math.random() * 1000) + 2,
                }));
            },
            oncleanup: () => {
                if (remoteFeed.spinner !== undefined && remoteFeed.spinner !== null) {
                    remoteFeed.spinner.stop();
                }
                remoteFeed.spinner = null;
            },
        })
    },[visible,videosrc,videosrckey]);

    const janus_init = useCallback(()=>{
        console.log("started");
        if(visible)
        {
            return;
        }
        

        setState(s=>({...s,visible:false}));

        janus = new Janus({
            server:wsServer,
            dependencies: Janus.useDefaultDependencies(),
            success:()=>{
                janus.attach({
                    plugin:'janus.plugin.videoroom',
                    opaqueId:opaqueId,
                    success:(pluginhandle) => {
                        sfu = pluginhandle;
                        if(publisher)
                        {
                           existstreaming();
                        }
                        else
                        {
                            getparticipant();
                        }
                    },
                    error: (error) => {
                        //.error('  -- Error attaching plugin...', error);
                        // Alert.alert('  -- Error attaching plugin...', error);
                    },
                    consentDialog: (on) => {
                        //Janus.debug('Consent dialog should be ' + (on ? 'on' : 'off') + ' now');
                    },
                    mediaState: (medium, on) => {
                        
                    },
                    webrtcState: (on) => {
                        // Janus.log(
                        //     'Janus says our WebRTC PeerConnection is ' +
                        //         (on ? 'up' : 'down') +
                        //         ' now',
                        // );
                    },
                    onmessage:(msg,jsep) => {
                        console.log('message',msg);
                        const event = msg.videoroom;
                        if (event !== undefined && event !== null) {
                            if (event === 'joined') {
                                console.log('MESSAGE JOINED', msg);
                                if (msg.publishers !== undefined && msg.publishers !== null) {
                                    var list = msg.publishers;
                                    if (!publisher) {
                                         for (var f in list) {
                                            var id = list[f].id; //	 publisherId
                                            newRemoteFeed(id);
                                        } 
                                    } else {
                                        publishOwnFeed(true);
                                    }
                                }
                            } else if (event === 'destroyed') {
                            } else if (event === 'success') {
                            } else if (event === 'event') {
                                console.log('xxxx-videoRoom eventIs: event', msg);
                                if (msg.configured) {
                                    if (!initconfigured.current) {
                                        initconfigured.current = true;
                                    } else {
                                        onStartBroadCasting();
                                        published.current = true;
                                        setState((s) => ({...s, visible: false}));
                                    }
                                } else if (msg.error !== undefined && msg.error !== null) {
                                    // janus && janus.destroy();
                                    setState((s) => ({...s, visible: false}));
                                } else if (
                                    msg.unpublished !== undefined &&
                                    msg.unpublished !== null
                                ) {
                                    var unpublished = msg.unpublished;
        
                                    if (unpublished === 'ok') {
                                        janus && janus.destroy();
                                    }
                                }
                                // Any new feed to attach to?
                                if (msg.publishers !== undefined && msg.publishers !== null) {
                                    var list = msg.publishers;
                                    // Janus.log('Got a list of available publishers/feeds:');
                                    // Janus.log('publishers: ' + JSON.stringify(list));
                                    if (!publisher && list.length > 0) {
                                        var id = list[0].id; // publisherId
                                        newRemoteFeed(id);
                                    }
                                }
                            } else if (event === 'participants') {
                                if (!publisher) {
                                    var participants = msg.participants;
                                    let publisherId = null;
                                    for (let item in participants) {
                                        if (participants[item].publisher) {
                                            publisherId = participants[item].id;
                                            break;
                                        }
                                    }
                                    if (publisherId) {
                                        newRemoteFeed(publisherId);
                                    } else {
                                        setState((s) => ({...s, visible: false}));
                                    }
                                } else {
                                }
                            }
                        }
                        if (jsep !== undefined && jsep !== null) {
                            // Janus.log('jsep: ' + JSON.stringify(jsep));
                            sfu.handleRemoteJsep({jsep: jsep});
                        }
                    },
                    onlocalstream: (stream) => {


                        let element = videoref.current as HTMLVideoElement
                        if(element)
                        {
                            console.log('streamlength',stream.getTracks());
                            element.srcObject = stream;
                            
                            // current.srcObject = stream;
                        }
                    },
                    onremotestream: (stream) => {
                        let element = videoref.current as HTMLVideoElement
                        if(element)
                        {
                            console.log('streamlength',stream.getTracks());
                            element.srcObject = stream;
                            
                            // current.srcObject = stream;
                        }
                    },
                    ondataopen: function (data) {
                    },
                    ondata: function (data) {
                        //Janus.debug('We got data from the DataChannel! ' + data);
                    },
                    oncleanup: function () {
                        //Janus.log(' ::: Got a cleanup notification :::');
                    }
                })
            },
            error: (error) => {
                setState((s) => ({...s, visible: false}));
            },
            destroyed: () => {
                sfu && sfu.detach();
                sfu = null;
                setState(s=>({...s,visible:false}));
                if (publisher && published.current) {
                    let STREAM_MEDIA_URI = "https://recording.shoclef.com";
                    let time = new Date().getTime();
                    let filename = STREAM_MEDIA_URI + "/" + channelRoomId + "-" + time;
                    const convertVideoUrl = `${STREAM_MEDIA_URI}/convert?filename=${channelRoomId}&convertname=${filename}`;
                    
                    try {
                        axios.get(convertVideoUrl);
                        apollo.mutate({mutation:addrecordtolivestream,variables:{liveStream:channelRoomId,streamRecord:filename + "-record.mp4"},context:{headers:{Authorization:'Bearer ' + localStorage.getItem('access_token')}}});
                    } catch (error) {}
                }
                onStopBroadCasting(published.current);
            },
           
        })
    },[visible,published,videosrc,videosrckey])

    return (
        <video id="localvideo" playsInline ref={videoref} key={videosrckey} autoPlay style={{width:'100%',height:'100%'}} muted={true} controls></video>
    )
}