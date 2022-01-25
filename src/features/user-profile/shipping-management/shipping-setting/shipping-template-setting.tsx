import React, { useState, useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';

import {
    TabContainer,
    TabHeader,
    TabContent,
    FieldSet
} from "./shipping-setting.style";
import {FormattedMessage} from "react-intl";

const ShippingTemplateSetting: React.FC<{}> = () => {

    return (
        <TabContainer>
            <TabHeader>
                <FormattedMessage id="profile.shipping-management.shipping-template-setting.new-shipping-template" defaultMessage="新增運費模板" />
            </TabHeader>
            <TabContent>
                <FieldSet>
                    <label htmlFor="shipping-template-name"><FormattedMessage id="profile.shipping-management.shipping-template-setting.shipping-template-name" defaultMessage="模板名稱 :" /></label>
                    <div className="input-group">
                        <input type="text" id="shipping-template-name" />
                        <a href="#"><FormattedMessage id="profile.shipping-management.shipping-template-setting.shipping-calculator" defaultMessage="運費計算機" /></a>
                    </div>
                </FieldSet>
                <FieldSet>
                    <label htmlFor="shipping-template-name"><FormattedMessage id="profile.shipping-management.shipping-template-setting.shipping-template-name" defaultMessage="模板名稱 :" /></label>
                    <div className="input-group">
                        <select name="" id="">

                        </select>
                        <a href="#"><FormattedMessage id="profile.shipping-management.shipping-template-setting.shipping-calculator" defaultMessage="運費計算機" /></a>
                    </div>
                </FieldSet>
            </TabContent>
        </TabContainer>
    );
};

export default ShippingTemplateSetting;
