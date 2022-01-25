import React, {useEffect, useState} from 'react';
import {NewsLetterContent, NewsLetterWrapper} from './newsletter.style';
import NewsLetterBack from '../../assets/images/home/newsletter_back.png';
import NewsLetterImage from '../../assets/images/home/newsletter.png';

export const NewsLetter = ({banner}) => {
    return (
        <NewsLetterWrapper image={NewsLetterBack}>
            <NewsLetterContent image={banner}>
                <input type="text"/>
            </NewsLetterContent>
        </NewsLetterWrapper>
    );
};
