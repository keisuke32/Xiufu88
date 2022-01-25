import React, {useContext, useState} from 'react';
import MainMenu from "./main-menu";
import MegaMenu from "components/mega_menu/mega_menu";
import Follow from "./follow";

import {
    BottombarWrapper,
    TopCategoryWrapper,
    MainMenuWrapper,
    FollowWrapper
} from "./bottombar.style";

const Bottombar: React.FC<{categoryData}> = ({categoryData}) => {

    return (
        <BottombarWrapper>
            <div className="container container-flex">
                <TopCategoryWrapper>
                    <MegaMenu
                        direction={"LEFT"}  // optional, defaults to "RIGHT", takes in "RIGHT" || "LEFT"
                        data={categoryData}        // array of data to be rendered
                    />
                </TopCategoryWrapper>
                <MainMenuWrapper>
                    <MainMenu />
                </MainMenuWrapper>
                <FollowWrapper>
                    <Follow />
                </FollowWrapper>
            </div>
        </BottombarWrapper>
    );
};

export default Bottombar;
