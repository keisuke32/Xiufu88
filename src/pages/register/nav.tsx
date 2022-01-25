import React from 'react';
import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import {ArrowLeft} from "../../assets/icons/ArrowLeft";
import {FormattedMessage} from "react-intl";

const Nav = (props) => {
    const navs = [];
    const onClick = (id) => {
        console.log(props.value.step, id);
        if(props.value.step > id) {
            props.goToStep(id + 1);
        }
    }
    props.navs?.map((item, idx)=>{
        const isActive = props.currentStep === idx+1;
        navs.push((
            <div
                className={isActive?'active':''}
                key={`step-${idx+1}`}
                onClick={() => onClick(idx)}
            >
                <span className={'circle'}>{idx+1}</span>
                <span className={'step'}>{item}</span>
            </div>
        ));
    })
    return (
        <NavWrapper>{navs}</NavWrapper>
    );
};

export const NavMobile = (props) => {
    console.log(props.value);
    return (
        <BindMobileWrapper>
            <ArrowLeft width="20" height="20" />
            <div className="bind_text">
                {props.value.step == 1 && <FormattedMessage id="register.step1" defaultMessage="绑定手机号码"/> }
                {props.value.step == 2 && <FormattedMessage id="register.step2" defaultMessage="绑定手机号码"/> }
                {props.value.step == 3 && <FormattedMessage id="register.step3" defaultMessage="绑定手机号码"/> }
            </div>
        </BindMobileWrapper>
    )
}

const BindMobileWrapper = styled.div`
    display: flex;
    .bind_text {
        width: 100%;
        text-align: center;
        font-size: ${themeGet('fontSizes.rating', '18')}px;
        color: ${themeGet('colors.black', '#000000')};
        line-height: 1;
    }
`;

const NavWrapper = styled.div<any>`
    display: flex;
    text-align: center;
    font-size: ${themeGet('fontSizes.md', '19')}px;
    margin: 30px auto;
    color: black;
    border-bottom: 1px solid ${themeGet('colors.grey.700', '#E0E0E0')};
    justify-content: space-between;
    max-width: fit-content;
    
    div {
        color: black;
        cursor: pointer;
        font-size: ${themeGet('fontSizes.md', '19')}px;
        font-weight: ${themeGet('fontWeights.regular', 400)};
        line-height: 1;
        text-shadow: none;
        transition: opacity 1s ease,
            text-shadow 1s ease;
        will-change: opacity, text-shadow;
        padding: 12px 35px;
       
    }
    span.circle{
        font-weight: ${themeGet('fontWeights.bold', 700)};
        display: inline-block;
        border-radius: 50%;
        min-width: 36px;
        min-height: 36px;
        margin-right: 7px;
        background: ${themeGet('colors.gray.700', '#E0E0E0')};
        color: ${themeGet('colors.white', '#ffffff')};
        text-align: center;
        line-height: 1.8;
        box-sizing: content-box;
        white-space: nowrap;
    }
    span.step{
        @media screen and (max-width: 768px) {
            display: none;
        };
    }
    .active {
        color: ${themeGet('colors.white', '#ffffff')};
        background: ${themeGet('colors.pink.highlight', '#FC7171')};
        font-weight: ${themeGet('fontWeights.bold', 700)};
        span.circle{
          background: ${themeGet('colors.badge', '#CA180077')};
      
        }
    }


`;
export default Nav;
