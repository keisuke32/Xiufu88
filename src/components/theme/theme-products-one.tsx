import React, {useEffect, useState} from 'react';
import {FormattedMessage} from "react-intl";
import {ProductThemeGrid} from "../product-grid/product-theme-grid";
import {
    ThemeCountDownText,
    ThemeCountDownWrap,
    ThemeSection,
    ThemeCountDownTimeWrapper,
    ThemeCountDownTime, ThemeProductWrap
} from "./theme-products-one.style";

type ThemeProductsOneProps = {
    banner: any;
    count: number;
}

export const ThemeProductsOne:React.FC<ThemeProductsOneProps> = ({banner, count}) => {

    const [countDown, setCountDown] = useState(count);
    const [interval, setCountInterval] = useState(0);

    useEffect(() => {
        if (interval == 0 && countDown > 0) {
            const intvalId = window.setInterval(() => {
                setCountDown(countDown => countDown - 1);
            }, 1000);
            setCountInterval(intvalId);
        }
    }, []);

    useEffect(() => {
        if (countDown <= 0) {
            clearInterval(interval);
            setCountInterval(0);
        }
    }, [countDown]);

    return (
        <ThemeSection>
            <ThemeCountDownWrap>
                <img src={banner?.assets[0]?.image} alt={banner?.identifier}/>
                <ThemeCountDownText><FormattedMessage id="section-title.theme-text"/></ThemeCountDownText>
                <ThemeCountDownTimeWrapper>
                    <ThemeCountDownTime>
                        <div className="countdown-time">{Math.floor(countDown / 3600)}</div>
                        <div className="countdown-time-text">小時</div>
                    </ThemeCountDownTime>
                    <ThemeCountDownTime>
                        <div className="countdown-time">{Math.floor((countDown % 3600) / 60)}</div>
                        <div className="countdown-time-text">分</div>
                    </ThemeCountDownTime>
                    <ThemeCountDownTime>
                        <div className="countdown-time">{countDown % 60}</div>
                        <div className="countdown-time-text">秒</div>
                    </ThemeCountDownTime>
                </ThemeCountDownTimeWrapper>
            </ThemeCountDownWrap>
            <ThemeProductWrap>
                <ProductThemeGrid/>
            </ThemeProductWrap>
        </ThemeSection>
    )
}
