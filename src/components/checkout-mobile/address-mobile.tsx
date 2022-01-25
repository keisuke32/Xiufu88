import React, {useEffect, useState} from 'react';
import {AddressMobileWrapper, AddressOperation, MyShippingAddress} from "./address-mobile.style";
import {ArrowLeft} from "../../assets/icons/ArrowLeft";
import {FormattedMessage} from "react-intl";
import {LocationIcon} from "../../assets/icons/LocationIcon";
import {ArrowRight} from "../../assets/icons/ArrowRight";
import {DeliveryAddressWrapper} from "./checkout-mobile.style";
import {CheckIcon} from "../../assets/icons/Check";
import {EditButtonIcon} from "../../assets/icons/EditButtonIcon";
import {PaymentMethodSelection} from "./payment-method-selection";
import MobileModal from "../modal/mobile-modal";
import {AddAddressMobile} from "./add-address";
export const AddressMobile = ({onRequestClose, nextStep}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(false);
    }

    return (
        <AddressMobileWrapper>
            <MobileModal isOpen={modalOpen} isCloseButton={false} onRequestClose={handleModal} children={<AddAddressMobile onRequestClose={handleModal} nextStep={nextStep} />}/>
            <div className="address_header">
                <div className="back_icon" onClick={onRequestClose}>
                    <ArrowLeft />
                </div>
                <div className="address_title">
                    <FormattedMessage id="mobile.cart.address.title" defaultMessage="我的收貨地址" />
                </div>
            </div>
            <MyShippingAddress>
                <div className="address_header">
                    鈡凱明&nbsp;<span>38974772</span>
                </div>
                <div className="address_description">
                    <div className="icon_div">
                        <div className="location_icon">
                            <LocationIcon color="white" width="30px" height="30px" />
                        </div>
                    </div>
                    <div className="address_detail">
                        <span>默認</span>&nbsp;
                        广东省，广州市，白云区，钟落潭镇，大纲领中纲路自编668号，海景大樓，15樓，3室
                    </div>
                    <div className="see_detail">
                        <EditButtonIcon></EditButtonIcon>
                    </div>
                </div>
            </MyShippingAddress>
            <AddressOperation>
                <div className="default_icon">
                    <span>
                        <CheckIcon width="12px" height="12px"/>
                    </span>
                </div>
                <div className="default_content">
                    <FormattedMessage id="mobile.cart.address.default" defaultMessage="默認地址" />
                </div>
                <div className="default_edit">
                    <FormattedMessage id="mobile.cart.address.delete" defaultMessage="刪除" />
                </div>
            </AddressOperation>
            <MyShippingAddress>
                <div className="address_header">
                    唐文華&nbsp;<span>55845123</span>
                </div>
                <div className="address_description">
                    <div className="icon_div">
                        <div className="location_icon">
                            <LocationIcon color="white" width="30px" height="30px" />
                        </div>
                    </div>
                    <div className="address_detail">
                        上海市，虹口区，四川路，333号，琴屿大厦，4樓，8室
                    </div>
                    <div className="see_detail">
                        <EditButtonIcon></EditButtonIcon>
                    </div>
                </div>
            </MyShippingAddress>
            <AddressOperation>
                <div className="default_icon">
                </div>
                <div className="default_content">
                    <FormattedMessage id="mobile.cart.address.set.default" defaultMessage="設爲默認" />
                </div>
                <div className="default_edit">
                    <FormattedMessage id="mobile.cart.address.delete" defaultMessage="刪除" />
                </div>
            </AddressOperation>
            <button onClick={() => setModalOpen(true)}>
                + <FormattedMessage id="mobile.cart.address.add" defaultMessage="添加收貨地址" />
            </button>
        </AddressMobileWrapper>
    );
};
