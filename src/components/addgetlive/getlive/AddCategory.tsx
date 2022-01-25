import React,{useState,useEffect} from 'react'
import {Main,Button} from '../mobile.style'
import {ArrowPrev} from 'assets/icons/ArrowPrev'
import styled from 'styled-components'
import css from '@styled-system/css'

const Grid = styled.div(
    css({
      display: 'grid',
      gridGap: '9px',
      gridTemplateColumns: 'repeat(3, minmax(77px, 1fr))',
      
      '@media screen and (min-width: 740px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      }
    })
  );
export default function AddCategory({settype,category,submit,setSubmit})
{
    const [categories,setcategories] = useState(submit.categories)

    useEffect(()=>{
        setcategories(submit.categories)
    },[submit.categories])

    const selectcategory = (id) => {
        let categories_backup = [...categories]
        
        if(categories_backup.indexOf(id) > -1)
        {
            categories_backup.splice(categories_backup.indexOf(id),1)
        }
        else
        {
            categories_backup.push(id)
        }

        setcategories(categories_backup)
    }

    return (
        <div style={{display:'flex',flexDirection:'column',height:'100vh'}}>
            <Main>
                <div className="header">
                    <span style={{cursor:'pointer',color:'#747474'}} onClick={()=>settype('experience')}>
                        <ArrowPrev/>
                    </span>
                    <h4 className="title">直播栏目</h4>
                    <span style={{width:'18px'}}></span>
                </div>
                <div style={{marginTop:'30px',flex:1,overflow:'hidden'}}>
                    <div style={{display:'flex',marginBottom:'15px'}}>
                        <h4 className="title">直播分类</h4>
                        <span>（可选多个栏目）</span>
                    </div>
                   <Grid>
                       {
                           category.map((item)=>(
                               <div className={categories.indexOf(item.id)>-1?"categoryitem categoryselected":"categoryitem"} onClick={()=>selectcategory(item.id)}>{item.name}</div>
                           ))
                       }
                   </Grid>
                </div>
            </Main>
            <div style={{background:'#F2F2F2',padding:'15px',display:'flex'}}>
                <Button style={{marginLeft:'auto',marginRight:'5px'}} onClick={()=>{settype('')}}>取消</Button>
                <Button style={{color:'white',backgroundColor:'#FA4C4C'}} onClick={()=>{setSubmit({...submit,categories}); settype('')}}>确认</Button>
            </div>
        </div>
    )
}