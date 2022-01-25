import styled, { keyframes } from 'styled-components';

export const Tab = styled.ul`
    display:flex;
    margin:auto;
    li
    {   
        padding:0px 30px;
        border-right:1px solid rgba(255, 255, 255, 0.4);
        color:white;
        font-size:15px; 
    }

    li.active
    {
        font-weight:bold;
        span{
            border-bottom:2px solid white;
            padding-bottom:6px;
        }
    }

    li:last-child
    {
        border-right:none;
    }
`;

export const CategoryList = styled.ul`
    flex:1;
    overflow-x:auto;
    display:flex;
    align-items:center;
    li
    {
        display:flex;
        min-width:fit-content;
        flex-wrap:nowrap;
        float:left;
        padding:10px;
        color:white;
        margin-right:18px;
        cursor:pointer;
        font-size:12px;
    }

    li.active
    {
        font-weight:bold;
        border-bottom:2px solid white;
    }
`;