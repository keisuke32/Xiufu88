import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const Container = styled.div`
    margin-left:20vw;
    min-height:700px;
    padding:20px 36px;
    .title
    {
        font-size:27px;
    }

    .videocontainer
    {
        display:flex;
        width:100%;
        .getlive
        {
            flex:1;
            width:calc(100% - 375px);
        }

        .stream
        {
            width:100%;
            border:1px solid #C4C4C4;
            video
            {
                width:100%;
                max-height:500px;
                background:black;
            }

            .status
            {
                position:absolute;
                display:flex;
                top:20px;
                z-index:50;
            }
            .viewcount
            {
               color:white;
               z-index:100;
               background:rgba(0, 0, 0, 0.7);
               padding:7px 12px;
               border-radius:5px;
               font-size:13px;
               display:flex;
               align-items:center;
               margin-left:15px;
               cursor:pointer;
            }

            @keyframes heartbeat
            {
                0%
                {
                    transform: scale( .75 );
                }
                20%
                {
                    transform: scale( 1 );
                }
                40%
                {
                    transform: scale( .75 );
                }
                60%
                {
                    transform: scale( 1 );
                }
                80%
                {
                    transform: scale( .75 );
                }
                100%
                {
                    transform: scale( .75 );
                }
            }

            @keyframes heartfly
            {
                0%
                {
                    transform:scale(.9);
                    opacity:1;
                }

                20%
                {
                    opacity:0.8;
                    top:-90px;
                    transform:scale(.8);
                }

                40%
                {
                    transform:scale(.7);
                    opacity:0.6;
                    top:-180px;
                    right:-20px;
                }

                60%
                {
                    transform:scale(.6);
                    opacity:0.4;
                    top:-270px;
                    right:0px;
                }

                80%
                {
                    transform:scale(.5);
                    opacity:0.2;
                    top:-360px;
                    right:-20px;
                }

                100%
                {
                    transform:scale(.4);
                    opacity:0;
                    top:-450px;
                    right:0px;
                }
            }

            .heartfly
            {
                animation:1.5s ease-in-out heartfly normal infinite;
            }

            .heartfly:nth-child(2)
            {
                animation-delay:0.1s
            }

            .heartfly:nth-child(3)
            {
                opacity:1.2;
                animation-delay:0.2s;
            }

            .heartfly:nth-child(4)
            {
                opacity:1.8;
                animation-delay:0.3s;
            }

            .heartfly:nth-child(5)
            {
                opacity:2.4;
                animation-delay:0.4s;
            }

            .heartfly:nth-child(6)
            {
                opacity:2.4;
                animation-delay:0.5s;
            }

            .heartfly:nth-child(7)
            {
                opacity:2.4;
                animation-delay:0.6s;
            }
            .heartfly:nth-child(8)
            {
                opacity:2.4;
                animation-delay:0.7s;
            }

            .heartbeat
            {
                animation: heartbeat 1s infinite;
            }

            .livestreamstatus
            {
                color:white;
                z-index:100;
                background:#C50000;
                padding:4px 13px;
                border-radius:5px;
                font-size:13px;
                display:flex;
                align-items:center;
                margin-left:15px;
                cursor:pointer;
            }

            .bottomstatus
            {
                position:absolute;
                bottom:20px;
                z-index:100;
                width:100%;
                display:flex;
                align-items:center;
                .button
                {
                    color:white;
                    cursor:pointer;
                    margin-right:15px;
                }

                .likestatus
                {
                    margin-left:auto;
                    margin-right:15px;
                    cursor:pointer;
                    text-align:center;
                    .likes
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
                }   
            }

            .productcontainer
            {
                min-height:135px;
                background:white;
                position:relative;

                .next
                {
                    height:100px;
                }
            }

            .productitem
            {
                display:flex !important;
                padding:20px 30px;
                align-items:center;

                .image
                {
                    width:108px;
                    height:108px;
                    background-size:cover;
                    margin-right:10px;
                }

                h4
                {
                    font-size:13px;
                    color:black;
                }

                .price
                {
                    font-size:12px;
                    color:#303030;
                }
            }

            .streamtitle{
                margin-bottom:10px;
                color:white;
                font-size:20px;
            }

            .profile
            {
                display:flex;
                align-items:center;

                image.avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 25px;
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
            }
            .info
            {
                color:white;
            }
        }
    }
`

export const ChatFragment = styled.div`
    width:315px;
    background:white;
    border: 1px solid #828282;
    display:flex;
    flex-direction:column;
    min-height:500px;
    .chattab
    {
        display:flex;
        flex-direction:row;
        .chatitem
        {
            flex:1;
            padding:20px;
            border-bottom:1px solid #666;
            justify-content:center;
            display:flex;
            font-size:15px;
            color:#666;
            cursor:pointer;
        }

        .select
        {
            border-bottom:2px solid #BE0000; 
            color:black;
        }
    }
    .chatcontainer{
        flex:1;
        overflow:auto;
        background: #F2F2F2;
        .avatar
        {
            width:30px;
            height:30px;
            border-radius:15px;
            margin-right:10px;
        }
        .receive
        {
            display:flex;
            margin:10px;
            .profile
            {
                font-size:12px;
                font-weight:600;
                color:#828282;   
            }

            .time
            {
                font-size:12px;
                font-weight:600;
                color:#828282;
                margin-left:8px;
            }
            .content
            {
                margin-bottom:5px;
                background-color:white;
                border-radius:5px;
                color:black;
                padding:7px 15px;
            }
        }

        .send
        {
            display:flex;
            margin:10px;
            margin-left:auto;
            max-width:75%;

            .message_content
            {
                margin-left:auto;
            }
            .profile
            {
                font-size:12px;
                font-weight:600;
                color:#828282;   
            }

            .time
            {
                font-size:12px;
                font-weight:600;
                color:#828282;
                margin-left:8px;
            }

            .content
            {
                margin-bottom:5px;
                background-color:#4F4F4F;
                border-radius:5px;
                color:white;
                padding:7px 15px;
            }
        }

        .header
        {
            display:flex;
        }
    }

    .inputcontainer
    {
        display:flex;
        flex-direction:row;
        padding: 18px 20px;
        align-items:center;
        img
        {
            width:23px;
            height:23px;
            margin-right:15px;
        }

        input
        {
            flex:1;
            border:none;
        }

        .button
        {
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            color: #00C5D1;
            cursor:pointer;
        }
    }
`;