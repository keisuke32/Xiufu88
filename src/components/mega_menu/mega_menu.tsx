import React, {useState, useEffect, useRef} from 'react';
import {MegaMenuWrapper} from './mega_menu.style';
import {FormattedMessage} from "react-intl";

import {CategoryToggleIcon} from "assets/icons/CategoryToggleIcon";
import {ArrowNext} from "assets/icons/ArrowNext";
import {SidebarLoader} from "../placeholder/placeholder";
import {useAppDispatch, useAppState} from "../../contexts/app/app.provider";
import Router from "next/router";
import testIcon from "assets/images/categoryIcons/Women Fashion.png";
type MegaMenuProps = {
    className?: string;
    direction?: 'LEFT' | 'RIGHT';
    data: any;
};

const MegaMenu: React.FC<MegaMenuProps> = (
    {
        className,
        direction,
        data,
    }) => {
    // MegaMenu State
    // Ref
    const ref = useRef();

    const toggle = useAppState('menuToggle');
    const setToggleState = useAppDispatch();

    // Add all classs to an array
    const addAllClasses: string[] = ['megamenu-wrapper'];

    // className prop checking
    if (className) {
        addAllClasses.push(className);
    }

    // Add direction class on megamenu content
    if (direction) {
        addAllClasses.push(direction);
    }

    // Toggle MegaMenu content
    const handleToggle = (e) => {
        e.stopPropagation();
        setToggleState({type: 'TOGGLE_MENU'});
    };
    const handleCategory = (e) => {
        Router.push('/productfilter?category=' + e);
    }
    return (
        <MegaMenuWrapper className={addAllClasses.join(' ')} ref={ref}>
            <div className="megamenu-handler" onClick={handleToggle}>
                <span>
                    <CategoryToggleIcon/>
                    <FormattedMessage id="topCategory" defaultMessage="Top Categories"/>
                </span>
            </div>
            {toggle && (
                <div className="megamenu-content">
                    {(data.length == 0) && (<SidebarLoader id="category_loader" uniqueKey="category_loader"/>)}
                    {
                        (data.length > 0) && (
                            <div>
                                <ul className="cate-menu">
                                    {
                                        data.map((item, idx) => (
                                            <li data-id={item.id} className="cate-menu-item" key={idx}>
                                                <img src={item?.icon?.url} alt={item?.icon?.id} />
                                                <span onClick={_ => handleCategory(item.slug)}>{item.name}</span>
                                                <ArrowNext width="16px"/>
                                                {
                                                    item.children && (
                                                        <div className="cate-hover-wrap dropdown-content">
                                                            <div className="cate-submenu" data-id={item.id} key={idx}>
                                                                <div className="cate-left">
                                                                    {
                                                                        item.children.map((item1, idx1) => (
                                                                            <div className="cate-sub-list clearfix"
                                                                                 data-id={item1.id} key={idx1}>
                                                                                <div className="cate-sub-title">
                                                                                    <a onClick={_ => handleCategory(item1.slug)}
                                                                                       >{item1.name}</a>
                                                                                </div>
                                                                                <div className="cate-sub-content">
                                                                                    {
                                                                                        (item1.children.length > 0) && (
                                                                                            item1.children.map((item2, idx2) => (
                                                                                                <div
                                                                                                    className="cate-sub-link"
                                                                                                    data-id={item2.id}
                                                                                                    key={idx2}>
                                                                                                    <a onClick={_ => handleCategory(item2.slug)}
                                                                                                       >{item2.name}</a>
                                                                                                </div>
                                                                                            ))
                                                                                        )
                                                                                    }
                                                                                    {
                                                                                        (item1.children.length == 0) && (
                                                                                            <div
                                                                                                className="cate-sub-link"
                                                                                                key={idx1}>
                                                                                                <a onClick={_ => handleCategory(item1.slug)}
                                                                                                   >{item1.name}</a>
                                                                                            </div>
                                                                                        )
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                                <div className="cate-right">
                                                                    <div className="cate-right-top">
                                                                        {
                                                                            ( item.children.length > 0 ) ? (
                                                                                item.children.map((item1, idx1) => (
                                                                                        (item1.image) ? (
                                                                                            (idx1 < 3) &&
                                                                                                <a onClick={_ => handleCategory(item1.slug)} key={idx1} className="cate-right-pic-small">
                                                                                                    <img alt={item1.name} width="167" height="134"
                                                                                                         src={item1.image?.thumbnail || item1.image?.url}/>
                                                                                                    <div className="cate-right-pic-small-text">{item1.name}</div>
                                                                                                </a>
                                                                            ) : (
                                                                                            (item1.children.length > 0) && (
                                                                                                item1.children.map((item2, idx2) => (
                                                                                                    (item2.image && idx1 < 3 && idx2 < 1) &&
                                                                                                    <a onClick={_ => handleCategory(item2.slug)} key={idx2} className="cate-right-pic-small">
                                                                                                        <img alt={item2.name} width="167" height="134"
                                                                                                             src={item2.image?.thumbnail || item2.image?.url}/>
                                                                                                        <div className="cate-right-pic-small-text">{item2.name}</div>

                                                                                                    </a>
                                                                                                ))
                                                                                            )

                                                                                        )
                                                                                    )
                                                                                )
                                                                            ) : (

                                                                                item.image && (
                                                                                    <a onClick={_ => handleCategory(item.slug)} className="cate-right-pic-small">
                                                                                        <img alt={item.name} width="167" height="134"
                                                                                             src={item.image?.thumbnail || item.image?.url}/>
                                                                                        <div className="cate-right-pic-small-text">{item.name}</div>

                                                                                    </a>
                                                                                )
                                                                            )

                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            )}
        </MegaMenuWrapper>
    );
};

export default MegaMenu;
