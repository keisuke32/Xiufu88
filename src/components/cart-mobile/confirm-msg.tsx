import React, {useEffect, useState} from 'react';
import {ConfirmMsgWrapper} from "./confirm-msg.style";
import {FormattedMessage} from "react-intl";

export const ConfirmMsg = ({confirmDelete}) => {
    return (
        <ConfirmMsgWrapper>
            <div className="message_wrapper">
                <div className="message_content">
                    確認將這1個商品刪除？
                </div>
                <div className="operation_button">
                    <div className="operation_cancel">
                        <span onClick={(e) => confirmDelete(0)}>
                            <FormattedMessage id="nav.cancel" defaultMessage="取消" />
                        </span>
                    </div>
                    <div className="operation_delete">
                        <span onClick={(e) =>confirmDelete(1)}>
                            <FormattedMessage id="mobile.cart.address.delete" defaultMessage="刪除" />
                        </span>
                    </div>
                </div>
            </div>
        </ConfirmMsgWrapper>
    );
};
