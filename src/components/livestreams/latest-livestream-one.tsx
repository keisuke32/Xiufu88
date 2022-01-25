import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {FormattedMessage} from "react-intl";

const Card = styled.div({
    position: 'relative',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 6,
    border: '1px solid #f3f3f3',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s ease-in-out',
    cursor: 'pointer',

    '.view-print': {
        position: 'absolute',
        display: 'flex',
        top: '20px',
        left: '20px',
        borderRadius: '5px',
        background: 'transparent',
        zIndex: 1,
        transition: 'all 0.3s',
        overflow: 'hidden',
        color: 'white',
        '.livestream-type': {
            padding: '5px 10px',
        },

        '.live-video': {
            backgroundColor: themeGet('colors.primary.regular')
        },
        '.finished-video': {
            backgroundColor: themeGet('colors.green.regular')
        },
        '.livestream-views': {
            background: '#00000088',
            padding: '5px 10px',
            '.view-count': {

            }
        }
    },

    '.overlay': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        opacity: 0.2,
        transition: 'all 0.3s'
    },
    '.live-stream-details': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        opacity: 1,
        transition: 'all 0.3s',
        overflow: 'hidden',

        '.details': {
            position: 'absolute',
            width: '100%',
            bottom: 0,
            padding: '2rem 1rem',
            color: 'white',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            transform: 'translate(0, 1rem)',
            transition: 'all 0.3s',
            backgroundColor: 'transparent',
            backgroundImage: 'linear-gradient(transparent, rgba(0,0,0,0.7))',

            '.streamer-image': {
                width: '3rem',
                height: '3rem',
                overflow: 'hidden',
                display: 'flex',
                borderRadius: '50%',
                marginRight: '0.2rem',

                'img': {
                    objectFit: 'cover',
                },

                '.streamer-image-color': {
                    width: '100%',
                    height: '100%',
                    display: 'block',
                }
            },

            '.stream-content': {
                width: 'calc(100% - 3.2rem)',
            },

            '.product-count': {
                paddingBottom: '0.2rem',
                borderBottomColor: 'white'
            },
            '.title': {
                paddingTop: '0.2rem',
                overflow: 'hidden',
                textOverflow: 'ellipse',
                whiteSpace: 'nowrap',
            }
        }
    },

    ':hover': {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',

        '.overlay': {
            opacity: 0.5,
        },

        '.live-stream-details': {
            opacity: 1,
        },

        '.details': {
            transform: 'translate(0, 0)',
        },

    },
});
const ImageWrapper = styled.div({
    height: 220,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    overflow: 'hidden',
});

const Image = styled.img({
    width: '100%',
    height: '100%',
    // height: 'fit-content',
    objectFit: 'cover',
});
interface Props {
    data: any;
}

export const LatestLivestreamCard = ({data}: Props) => {
    const {preview, slug, productDurations, title, views, streamer, channel } = data;

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return (
        <Link href='/shoplive/[slug]' as={`/shoplive/${slug}`}>
            <Card>
                <div className="view-print">
                    {
                        (channel.status != 'Finished') ? (
                            <span className="livestream-type live-video"><FormattedMessage id="livestream.livestream" defaultMessage="直播" /></span>
                        ) : (
                            <span className="livestream-type finished-video"><FormattedMessage id="livestream.video" defaultMessage="視頻" /></span>
                        )
                    }
                    <span className="livestream-views">
                        <span className="view-count">{views}</span>
                    </span>
                </div>
                <ImageWrapper>
                    <Image src={preview[0]?.thumbnail || preview[0]?.url || ""} alt={data.id}/>
                </ImageWrapper>
                <div className="overlay">
                </div>
                <div className="live-stream-details">
                    <div className="details">
                        <div className="streamer-image">
                            {
                                streamer.photo ? (
                                    <img src={streamer.photo.url} alt=""/>
                                    ) : (
                                        <span className="streamer-image-color" style={{backgroundColor: getRandomColor()}}></span>
                                )
                            }
                        </div>
                        <div className="stream-content">
                            <div className="product-count">
                                <span><FormattedMessage id="home.livestream.product-count" defaultMessage="件商品" /></span>
                            </div>
                            <div className="title">
                                {title}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
};
