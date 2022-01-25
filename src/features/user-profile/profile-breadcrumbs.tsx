import React, { useContext } from 'react';

import {
    ProfileBreadCrumbsWrapper,
} from 'features/user-profile/user-profile.style';
import {FormattedMessage} from "react-intl";

type ProfileBreadcrumbsProps = {
    breadcrumbs?: string;
};

const ProfileBreadCrumbs: React.FC<ProfileBreadcrumbsProps> = ({ breadcrumbs }) => {

    if (breadcrumbs === "")
        return null;

    const breadcrumbsArray = breadcrumbs.split('_');

    return (
        <ProfileBreadCrumbsWrapper>
            {
                breadcrumbsArray.map((breadcrumb, idx) => (
                    breadcrumb !== "" ? <li key={idx}><FormattedMessage id={breadcrumb} /></li> : <li key={idx}></li>
                ))
            }
        </ProfileBreadCrumbsWrapper>
    );
};

export default ProfileBreadCrumbs;
