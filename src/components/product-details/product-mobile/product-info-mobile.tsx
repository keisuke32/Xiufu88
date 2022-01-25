import React, {useEffect, useState} from 'react';
import {
    CloseButton,
    ProductInfoMobileWrapper
} from "./product-mobile.style";
import {FormattedMessage} from "react-intl";

export const ProductInfoMobile = ({onRequestClose, product}) => {
    return (
        <ProductInfoMobileWrapper>
            <CloseButton>
                <button
                    type='button'
                    onClick={onRequestClose}
                >
                    &#x2715;
                </button>
            </CloseButton>
            <div className="info_header">
                <FormattedMessage id="mobile.product.info.title" defaultMessage="产品资料"/>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.brand" defaultMessage="产品资料"/></span>
                <span>SK-II</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.product" defaultMessage="产品资料"/></span>
                <span>護膚 精華</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.origin" defaultMessage="产品资料"/></span>
                <span>日本</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.color" defaultMessage="产品资料"/></span>
                <span>面部护肤套装神仙水普通类</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.approval.number" defaultMessage="产品资料"/></span>
                <span>国妆备进字J20098127</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.effect" defaultMessage="产品资料"/></span>
                <span>补水</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.special.cosmetic" defaultMessage="产品资料"/></span>
                <span>正常规格</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.spec.type" defaultMessage="产品资料"/></span>
                <span>否</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.category" defaultMessage="产品资料"/></span>
                <span>普通类</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.deadline" defaultMessage="产品资料"/></span>
                <span>2022-07-01至2023-05-07</span>
            </div>
            <div className="info_item">
                <span><FormattedMessage id="mobile.product.info.profile" defaultMessage="产品资料"/></span>
                <span>内容#1</span>
            </div>
            <div className="button_group">
                <button>
                    <FormattedMessage id="login.complete_btn" defaultMessage="完成" />
                </button>
            </div>
        </ProductInfoMobileWrapper>
    );
};