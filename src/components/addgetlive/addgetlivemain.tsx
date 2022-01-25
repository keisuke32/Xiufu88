import React,{useState} from 'react'
import {Main,Submitbtn} from './mobile.style'
import {ArrowPrev} from 'assets/icons/ArrowPrev'
import GetLiveMain from './getlive/getlivemain'
import Products from './getlive/products'
import AddCategory from './getlive/AddCategory'
import AddExperience from './getlive/AddExperience'
import Location from './getlive/Location'
import {useAppDispatch} from '../../contexts/app/app.provider'
export default function AddGetLiveMain({productlist,category,experience,submit,changefile,setSubmit,submitgetlive})
{
    const [type,settype] = useState('')
    const dispatch = useAppDispatch()
    if(type == 'product')
    {
        return <Products productlist={productlist}  settype={settype} submit={submit} setSubmit={setSubmit}></Products>
    }
    else if(type == 'category')
    {
        return <AddCategory settype={settype} category={category} submit={submit} setSubmit={setSubmit}/>
    }
    else if(type == 'experience')
    {
        return <AddExperience settype={settype} experience={experience} submit={submit} setSubmit={setSubmit}></AddExperience>
    }
    else if(type == 'location')
    {
        return <Location settype={settype}></Location>
    }

    const getenable = () => {
        var requiredfield = ['title','description','experience','categories','products']

        for(let item in requiredfield)
        {
            if(!submit[requiredfield[item]])
            {
                return false
            }
        }

        return true;
    }

    const back = () => {
        dispatch({type:"SET_TYPE",payload:""})
    }
    
    return ( 
        <div style={{display:'flex',flexDirection:'column',height:'100vh'}}>
            <Main>
                <div className="header">
                    <span style={{cursor:'pointer',color:'#747474'}} onClick={back}>
                        <ArrowPrev/>
                    </span>
                    <h4 className="title">创建直播</h4>
                    <span style={{width:'18px'}}></span>
                </div>
            
                <GetLiveMain 
                addproduct={()=>settype('product')} 
                settype={settype} 
                submit={submit} 
                changefile={changefile} 
                setSubmit={setSubmit} 
                category={category} 
                experience={experience}
                productlist={productlist}
                />
                    
            </Main>
            <Submitbtn style={{backgroundColor:getenable()?'#F00000':'#BDBDBD'}} onClick={()=>submitgetlive()}>现在开始直播</Submitbtn>
        </div>
    )
}