import React, {useEffect, useState} from 'react';
import {SelectRegionWrapper} from "./select-region.style";
import {ArrowLeft} from "../../assets/icons/ArrowLeft";
import {FormattedMessage} from "react-intl";
import {ArrowRight} from "../../assets/icons/ArrowRight";
import {CheckIcon} from "../../assets/icons/Check";
import {CheckMark} from "../../assets/icons/CheckMark";
import {CloseButton} from "../../components/product-details/product-mobile/product-mobile.style";
export const SelectRegionMobile = ({onRequestClose}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(false);
    }

    const [regionState, setRegionState] = useState(0);

    const handleState = (region) => {
        setRegionState(region);
    }

    return (
        <SelectRegionWrapper>
            <CloseButton>
                <button
                    type='button'
                    onClick={onRequestClose}
                >
                    &#x2715;
                </button>
            </CloseButton>
            <div className="region_header">
                <FormattedMessage id="mobile.cart.address.title" defaultMessage="我的收貨地址" />
            </div>
            <div className="selected_region">
                <div className="region">
                    <div className="region_icon">
                        <div className="selected">
                        </div>
                    </div>
                    <div className="region_name">
                        廣東省
                    </div>
                    <div className="region_operation">
                        <ArrowRight />
                    </div>
                </div>
                <div className="region">
                    <div className="region_icon">
                        <div>
                        </div>
                    </div>
                    <div className="region_name">
                        <FormattedMessage id="mobile.checkout.region.select.title" defaultMessage="請選擇城市" />
                    </div>
                    <div className="region_operation">
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div className="region_selection">
                <div className="selection_menu">
                    <div className={regionState==0?"mainland selected":'mainland'} onClick={()=>handleState(0)}>
                        <FormattedMessage id="mobile.checkout.region.select.mainland" defaultMessage="中國大陸" />
                    </div>
                    <div className={regionState==1?"abroad selected":'abroad'} onClick={()=>handleState(1)}>
                        <FormattedMessage id="mobile.checkout.region.select.abroad" defaultMessage="海外國家 / 地區" />
                    </div>
                </div>
                {
                    regionState==0 ?
                        <div className="region_div">
                            <div className="popular_cities">
                                <div className="popular_title">
                                    熱門城市
                                </div>
                                <div className="cities_content">
                                    <span>北京</span>
                                    <span>上海</span>
                                    <span>廣州</span>
                                    <span>深圳</span>
                                    <span>杭州</span>
                                </div>
                            </div>
                            <div className="all_region">
                                <div className="all_region_title">
                                    <FormattedMessage id="mobile.checkout.region.select.all.title" defaultMessage="海外國家 / 地區" />
                                </div>
                                <div className="all_region_content">
                                    <div className="region_content">
                                        <div className="region_alphabet">
                                            A
                                        </div>
                                        <div className="region_name">
                                            安徽省
                                        </div>
                                    </div>
                                    <div className="region_content">
                                        <div className="region_alphabet">
                                            B
                                        </div>
                                        <div className="region_name">
                                            北京
                                        </div>
                                    </div>
                                    <div className="region_content">
                                        <div className="region_alphabet">
                                            C
                                        </div>
                                        <div className="region_name">
                                            重慶
                                        </div>
                                    </div>
                                    <div className="region_content">
                                        <div className="region_alphabet">
                                            F
                                        </div>
                                        <div className="region_name">
                                            福建省
                                        </div>
                                    </div>
                                    <div className="region_content">
                                        <div className="region_alphabet">
                                            G
                                        </div>
                                        <div className="region_name">
                                            甘肅省
                                        </div>
                                    </div>
                                    <div className="region_content selected">
                                        <div className="region_alphabet">
                                        </div>
                                        <div className="region_name">
                                            廣東省
                                        </div>
                                        <div className="region_operation">
                                            <CheckMark width="12px" height="12px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="region_div">overseas abroad</div>

                }
            </div>
        </SelectRegionWrapper>
    );
};