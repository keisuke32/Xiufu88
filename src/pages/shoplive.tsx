import {NextPage} from 'next';
import styled from 'styled-components';
import css from '@styled-system/css';
import {Shoplive} from 'components/product-grid/shoplive';
import {Modal} from '@redq/reuse-modal';
import dynamic from 'next/dynamic';
// import { SidebarWithCardMenu } from 'layouts/sidebar/sidebar-with-card-menu';
import {sitePages} from 'site-settings/site-pages';
import {Box} from 'components/box';
import {VideoContainer} from 'components/shoplive/VideoContainer';
import React, {useState,useEffect} from 'react';
import {ModalProvider} from 'contexts/modal/modal.provider';
import {LiveStream,PastStream,LiveStreamByCategory} from 'components/shoplive/Stream';
import { SEO } from 'components/seo';
import useproduct from 'data/use-products'
import uselivecategories from 'data/use-livecategories'
import {initializeApollo} from 'utils/apollo'
import { updateLiveStreamCount } from 'graphql/mutation/livestream';
import ShopLiveMobile from 'components/shoplive/shoplive-mobile'
import {useAppState} from 'contexts/app/app.provider'
import MobileHeader from "layouts/header/mobile-header";
const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
    ssr: false,
});

export const Main = styled.div<any>(
    css({
        backgroundColor: 'gray.200',
        position: 'relative'
    })
);

const PAGE_TYPE = 'bakery';

const ShopLivePage:NextPage<{deviceType:any}> = ({deviceType}) =>  {
  const page = sitePages[PAGE_TYPE];

  const apollo = initializeApollo()
  let categories = []
  let [stream,setStream] = useState({id:""});
  let {data,error,loading} = useproduct({limit:3,isFeatured:true})
  let livestreamcategory = uselivecategories()
  const isSticky = useAppState('isSticky');

  if(error || loading)
  {
    data = []
  }

  if(!livestreamcategory.error && !livestreamcategory.loading)
  {
      categories = livestreamcategory.data
  }

  const selectstream = (streaminfo) => {
      if(stream.id != streaminfo.id)
      {
        apollo.mutate({mutation:updateLiveStreamCount,variables:{id:streaminfo.id}}).then(res=>{
            if(!res.errors)
            {
                setStream({
                    ...streaminfo,
                    views:res.data.updateLiveStreamCount.views
                })
            }
        }).catch(err=>setStream(streaminfo))
      }

  }

  categories.sort(function(a,b){
      return a.name > b.name?1:-1
  })

  if(deviceType.desktop)
  {
    return (
        <div>
            <SEO title="Shop Live - JiTeng" description="JiTeng Shop Live"/>
            <ModalProvider>
                <Modal>
                    <Main>
                        <Box>
                            {
                                stream && (
                                    <VideoContainer stream={stream} liveproduct={data} setstream={setStream}></VideoContainer>
                                )
                            }

                        </Box>

                        <Box padding={['0 15px 100px ', '0 15px 30px ', '0 115px 30px 30px']}>
                            <LiveStream setstream={(item)=>selectstream(item)} liveproduct = {data} title="直播中"></LiveStream>
                        </Box>
                        <Box padding={['0 15px 100px ', '0 15px 30px ', '0 115px 30px 30px']}>
                            <PastStream setstream={(item)=>selectstream(item)} stream={stream} liveproduct={data}></PastStream>
                        </Box>
                        {
                            categories.map((item,index)=>(
                                <LiveStreamByCategory key={index} category={item} liveproduct={data} setstream={setStream}></LiveStreamByCategory>
                            ))
                        }
                    </Main>
                    {/*<CartPopUp deviceType={deviceType}/>*/}
                </Modal>
            </ModalProvider>
        </div>
    );
  }
  else
  {
      return (
        <>
            <MobileHeader className={isSticky ? 'sticky' : 'unSticky'} livestream={true}/>
            <ShopLiveMobile deviceType={deviceType}/>
        </>
      )
  }

}

export default ShopLivePage;
