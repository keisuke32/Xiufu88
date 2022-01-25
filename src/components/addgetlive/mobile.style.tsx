import React from 'react'
import styled from 'styled-components'

export const BroadCast = styled.div`
    background: linear-gradient(0deg, #9815FF 0%, #BF0BFF 100%);
    border-radius: 7px;
    padding:15px 23px;
    display:flex;
    flex-direction:row;
    color:white;
    font-size:18px;
    font-weight:bold;
    align-items:center;
    justify-content:space-between;
    flex:1;
    margin-right:15px;
`

export const Tab = styled.ul`
    display:flex;
    justify-content:center;
    padding:15px;
    
    li
    {
        float:left;
        font-size:18px;
        padding-bottom:7px;
        margin-right:50px;
    }

    li.active
    {
        border-bottom:2px solid #BE0000;
    }

    li:last-child
    {
        margin-right:0px;
    }
`

export const Getlive = styled.div`
    border-radius:4px;
    padding:15px;
    background-size:cover;
    position:relative;
    height:180px;
    display:flex;
    align-items:flex-end;
    .overlay
    {
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        border-radius:4px;
        background: linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 19.17%);
    }
`

export const Main = styled.div`
    margin:15px;
    background-color:white;
    flex:1;
    overflow-y:auto;
    .header
    {
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .title
    {
        font-weight:normal;
        font-size:18px;
    }

    .label
    {
        font-size:14px;
    }

    .upload
    {
        background: #CBCEDB;
        border-radius: 5px;
        height:122px;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        color:white;
        font-size:13px;
        display:flex;
        flex-direction:column;
        position:relative;

        img
        {
            border-radius:5px;
            width:100%;
            height:100%;
            object-fit:cover;
        }

        input
        {
            opacity:0;
            width:100%;
            height:100%;
            position:absolute;
        }
    }

    .getliverow
    {
        display:flex;
        padding:15px 5px;
        border-top:1px solid rgba(224, 224, 224, 0.7);
        align-items:center;
        justify-content:space-between;

        .input
        {
            color:#BDBDBD;
            font-size:14px;
            margin-left:15px;
            padding:5px;
            flex:1;
            border:none;
        }
    }

    .add
    {
        padding:8px 12px;
        border-radius: 5px;
        border: 1px dashed #BDBDBD;
    }

    .rowitem
    {
        display:flex;
        align-items:center;
        margin-top:15px;
        img
        {
            width:70px;
            height:70px;
            border-radius:5px;
            margin-left:15px;
            margin-right:15px;
        }

        .title
        {
            font-size:12px;
            color:#333;
            margin-bottom:5px;
        }

        .price
        {
            font-size:12px;
            color:#EF3900;
        }

        .content
        {
            padding-bottom:5px;
            border-bottom:1px solid rgba(224, 224, 224, 0.7);
            flex:1;
            height:100%;
        }

        
    }

    .categoryitem
    {
        background: #F2F2F2;
        border-radius: 3px;
        color:#333;
        font-size:12px;
        padding:16px 8px;
        text-align:center;
    }

    .categoryselected
    {
        background:#FFC9C9;
        color:#BE0000;
    }

    .item
    {
        background: #F2F2F2;
        border-radius: 20px;
        padding:10px 20px;
    }

    .revise
    {
        color: #BDBDBD;
        font-size:12px;
        padding:5px 12px;
        border-radius:20px;
        border: 1px solid #BDBDBD;
    }

    .itemtitle
    {
        font-size:14px;
        color:#4F4F4F;
    }

    .itemcontent
    {
        display:flex;
        flex-wrap:wrap;
        margin-top:10px;
        margin-bottom:10px;
    }

    .contentitem
    {
        background: #F2F2F2;
        border-radius: 20px;
        padding:10px 20px;
        font-size:14px;
        color:#333;
        margin-right:5px;
    }

    .checkbox
    {
        width:17px;
        height:17px;
        border-radius:8px;
        border: 1px solid #828282;
    }

    .checked
    {
        background:#EF3900;
        justify-content:center;
        align-items:center;
        display:flex;
        border:none;
    }

    .section
    {
        margin-bottom:10px;
        .sectiontitle
        {
            font-size:12px;
            color: #4F4F4F;
            margin-bottom:15px;
        }
    }
`

export const Submitbtn = styled.div`
    background:#BDBDBD;
    padding:10px;
    color:white;
    width:100vw;
    text-align:center;
    margin-top:30px;
`

export const Button = styled.span`
    padding:4px 20px;
    color:#333;
    border-radius:5px;
    background-color:white;
`

export const GetLive = styled.div`
    width:100vw;
    height:100vh;
    background:black;
    display:flex;
    flex-direction:column;
    video{
        width:100%;
        height:100%;
        position:absolute;
    }

    .headerstatus
    {
        display:flex;
        padding:15px;
        color:white;
        font-size:14px;

        .item
        {
            margin-right:20px;
            display:flex;
            align-items:center;
            min-width:80px;
        }
    }

    .header
    {
        padding:15px;
        display:flex;
        justify-content:space-between;
        color:white;
        font-size:14px;
        align-items:center;
        
        .status
        {
            background: rgba(0, 0, 0, 0.5);
            border-radius:10px;
            color:white;
            display:flex;
            .statusitem
            {
                padding:1px 10px;
            }

            .live
            {
                border-radius:10px;
                background:#F00000;
            }
        }

        .stopbutton
        {
            background:white;
            border-radius:10px;
            padding:6px 18px;
            color:black;
            font-size:13px;
        }
    }

    .content
    {
        flex:1;
        display:flex;
        flex-direction:column-reverse;
        padding:15px;
        z-index:100;
        overflow-y:auto;

        .messageitem
        {
            padding:5px;
            background:#33333380;
            border-radius:3px;
            font-size:10px;
            margin-bottom:10px;
            display:flex;
            max-width:60vw;
            color:white;
            width:fit-content;
            .messagecontent
            {
                color:white;
                margin-left:10px;
            }
        }
    }

    .bottom
    {
        display:flex;
        padding:15px;
        align-items:center;
        z-index:100;
        .btn
        {
            color:white;
            text-align:center;
            font-size:7px;
            display:flex;
            flex-direction:column;
            align-items:center;
            padding:6px 2px;
        }
        .circlebtn{
            width:27px;
            height:27px;
            border-radius:14px;
            background:#33333380;
            display:flex;
            justify-content:center;
            align-items:center;
        }

        .switchbtn
        {
            border-radius:30px;
            display:flex;
            background:#33333380;
            .item
            {
                width:37px;
                height:37px;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                color:#E4E4E4;
                font-size:8px;
                border-radius:30px;
            }

            .active
            {
                color:#EF1D00;
                background:white;
            }
        }

        .messageinput
        {
            width:100%;
            color:white;
            font-size:12px;
            padding:10px 15px;
            border-radius:30px;
            background:#33333380;
            margin-left:5px;
            border:none;
        }
    }
`

export const HeartContainer = styled.div`
    position:relative;
    margin-left:10px;
    text-align:center;
    
    .likescount
    {
        color:white;
        background-image:linear-gradient(180deg, #F64967 0%, #EA0046 100%);
        width:38px;
        height:18px;
        display:flex;
        justify-content:center;
        border-radius:10px;
        margin-top:-5px;
    }

    @keyframes heartfly
    {
        0%
        {
            opacity:1;
        }

        10%
        {
            opacity:0.8;
            top:-30px;
        }

        20%
        {
            opacity:0.6;
            top:-60px;
            left:-30px;
        }

        30%
        {
            opacity:0.6;
            top:-120px;
            left:-40px;
        }

        40%
        {
            opacity:0.5;
            top:-180px;
            left:-30px;
        }

        50%
        {
            opacity:0.5;
            top:-250px;
            left:0px;
        }
        60%
        {
            opacity:0.4;
            top:-280px;
            left:0px;
        }

        70%
        {
            opacity:0.3;
            top:-350px;
            left:-30px;
        }

        80%
        {
            opacity:0.2;
            top:-390px;
            left:-40px;
        }

        90%
        {
            opacity:0.1;
            top:-440px;
            left:-20px;
        }

        100%
        {
            opacity:0;
            top:-540px;
            left:0px;
        }
    }

    .animate_heart
    {
        width:27px;
        height:25px;
        position:absolute;
        top:0px;
        left:8px;
        animation:1.5s ease-in-out heartfly normal infinite;
    }


    .animate_heart:nth-child(2)
    {
        animation-delay:0.1s
    }

    .animate_heart:nth-child(3)
    {
        opacity:1.2;
        animation-delay:0.2s;
    }

    .animate_heart:nth-child(4)
    {
        opacity:1.8;
        animation-delay:0.3s;
    }

    .animate_heart:nth-child(5)
    {
        opacity:2.4;
        animation-delay:0.4s;
    }

    .animate_heart:nth-child(6)
    {
        opacity:2.4;
        animation-delay:0.5s;
    }

    .animate_heart:nth-child(7)
    {
        opacity:2.4;
        animation-delay:0.6s;
    }
    
`


export const UserList = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    .titlecontainer
    {
        display:flex;
        align-items:center;
        h3
        {
            text-align:center;
            font-size:14px;
            font-weight:normal;
            flex:1;
        }

        .times
        {
            font-size:20px;
        }
    }

    ul
    {
        flex:1;
        overflow-y:auto;
        li
        {
            padding:15px;
            display:flex;
            align-items:center;
            .profile
            {
                width:30px;
                height:30px;
                border-radius:15px;
                margin-right:15px;
                text-align:center;
                display:flex;
                align-items:center;
                justify-content:center;
            }

            .name
            {
                font-size:13px;
            }
        }

        li.selected
        {
            color:red;
        }
    }

    .messagecontainer
    {
        display:flex;
        align-items:center;
        padding:5px 25px;
        .inputcontainer
        {
            flex:1;
            border-radius:15px;
            border:1px solid #EAEAEA;
            margin-right:15px;
            background:#F6F6F6;

            input
            {
                flex:1;
                background:transparent;
                border:none;
                padding:5px 25px;
            }
        }

        .send
        {
            color:#959595;
        }
    }
    
`