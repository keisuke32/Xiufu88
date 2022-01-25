import React from 'react'
import {Camera} from 'assets/icons/Camera'
import {Plus} from 'assets/icons/Plus'
import {ArrowDropDown} from 'assets/icons/ArrowDropDown'
export default function GetLiveMain({addproduct,settype,changefile,submit,setSubmit,experience,category,productlist})
{
    const getexperience = () => {
        for(let item in experience)
        {
            if(experience[item].id == submit.experience)
            {
                return experience[item]
            }
        }

        return false
    }

    const getcategories = () => {
        let list = []
        for(let item in category)
        {
            if(submit.categories.indexOf(category[item].id) > -1)
            {
                list.push(category[item])
            }
        }

        return list;
    }

    const getproducts = () => {
        let list = []
        for(let item in productlist)
        {
            if(submit.products.indexOf(productlist[item].id) > -1)
            {
                list.push(productlist[item])
            }
        }

        return list
    }

    return (
        <div style={{marginTop:'30px'}}>
            <span className="label"> 添加封面</span>
            <div style={{display:'flex',flexDirection:'row',marginTop:'10px',marginBottom:'15px'}}>
                <div className="upload" style={{flex:1,marginRight:'15px'}}>
                    {
                        submit.images[1] ? (
                            <img src={submit.images[1]}></img>
                        ):(<>
                            <Camera/>
                            <span>1：1 封面图 </span>
                        </>)
                    }
                    <input type="file" onChange={e=>changefile(e,1)}/>
                </div>
                <div className="upload" style={{flex:2}}>
                    {
                        submit.images[2]?(
                            <img src={submit.images[2]}></img>
                        ):(<>
                            <Camera/>
                            <span>16：9 封面图 </span>
                        </>)
                    }
                    <input type="file" onChange={e=>changefile(e,2)}/>
                </div>
            </div>
            <div className="getliverow">
                <span className="label">直播标题</span>
                <input type="text" placeholder="给直播取个主题名" className="input" value={submit.title} onChange={e=>setSubmit({...submit,title:e.target.value})}></input>
            </div>
            <div className="getliverow">
                <span className="label">内容简介</span>
                <input type="text" placeholder="介绍直播内容" className="input" value={submit.description} onChange={e=>setSubmit({...submit,description:e.target.value})}></input>
            </div>
            <div className="getliverow">
                <span className="label">直播栏目</span>
                {
                    !getexperience()?(
                        <>
                            <span className="input">添加标签</span>
                            <span className="add" onClick={()=>settype('experience')}><Plus width="12px" height="12px"/></span>
                        </>
                    ):(
                        <span className="revise" onClick={()=>settype('experience')}>修改</span>
                    )
                }
                
            </div>
            {
                getexperience() && (
                    <div style={{padding:'15px'}}>
                        {
                            getexperience() && (
                                <>
                                    <div className="itemtitle">直播体验</div>
                                    <div className="itemcontent">
                                        <div className="contentitem">{getexperience().name}</div>
                                    </div>
                                </>
                            )
                        }

                        {
                            getcategories().length > 0 && (
                                <>
                                    <div className="itemtitle">直播分类</div>
                                    <div className="itemcontent">
                                        {
                                            getcategories().map((item,index)=>(
                                                <div className="contentitem" key={index}>{item.name}</div>
                                            ))
                                        }
                                    </div>
                                </>
                            )
                        }
                    </div>
                )
            }
            
            <div className="getliverow">
                <span className="label">直播位置</span>
                <span className="input">输入直播地点</span>
                <span onClick={()=>settype('location')}>
                    <ArrowDropDown/>
                </span>
            </div>
            <div className="getliverow">
                <span className="label">添加商品 </span>
                {
                    getproducts().length == 0? (
                        <>
                            <span className="input">输入直播地点</span>
                            <span className="add" onClick={addproduct}><Plus width="12px" height="12px"/></span>
                        </>
                    ):(
                        <span className="revise" onClick={addproduct}>修改</span>
                    )
                }
                
            </div>
            <div style={{padding:'15px'}}>
                {
                    getproducts().map((item)=>{
                        return (
                            <div className="rowitem">
                                <img src={item.thumbnail.url}/>
                                <div className="content">
                                    <p className="title">{item.title}</p>
                                    <p className="price">{item.price.formatted}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}