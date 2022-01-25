import React, {useEffect, useState} from 'react';
import {SEO} from "../components/seo";
import BuyerDashboardMobile from "../components/buyer-dashboard/buyer-dashboard-mobile";

export default function BuyerDashboard({deviceType}) {
    return (
        <>
            <SEO title="Checkout - JiTeng" description="Checkout Details"/>
            {
                deviceType.desktop ?
                    <div>
                        sadfsdf
                    </div>
                    :
                    <div>
                        <BuyerDashboardMobile />
                    </div>
            }
        </>
    )
}