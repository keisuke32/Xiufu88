import React, {useContext, useEffect} from 'react';
import Slider from "react-slick";
import { ProfileContext } from 'contexts/profile/profile.context';
import {ProductGrid} from 'components/product-grid/product-grid';
import DefaultAvatar from 'assets/images/user.jpg';
import nameInitials from 'name-initials';

import {
    ProfileContentWrapper,
    SectionHeader,
    SectionContent,
    SectionFooter,
    ProfileSummarySection,
    ShippingStatusSection,
    ProductItem,
    RecommendProductSection
} from 'features/user-profile/user-profile.style';
import {FormattedMessage} from "react-intl";
import {ShippingIcon} from "assets/icons/ShippingIcon";
import useOrders from "../../data/use-orders";
import {AuthContext} from "../../contexts/auth/auth.context";
import {useRouter} from "next/router";

type ProfileContentProps = {
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const ProfileContent: React.FC<ProfileContentProps> = ({ deviceType }) => {

    const {authState: {isAuthenticated, token}} = React.useContext<any>(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push(`/login?redirect_to=${router.asPath}`);
        }
    }, [isAuthenticated])

    // const {data: purchaseOrders, error, loading} = useOrders({token: token});
    // console.log('purchaseorders', purchaseOrders);
    const profileStatus = {
        pending: 0,
        delivered: 0,
        received: 7,
        evaluated: 3,
        refund: 0
    }

    const items = [
        {
            id: 1,
            image: "https://images.asos-media.com/products/asos-4505-muscle-training-long-sleeve-t-shirt-with-contrast-ombre-raglan/21180274-1-blackteal?$n_320w$&wid=317&fit=constrain",
            shipping_status: "由【龍門】發往【太原】"
        },
        {
            id: 2,
            image: "https://images.asos-media.com/products/asos-4505-muscle-training-long-sleeve-t-shirt-with-contrast-ombre-raglan/21180274-1-blackteal?$n_320w$&wid=317&fit=constrain",
            shipping_status: "由【龍門】發往【太原】"
        },
        {
            id: 3,
            image: "https://images.asos-media.com/products/asos-4505-muscle-training-long-sleeve-t-shirt-with-contrast-ombre-raglan/21180274-1-blackteal?$n_320w$&wid=317&fit=constrain",
            shipping_status: "由【龍門】發往【太原】"
        }
    ]

    const settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        rows: 3,
        slidesPerRow:1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const { state, dispatch } = useContext(ProfileContext);
    console.log(state);
    return (
        <ProfileContentWrapper>
            <ProfileSummarySection>
                <SectionHeader>
                    <div className="header-content">
                        <div className="profile-avatar">
                            {state?.photo ?
                                <img className="avatar" src={state.photo?state.photo.url:""} alt="streamer" />
                                :
                                <div className="avatar" style={{backgroundColor: state?.color?.background, color: state?.color?.text}}>{nameInitials(state?.name ?? "")}</div>
                            }
                        </div>
                        <span className="header-name">{state.name}</span>
                    </div>
                    <a className="header-tool">
                        <FormattedMessage id="profile.content.shipping-address" defaultMessage="Shipping Address" />
                    </a>
                </SectionHeader>
                <ul className="profile-status">
                    <li><FormattedMessage id="profile.content.pending" defaultMessage="Pending Payment" /> <span>{(profileStatus['pending'] != 0)&&profileStatus['pending']}</span></li>
                    <li><FormattedMessage id="profile.content.delivered" defaultMessage="Delivered" /> <span>{(profileStatus['delivered'] != 0)&&profileStatus['delivered']}</span></li>
                    <li><FormattedMessage id="profile.content.received" defaultMessage="Received" /> <span>{(profileStatus['received'] != 0)&&profileStatus['received']}</span></li>
                    <li><FormattedMessage id="profile.content.evaluated" defaultMessage="Evaluated" /> <span>{(profileStatus['evaluated'] != 0)&&profileStatus['evaluated']}</span></li>
                    <li><FormattedMessage id="profile.content.refund" defaultMessage="Refund" /> <span>{(profileStatus['refund'] != 0)&&profileStatus['refund']}</span></li>
                </ul>
            </ProfileSummarySection>
            <ShippingStatusSection>
                <SectionHeader>
                    <div className="header-content">
                        <ShippingIcon />
                        <span className="header-name"><FormattedMessage id="profile.content.my-products" defaultMessage="My Products" /></span>
                    </div>
                    <a className="header-tool">
                        <FormattedMessage id="profile.content.view-details" defaultMessage="View Details" />
                    </a>
                </SectionHeader>
                <SectionContent>
                {
                    items.map((item, idx) => (
                        <ProductItem key={idx}>
                            <div className="shipping-detail">
                                <div className="product-image">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="shipping-status">{item.shipping_status}</div>
                            </div>
                            <a className="check-invoice"><FormattedMessage id="profile.content.check-invoice" defaultMessage="Check Invoice" /></a>
                        </ProductItem>

                    ))
                }
                </SectionContent>
                <SectionFooter>
                    <a className="expand-more">
                        <FormattedMessage id="profile.content.expand-more" defaultMessage="More" />
                    </a>
                </SectionFooter>
            </ShippingStatusSection>
            <RecommendProductSection>
                <SectionHeader className="recommend-product-section-header">
                    <span><FormattedMessage id="profile.content.recommend-product" defaultMessage="Recommend Products" /></span>
                    <a className="header-tool-button"><FormattedMessage id="profile.content.reload" defaultMessage="Reload" /></a>
                </SectionHeader>
                <SectionContent className="recommend-product-section-content">
                    <ProductGrid setting={settings} fetchLimit={9} sellers={state.id} />
                </SectionContent>
            </RecommendProductSection>
        </ProfileContentWrapper>
    );
};

export default ProfileContent;
