import React,{useState,useEffect} from 'react';
import uselivestream from 'data/use-livestreams'
import usepaststream from 'data/use-paststream'
import uselivestreamfilter from 'data/use-livestreamfilter'
import ShopLiveItem from './shopliveitem'
import styled from 'styled-components'
import css from '@styled-system/css'
import PageLoader from 'components/loader/page-loader';
import {useAppState} from '../../../contexts/app/app.provider'
import {initializeApollo} from 'utils/apollo'
import {SEARCH_LIVESTREAM} from 'graphql/query/livestreams.query'

const Grid = styled.div(
    css({
      display: 'grid',
      gridGap: '16px',
      gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',

      '@media screen and (min-width: 480px)': {
        gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 740px)': {
        gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 991px)': {
        gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1200px)': {
        gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1400px)': {
        gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1700px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      },
    })
  );

export function LiveStream({})
{
    const [limit,setlimit] = useState(8)
    const [update,setupdate] = useState(false)
    const category = useAppState("livecategory")
    let {loading,data,error,hasMore,fetchMore} = uselivestream({limit:limit});

    const [livestream,setlivestream] = useState([])
    
    const handleScroll = (event) => {
        let target = event.target;
        if(target.scrollHeight - target.scrollTop == target.clientHeight)
        {
            if(hasMore)
            {
                setlimit(limit + 8)
                setupdate(!update)
            }
        }
    }   

    useEffect(()=>{
        if(!loading && data)
        {
            setlivestream(data)
        }
    },[loading,update,category])


    return (
        <div style={{flex:1,overflowY:'auto',padding:'15px',backgroundColor:'#D6D6D6',height:'calc(100vh - 284px)'}} onScroll={handleScroll}>
            <Grid>
                {
                    livestream.map(info=>(
                        <ShopLiveItem data={info}></ShopLiveItem>
                    ))
                }
            </Grid>
            {
                loading && <PageLoader/>
            }
        </div>
    )
}

export function PastStream()
{
    const [limit,setlimit] = useState(8)
    const [update,setupdate] = useState(false)
    const category = useAppState("livecategory")
    let {loading,data,error,hasMore,fetchMore} = usepaststream({limit:limit,category:category == ""?undefined:category})

    const [livestream,setlivestream] = useState([])

    useEffect(()=>{
        if(!loading)
        {
            setlivestream(data)
        }
    },[loading,update,category])

    
    const handleScroll = (event) => {
        let target = event.target;
        if(target.scrollHeight - target.scrollTop == target.clientHeight)
        {
            if(hasMore)
            {
                setlimit(limit + 8)
                setupdate(!update)
            }
        }
    }   

    return (
        <div style={{flex:1,overflowY:'auto',padding:'15px',backgroundColor:'#D6D6D6',height:'calc(100vh - 284px)'}} onScroll={handleScroll}>
            <Grid>
                {
                    livestream.map((info,index)=>(
                        <ShopLiveItem key={index} data={info}></ShopLiveItem>
                    ))
                }
            </Grid>
            {
                loading && <PageLoader/>
            }
        </div>
    )

}

export function LiveStreamFilter({filteroption,isfeature})
{
    const [limit,setlimit] = useState(8)
    const [loading,setloading] = useState(false)
    const [hasMore,sethasMore] = useState(false)
    const category = useAppState("livecategory")
    const client = initializeApollo()
    const getfilter = () => {
        let filter:any =  {
            
        }        

        if(filteroption.brands.length > 0)
        {
            filter.brands = filteroption.brands
        }

        
        if(filteroption.price.from || filteroption.price.to)
        {
            filter.price = {}
        }

        if(filteroption.price.from)
        {
            filter.price.min = {
                amount:filteroption.price.from,
                currency:'CNY'
            }
        }

        if(filteroption.price.to)
        {
            filter.price.max = {
                amount:filteroption.price.to,
                currency:'CNY'
            }
        }

        return filter;
    }

    const isfilter = () => {
        let option = getfilter()
        for(let item in option)
        {
            if(option[item])
            {
                return true;
            }
        }

        return false;
    }

    const [livestream,setlivestream] = useState([])
    const [update,setupdate] = useState(false)

    useEffect(()=>{
        setloading(true)
        client.query({query:SEARCH_LIVESTREAM,variables:{
            category:category?[category]:[],
            offset:0,
            limit,
            experiences:[],
            status:filteroption.status.length > 0?filteroption.status:['PENDING','FINISHED',"STREAMING"],
            productfilter:isfilter()?getfilter():undefined,
            isFeatured:isfeature?isfeature:undefined
        }}).then(res=>{
            let {data,error} = res;

            if(!error && data)
            {
                setlivestream(data?.liveStreams?.collection)
                let pager = data?.liveStreams?.pager;
                sethasMore(pager.total > limit)
            }
            setloading(false)
        }).catch(err=>setloading(false))
    },[update,category,filteroption,limit])

    useEffect(()=>{
        setlimit(8)
        setupdate(!update)
    },[isfeature])

    const handleScroll = (event) => {
        let target = event.target;
        if(target.scrollHeight - target.scrollTop == target.clientHeight)
        {
            if(hasMore)
            {
                setlimit(limit + 8)
            }
        }
    }   

    return (
        <div style={{flex:1,overflowY:'auto',padding:'15px',backgroundColor:'#D6D6D6',height:'calc(100vh - 284px)'}} onScroll={handleScroll}>
            <Grid>
                {
                    livestream.map((info,index)=>(
                        <ShopLiveItem key={index} data={info}></ShopLiveItem>
                    ))
                }
            </Grid>
            {
                loading && <PageLoader/>
            }
        </div>
    )
}