import React from 'react'
import {Getlive} from './mobile.style'
import {Eye} from 'assets/icons/Eye'
export default function GetliveItem({data})
{
    return (
        <Getlive style={{backgroundImage:`url('${data?.preview[0]?.thumbnail || data?.preview[0]?.url}')`}}>
            <div className="overlay"></div>
            <div style={{zIndex:10,color:'white'}}>
                <Eye></Eye>
                <span>{data?.views}</span>
            </div>
        </Getlive>
    )
}