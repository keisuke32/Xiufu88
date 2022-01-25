import React, { useState } from 'react'
import {Filter} from '../modal/shopliveitem.style'
import Drawer from 'components/drawer/drawer'
import {useAppDispatch,useAppState} from 'contexts/app/app.provider'
import {ArrowPrev} from 'assets/icons/ArrowPrev'
import css from '@styled-system/css'
import styled from 'styled-components'
import usebrands from 'data/use-allbrand'

const Grid = styled.div(
    css({
        display:'grid',
        gridGap:'15px',
        gridTemplateColumns: 'repeat(3, minmax(77px, 1fr))'
    })
)
export default function FilterOption({filteroption,setfilteroption,isfilter})
{
    const dispatch = useAppDispatch()
    const isopen = useAppState("filtertype")
    const brands = usebrands({livestream:true})
    const [option,setoption] = useState(filteroption)

    const updateoption = (name,value) => {
        let data = [...option[name]]
        if(data.indexOf(value) > -1)
        {
            data.splice(data.indexOf(value),1);
        }
        else
        {
            data.push(value)
        }

        setoption({
            ...option,
            [name]:data
        })
    }
    if(brands.loading)
    {
        return null;
    }

    return (
        <Drawer
            width='316px'
            drawerHandler={
                <>
                    <span>| 筛选</span>
                </>
            }
            toggleHandler={()=>dispatch({type:"SET_FILTER",payload:!isopen})}
            placement="right"
            className="rightfilter"
            open={isopen}            
        >
            <Filter>
                <div className="title">
                    <span onClick={()=>dispatch({type:"SET_FILTER",payload:false})}><ArrowPrev/></span>
                    <span>筛选</span>
                </div>
                <div className="section">
                    <div className="sectiontitle">視頻類型</div>
                    <Grid>
                        <div className={option.status.indexOf('PENDING') > -1?"item active":"item"} onClick={()=>updateoption('status','PENDING')}>直播</div>
                        <div className={option.status.indexOf('STREAMING') > -1?"item active":"item"} onClick={()=>updateoption('status','STREAMING')}>視頻</div>
                        <div className={option.status.indexOf('FINISHED') > -1?"item active":"item"} onClick={()=>updateoption('status','FINISHED')}>回放</div>
                    </Grid>
                </div>
                <div className="section">
                    <div className="sectiontitle">品牌</div>
                    <Grid>
                       {
                           brands.data.map((item)=>(
                                <div className={option.brands.indexOf(item.id)>-1?'item active':'item'} key={item.id} onClick={()=>updateoption("brands",item.id)}>{item.name}</div>
                           ))
                       }
                    </Grid>
                </div>
                <div className="section">
                    <div className="sectiontitle">价格区间（元）</div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <input type="text" className="priceitem" placeholder="最低价" value={option.price.from + ""} onChange={(e)=>setoption({...option,price:{from:e.target.value,to:option.price.to}})}></input>
                        <span>-</span>
                        <input type="text" className="priceitem" placeholder="最高价" value={option.price.to + ""} onChange={(e)=>setoption({...option,price:{from:option.price.from,to:e.target.value}})}></input>
                    </div>
                </div>
                <div style={{display:'flex',position:'absolute',bottom:'15px',width:'100%'}}>
                    <span className="btn btn-default" style={{marginLeft:'auto',marginRight:'15px'}} onClick={()=>dispatch({type:"SET_FILTER",payload:false})}>重置</span>
                    <span className="btn btn-primary" style={{marginRight:'15px'}} onClick={()=>{setfilteroption(option); dispatch({type:"SET_FILTER",payload:false})}}>分类</span>
                </div>
            </Filter>
        </Drawer>
    )
}