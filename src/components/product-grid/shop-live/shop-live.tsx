import React from 'react';
import {
    BoxCardShoplive,
    ShopLiveImageWrapper,
    LiveStatus,
    ViewStatus,
    CardBody,
    CardTitle,
    ProductContain,
    PENDINGStatus,
    FinishedStatus,
    CardUser
} from './shop-live-style';
import {Eye} from 'assets/icons/Eye';
import location from 'assets/images/location.png';
import Slider from 'react-slick';
import nameInitials from 'name-initials';
import {Heart} from './Heart'
import {initializeApollo} from 'utils/apollo'
import {likelivestream} from 'graphql/mutation/livestream'
import {NextArrow} from 'assets/icons/NextArrow'

type Product = {
    name?:String;
    image?:any;
    price?:any;
}

type ShopLiveCardProps = {
    id:any;
    image:any;
    title:string;
    author:String;
    authorimage:any;
    location:String;
    likes:any;
    views:any;
    productDurations:Array<Product>;
    channel:any;
    streamer:any;
    preview:any;
}

type Props = {
    data:ShopLiveCardProps,
    onSelect:any,
    liveproduct?:Array<any>,
    setinfo?:any
}

const ShopLiveCard:React.FC<Props> = ({
    data,onSelect,liveproduct,setinfo
}) => {
    // let {image,view} = data

    const renderslider = () =>  {
        let slidercomponent = [];
        if(data.productDurations && data.productDurations.length > 0)
        {
            data.productDurations.map((item_product:any, idx)=>{
                slidercomponent.push(
                    <ProductContain key={idx} href = {"/products/" + item_product?.product?.slug}>
                        <div className="productimg">
                            <img src={item_product?.product?.thumbnail?.thumbnail || item_product?.product.assets[0]?.thumbnail|| item_product?.product.assets[0]?.url || ""}/>
                        </div>
                        <p className="name">{item_product?.product.title}</p>
                        <p className="price">{item_product?.product.price.formatted}</p>
                    </ProductContain>
                )
            })
        }
        else if(liveproduct)
        {
            liveproduct.map((item_product:any, idx)=>{
                slidercomponent.push(
                    <ProductContain key={idx} href = {"/products/" + item_product?.slug}>
                        <div className="productimg">
                            <img src={item_product?.thumbnail?.thumbnail || item_product?.assets[0]?.thumbnail|| item_product?.assets[0]?.url || ""}/>
                        </div>
                        <p className="name">{item_product?.title}</p>
                        <p className="price">{item_product?.price.formatted}</p>
                    </ProductContain>
                )
            })
        }


        if(slidercomponent.length < 2)
        {
            for(let i = slidercomponent.length;i<2;i++)
            {
                slidercomponent.push(<div key={i} />);
            }
        }

        return slidercomponent;
    }

    let setting = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:2,
        centerMode: renderslider().length > 2,
        nextArrow:<span><NextArrow/></span>
    }


    const likestream = () => {
        const apollocilent = initializeApollo()
        apollocilent.mutate({mutation:likelivestream,variables:{id:data?.id}}).then(res=>{
            if(res.data)
            {
                onSelect(res.data.updateLiveStreamCount)
                setinfo(res.data.updateLiveStreamCount)
            }
        }).catch(err=>console.log(err))

        return false;
    }

    return (
        <BoxCardShoplive>
            <ShopLiveImageWrapper style={{backgroundImage:`url('${data?.preview[0]?.thumbnail || data?.preview[0]?.url}')`}} onClick={()=>onSelect(data)}>
                <div style={{display:'flex'}}>
                    {
                        data.channel.status == 'STREAMING' && (
                            <LiveStatus>直播</LiveStatus>
                        )
                    }
                    {
                        data.channel.status == "PENDING" && (
                            <PENDINGStatus>視頻</PENDINGStatus>
                        )
                    }
                    {
                        data.channel.status == "FINISHED" && (
                            <FinishedStatus>回放</FinishedStatus>
                        )
                    }
                    <ViewStatus>{data.views}观看</ViewStatus>
                </div>
                <Heart likes={data?.likes} setlike={likestream}></Heart>
            </ShopLiveImageWrapper>
            <CardBody>
                <CardTitle>{data.title}</CardTitle>
                <CardUser>
                    {data.streamer.photo ?
                        <img className="avatar" src={data.streamer.photo?data.streamer.photo.url:""} alt="streamer" />
                        :
                        <div className="avatar" style={{backgroundColor: data?.streamer?.color?.background, color: data?.streamer?.color?.text}}>{nameInitials(data?.streamer?.name)}</div>
                    }
                    <span className="info" style={{marginLeft:'10px'}}>{data.streamer.name}</span>
                    <img src={location} style={{marginLeft: 'auto'}} alt="location"/>
                    <span className="info">{data.streamer?.address?.city}</span>
                </CardUser>
                <div style={{minHeight: '156px',paddingBottom:'15px'}}>
                    <Slider {...setting}>
                        {
                            renderslider()
                        }
                    </Slider>
                </div>
            </CardBody>
        </BoxCardShoplive>
    )
}

export default ShopLiveCard;
