import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import ShopLiveCard from './shop-live/shop-live';
import uselivestreamfilter from 'data/use-livestreamfilter'
import {Pagination} from './shop-live/shop-live-style';
import {ArrowPrev} from 'assets/icons/ArrowPrev'
import { ArrowNext } from 'assets/icons/ArrowNext';
import { FollowWrapper } from 'layouts/header/bottombar/bottombar.style';
import useproduct from 'data/use-products'
import Loading from 'components/loader/page-loader'
const Grid = styled.div(
    css({
      display: 'grid',
      gridGap: '16px',
      gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',

      '@media screen and (min-width: 480px)': {
        gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 740px)': {
        gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 991px)': {
        gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1200px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1400px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1700px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      },
    })
  );

  export const ShopLiveFilter = ({categories,experiences,productfilter,changepricefilter}) => {
    const [currentpage,setcurrentpage] = useState(1)
    const {data,error,loading,pager} = uselivestreamfilter({categories,experiences,offset:(currentpage - 1)*16 ,limit:16,productfilter})
    const featuredproduct = useproduct({isFeatured:true,limit:3})
    let featuredproductlist = []
    if(!featuredproduct.loading && !featuredproduct.error)
    {
      featuredproductlist = featuredproduct.data
    }
    const [total,settotal] = useState(0)
    useEffect(()=>{
        setcurrentpage(1)
    },[categories,experiences])

   useEffect(()=>{
    console.log(error)
    console.log(pager)
    if(!error && !loading)
    {
        settotal(gettotal(pager.total))
    }
   },[error,loading])
    
   const gettotal = (total) => {
       return Math.floor(total / 16) + (total % 6 == 0?0:1)
   }
    return (
        <div>
           <Pagination style={{marginBottom:10}}>
                <div className="pricefilter" style={{marginLeft:'auto'}}>
                  <div className="row" style={{alignItems:'center'}}>
                    <div className="col-sm-3 form-control" style={{display:'flex',marginRight:10}}>
                      <span>￥</span>
                      <input type="number" style={{border:'none',flex:1,width:'100%'}} defaultValue={(productfilter.price && productfilter.price.min)?productfilter.price.amount:0} onChange={(e)=>{
                        changepricefilter("min",Number(e.target.value))
                      }}></input>
                    </div>
                    ~
                    <div className="col-sm-3 form-control" style={{display:'flex',marginLeft:10}}>
                      <span>￥</span>
                      <input type="number" style={{border:'none',flex:1,width:'100%'}}  defaultValue={(productfilter.price && productfilter.price.min)?productfilter.price.amount:0} onChange={(e)=>{
                        changepricefilter("max",Number(e.target.value))
                      }}></input>
                    </div>
                  </div>
                </div>
                <div className="pageitem">
                    <span onClick={()=>{if(currentpage > 1){setcurrentpage(currentpage - 1)}}}><ArrowPrev></ArrowPrev></span>
                    <span className="current">{currentpage}</span>
                    <span> / {total}</span>
                    <span onClick={()=>{if(currentpage < total){setcurrentpage(currentpage + 1)}}}><ArrowNext></ArrowNext></span>
                </div>
            </Pagination>
            
            <Grid>
                {
                    (!error && !loading) && data.map((item,index)=>{
                        return (
                            <ShopLiveCard key={index} data={item} onSelect={(item)=>{console.log(item); window.location.href = "/getlive/" + item.slug}} liveproduct={featuredproductlist}></ShopLiveCard>
                        )
                    })
                }
            </Grid>
            {
              loading && (
                <Loading/>
              )
            }
        </div>
    )
  }