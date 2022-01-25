import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ServiceProviderSetting from "./service-provider-setting";
import ShippingTemplateSetting from "./shipping-template-setting";
import {ShippingSettingContainer} from "./shipping-setting.style";
import {FormattedMessage} from "react-intl";

const ShippingSetting: React.FC<{}> = () => {

    return (
        <ShippingSettingContainer>
            <Tabs>
                <TabList>
                    <Tab><FormattedMessage id="profile.shipping.service-provider-setting" defaultMessage="服務商設置" /></Tab>
                    <Tab><FormattedMessage id="profile.shipping.shipping-template-setting" defaultMessage="運費模板設置" /></Tab>
                </TabList>
                <TabPanel>
                    <ServiceProviderSetting />
                </TabPanel>
                <TabPanel>
                    <ShippingTemplateSetting />
                </TabPanel>
            </Tabs>
        </ShippingSettingContainer>
    );
};

export default ShippingSetting;
