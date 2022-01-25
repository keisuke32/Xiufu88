import styled from "styled-components";
import {themeGet} from '@styled-system/theme-get';

export const ThemeSection = styled.div`
    display: grid;
    grid-template-columns: 20% minmax(0,1fr);
    grid-gap: 0;
    background: white;
    margin: 1rem 0;
    align-items: center;
    
    @media (max-width: 1280px) {
        grid-template-columns: 23% minmax(0,1fr);
    }
    
    @media (max-width: 1024px) {
        grid-template-columns: 25% minmax(0,1fr);
    }
`;
export const ThemeCountDownWrap = styled.div`
    min-height: 330px;
    display: flex;
    position: relative;
    img {
        width: 100%;
        // height: 100%;
        object-fit: cover;
    }
`;
export const ThemeCountDownText = styled.div`
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: ${themeGet('fontWeights.body', '400')};
    font-size: ${themeGet('fontSizes.xl2', '27')}px;
    color: ${themeGet('colors.white', '#ffffff')};
    width: 100%;
    text-align: center;
`;
export const ThemeCountDownTimeWrapper = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: ${themeGet('fontWeights.body', '400')};
    font-size: ${themeGet('fontSizes.4xl', '40')}px;
    color: ${themeGet('colors.white', '#ffffff')};
    text-align: center;
    display: flex;
    @media (max-width: 1280px) {
        bottom: 10%;
        font-size: ${themeGet('fontSizes.3xl', '36')}px;
    }
    @media (max-width: 1024px) {
        bottom: 15%;
        font-size: ${themeGet('fontSizes.2xl', '30')}px;
    }
`;

export const ThemeCountDownTime = styled.div`
    width: 80px;
    max-width: 33%;
    @media (max-width: 1280px) {
        width: 70px;
    }
    @media (max-width: 1024px) {
        width: 60px;
    }
    .countdown-time{
        border-radius: 13px;
        padding: 15px 10px;
        margin: 5px;
        background-color: ${themeGet('colors.black', '#000000')};
        @media (max-width: 1280px) {
            padding: 10px 5px;
        }
        @media (max-width: 1024px) {
            padding: 10px 5px;
       }
    }
    .countdown-time-text{
        font-size: ${themeGet('fontSizes.lg', '20')}px;
        @media (max-width: 1280px) {
            font-size: ${themeGet('fontSizes.lg', '20')}px;
        }
        @media (max-width: 1024px) {
            font-size: ${themeGet('fontSizes.placeholder', '16')}px;
        }
    }
`;

export const ThemeProductWrap = styled.div`
`;
