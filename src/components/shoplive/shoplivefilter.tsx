import styled from 'styled-components';
export const ShopLiveFilter = styled.div`
    .titleinfo
    {
        padding:15px;
        display:flex;
    }
`

export const TabContainer = styled.ul`
    list-style:none;
    width:100%;
    border-bottom:5px solid #BE0000;
    display:flex;
    li
    {
        float:left;
        padding:10px 25px;
        font-size:16px;
        cursor:pointer;
    }

    li.active
    {
        color:white;
        background:#BE0000;
    }
`

export const TabContent = styled.div`
    .toptitle
    {
        padding:10px 20px;
        font-size:18px;
        color:#4F4F4F;
        display:flex;
        span{
            cursor:pointer;
        }
    }

    .topfilter
    {
        margin-top:20px;
        border:1px solid #BDBDBD;
        width:100%;

        .topfilteritem
        {
            width:100%;
            display:flex;
            border-bottom:1px solid rgba(224, 224, 224, 0.7);
            .leftpanel
            {
                width:83px;
                background:#F5F2F2;
                padding:11px 5px 5px 11px;
                font-size:15px;
                color:#828282;
            }

            .panelcontent
            {
                display:flex;
                flex-wrap:wrap;
                padding:10px 15px;
                flex:1;
                .panelitem
                {
                    margin-right:25px;
                    font-size:15px;
                    cursor:pointer;
                    margin-bottom:10px;
                }

                .selected
                {
                    color:red;
                }
            }

            .rightpanel
            {
                padding:10px 15px;
                color:#4F4F4F;
                .btn-rect
                {
                    border: 1px solid #BDBDBD;
                    margin-right:15px;
                }

                
            }
        }
    }
`