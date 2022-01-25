import React, { useState } from 'react';
import Collapse from 'react-collapse';
import {LeftSideWrapper,LeftSideContainer} from './getlivestyle';
import {Assignment,Flag,Toggle} from 'assets/icons/GetLiveIcon';
import logo from 'assets/images/logos/logo_getlive.png';
import {Apple} from 'assets/icons/Apple';
import {Android} from 'assets/icons/Android';

export const LeftSidebar = ({}) => {
    const data = [{
        name:'直播管理',
        icon:Assignment,
        children:[
            '我的直播',
            '发布直播',
            '发布短视频',
            '直播间装修',
            '智能主播助理'
        ]},{
            name:'商品中心',
            icon:Flag,
            children:[
                '商品检测',
                '流量宝典',
                '后浪引擎',
                '超级直播',
                '守护主播规则',
                '流量奖励规则',
                '微博流量加持',
                '直播通',
                '直播讲解管理'
            ]
        },{
            name:'账号设置',
            icon:Flag,
            children:[
                '个人资料',
                '账号绑定',
                '推广开票'
            ]
        },{
            name:'帮助',
            icon:Flag,
            children:['']
        }]

    const [selecteditem,setSelecteditem] = useState([]);
    const selectitem = (name) => {
        let itemlist =[...selecteditem];
        if(itemlist.indexOf(name) > -1)
        {
            itemlist.splice(itemlist.indexOf(name),1);
        }
        else
        {
            itemlist.push(name);
        }

        ///console.log(selecteditem);
        setSelecteditem(itemlist);
    }

    console.log(selecteditem);
    return (
        <LeftSideWrapper>
            <LeftSideContainer>
                {
                    data.map((item,index)=>{
                        return (
                            <li key={index}>
                                <div className="item"  onClick={(e)=>selectitem(item.name)}>
                                    {item.icon && (<item.icon/>)}
                                    {item.name}
                                    <span style={{marginLeft:'auto'}}><Toggle/></span>
                                </div>
                                {
                                    item.children && (
                                        <Collapse isOpened={selecteditem.indexOf(item.name) > -1}>
                                            <ul>
                                                {
                                                    item.children.map((value, idx)=>(
                                                        <li key={idx}>{value}</li>
                                                    ))
                                                }
                                            </ul>
                                        </Collapse>
                                    )
                                }

                            </li>
                        )
                    })
                }
            </LeftSideContainer>
            <LeftSideContainer style={{marginTop:'14px',marginBottom:'30px'}}>
                <div className="logocontainer">
                    <div className="logo">
                        <img className="footer_logo" src={logo}></img>
                    </div>
                    <div style={{marginLeft:'15px',textAlign:'center'}}>
                        <h1 className="logo_title">吉腾直播</h1>
                        <button className="logo_button">主播专用版</button>
                    </div>
                </div>
                <div style={{marginTop:'20px'}}>
                    <div className="button-download">
                        <Apple/>
                        <span>IOS下载</span>
                    </div>
                    <div className="button-download">
                        <Android/>
                        <span>Android下载</span>
                    </div>
                </div>
            </LeftSideContainer>
        </LeftSideWrapper>
    );
}
