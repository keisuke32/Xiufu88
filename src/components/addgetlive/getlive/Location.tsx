import React,{useState} from 'react'
import {Main,Button} from '../mobile.style'
import {ArrowPrev} from 'assets/icons/ArrowPrev'
import styled from 'styled-components'
import css from '@styled-system/css'
import useregion from 'data/use-region'

const Grid = styled.div(
    css({
      display: 'grid',
      gridGap: '16px',
      gridTemplateColumns: 'repeat(3, minmax(90px, 1fr))'
    })
)

export default function Location({settype})
{
    const {regions,loading} = useregion("CN")
    const [region,setregion] = useState("")
    if(loading)
    {
        return null;
    }
    return (
        <div style={{display:'flex',flexDirection:'column',height:'100vh'}}>
            <Main>
                <div className="header">
                    <span style={{cursor:'pointer',color:'#747474'}} onClick={()=>settype('')}>
                        <ArrowPrev/>
                    </span>
                    <h4 className="title">添加商品</h4>
                    <span style={{width:'18px'}}></span>
                </div>
                <div style={{marginTop:'30px',flex:1,overflow:'hidden'}}>
                    <div className="section">
                        <h4 className="sectiontitle">直播地点</h4> 
                    </div>
                    <div className="section">
                        <h4 className="sectiontitle">区域</h4>
                        <Grid>
                            {
                                regions.map((item,index)=>(
                                    <div className={region == item.id?"categoryitem categoryselected":"categoryitem"} key={index} onClick={()=>setregion(item.id)}>{item.name}</div>
                                ))
                            }
                        </Grid>
                    </div>
                </div>
            </Main>
            <div style={{background:'#F2F2F2',padding:'15px',display:'flex'}}>
                <Button style={{marginLeft:'auto',marginRight:'5px'}} onClick={()=>settype('')}>取消</Button>
                <Button style={{color:'white',backgroundColor:'#FA4C4C'}} onClick={()=>{settype('')}}>确认</Button>
            </div>
        </div>
    )
}