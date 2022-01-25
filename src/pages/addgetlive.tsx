import React,{useEffect, useState} from 'react';
import {NextPage} from 'next';
import {Modal} from '@redq/reuse-modal';
import {LeftSidebar} from '../components/getlive/LeftSidebar';
import {MainContainer,Card,FileUpload,FileUploadComp,Mask,ProductCard,LiveSectionComp,LiveVideo} from '../components/getlive/getlivestyle';
import {Plus} from '../assets/icons/Plus';
import {CheckIcon} from '../assets/icons/Check';
import {Dialog} from '../components/getlive/dialog';
import {AddProduct} from '../components/getlive/AddProduct';
import {addlivestream} from 'graphql/mutation/livestream';
import moment from 'moment';
import {GetStaticProps} from 'next';
import {initializeApollo} from 'utils/apollo';
import {GET_CITIES,GET_REGIONS} from 'graphql/query/location.query';
import {addAssetImage, addAssetsurl} from 'graphql/mutation/asset';
import {fileupload} from 'utils/upload';
import uselivestreamcategory from 'data/use-livecategories';
import useexperiences from 'data/use-experience';
import useproduct from 'data/use-products';
import VideoSelect from 'components/getlive/VideoSelectDialog';
import styled from 'styled-components'
import css from '@styled-system/css'
import {getuserbytoken} from '../data/use-auth';
import usecountries from 'data/use-countries';
import AddGetLiveMobile from 'components/addgetlive/mobile'
import Loading from '../components/loader/page-loader'
import PageLoader from '../components/loader/page-loader';

const Grid = styled.div(
    css({
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(1, minmax(220px, 1fr))',

        '@media screen and (min-width: 480px)': {
            gridTemplateColumns: 'repeat(1, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 740px)': {
            gridTemplateColumns: 'repeat(1, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 991px)': {
            gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))',
        },

        '@media screen and (min-width: 1400px)': {
            gridTemplateColumns: 'repeat(4, minmax(220px, 1fr))',
        },
        '@media screen and (min-width: 1800px)': {
            gridTemplateColumns: 'repeat(5, minmax(220px, 1fr))',
        },
    })
);

const AddGetLive:NextPage<{deviceType:any}> = ({deviceType}) =>
{
    const [open,setOpen] = React.useState(false);
    const [loading,setloading] = React.useState(false)
    const [experiencedialog,setExperienceDialog] = React.useState(false);
    const [productopen,setProductopen] = React.useState(false);
    const [submit,setSubmit] = React.useState({
        portrait:true,
        starttime:new Date(),
        images:{1:'',2:'',3:''},
        title:'',
        description:'',
        experience:'',
        categories:[],
        products:[],
        cityid:""
    });

    const [userid,setuserid] = useState(false)

    const [videoselect,setvideo] = React.useState(false);
    const [videolist,setvideolist] = React.useState([])

    const [imagefile,setImageFile] = React.useState({1:false,2:false,3:false});

    const apolloClient = initializeApollo();

    let productlist = [];
    let category = [];
    let experience = [];

    let {data,error} = uselivestreamcategory();

    let experiencedata = useexperiences();

    const {countries} = usecountries()
    
    const [countryid,setcountryid] = useState("")

    const [regionid,setregionid] = useState("");

    const [regions,setregions] = useState([])

    const [cities,setcities] = useState([])

    if(!error && data)
    {
        category = data;
    }

    if(!experiencedata.error && experiencedata.data)
    {
        experience = experiencedata.data;
    }

    let productinfo = useproduct({offset:0,limit:10,sellers:userid?userid:undefined});

    if(productinfo && productinfo.data && !productinfo.error)
    {
        productlist = productinfo.data;
    }

    useEffect(()=>{
        if(countryid)
        {
            apolloClient.query({query:GET_REGIONS,variables:{countryid}}).then((res)=>{
                setregionid("")
                setSubmit({
                    ...submit,
                    cityid:""
                })
                if(!res.error && res.data)
                {
                    setregions(res.data.regions)
                }
                else
                {
                    setregions([])
                }
    
               
            })
        }
        else
        {
            setregions([])
            setregionid("")
            setSubmit({
                ...submit,
                cityid:""
            })
        }
    },[countryid])

    useEffect(()=>{
        if(regionid)
        {
            apolloClient.query({query:GET_CITIES,variables:{region:regionid}}).then(res=>{
                if(res.data && !res.error)
                {
                    setcities(res.data.cities)
                }
                else
                {
                    setcities([])
                }

                setSubmit({
                    ...submit,
                    cityid:""
                })
            })
        }
        else
        {
            setcities([])
            setSubmit({
                ...submit,
                cityid:""
            })
        }
        
    },[regionid])

    useEffect(()=>{
        let token = localStorage.getItem('access_token')

        if(token)
        {
            
            getuserbytoken({token}).then(userid=>{
                if(userid)
                {
                    setuserid(userid)
                }
                else
                {
                    //window.location.href = "/"    
                }
                
            }).catch(err=>{ 
                window.location.href = "/"
            })
        }
        else
        {
            window.location.href = '/';
        }

    },[])
    const changedate = (e) => {
        let date = new Date(e.target.value);
        setSubmit(submit=>{
            let {starttime} = submit;
            starttime.setFullYear(date.getFullYear());
            starttime.setDate(date.getDate());
            starttime.setMonth(date.getMonth());
            return {
                ...submit,
                starttime
            }
        })
    }

    const changetime = (e) => {
        let time = new Date(moment(submit.starttime).format('YYYY-MM-DD') + ' ' + e.target.value);
        setSubmit(submit=>{
            let {starttime} = submit;
            starttime.setHours(time.getHours());
            starttime.setMinutes(time.getMinutes());
            starttime.setSeconds(time.getSeconds());
            return {
                ...submit,
                starttime
            }
        })
    }

    const changefile = (e,index) => {
        const reader = new FileReader();

        console.log(e);
        var file = e.target.files[0];
        
        reader.addEventListener('load',function(){
            setSubmit(submit=>{
                let {images} = submit;
                images[index] = reader.result;

                return {
                    ...submit,
                    images
                }
            })
        })

        if(file)
        {
            reader.readAsDataURL(file);
            setImageFile(imagefile=>{
                imagefile[index] = file;
                return imagefile;
            })
        }
    }

    const changetext = (e,param) => {
        let value = e.target.value;
        setSubmit(submit=>{
            submit[param] = value;
            return submit;
        })
    }

    const submitgetlive = async() => {
        let images = [];
        console.log(imagefile);
        setloading(true)
        for(let item in imagefile)
        {
            if(imagefile[item])
            {
                try
                {
                    let location = await fileupload(imagefile[item])
                    images.push(location);
                }
                catch(err)
                {

                }
                
            }
        }

        console.log(images)

        let imagelist = [];
        for(let item in images)
        {
            try{
                let asset = await apolloClient.mutate({mutation:addAssetImage,variables:{path:images[item],filename:new Date().getTime() + ""}});
                if(asset.data && !asset.errors)
                {
                    imagelist.push(asset.data.addAssetUrl.id);
                }
            }
            catch(err)
            {

            }
            
        }

        console.log(imagelist)

        let productlist = []

        for(let item in submit.products)
        {
            productlist.push({
                product:submit.products[item],
                duration:''
            })
        }

        let data  = {
            title:submit.title,
            experience:submit.experience,
            categories:submit.categories,
            preview:imagelist,
            productDurations:productlist,
            startTime:submit.starttime,
            orientation:submit.portrait?'PORTRAIT':'LANDSCAPE',
            thumbnail:imagelist.length > 0?imagelist[0]:null,
            liveStreamRecord:[]
        }

        var videoarray = []
        if(videolist.length > 0)
        {
            for(let item in videolist)
            {
                videoarray.push(videolist[item].url)
            }
        }

        data.liveStreamRecord = videoarray

        let token = localStorage.getItem('access_token');
        console.log(data)
        if(token)
        {
            try
            {
                let result = await apolloClient.mutate({mutation:addlivestream,variables:{data:data}});

                if(result.data && !result.errors)
                {
                    setloading(false)
                    window.location.href = "/getlive/" + result.data.addLiveStream.slug;
                }
            }
            catch(err)
            {
                
            }
            
        }
        
        setloading(false)
    }

    const getproductlist = () => {
        let itemlist = [];
        for(let item in productlist)
        {
            if(submit.products.indexOf(productlist[item].id) > -1)
            {
                itemlist.push(productlist[item]);
            }
        }

        return itemlist;
    }

    const getcategorylist = () => {
        let itemlist = [];
        for(let item in category)
        {   
            if(submit.categories.indexOf(category[item].id) > -1)
            {
                itemlist.push(category[item]);
            }
        }

        return itemlist;
    }

    const getexperiencelist = () => {
        let itemlist = [];
        
        for(let item in experience)
        {   
            if(submit.experience == experience[item].id)
            {
                itemlist.push(experience[item]);
                break;
            }
        }

        return itemlist;
    }

    return (
        <Modal>
            {
                deviceType.desktop?(
                    <div style={{display:'flex',marginTop:'110px',paddingTop:'20px'}}>
                        <LeftSidebar/>
                        <MainContainer>
                            <Card>
                                <div className="card-header">上传短视频</div>
                                <div className="card-body">
                                    <Grid>
                                        {
                                            videolist.map((item,index)=>{
                                                return (
                                                    <LiveVideo>
                                                        <video src={item.url} controls></video>
                                                        <p>{item.filename}</p>
                                                    </LiveVideo>
                                                )
                                            })
                                        }
                                        <FileUploadComp style={{minWidth:'200px',minHeight:'200px'}} onClick={()=>setvideo(true)}>
                                            <div style={{textAlign:'center'}}>
                                                <Plus/> <br/> 上传视频
                                            </div>
                                        </FileUploadComp>
                                    </Grid>
                                    
                                </div>
                            </Card>
                            <Card>
                                <div className="card-header">直播形式</div>
                                <div className="card-body">
                                    <div>直播画面</div>
                                    <div style={{display:'flex',marginTop:'24px'}}>
                                        <div className={submit.portrait?"selectedinfo":'info'} onClick={()=>setSubmit(submit=>{return {...submit,portrait:true}})}>竪屏 {submit.portrait && 
                                        (<Mask><CheckIcon/></Mask>)}</div>
                                        <div className={submit.portrait?'info':"selectedinfo"} onClick={()=>setSubmit(submit=>{return {...submit,portrait:false}})}>横屏 {!submit.portrait && 
                                        (<Mask><CheckIcon/></Mask>)}</div>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card-header">直播信息</div>
                                <div className="card-body">
                                    <div className="label">直播开始时间 <span style={{color:'#BE0000'}}>*</span></div>
                                    <div className="form-group">
                                        <input type="date" placeholder="请选择日期" style={{marginRight:'20px'}} value={moment(submit.starttime).format('YYYY-MM-DD')} onChange={changedate}/>
                                        <input type="time" placeholder="请选择时间" value={moment(submit.starttime).format('kk:mm:ss')} onChange={changetime}/>
                                    </div>
                                    <div className="label">封面图 <span style={{color:'#BE0000'}}>*</span></div>
                                    <div className="form-group">
                                        <FileUpload style={{width:'122px',marginRight:'14px'}}>
                                            <div className="box">
                                                {
                                                    submit.images[1] && (
                                                        <img src={submit.images[1]}></img>
                                                    )
                                                }
                                                {
                                                    !submit.images[1] && (
                                                        <div style={{textAlign:'center'}}><Plus/> <br/>上传图片</div>
                                                    )
                                                }
                                                <input type="file" onChange={e=>changefile(e,1)}/>
                                            </div>
                                            <div>尺寸x尺寸，必填</div>
                                        </FileUpload>
                                        <FileUpload style={{width:'196px',marginRight:'14px'}}>
                                            <div className="box">
                                                {
                                                    submit.images[2] && (
                                                        <img src={submit.images[2]}></img>
                                                    )
                                                }
                                                {
                                                    !submit.images[2] && (
                                                        <div style={{textAlign:'center'}}><Plus/> <br/>上传图片</div>
                                                    )
                                                }
                                                <input type="file" onChange={e=>changefile(e,2)}/>
                                            </div>
                                            <div>尺寸x尺寸，必填</div>
                                        </FileUpload>
                                        <FileUpload style={{width:'196px'}}>
                                            <div className="box">
                                                {
                                                    submit.images[3] && (
                                                        <img src={submit.images[3]}></img>
                                                    )
                                                }
                                                {
                                                    !submit.images[3] && (
                                                        <div style={{textAlign:'center'}}><Plus/> <br/>上传预告视频</div>
                                                    )
                                                }
                                                <input type="file" onChange={e=>changefile(e,3)}/>
                                            </div>
                                            <div>比例16：9，非必填，上传2小时后可见</div>
                                        </FileUpload>
                                    </div>
                                    <div className="label">标题 <span style={{color:'#BE0000'}}>*</span></div>
                                    <div className="form-group">
                                        <input type="text" placeholder="请在这裏输入标题" onChange={e=>changetext(e,'title')} value={submit.title}></input>
                                    </div>
                                    <div className="label">简介 <span style={{color:'#BE0000'}}>*</span></div>
                                    <div className="form-group">
                                        <textarea placeholder="请在这裏输入直播简介" rows={10} onChange={e=>changetext(e,'description')} value={submit.description}></textarea>
                                    </div>
                                    <div className="label">直播栏目 <span style={{color:'#BE0000'}}>*</span></div>
                                    <div className="form-group">
                                        {
                                            (submit.categories.length == 0 && !submit.experience) && (
                                                <FileUploadComp onClick={()=>setOpen(true)}>
                                                    <Plus width='20px' height='20px'/> <span style={{marginLeft:'20px'}}>添加类别</span>
                                                </FileUploadComp>
                                            )
                                        }
                                        {
                                            (submit.categories.length > 0 || submit.experience) && (
                                                <LiveSectionComp>
                                                    <div className="body">
                                                        <div className="section">
                                                            <div className="title">直播体验</div>
                                                            <div className="container">
                                                                {
                                                                    getexperiencelist().map(item=>{
                                                                        return (
                                                                        <div className="experience">{item.name}</div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="section">
                                                            <div className="title">直播分类</div>
                                                            <div className="container">
                                                                {
                                                                    getcategorylist().map(item=>{
                                                                        return (
                                                                        <div className="category">{item.name}</div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="action">
                                                        <span className="button" onClick={()=>setOpen(true)}>修改</span>
                                                    </div>
                                                </LiveSectionComp>
                                            )
                                        }
                                        
                                    </div>
                                    <div className="label">直播位置</div>
                                    <div className="form-group">
                                        <select value={countryid} onChange={(e)=>setcountryid(e.target.value)}>
                                            <option value="">选择国家</option>
                                            {
                                                countries.map(item=>{
                                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                                })
                                            }
                                        </select>
                                        <select value={regionid} onChange={(e)=>setregionid(e.target.value)}>
                                            <option value="">选择地区</option>
                                            {
                                                regions.map((item)=>(
                                                    <option value={item.id} key={item.id}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                        <select value={submit.cityid} onChange={(e)=>setSubmit({
                                            ...submit,
                                            cityid:e.target.value
                                        })}>
                                            <option value="">选择城市</option>
                                            {
                                                cities.map((item)=>(
                                                    <option value={item.id} key={item.id}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="card-header">直播商品</div>
                                <div className="card-body">
                                    <div className="list_product">
                                        {
                                            getproductlist().map(item=>{
                                                return (
                                                    <ProductCard key={item.id}>
                                                        <div className="image" style={{backgroundImage:`url('${item.assets.length > 0?item.assets[0].url:''}')`}}></div>
                                                        <div className="price"> {item.price.formatted}</div>
                                                        <div className="description">{item.description}</div>
                                                    </ProductCard>
                                                )
                                            })
                                        }
                                        <FileUploadComp onClick={()=>setProductopen(true)}>
                                            <div style={{textAlign:'center'}}>
                                                <Plus/> <br/> 添加商品
                                            </div>
                                        </FileUploadComp>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card-body">
                                    <div style={{display:'flex'}}>
                                        <button className="submit" onClick={submitgetlive}>发佈</button>
                                    </div>
                                </div>
                            </Card>
                        </MainContainer>
                        <Dialog 
                        isopen={open} 
                        setOpen={setOpen} 
                        title="直播分类（可选多个栏目）" 
                        data={category} 
                        button="下一页" 
                        submit={()=>{setOpen(false); setExperienceDialog(true)}}
                        selected={submit.categories}
                        multiple={true}
                        setSelected={(categories)=>{setSubmit(submit=>{return {...submit,categories}})}}
                        ></Dialog>

                        <Dialog 
                        isopen={experiencedialog} 
                        setOpen={setExperienceDialog} 
                        title="直播体验（可选一个栏目）" 
                        data={experience} 
                        button="确认" 
                        submit={()=>setExperienceDialog(false)}
                        selected={submit.experience}
                        multiple={false}
                        setSelected={(experience)=>{setSubmit(submit=>{return {...submit,experience}})}}
                        ></Dialog>

                        <AddProduct
                        open={productopen} 
                        setOpen={setProductopen} 
                        selected={submit.products} 
                        data={productlist}
                        setSelected={items=>setSubmit(submit=>{return {...submit,products:items}})}/>

                        <VideoSelect open={videoselect} setopen={setvideo} selectedvideo={videolist} selectvideo={setvideolist}></VideoSelect>
                    </div>
                ):<AddGetLiveMobile 
                    productlist={productlist} 
                    category={category} 
                    experience={experience}
                    submit={submit}
                    changefile={changefile}
                    setSubmit={setSubmit}
                    submitgetlive={submitgetlive}
                />
            }
            
            {
                loading && <PageLoader/>
            }
        </Modal>
    )
}


export default AddGetLive;