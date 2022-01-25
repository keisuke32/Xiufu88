import React from 'react'
import {CategoryList} from './shoplive.style'
import uselivecategories from 'data/use-livecategories'
import {useAppDispatch,useAppState} from '../../../contexts/app/app.provider'
export default function ShopliveCategory({activeitem})
{
    const {data,loading,error} = uselivecategories()

    if(loading)
    {
        return null
    }
    
    const livecategory = useAppState("livecategory")

    const setcategorytab = useAppDispatch()

    const settab = (categoryid) => {
        setcategorytab({type:"SET_LIVE_CATEGORY",payload:categoryid})
    }
    
    return (
        <CategoryList>
            <li className={livecategory == ""?'active':""} onClick={()=>settab("")}>全部</li>
            {
                data.map(item=>(
                    <li onClick={()=>settab(item.id)} className={livecategory == item.id?"active":""}>{item.name}</li>
                ))
            }
        </CategoryList>
    )
}