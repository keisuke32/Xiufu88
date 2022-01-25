import React from 'react'
import AddGetLiveMobile from './addgetlive-mobile'
import AddGetLiveMain from './addgetlivemain'
import MobileHeader from 'layouts/header/mobile-header'
import {useAppDispatch,useAppState} from '../../contexts/app/app.provider'
export default function AddGetlive({productlist,category,experience,submit,changefile,setSubmit,submitgetlive})
{
    const type = useAppState('type')
    const isSticky = useAppState('isSticky')   
    if(!type)
    {
        return <AddGetLiveMobile/>
    }
    else
    {
        return <AddGetLiveMain productlist={productlist} category={category} experience={experience} submit={submit} changefile={changefile} setSubmit={setSubmit} submitgetlive={submitgetlive}/>;
    }
}