import styled from 'styled-components';

export const LeftSideWrapper = styled.div`
    width:278px;
    margin-left:20px;
`;

export const Officialstart = styled.span`
    background:#F15D2B;
    border-radius:5px;
    padding:10px 30px;
    color:white;
    cursor:pointer;
`;

export const LiveVideo = styled.div`
    video{
        width:100%;
    }
    p{
        text-align:center;
    }
`

export const LeftSideContainer = styled.ul`
    padding:30px 20px;
    background:#FFF;
    box-shadow:2px 2px 3px rgba(0,0,0,0.25);
    li
    {
        padding-bottom:20px;
        font-size:14px;
        cursor:pointer;
    }

    .item
    {
        display:flex;
        align-item:center;
    }

    ul
    {
        padding-top:20px;
        padding-left:25px;
    }

    svg
    {
        margin-right:5px;
    }

    .logocontainer
    {
        display:flex;
        justify-content:center;
        align-items:center;
        .footer_logo
        {
            width:80px;
        }

        .logo_title
        {
            font-size:24px;
            color:#BE0000;
            line-height:24px;
        }

        .logo_button
        {
            padding:5px 10px;
            background:#528CE1;
            color:white;
            font-size:15px;
            margin-top:20px;
            border-radius:15px;
            border:none;
            cursor:pointer;
        }        
    }

    .button-download
    {
        width:180px;
        text-align:center;
        padding:8px 10px;
        border-radius:30px;
        color:#888;
        margin:auto;
        cursor:pointer;
        border:solid 1px #888;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:15px;
    }

    .button-download:hover
    {
        color:black;
        border-color:black;
    }
`;

export const VideoUpload = styled.div`
    display:flex;
    justify-content:center;
    padding:40px;
    .title
    {
        font-size:19px;
        text-align:center;
    }

    .info_video
    {
        font-size:13px;
        color:#4F4F4F;
        margin-top:10px;
        text-align:center;
    }

    .upload_buttons
    {
        display:flex;
        margin-top:33px;
        .upload_container
        {
            width:198px;
            height:198px;
            margin:0px 22px;
            padding:19px;
            border: 1px solid #E0E0E0;

            .upload_title
            {
                font-size:19px;
                margin-top:20px;
                margin-bottom:49px;
                text-align:center;
            }

            .upload_button
            {
                background: #EF3900;
                padding:12px;
                text-align:center;
                color:white;
                cursor:pointer;
            }
        }
    }

    .list
    {
        margin-top:20px;
        list-style:square;
        li
        {
            list-style:square inside;
            margin-left:26px;
            margin-right:26px;
            color:#828282;
            float:left;
            cursor:pointer;
        }

        li::marker
        {
            color:red;
        }        
    }
`;

export const MainContainer = styled.div`
    flex:1;
    margin-left:20px;
    margin-right:20px;
`;



export const Card = styled.div`
    box-shadow:2px 2px 3px rgba(0,0,0,0.25);
    margin-bottom:22px;

    video
    {
        background:black;
        max-height:500px;
    }

    .card-header
    {
        padding:25px 21px;
        font-size:16px;
        background-color:#F2F2F2;
    }

    .card-body
    {
        padding:45px 94px;
        background-color:white;
        font-size:16px;
        
        .selectedinfo
        {
            color:#BE0000;
            border:1px solid #BE0000;
            border-radius:2px;
            margin-right:20px;
            padding:9px 22px;
            font-size:19px;
            cursor:pointer;
            position:relative;
            overflow:hidden;
        }

        .info
        {
            border:1px solid #BDBDBD;
            border-radius:2px;
            margin-right:20px;
            padding:9px 22px;
            font-size:19px;
            cursor:pointer;
        }

        .label
        {
            color: #4F4F4F;
            font-size:18px;
            margin-bottom:12px;
        }

        .form-group
        {
            display:flex;
            margin-bottom:22px;
            input
            {
                border: 1px solid #BDBDBD;
                padding:6px 11px;
                min-width:245px;
                font-size:16px;
            }

            textarea
            {
                border: 1px solid #BDBDBD;
                padding:6px 11px;
                min-width:245px;
                font-size:16px;
            }

            select
            {
                border: 1px solid #BDBDBD;
                min-width:123px;
                margin-right:12px;
                height:35px;
                font-size:16px;
                color:#828282;
            }
        }

        .list_product
        {
            display:grid;
            grid-gap:33px;
            grid-template-columns: repeat(1, minmax(240px, 1fr));
            
            @media screen and (min-width:540px)
            {
                grid-template-columns: repeat(1, minmax(240px, 1fr));
            }
            @media screen and (min-width:780px)
            {
                grid-template-columns: repeat(2, minmax(240px, 1fr));
            }

            @media screen and (min-width:1020px)
            {
                grid-template-columns: repeat(3, minmax(240px, 1fr));
            }

            @media screen and (min-width:1360px)
            {
                grid-template-columns: repeat(4, minmax(240px, 1fr));
            }

            @media screen and (min-width:1600px)
            {
                grid-template-columns: repeat(5, minmax(240px, 1fr));
            }
        }

        .submit
        {
            font-size:18px;
            color:white;
            padding:8px 74px;
            background-color:#BE0000;
            border: 1px solid #BE0000;
            border-radius: 2px;
            margin-left:auto;
            cursor:pointer;
        }

       
    }
`;

export const Title = styled.h1`
    font-size:25px;
`;

export const FileUpload = styled.div`
    font-size:16px;
    color:#4F4F4F;
    cursor:pointer;
    .box{
        width:100%;      
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        height:122px;
        border:1px dashed #BDBDBD;
        position:relative;
        font-size:18px;
        i
        {
            font-size:55px;
        }

        img{
            width:100%;
            height:100%;
        }

        input
        {
            width:100%;
            height:100%;
            position:absolute;
            opacity:0;
            z-index:100;
            cursor:pointer;
        }
    }
`;


export const FileUploadComp = styled.div`
    padding:11px 30px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px dashed #BDBDBD;
    font-size:18px;
    cursor:pointer;
    color:#4F4F4F;
    i
    {
        font-size:35px;
    }
`;

export const ModalDialog = styled.div`
    background-color:white;
    width:900px;
    padding:22px;
    .title{
        font-size:18px;
    }

    .listcontainer
    {
        margin-top:20px;
        display:grid;
        grid-gap:33px;
        grid-template-columns: repeat(3, minmax(240px, 1fr));

        .item
        {
            background-color:#F2F2F2;
            border-radius:3px;
            color:#333333;
            text-align:center;
            padding:10px;
            cursor:pointer;
            position:relative;
            overflow:hidden;
        }

        .selected{
            color:#BE0000;
            background: #FFC9C9;
        }

        .masked
        {
            width:48px;
            height:48px;
            position:absolute;
            z-index:100;
            right:-30px;
            top:-30px;
            background:#BE0000;
            transform: rotate(-45deg);

            svg{
                position:absolute;
                top:20px;
                left:3px;
                z-index:110;
                transform: rotate(45deg);
            }
        }
    }

    .buttoncontainer{
        display:flex;
        margin-top:20px;
        .submit
        {
            font-size:19px;
            color:white;
            padding:6px 20px;
            background-color:#BE0000;
            border: 1px solid #BE0000;
            border-radius: 2px;
            margin-left:auto;
            cursor:pointer;
        }

        .cancel
        {
            font-size:19px;
            color:#4F4F4F;
            padding:6px 20px;
            background-color:#E0E0E0;
            border: 1px solid #BDBDBD;
            border-radius: 2px;
            margin-left:6px;
            cursor:pointer;
        }
    }
`;

export const ProductModal = styled.div`
    width:60vw;
    background-color:white;
    height:80vh;
    overflow-y:auto;
    padding:29px 26px;
    .submit
    {
        color:white;
        padding:6px 20px;
        background:#BE0000;
        font-size:19px;
        margin-right:10px;
        border: 1px solid #BE0000;
        border-radius: 2px;
        margin-left:auto;
        cursor:pointer;
    }
    .cancel
    {
        font-size:19px;
        padding:6px 20px;
        background: #E0E0E0;
        border: 1px solid #BDBDBD;
        color: #4F4F4F;
        cursor:pointer;
    }
    .title
    {
        font-size:19px;
    }
    @media screen and (min-width: 440px): {
        width:100vw;
        .productcontainer
        {
            display:grid;
            gridGap: 10px;
            gridTemplateColumns: repeat(2, minmax(180px, 1fr));
        }
      };
  
      @media screen and (min-width: 768px): {
        width:100vw;
        gridTemplateColumns: repeat(3, minmax(180px, 1fr));
      };
  
      @media screen and (min-width: 991px): {
        width:90vw;
        gridTemplateColumns: repeat(3, minmax(180px, 1fr));
      };
  
      @media screen and (min-width: 1100px): {
        width:90vw;
        gridTemplateColumns: repeat(4, minmax(180px, 1fr));
      };
  
      @media screen and (min-width: 1700px): {
        width:80vw;
        gridTemplateColumns: repeat(5, minmax(180px, 1fr));
      };
  
      @media screen and (min-width: 2200px): {
        width:70vw;
        gridTemplateColumns: repeat(5, minmax(240px, 1fr));
      }
`;

export const TabList = styled.ul`
      margin-bottom:24px;
      display:flex;
      li{
          float:left;
          padding:10px 25px;
          border-bottom:3px solid white;
          font-size:17px;
          cursor:pointer;
      }

      li.select
      {
        color:#BE00000;
        border-bottom:3px solid #BE0000;
      }
`;

export const TabListGetLive = styled.ul`
    display:flex;
    li{
        float:left;
        padding:10px 35px;
        border-bottom:1px solid #BDBDBD;
        font-size:17px;
        cursor:pointer;
    }

    li.selected
    {
        color:#BE0000;
        border-bottom:3px solid #BE0000;
    }
`

export const AddProductlistContainer = styled.div`
    border: 1px solid #BDBDBD;
    padding:13px 17px;
    height:408px;
    overflow-y:scroll;
    .title
    {
        font-size: 17px;
        color:#828282;
    }
    .productcontainer
    {
        padding:25px 43px;
        margin-top:25px;
        display:grid;
        grid-gap: 10px;
        grid-template-columns: repeat(5, minmax(180px, 1fr));
    }

    @media screen and (min-width: 768px): {
        .productcontainer
        {
            grid-template-columns: repeat(3, minmax(180px, 1fr));
        }
    };

    @media screen and (min-width: 991px): {
        .productcontainer
        {
            grid-template-columns: repeat(3, minmax(180px, 1fr));
        }
    };

    @media screen and (min-width: 1100px): {
        .productcontainer
        {
            grid-template-columns: repeat(4, minmax(180px, 1fr));
        }
    };

    @media screen and (min-width: 1700px): {
        .productcontainer
        {
            grid-template-columns: repeat(4, minmax(180px, 1fr));
        }
    };

    @media screen and (min-width: 2200px): {
        .productcontainer
        {
            grid-template-columns: repeat(5, minmax(180px, 1fr));
        }
    }

  
      
`;

export const ProductCard = styled.div`
    border:1px solid #E0E0E0;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    .image
    {
        height:150px;
        background-size:cover;
        width:100%;
        background-repeat:no-repeat;
    }
    .price
    {
        padding:8px;
        color: #EF3900;
        font-size:15px;
        font-weight:bold;
    }

    .description{
        line-height:1.5em;
        height:3em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        padding:8px;
        font-size: 12px;
        color: #333333;
    }

    .mask{
        background:#EF3900;
        width:60px;
        height:60px;
        position:absolute;
        top:-30px;
        right:-30px;
        transform: rotate(-45deg);
        color:white;
        z-index:100;
        svg
        {
            transform: rotate(45deg);
            position:absolute;
            top:20px;
            left:5px;
        }
    }
`;

export const AddButton = styled.span`
    padding:13px 31px;
    font-size:17px;
    background: #E0E0E0;
    border-radius: 2px;
    cursor:pointer;
`;

export const Mask = styled.div`
    position:absolute;
    width:40px;
    height:40px;
    background: #BE0000;
    transform: rotate(-45deg);
    bottom:-20px;
    right:-20px;
    svg
    {
        position:absolute;
        bottom:28px;
        right:15px;
        transform: rotate(45deg);
    }
`;

export const LiveSectionComp = styled.div`
    width:100%;
    
    .body
    {
        border: 1px dashed #BDBDBD;
        padding:22px;
        width:100%;
        margin-bottom:20px;
        .section
        {
            margin-bottom:49px;
            .title
            {
                color: #4F4F4F;
                font-size:18px;
                font-weight:normal;
                margin-bottom:18px;
            }
            .container
            {
                padding:0px 81px;
                display:grid;
                grid-gap:64px;
                grid-template-columns: repeat(4, minmax(109px, 1fr));

                .category
                {
                    padding:24px 21px;
                    border-radius: 3px;
                    background: #F2F2F2;
                    text-align:center;
                    cursor:pointer;
                }

                .experience
                {
                    padding:8px;
                    text-align:center;
                    background: #F2F2F2;
                    border-radius: 3px;
                    cursor:pointer;
                }
            }
        }
    }

    .action
    {
        display:flex;
        .button
        {
            margin-left:auto;
            padding:6px 19px;
            background: #E0E0E0;
            border: 1px solid #BDBDBD;
            border-radius: 2px;
            color: #4F4F4F;
            cursor:pointer;
        }
    }
    
`;

export const CardBox = styled.div`
    padding:10px;
    background:white;

    .title
    {
        display:flex;

        span
        {
            font-size:17px;
            color:black;
            font-weight:bold;
        }

        ul
        {
            li{
                float:left;
                padding:0px 20px;
                border-right:solid 1px black;
                color:#8E8DFF;
            }

            li:last-child
            {
                border:none;
            }
        }
    }

    .tabcontainer{
        border:solid 1px #C6C6C6;

        .tabcontent
        {
            padding:15px;
            background:white;

            .dialogcontent
            {
                background:#F3F3F3;
                padding:15px;

                .imagecontent
                {
                    padding:5px;
                    border:solid 1px #D0CED1;
                }

                .list
                {
                    background:white;
                    width:100%;
                    height:150px;
                    overflow-y:auto;
                    .item
                    {
                        display:flex;
                        padding:10px 20px;
                        border-bottom:solid 1px #D0CED1;
                        span
                        {
                            color:#A1A1A1;
                            font-size:17px;
                        }

                        .time
                        {
                            margin-left:30px;
                        }
                    }
                }

                .content
                {
                    margin-left:20px;
                    flex:1;
                    .productname
                    {
                        color:#426B94;
                        font-size:18px;
                        margin-bottom:10px;
                    }

                    .price
                    {
                        color:red;
                        font-size:18px;
                        margin-bottom:10px;
                    }
                }

                .item
                {
                    margin-right:20px;
                }

                .btn-default
                {
                    background-color:white;
                    border:1px solid #EDEDED;
                }

                .btn-default:hover
                {
                    background-color:#EEE;
                }
            }
        }
    }

    .tab
    {
        background:#F5F6F9;
        display:flex;
        
        border-bottom:none;
        li
        {
            padding:10px 20px;
            color:#A4A7AE;
            font-size:17px;
            float:left;
            border-bottom:solid 1px #C6C6C6;
            cursor:pointer;
        }

        li.select
        {
            background:white;
            border-left:solid 1px #C6C6C6;
            border-right:solid 1px #C6C6C6;
            border-bottom:none;
        }
    }
`;