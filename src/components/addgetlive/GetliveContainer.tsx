import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import uselivestream from 'data/use-livestreams'
import  usePastStream from 'data/use-paststream'
import GridItem from './getliveitem'
import PageLoader from 'components/loader/page-loader'

const Grid = styled.div(
    css({
      display: 'grid',
      gridGap: '16px',
      gridTemplateColumns: 'repeat(3, minmax(114px, 1fr))',

      '@media screen and (min-width: 480px)': {
        gridTemplateColumns: 'repeat(3, minmax(114px, 1fr))',
      },

      '@media screen and (min-width: 740px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 991px)': {
        gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1200px)': {
        gridTemplateColumns: 'repeat(5, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1400px)': {
        gridTemplateColumns: 'repeat(5, minmax(180px, 1fr))',
      },

      '@media screen and (min-width: 1700px)': {
        gridTemplateColumns: 'repeat(6, minmax(180px, 1fr))',
      },
    })
  );

export function GetLiveLiveStream()
{
    let {data,error,loading} = uselivestream({limit:9})
    if(loading)
    {
        return <PageLoader/>
    }
    return (
        <Grid>
            {
                data.map((item,index)=>(
                    <GridItem key={index} data={item}></GridItem>
                ))
            }
        </Grid>
    )
}

export function GetPastStream({isfeature = false})
{
    let {data,error,loading} = usePastStream({limit:9,isFeatured:isfeature})
    if(loading)
    {
        return <PageLoader/>
    }
  
    return (
        <Grid>
            {
                data.map((item,index)=>(
                    <GridItem key={index} data={item}></GridItem>
                ))
            }
        </Grid>
    )
}