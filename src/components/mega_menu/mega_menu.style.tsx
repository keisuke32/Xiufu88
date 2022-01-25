import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import {
    background,
    compose,
    space,
    color,
    layout,
    position,
    flexbox,
    border,
} from 'styled-system';
import css from '@styled-system/css';

export const MegaMenuWrapper = styled.div`
    position: relative;
    
    .megamenu-handler {
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            
            svg {
                margin-right: 5px;
            }
        }
    }
    
    .megamenu-content {
        left: 0px;
        top: calc(100% + 20px);
        display: block;
        min-width: 220px;
        width: 25%;
        padding: 0 0;
        position: absolute;
        background-color: ${themeGet('colors.white', '#ffffff')};
        box-shadow: 2px 2px 2px rgba(142,142,142,0.14);
        z-index: 99;
        ul {
            height: 440px;
            &: hover{
                height: 500px;
            }
            @media (max-width: 1280px) {
                height: 50vh;
                &: hover{
                    height: 500px;
                }
            }
            overflow-y: scroll;
            overflow-x: hidden;
            &::-webkit-scrollbar-track
            {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                border-radius: 10px;
                background-color: #F5F5F5;
            }
            
            &::-webkit-scrollbar
            {
                width: 2px;
                background-color: #F5F5F5;
            }
            
            &::-webkit-scrollbar-thumb
            {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                background-color: #AAAAAA;
            }
        }
    }
    .cate-menu-item {
        
        line-height: 1.15rem;
        padding: 10px 20px 10px 30px;
        font-weight: ${themeGet('fontWeights.regular', '400')};
        font-size: 0.8rem;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
        span {
            color: ${themeGet('colors.black', '#000000')};
            width: 100%;
            // letter-spacing: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .cate-hover-wrap {
            width: calc(100vw - 640px);
            @media (max-width: 1600px) {
                width: calc(100vw - 340px);
            }
            height: 100%;
            background: #fff;
            position: absolute;
            top: 0;
            left: 220px;
            box-shadow: 2px 2px 2px rgba(142,142,142,0.14); 
            z-index: 99;
        
            .cate-submenu {
                display: flex;
                flex-wrap: wrap;
                height: 100%;
                padding: 20px;
                overflow: hidden;
                
                .cate-left {
                    float: left;
                    width: 70%;
                    height: 100%;
                    overflow-y: scroll;
            
            
                    &::-webkit-scrollbar-track
                    {
                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                        border-radius: 10px;
                        background-color: #F5F5F5;
                    }
                    
                    &::-webkit-scrollbar
                    {
                        width: 2px;
                        background-color: #F5F5F5;
                    }
                    
                    &::-webkit-scrollbar-thumb
                    {
                        border-radius: 10px;
                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                        background-color: #AAAAAA;
                    }
                    
                    .cate-sub-list {
                        position: relative;
                        margin-top: 10px;
                        line-height: 12px;
                        min-height: 22px;
                        display: flex;
                        flex-wrap: wrap;
                        padding-top: 30px;
                        padding-right: 70px;
                        
                        .cate-sub-title {
                            width: 20%;
                            line-height: 1.4;
                            font-weight: 700;
                            a {
                                color : ${themeGet('colors.black', '#000000')};
                                font-size: ${themeGet('fontSizes.sm', '14')}px;
                            }
                
                            &:hover {
                                a {
                                    color: ${themeGet('colors.red', '#BE0000')};
                                }
                            }
                        }
                        
                        .cate-sub-content {
                            width: 80%;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            padding-bottom: 30px;
                            border-bottom: 1px solid ${themeGet('colors.gray.700', '#E0E0E0')};
                        
                            .cate-sub-link {
                                margin-bottom: 10px;
                                padding-left: 10px;
                                a {
                                    color : ${themeGet('colors.gray.1000', '#4F4F4F')};
                                    font-size: ${themeGet('fontSizes.sm', '14')}px;
                                }
                
                                &:hover {
                                    a {
                                        color: ${themeGet('colors.red', '#BE0000')};
                                    }
                                }
                            }
                        }
                    }
                }
                .cate-right {
                    width: 30%;
                    height: 100%;
                    
                    .cate-right-top {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-flow: column;
                        
                        a {
                            overflow: hidden;
                            margin: 10px;
                            height: calc(100% / 3);
                            display: flex;
                            position: relative;
                            text-align: center;
                            border-radius: 10px;
                            margin: 5px auto;
                            width: 80%;
                            img {
                                border-radius: 10px;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                object-position: center;
                            }
                            .cate-right-pic-small-text {
                                position: absolute;
                                bottom: -30px;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                color: ${themeGet('colors.white')};
                                width: 100%;
                                background-color: ${themeGet('colors.black')}77;
                                padding: 20px;
                            }
                        }
                    }
                }
            }
        }
            
        &:hover {
            span {
                color: ${themeGet('colors.red', '#BE0000')};
            }
            svg {
                color: ${themeGet('colors.red', '#BE0000')};
            }
        }
    }
    
    .dropdown-content {
        display: none;
    }
    .cate-menu-item:hover .dropdown-content {
        display: block;
    }
    
`;

export const Box = styled.div<any>(
    css({
        height: ['auto', 'auto', '600px', '100vh'],
    }),
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        // backgroundColor: #f7f7f7;

        '@media (max-width: 990px)': {
            padding: '80px 0 25px',
        },
    },
    compose(space, color, layout, position, flexbox, border)
);
export const Image = styled.div<any>(
    css({
        backgroundSize: ['cover'],
    }),
    {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        '@media (max-width: 990px) and (min-width: 768px)': {
            backgroundPosition: 'inherit',
        },
    },
    background
);

export const Content = styled.div(
    css({
        px: ['20px', '20px', '15px'],
        pt: [0],
    }),
    {
        position: 'relative',
        zIndex: 2,
        width: '100%',
    }
);
export const Title = styled.h2(
    css({
        fontSize: [17, '2xl', 45],
        color: 'text.bold',
        fontWeight: 'bold',
    }),
    {
        marginBottom: 15,
        textAlign: 'center',
    }
);
export const Description = styled.p(
    css({
        fontSize: ['base', 'md'],
        color: 'text.regular',
        marginBottom: [null, null, 60],
        display: ['block'],
        fontWeight: 'regular',
        lineHeight: 'body',
        textAlign: ['left', 'left', 'center'],

        '@media (max-width: 990px)': {
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingRight: '15px',
        },
    })
);

export const ContentRow = styled.div(
    css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

        button: {
            padding: 0,

            ':before': {
                content: '""',
                width: 5,
                height: 5,
                display: 'block',
                borderRadius: '50%',
                backgroundColor: 'yellow.regular',
                marginRight: '7px',
            },
        },
    })
);

export const SearchWrapper = styled.div(
    css({
        display: 'flex',
        justifyContent: 'center',
    })
);

export const SliderNav = styled.button(
    css({
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.bold',
        backgroundColor: 'white',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
        outline: 0,
        padding: 0,
        border: 0,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        marginTop: '-15px',
        zIndex: 1,
        cursor: 'pointer',

        svg: {
            width: 18,
            maxHeight: 18,
        },

        '&.banner-slider-prev': {
            left: 20,
        },

        '&.banner-slider-next': {
            right: 20,
        },
    })
);
