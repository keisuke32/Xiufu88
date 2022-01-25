import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import ShopLiveCard from './shop-live/shop-live';
import productimg from 'assets/images/image 10.png';

const Grid = styled.div(
    css({
      display: 'grid',
      gridGap: '16px',
      gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',

      '@media screen and (min-width: 480px)': {
        gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 740px)': {
        gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 991px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
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

  interface Props{
    type:String,
    style?:any,
    data:any,
    title:String,
    onSelect:any,
    hasmore?:any,
    more?:any,
    liveproduct?:Array<any>,
    setdata?:any
  }

  export const Shoplive = ({type,style,data,title,onSelect,hasmore = false,more,liveproduct,setdata}:Props) => {

    // var data = {
    //     image:productimg,
    //     view:253,
    //     title:'拍戏收工后能美美的敷个面膜，再打上一局WZ～...',
    //     author:'',
    //     authorimage:'',
    //     location:'',
    //     products:[],
    //     like:123
    // }

    if(!data)
    {
      return null
    }

      return (
          <section>
              <div style={{display:'flex',alignItems:'center'}}>
                <h1 style={{color:'rgba(0,0,0,0.8)',fontSize:'27px'}}>{title}</h1>
                <span style={{marginLeft:'auto',fontSize:'19px',color:'#4F4F4F',cursor:'pointer'}} onClick={()=>window.location.href = "/shoplivefilter"}>更多 {'>'}</span>
              </div>
              <Grid style={style}>
                {
                  data?.map((item, idx)=>{
                    return (
                      <ShopLiveCard key={idx} data={item} onSelect={onSelect} liveproduct={liveproduct} setinfo={info=>setdata(idx,info)}/>
                    )
                  })
                }

              </Grid>
              {
                hasmore && (
                  <div style={{display:'flex',justifyContent:'center'}} onClick={more}>
                  <button className="btn btn-success" style={{width:'100px'}}>更多 {'>'}</button>
                </div>
                )
              }
          </section>
      )
  }
