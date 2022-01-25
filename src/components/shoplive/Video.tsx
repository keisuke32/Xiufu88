import React,{useEffect,useRef,useState} from 'react';
import {MediaStream} from './mediastream';
import {Eye} from 'assets/icons/Eye';
import Slider from 'react-slick';
import {ArrowNext} from 'assets/icons/ArrowNext';
import {ArrowPrev} from 'assets/icons/ArrowPrev';
import {LiveStatus,PENDINGStatus,FinishedStatus} from '../../components/product-grid/shop-live/shop-live-style'
import nameInitials from 'name-initials';
import heart from 'assets/images/jelly-heart-button.png';
import heart_top from 'assets/images/heart_top.png'
import {nextqueue} from 'graphql/query/livestreams.query'
import {likelivestream,updateLiveStreamCount} from 'graphql/mutation/livestream'
import {initializeApollo} from 'utils/apollo'
import hearticon from '../../assets/images/heart.gif'
import {Pause,Play,Audio,Mute} from '../../assets/icons/Pause'
export const Video = ({stream,addtime,liveproduct,setstream}) => {
    let timer = null;
    let video = useRef(null);
    const apollo = initializeApollo()
    const [selectedvideo,setselected] = useState(0)
    const [play,setplay] = useState(false)
    const [pause,setpause] = useState(true)
    const [muted,setmuted] = useState(false)

    const gethash =(s) => {
        var hash=0,c=(typeof s == 'string')?s.length:0,i=0;
        while(i<c)
        {
        hash = ((hash<<5)-hash)+s.charCodeAt(i++);
        //hash = hash & hash; // Convert to 32bit integer
        }

        return ( hash < 0 )?((hash*-1)+0xFFFFFFFF):hash; // convert to unsigned
    }

    const likestream = () => {
        setplay(true)

        apollo.mutate({mutation:likelivestream,variables:{id:stream.id}}).then(res=>{
            setplay(false)

            if(!res.errors)
            {
                console.log(res.data)
                setstream(res.data.updateLiveStreamCount)
            }
        }).catch(err=>{
            console.log('like',err)
            setplay(false)
        })
    }

    const playvideo = () => {
        if(pause)
        {
            console.log("paused")
            video.current.play()
        }
        else
        {
            video.current.pause();
        }
    }

    const viewstream = (stream) => {
        apollo.mutate({mutation:updateLiveStreamCount,variables:{id:stream.id}}).then(res=>{
            if(!res.errors)
            {
                setstream({
                    ...stream,
                    views:res.data.updateLiveStreamCount.views
                })
            }
        }).catch(err=>setstream(stream))
    }


    let setting = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:3,
        nextArrow:<div className="next"><ArrowNext/></div>,
        prevArrow:<div className="prev"><ArrowPrev/></div>
    }

    const renderslider = () => {
        let slidercomp = [];
        for(let index = 0;index<stream.productDurations.length;index++)
        {
            slidercomp.push(
                <a className="productitem" style={{cursor:'pointer'}} href = {"/products/" + stream.productDurations[index].product.slug}>
                    <div className="image" style={{backgroundImage:`url(${stream.productDurations[index].product.assets.length > 0?stream.productDurations[index].product.assets[0].url:''})`}}></div>
                    <div className="information">
                        <h4>{stream.productDurations[index].product.title}</h4>
                        <p className="price">{stream.productDurations[index].product.price.formatted}</p>
                    </div>
                </a>
            );
        }

        if(stream.productDurations.length == 0)
        {
            for(let index = 0;index<liveproduct.length;index++)
            {
                slidercomp.push(
                    <a className="productitem" style={{cursor:'pointer'}} href={"/products/" + liveproduct[index].slug}>
                        <div className="image" style={{backgroundImage:`url(${liveproduct[index].assets.length > 0?liveproduct[index].assets[0].url:''})`}}></div>
                        <div className="information">
                            <h4>{liveproduct[index].title}</h4>
                            <p className="price">{liveproduct[index].price.formatted}</p>
                        </div>
                    </a>
                );
            }
        }

        for(let index = slidercomp.length;index<3;index++)
        {
            slidercomp.push(<div className="productitem"></div>);
        }

        return slidercomp;
    }

    useEffect(()=>{
        window.setInterval(()=>{
            if(video.current)
            {
                addtime(video.current.currentTime);
            }

        })

    })

    if(!stream.channel)
    {
        console.log(stream)
        return (
            <div className="stream"></div>
        )
    }

    const nextvideo = () => {

        if(stream.channel.record.sources[selectedvideo])
        {
            apollo.query({query:nextqueue,variables:{liveStream:stream.id,currentRecord:stream.channel.record.sources[selectedvideo].id}}).then(res=>{
                let {data,error,loading} = res;

                if(!error && !loading)
                {
                    viewstream(data.nextQueue.liveStream)
                    if(!data.nextQueue.record)
                    {
                        setselected(0)
                    }
                    else
                    {
                        for(let item in data.nextQueue.liveStream.channel.record.sources)
                        {
                            if(data.nextQueue.liveStream.channel.record.sources[item].id == data.nextQueue.record.id)
                            {
                                console.log(item)
                                setselected(Number(item))
                            }
                        }
                    }


                }
            })
            .catch(err=>console.log(err))
        }
    }


    return (
        <div className="stream">
            <div>
                <div style={{position:'relative'}}>
                {
                    stream.channel.status == 'FINISHED' && (
                        <video
                        ref={video}
                        onPlay={()=>setpause(false)}
                        onPause={()=>setpause(true)}
                        muted={muted}
                        src={stream.channel.record.sources[selectedvideo]?stream.channel.record.sources[selectedvideo].source:''}
                        autoPlay
                        onEnded={()=>{
                            nextvideo()
                        }}
                        ></video>
                    )
                }
                {
                    ((stream.channel.status == 'PENDING' || stream.channel.status == 'STREAMING') && stream.id) && (
                        <MediaStream channelRoomId={gethash(stream.id)} publisher={false}></MediaStream>
                    )
                }
                <div className="status" style={{paddingLeft:'20px',width:'100%'}}>
                    <div style={{flex:1}}>
                        <p className="streamtitle">{stream.title}</p>
                        <div className="profile">
                            {stream.streamer.photo ?
                                <img className="avatar" src={stream.streamer.photo?stream.streamer.photo.url:""} alt="streamer" />
                                :
                                <div className="avatar" style={{backgroundColor: stream?.streamer?.color?.background, color: stream?.streamer?.color?.text}}>{nameInitials(stream?.streamer?.name)}</div>
                            }
                            <div className="info" style={{marginLeft:'15px'}}>
                                <span>{stream?.streamer?.name}</span>
                            </div>
                            {/* <img src={heart} style={{width:'100px',marginLeft:'auto',marginRight:'25px'}}></img> */}
                        </div>
                    </div>
                    {
                        stream.channel.status == 'STREAMING' && (
                            <LiveStatus style={{height:'30px',marginLeft:'auto'}}>直播</LiveStatus>
                        )
                    }
                    {
                        stream.channel.status == "PENDING" && (
                            <PENDINGStatus style={{height:'30px',marginLeft:'auto'}}>視頻</PENDINGStatus>
                        )
                    }
                    {
                        stream.channel.status == "FINISHED" && (
                            <FinishedStatus style={{height:'30px',marginLeft:'auto'}}>回放</FinishedStatus>
                        )
                    }
                    <span className="viewcount" style={{height:'30px',marginRight:'15px'}}>{stream.views}观看</span>
                    <img src={heart_top} style={{height:'30px',marginLeft:'auto'}}></img>
                    <span className="viewcount" style={{height:'30px',marginRight:'15px',marginLeft:'15px'}}>{stream.likes}</span>
                </div>

                <div className="bottomstatus">
                    <div style={{display:'flex',paddingLeft:'15px'}}>
                        <span className="button" onClick={playvideo}>
                            {
                                pause?(<Play></Play>):(<Pause color="white"/>)
                            }
                        </span>
                        <span className="button" onClick={()=>setmuted(!muted)}>
                            {
                                muted ? (
                                    <Mute/>
                                ):(<Audio/>)
                            }
                        </span>
                        {/* <div style={{marginLeft:'15px'}}>
                            <div className="info">
                                <span>{stream?.streamer?.name}</span>
                            </div>
                            <p className="streamtitle">{stream.title}</p>
                        </div> */}
                    </div>
                    <div className="likestatus" onClick={likestream}>
                        <img src={heart} className={play?"heartbeat":''} style={{width:'50px'}}></img>
                    </div>
                    {
                        play && (
                            <>
                                <img src={hearticon} className="heartfly" style={{width:'50px',position:'absolute',right:'15px',bottom:'0px'}}></img>
                                <img src={hearticon} className="heartfly" style={{width:'50px',position:'absolute',right:'15px',bottom:'0px'}}></img>
                                <img src={hearticon} className="heartfly" style={{width:'50px',position:'absolute',right:'15px',bottom:'0px'}}></img>
                                <img src={hearticon} className="heartfly" style={{width:'50px',position:'absolute',right:'15px',bottom:'0px'}}></img>
                                <img src={hearticon} className="heartfly" style={{width:'50px',position:'absolute',right:'15px',bottom:'0px'}}></img>
                                <img src={hearticon} className="heartfly" style={{width:'50px',position:'absolute',right:'15px',bottom:'0px'}}></img>
                                <img src={hearticon} className="heartfly" style={{width:'50px',position:'absolute',right:'15px',bottom:'0px'}}></img>
                                <img src={hearticon} className="heartfly" style={{width:'50px',position:'absolute',right:'15px',bottom:'0px'}}></img>
                            </>
                        )
                    }

                </div>
                </div>
                <div className="productcontainer">
                    <Slider {...setting}>
                        {
                            renderslider()
                        }

                    </Slider>
                </div>
            </div>
        </div>
    )
}
