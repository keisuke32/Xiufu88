import styled from 'styled-components'

export const ShopliveContainer = styled.div`
    background-color:white;
    border-radius:10px;
    padding:10px;
    height:269px;
    justify-content:space-between;
    display:flex;
    flex-direction:column;
    background-size:cover;
    position:relative;

    .backgroundcontainer
    {
        background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 21.56%);
        width:100%;
        height:100%;
        left:0px;
        top:0px;
        border-radius:10px;
        position:absolute;
    }

    .shoplivecontainer
    {
        display:flex;
        width:fit-content;
        background-color:rgba(79, 79, 79, 0.5);
        border-radius:10px;
        font-size:10px;
        color:white;
        align-items:center;
        
        .livestreaming
        {
            background-color:#C50000;
            padding:5px 2px;
            border-radius:10px;
        }

        .pending
        {
            background-color:#C50000;
            padding:5px 2px;
            border-radius:10px;
        }

        .finished
        {
            background-color:#00D7B0;
            padding:2px 5px;
            border-radius:10px;
        }
    }

    .profile
    {
        display:flex;
        align-items:center;
        z-index:30;

        .avatar
        {
            width:30px;
            height:30px;
            border-radius:15px;
            justify-content:center;
            align-items:center;
            color:white;
            font-size:13px;
            font-weight:bold;
            display:flex;
        }

        .streamer{
            font-size:13px;
            color:white;
            word-wrap:nowrap;
        }

        .location
        {
            font-size:13px;
            color:white;
        }
    }
`;

export const Filter = styled.div`
    background:white;
    border-radius:8px 0px 0px 8px;
    position:relative;
    height:100vh;

    .title
    {
        background: #F5F2F2;
        padding:30px 15px 15px 5px;
        color:#828282;
        font-size:12px;
        display:flex;
        align-items:center;
    }

    .section
    {
        padding:15px;
        border-bottom:1px solid #F2F2F2;

        .sectiontitle
        {
            display:flex;
            justify-content:space-between;
            color:#4F4F4F;
            font-size:12px;
            margin-bottom:5px;
        }

        .item
        {
            padding:10px;
            font-size:11px;
            color:black;
            background: #F2F2F2;
            border-radius: 3px;
            justify-content:center;
            text-align:center;
        }

        .active
        {
            background: #FFC9C9;
            color: #BE0000;
        }

        .priceitem
        {
            padding:5px 10px;
            background: #F2F2F2;
            border-radius: 15px;
            color:#BDBDBD;
            border:none;
            width:95px;
            text-align:center;
        }
    }

    .btn
    {
        border-radius:5px;
        padding:5px;
        min-width:66px;
    }

    .btn-default
    {
        background: #E0E0E0;
        color:#333;
    }

    .btn-primary
    {
        color:white;
        background:#FA4C4C;
    }
`

export const LiveContent = styled.div`
    z-index:100;
    display:flex;
    flex-direction:column;
    height:100vh;
    padding:10px;
    .headerprofile
    {
        display:flex;
        z-index:100;
        align-items:center;
        justify-content:space-between;
        .profileinfo
        {
            display:flex;
            background:#33333380;
            border-radius:30px;
            padding:5px 10px;
            align-items:center;
            justify-content:space-between;

            .avatar
            {
                width:30px;
                height:30px;
                border-radius:15px;
                justify-content:center;
                align-items:center;
                color:white;
                font-size:13px;
                font-weight:bold;
                display:flex;
            }

            .title
            {
                color:white;
                font-size:13px;
            }

            .description
            {
                color:white;
                font-size:11px;
            }
        }
    }

    .content
    {
        display:flex;
        flex-direction:column-reverse;
        flex:1;
    }

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

        .messagecontent
        {
            color:white;
            margin-left:10px;
        }
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
        flex:1;
        color:white;
        font-size:12px;
        padding:10px 15px;
        border-radius:30px;
        background:#33333380;
        margin-left:5px;
        border:none;
    }
`
export const ProductItem = styled.div`
    display:flex;
    padding:10px;
    border-bottom:1px solid #BDBDBD;
    flex-direction:row;
    .content
    {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }

    .productlogo
    {
        width:100px;
        height:100px;
        border-radius:5px;
    }

    .producttitle
    {
        color:#333;
        font-size:12px;
    }

    .price
    {
        font-size:15px;
        color:#EF3900;
    }

    .cart
    {
        color:white;
        border-radius:20px;
        background-image:linear-gradient(90deg, #FF4D00 0%, #FF1F00 100%);
        padding:5px 20px;
        text-align:center;
    }

    .pricecontainer
    {
        display:flex;
        justify-content:space-between;
    }
`