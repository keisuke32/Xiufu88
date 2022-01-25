import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {Modal} from '@redq/reuse-modal';
import {useRouter} from 'next/router';
import {SEO} from "../../components/seo";
import HelpCenterWrapper, {
    HelpCenterContent,
    HelpCenterContentCategory, HelpCenterContentWrapper, HelpCenterDetailContentWrapper,
    HelpCenterMenu
} from "../../assets/styles/helpcenter.style";
import {FormattedMessage} from "react-intl";
import {ChevronDown, ChevronRight} from "../../assets/icons/ChevronUp";
import SearchHelpCenter from 'features/search/search-helpcenter';
import {ArrowNext} from "../../assets/icons/ArrowNext";
import {ArrowRight} from "../../assets/icons/ArrowRight";
import favourite from "../../assets/images/favourite.png"
import {getTermsAndConditions} from "../../data/use-terms";
import {useLocale} from "../../contexts/location/location.provider";

interface Props {
    data: any;
    deviceType: any;
}

const HelpCenterPage = ({data, deviceType}: Props) => {

    const [menuID, SetMenuID] = useState('');
    const [subMenuID, SetSubMenuID] = useState(0);
    const [htmlSrc, setHtmlSrc] = useState('');
    const router = useRouter();
    const slug = router.query.slug;
    const {locale} = useLocale();
    const {terms, loading, error} = getTermsAndConditions({language: locale.toUpperCase()});

    const selectedItem = terms?.find(item => item.englishTitle == slug);

    useEffect( () => {
        if(selectedItem){
            SetMenuID(selectedItem.id);
            console.log(selectedItem.id);
            setHtmlSrc(`https://api.xiufu88.com${selectedItem.prefix}${selectedItem.html}`);
        }
    }, [selectedItem]);

    const querySelect = (id) => {
        const selectedItem = terms?.find(item => item.id == id);
        if(selectedItem) {
            router.push('/helpcenter/[slug]', `/helpcenter/${selectedItem.englishTitle}`, {shallow: true});
        }
    }
    if (router.isFallback) return <p>Loading...</p>;
    return (
        <Modal>
            <SEO title="Terms & Conditions - JiTeng" description="JiTeng Help Center"/>
            <HelpCenterWrapper>
                <HelpCenterMenu>
                    <ul>
                        <li><FormattedMessage id='helpcenter.menu' defaultMessage="帮助菜单"/></li>
                    </ul>
                </HelpCenterMenu>
                <HelpCenterContent>
                    <HelpCenterContentCategory>
                        <ul>
                            {terms?.map((item, index) => (
                                <li className={menuID == item.id ? "active" : ""} key={index}
                                    onClick={() => querySelect(item.id)}>
                                    <a>
                                        {item.title}
                                    </a>
                                    {
                                        menuID == item.id ? <ChevronDown width="12px" height="12px"/> : <ArrowRight/>
                                    }
                                    {item?.child && menuID == item.id &&
                                    <ul>
                                        {item?.child.map((item_child, index_child) => (
                                            <li className={subMenuID == item_child.id ? "active" : ""} key={index_child}
                                                onClick={() => SetSubMenuID(item_child.id)}>
                                                <a>
                                                    {item_child.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    }
                                </li>
                            ))}
                        </ul>
                    </HelpCenterContentCategory>
                    {menuID == '' ?
                        (<HelpCenterContentWrapper>
                            <div className="content_hero">
                                <SearchHelpCenter minimal={false}/>
                            </div>
                            <div className="content">
                                <div className="content_header">
                                    <img src={favourite} alt=""/>&nbsp;
                                    熱門問題
                                </div>
                                <div className="content_content">
                                    <ul>
                                        <li><a>吉腾2021年春节发货时间及交易流程调整公告</a></li>
                                        <li><a>2021年货节【吉腾购物津贴规则】</a></li>
                                        <li><a>2021年货节【分享赚钱排行榜活动】活动规则</a></li>
                                        <li><a>2021年货节【新人活动规则】（红包&2.99元会场）</a></li>
                                    </ul>
                                </div>
                            </div>
                        </HelpCenterContentWrapper>) :
                        (<HelpCenterDetailContentWrapper>
                            <div className="search-form">
                                <SearchHelpCenter minimal={false}/>
                                热门搜索: 入驻 退货保障卡 积分 品牌特卖 延迟发货 违背承诺
                            </div>
                            <div className="detail-header">
                                吉腾政策 <ArrowRight/> 责任范围
                            </div>
                            <div className="detail-content">
                                <iframe scrolling="yes"
                                    src={htmlSrc}/>
                            </div>
                        </HelpCenterDetailContentWrapper>)
                    }
                </HelpCenterContent>
            </HelpCenterWrapper>
        </Modal>
    );
};
export default HelpCenterPage;
