import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderNav } from './banner.style';
import styled from 'styled-components';

interface Props {
    data: any;
}

SwiperCore.use([Navigation, Pagination]);
const BannerWrap = styled.div`
    height: 100%;
    
    .swiper-container{
        height: 100%;
    }
    
    .swiper-slide {
        height: auto;
    }
    .swiper-pagination {
        .swiper-pagination-bullet {
            background: white;
            opacity: 0.5;
            transition: all 0.3s;
            
            &:hover, &.swiper-pagination-bullet-active {
                opacity: 1;
            }
        }
    }
`;
const ImageWrapper = styled.div({
    position: 'relative',
    height: '100%',

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    '@media (max-width: 575px)': {
        img: {
            objectPosition: 'left',
            objectFit: 'cover',
        },
    },
});

const Banner = ({ data }: Props) => {
    return (
        <BannerWrap>
            <Swiper
                id='banner'
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true
                }}
            >
                {data?.assets?.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <ImageWrapper>
                            <img src={item.image} alt={data?.identifier} />
                        </ImageWrapper>
                    </SwiperSlide>
                ))}
                <SliderNav className='swiper-button-prev'>
                </SliderNav>
                <SliderNav className='swiper-button-next'>
                </SliderNav>
            </Swiper>
        </BannerWrap>
    );
};
export default Banner;
