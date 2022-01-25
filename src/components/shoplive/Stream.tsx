import React,{useEffect, useState} from 'react';
import usepaststream from 'data/use-paststream';
import {Shoplive} from 'components/product-grid/shoplive';
import uselivestream from 'data/use-livestreams';
import {GET_LIVESTREAMS} from 'graphql/query/livestreams.query'
import {initializeApollo} from 'utils/apollo'
import {Box} from 'components/box'

type PastStreamProps = {
    title?: string;
    setstream?: any;
    stream?:any;
    status?: Array<string>;
    liveproduct?:Array<any>
}

export const LiveStream:React.FC<PastStreamProps> = ({title, setstream, stream, status,liveproduct}) => {
    const [limit,setLimit] = useState(4);
    
    let {data,error,hasMore,loading,fetchMore} = uselivestream({limit:limit});
    const [livestream,setlivestream] = useState([])
   
    const setdata = (index,info) => {
        let livestreamlist = [...livestream]
        livestreamlist[index] = info
        setlivestream(livestreamlist)   
    }

    useEffect(()=>{
        if(!loading && data.length > 0)
        {
            setlivestream(data)
        }
    },[loading])

    if(livestream.length == 0)
    {
        return null;
    }

    return (
        <Shoplive
          type="add"
          data={livestream}
          title={title}
          onSelect={item=>{setstream(item)}}
          more={()=>{
            setLimit(limit + 4);
          }}
          setdata={setdata}
          liveproduct={liveproduct}
          hasmore={hasMore}
          ></Shoplive>
    )
}

export const PastStream:React.FC<PastStreamProps> = ({setstream,stream,liveproduct}) => {
    const [limit,setLimit] = useState(4);

   
    let {loading,data,error,hasMore,fetchMore} = usepaststream({limit:limit});
    const [livestream,setlivestream] = useState([])
    useEffect(()=>{
        if(!loading && data.length)
        {
            if(!stream.id)
            {
                setstream(data[0]);
            }

            setlivestream(data)
        }
    },[loading])

    const setdata = (index,info) => {
        let livestreamlist = [...livestream]
        livestreamlist[index] = info
        setlivestream(livestreamlist)   
    }

    if(livestream.length == 0)
    {
        return null;
    }

    return (
        <Shoplive
          type="add"
          data={livestream}
          title="最新视频"
          onSelect={item=>{setstream(item)}}
          more={()=>{
            setLimit(limit + 4);
          }}
          setdata={setdata}
          hasmore={hasMore}
          liveproduct={liveproduct}
          ></Shoplive>
    )
}

export const LiveStreamByCategory = ({category,liveproduct,setstream}) => {
    const [limit,setlimit] = useState(4)
    const [livestream,setlivestream] = useState([])
    const apollo = initializeApollo()
    useEffect(()=>{
        apollo.query({query:GET_LIVESTREAMS,variables:{category:category.id,limit:limit,status:["STREAMING","PENDING","FINISHED"]}}).then(res=>{
            let {data,loading} = res

            if(!loading)
            {
                setlivestream(data.liveStreams.collection)
            }

        })
    },[limit])

    const setdata = (index,info) => {
        let livestreamlist = [...livestream]
        livestreamlist[index] = info

        setlivestream(livestreamlist)
    }
    

    if(livestream.length == 0)
    {
        return null;
    }
    return (
        <Box padding={['0 15px 100px ', '0 15px 30px ', '0 115px 30px 30px']}>
            <Shoplive
            type="add"
            data={livestream}
            title={category.name}
            setdata={setdata}
            onSelect={item=>{setstream(item)}}
            liveproduct={liveproduct}
            ></Shoplive>
          </Box>
    )
}


