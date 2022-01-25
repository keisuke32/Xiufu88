import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background:white;
    padding:12px 31px 0px 61px;
    display:flex;
    width:100%;
    align-items:center;
    position:relative;

    .menu
    {
        padding-bottom:16px;
        cursor:pointer;
        color:#BE0000;
        display:flex;
        align-items:center;

        .menu-title
        {
            font-size:16px;
            color:black;
        }
    }

    .menu-tab{
        margin:auto;
        li
        {
            float:left;
            display:flex;
            align-items:center;
            margin:0px 74px;
            padding-bottom:16px;
            cursor:pointer;
            img{
                margin-right:15px;
            }
        }

        .selected
        {
            border-bottom:5px solid #BE0000;
        }
    }

    .menu-right
    {
        padding-bottom:16px;
        display:flex;
        align-items:center;
        cursor:pointer;
        li
        {
            float:left;
            margin-left:20px;
        }
    }
`

export const CategoryContainer = styled.div`
    position:absolute;
    padding:7px 0px;
    z-index:100;
    background:#FFF;
    width:193px;
    min-height:500px;
    box-shadow:2px 2px 3px rgba(0,0,0,0.25);
    top:70px;
    left:60px;

    ul
    {
        li
        {
            margin-bottom:11px;
            cursor:pointer;
            position:relative;
            padding:0px 14px;
            display:flex;

            .right
            {
                margin-left:auto;
            }
        }

        li:hover > .sub
        {
            display:block;
        }

        li:hover > span
        {
            color:#BE0000;
        }
    }

    .sub
    {
        position:absolute;
        left:190px;
        background:white;
        width:193px;
        display:none;
        top:0px;
        transition: all 1000ms ease-in-out;
    }
`;