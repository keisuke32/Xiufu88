import styled from 'styled-components'

export const ShopLiveTab = styled.ul`
    background-color:white;
    width:100vw;
    border-radius: 0px 0px 8px 8px;
    padding:15px;
    display:flex;
    li
    {
        float:left;
        text-align:center;
        flex:1;
        font-size:12px;
        color:#333;
    }
    
    li.active
    {
        color:#BE0000;
    }
`

export const ExperienceContent = styled.div`
    padding:15px 30px;
    z-index:3;
    .item
    {
        padding:5px 10px;
        border-top:1px solid rgba(194, 194, 194, 0.6);
        color:#333;
    }

    .btncontainer
    {
        margin:auto;
        margin-top:10px;
        display:flex;
        width:222px;
        flex-direction:row;
        color:white;
        font-size:12px;
        .btnitem-left
        {
            flex:1;
            border-radius: 20px 0px 0px 20px;
            background: #FF7A00;
            padding:10px;
            display:flex;
            justify-content:center;
            align-items:center;
        }

        .btnitem-right
        {
            flex:1;
            background: #EF1D00;
            border-radius: 0px 20px 20px 0px;
            padding:10px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
`