import React from 'react';
import { AuthContext } from 'contexts/auth/auth.context';
import TopFooterWrapper from './top-footer.style';
import { ServiceItem } from "./top-footer.style";

import {FOOTER_SERVICE_ITEMS} from "../../../site-settings/site-navigation";

type Props = {
    className?: string;
};

const TopFooter: React.FC<Props> = ({ className }) => {
    return (
        <TopFooterWrapper className={className} id="layout-header">
            {FOOTER_SERVICE_ITEMS.map((item, idx) => (
                <ServiceItem key={idx}>
                    <img src={item.image}/>
                    <div className="service_text">
                        <div className="service_name">
                            <h5>{item.title}</h5>
                        </div>
                        <div className="service_detail">{item.text}</div>
                    </div>
                </ServiceItem>
            ))}
        </TopFooterWrapper>
    );
};

export default TopFooter;
