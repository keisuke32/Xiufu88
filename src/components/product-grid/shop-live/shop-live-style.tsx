import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BoxCardShoplive = styled.div`
    background-color: #fff;
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid #f3f3f3;
    transition: 0.3s ease-in-out;
    cursor:pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
`;

export const HeartContainer = styled.div`
    right:15px;
    bottom:15px;
    position:absolute;
    z-index:50;
    .hearticon
    {
        height:40px;
    }

    .likescount
    {
        color:white;
        background-image:linear-gradient(180deg, #F64967 0%, #EA0046 100%);
        width:48px;
        height:21px;
        display:flex;
        justify-content:center;
        border-radius:10px;
        margin-top:-5px;
    }
`

export const ShopLiveImageWrapper = styled.div`
    width:100%;
    height: 190px;
    position: relative;
    background-size:cover;
    padding:10px;
    @media screen and (max-width: 1280px): {
        height: 250px;
    }

    @media screen and (max-width: 560px): {
        height: 180px;
    }
`;

export const LiveStatus = styled.div`
    padding:5px 13px;
    background-color:#C50000;
    border-radius:5px;
    color:white;
    font-size:13px;
    display:flex;
    
`;

export const PENDINGStatus = styled.div`
    padding:5px 13px;
    background-color:#C50000;
    border-radius:5px;
    color:white;
    font-size:13px;
    display:flex;
`


export const FinishedStatus = styled.div`
    padding:5px 13px;
    background-color:#00D7B0;
    border-radius:5px;
    color:white;
    font-size:13px;
    display:flex;
`

export const ViewStatus = styled.div`
    padding:5px 13px;
    background-color:rgba(0,0,0,0.3);
    border-radius:5px;
    color:white;
    margin-left:5px;
    font-size:13px;
    display:flex;
    align-items:center;
`;

export const CardBody = styled.div`
    padding:5px 18px;

    .info
    {
        color:#828282;
    }
`;

export const CardTitle = styled.p`
    color:black;
    font-size:12px;
    font-weight:400;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    width:100%;
`;

export const CardUser = styled.div`
    display:flex;
    margin-top:10px;
    align-items:center;
    margin-bottom:15px;
    image.avatar {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }
    div.avatar {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        font-size: ${themeGet("fontSizes.md")}px;
        font-weight: ${themeGet("fontWeights.bold")};
    }
`;
export const ProductContain = styled.a`
    float:left;
    .productimg
    {
        display:flex;
        justify-content:center;
        height:100px;

        img{
            max-height:100%;
            height:auto;
        }
    }

    .name
    {
        font-size:12px;
        text-align:center;
        margin-top:10px;
        color:black;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .price
    {
        font-size:12px;
        color:#DE0028;
        text-align:center;
        margin-top:10px;
        font-weight:bold;
    }
`;

export const Pagination = styled.div`
    display:flex;
    width:100%;
    padding:15px;
    background:#F5F2F2;
    .pageitem{
        margin-left:auto;
        color:#828282;
        display:flex;
        align-items:center;
        svg{
            cursor:pointer;
        }

        .current
        {
            color:red;
        }
    }
`
