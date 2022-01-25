import React from 'react'
import {UserList} from './mobile.style'
import {Send} from 'assets/icons/Send'
import nameinitial from 'name-initials'
export default function ProfileList({privatethreadid,setmessagethread,streamer,close,onkeypress,onchange,state,messageid})
{
    const getparticipant = (participant) => {
        for(let item in participant)
        {
            if(participant[item].id != streamer.id)
            {
                return participant[item]
            }
        }

        return null;
    }
    return (
        <UserList>
            <div className="titlecontainer">
                <h3>觀看用戶({privatethreadid.length})</h3>
                <span className="times" onClick={()=>close()}>&times;</span>
            </div>
            
            <ul>
                {
                    privatethreadid.map((item,index)=>{
                        let participant  = getparticipant(item.participants)
                        return participant?(
                            <li key={index} className={messageid == item.id?'selected':''} onClick={()=>setmessagethread(item.id)}>
                                {
                                    participant.photo?<img src={participant.photo.url} className="profile"/>:<div className="profile" style={{backgroundColor:`${participant.color.background}`,color:`${participant.color.color}`}}>{nameinitial(participant.name)}</div>
                                }
                                <span className="name">{participant.name}</span>
                            </li>
                        ):null
                    })
                }
            </ul>
            <div className="messagecontainer">
                <div className="inputcontainer">
                    <input type="text" placeholder="聊天..." value={state.message} onKeyPress={onkeypress} onChange={onchange}/>
                </div>
                <span className="send">
                    <Send/>
                </span>
            </div>
        </UserList>
    )
}