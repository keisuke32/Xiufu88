import React,{useState} from 'react';
import {Collapse} from 'react-collapse';
import {HeaderContainer} from './headstyle';
import {Menu} from 'assets/icons/Menu';
import shoplive from 'assets/images/shoplive.png';
import getlivedeactive from 'assets/images/getlive-deactive.png';
import liveproductdeactive from 'assets/images/liveproducts-deactive.png';
import wechat from 'assets/images/wechat.png';
import instagram from 'assets/images/instagram.png';
import qq from 'assets/images/qq.png';
import Category from './category';

const Head = ({category = []}) => {
    const [menuitem,setMenuitem] = useState(true);

    return (
        <HeaderContainer>
            <div className="menu" onClick={()=>setMenuitem(menuitem=>{return !menuitem;})}>
                <Menu/> <span className="menu-title">熱門分類</span>
            </div>
            <ul className="menu-tab">
                <li className="selected">
                    <img src={shoplive}></img>
                    现场购物
                </li>
                <li>
                    <img src={liveproductdeactive}></img>
                    现场产品
                </li>
                <li>
                    <img src={getlivedeactive}></img>
                    直播
                </li>
            </ul>
            <ul className="menu-right">
                <li>追蹤我們</li>
                <li><img src={wechat}></img></li>
                <li><img src={instagram}></img></li>
                <li><img src={qq}></img></li>
            </ul>
            {menuitem && (
                <Category category={category}/>
            )}
        </HeaderContainer>
    )
}

export default Head;