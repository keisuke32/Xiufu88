import React, {useEffect, useState} from 'react';
import {AddAddressWrapper} from "./add-address.style";
import {ArrowLeft} from "../../assets/icons/ArrowLeft";
import {FormattedMessage} from "react-intl";
import {ArrowRight} from "../../assets/icons/ArrowRight";
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import MobileModal from "../modal/mobile-modal";
import {SelectRegionMobile} from "./select-region";
import Router from "next/router";
export const AddAddressMobile = ({onRequestClose, nextStep}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const [toggleCheck, setToggleCheck] = useState(false);

    const handleModal = () => {
        setModalOpen(false);
    }

    const handleToggle = () => {
        setToggleCheck(!toggleCheck);
    }

    const handleFinish = (e) => {
        Router.push('/productfilter?category=' + e);
    }

    return (
        <AddAddressWrapper>
            <MobileModal isOpen={modalOpen} isCloseButton={false} onRequestClose={handleModal} children={<SelectRegionMobile onRequestClose={handleModal} />}/>
            <div className="address_header">
                <div className="back_icon" onClick={onRequestClose}>
                    <ArrowLeft />
                </div>
                <div className="address_title">
                    <FormattedMessage id="mobile.cart.address.title" defaultMessage="我的收貨地址" />
                </div>
            </div>
            <div className="add_address_form">
                <div className="input_row">
                    <div className="input_title">
                        <FormattedMessage id="checkout.footer.buyer" defaultMessage="收貨人" />
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="收貨人" className="input"></input>
                    </div>
                    <div className="input_operation">
                    </div>
                </div>
                <div className="input_row">
                    <div className="input_title">
                        <FormattedMessage id="mobile.cart.address.add.phone" defaultMessage="手機號碼" />
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="手機號碼" className="input"></input>
                    </div>
                    <div className="input_operation">
                        <ArrowRight />
                    </div>
                </div>
                <div className="input_row">
                    <div className="input_title">
                        <FormattedMessage id="mobile.cart.address.add.province" defaultMessage="選擇地區" />
                    </div>
                    <div className="input_div">
                        廣東省
                    </div>
                    <div className="input_operation" onClick={() => setModalOpen(true)}>
                        <ArrowRight />
                    </div>
                </div>
                <div className="input_row">
                    <div className="input_title">
                        <FormattedMessage id="mobile.cart.address.add.address" defaultMessage="詳細地址" />
                    </div>
                    <div className="input_div">
                        <input type="text" placeholder="小區樓棟 / 鄉村名稱" className="input"></input>
                    </div>
                    <div className="input_operation">
                    </div>
                </div>
                <div className="option_row">
                    <div className="option_div">
                        <Toggle
                            checked={toggleCheck}
                            name='burritoIsReady'
                            value='yes'
                            className='custom-classname'
                            onChange={handleToggle}/>
                    </div>
                    <div className="option_content">
                        <FormattedMessage id="mobile.cart.address.set.default" defaultMessage="設爲默認" />
                    </div>
                </div>
                <button>
                    <FormattedMessage id="profileSaveBtn" defaultMessage="保存" />
                </button>
            </div>
        </AddAddressWrapper>
    );
};
