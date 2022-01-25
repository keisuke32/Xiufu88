import React, { useState, useEffect } from 'react';

import ShippingSetting from "./shipping-setting/shipping-setting";
import {ShippingManagementContainer} from "./shipping-management.style";

type ShippingManagementProps = {
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};
const ShippingManagement: React.FC<ShippingManagementProps> = ({ deviceType }) => {

    return (
        <ShippingManagementContainer>
            <ShippingSetting />
        </ShippingManagementContainer>
    );
};

export default ShippingManagement;
