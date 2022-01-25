import React, {useEffect, useState} from 'react';
import {Modal} from "@redq/reuse-modal";
import styled from "styled-components";
import css from '@styled-system/css';
import {themeGet} from '@styled-system/theme-get';

import {ModalProvider} from "contexts/modal/modal.provider";
import {ProductGrid} from "components/product-grid/product-grid-two";
import {BestSellerGrid} from "components/product-grid/best-seller-grid";
import {ProductGridThree} from "components/product-grid/product-grid-three";
import {FormattedMessage} from "react-intl";
import dynamic from "next/dynamic";
import {ChevronDown, ChevronUp, ChevronLeft, ChevronRight} from "../assets/icons/ChevronUp";
import useFilters, {useFiltersKeyword} from "../data/use-filter";
import {Button} from "../components/button/button";
import {useAppState} from "../contexts/app/app.provider";
import {useProductCategoryBySlug} from "../data/use-category";
import {useRouter} from "next/router";
import {TiledView} from "../assets/icons/TiledView";
import {NaviIcon} from "../assets/icons/NaviIcon";
import {ToTop} from "../assets/icons/ToTop";
import {ProductList} from "components/product-list/product-list";
import {ProductListPagination} from "components/product-list/product-list-pagination";
import ReactPaginate from 'react-paginate';
import {CURRENCY} from "../utils/constant";
import {SEO} from "../components/seo";

const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
    ssr: false,
});

export default function ProductFilterPage({deviceType}) {

    const [filterCollapse, setFilterCollapse] = useState(false);
    const [selectedAttrs, setSelectedAttrs] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [viewMode, setViewMode] = useState(1);
    const fetchLimit = 20;

    const router = useRouter();
    const {pathname, query} = router;
    console.log(query);
    const {data: productCategoryBySlug, loading: productCategoryBySlugLoading, error: productCategoryBySlugErr} = useProductCategoryBySlug(query?.category ?? "");

    const searchTerm = useAppState('searchTerm');
    const {filterVariations, filterCategories, error, loading, mutate} = useFiltersKeyword(searchTerm ?? "" + " " + query?.category ?? "");
    const handleFilterCollapse = () => {
        setFilterCollapse(!filterCollapse);
    }

    const [productViewType, SetProductViewType] = useState(0);

    const bestSellerProducts = [
        {id: 1, title: "床垫"},
        {id: 2, title: "书包 "},
        {id: 3, title: "女外套"},
        {id: 4, title: "鱼缸"},
        {id: 5, title: "拖鞋"},
        {id: 6, title: "安踏"},
        {id: 7, title: "男裤"},
        {id: 8, title: "运动鞋"},
        {id: 9, title: "零食"},
        {id: 10, title: "优衣库"},
    ];

    const gotoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const attrInSelectedAttrs = (attr) => {
        return selectedAttrs.find(selectedAttr => attr.name == selectedAttr.name && attr.value == selectedAttr.value);
    }

    const goToCategory = (category) => {
        router.push({
            query: {category: category, text: query.text},
        });
    }
    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    const nextPage = () => {
        if (page < total) {
            setPage(page + 1);
        }
    }

    const handlePageClick = ({selected: selectedPage}) => {
        console.log(selectedPage);
        setPage(selectedPage + 1);
    }

    const handleTotal = (totalCount) => {
        if(totalCount && totalCount > 0) {
            setTotal(Math.ceil(totalCount / fetchLimit) );
        }
    }

    const handleViewMode = (mode) => {
        setViewMode(mode);
    }

    const deliveredPlaces_1 = [
        {id: 1, title: "北京"},
        {id: 2, title: "上海 "},
        {id: 3, title: "广州"},
        {id: 4, title: "海外"},
        {id: 5, title: "拖鞋"},
        {id: 6, title: "安踏"},
        {id: 7, title: "男裤"},
        {id: 8, title: "运动鞋"},
        {id: 9, title: "零食"},
        {id: 10, title: "优衣库"},
        {id: 11, title: "零食"},
        {id: 12, title: "优衣库"},
    ];

    const deliveredPlaces_2 = [
        {id: 1, title: "北京"},
        {id: 2, title: "上海 "},
        {id: 3, title: "广州"},
        {id: 4, title: "海外"},
        {id: 5, title: "拖鞋"},
        {id: 6, title: "安踏"},
        {id: 7, title: "男裤"},
        {id: 8, title: "运动鞋"},
        {id: 9, title: "零食"},
        {id: 10, title: "优衣库"},
        {id: 11, title: "北京"},
        {id: 12, title: "上海 "},
        {id: 13, title: "广州"},
        {id: 14, title: "海外"},
        {id: 15, title: "拖鞋"},
        {id: 16, title: "安踏"},
        {id: 17, title: "男裤"},
        {id: 18, title: "运动鞋"},
        {id: 19, title: "零食"},
        {id: 20, title: "优衣库"},
        {id: 21, title: "北京"},
        {id: 22, title: "上海 "},
        {id: 23, title: "广州"},
        {id: 24, title: "海外"},
        {id: 25, title: "拖鞋"},
        {id: 26, title: "安踏"},
        {id: 27, title: "男裤"},
        {id: 28, title: "运动鞋"},
        {id: 29, title: "零食"},
        {id: 30, title: "优衣库"},
        {id: 31, title: "优衣库"},
    ];

    const deliveredPlaces_3 = [
        {id: 1, title: "北京"},
        {id: 2, title: "上海 "},
        {id: 3, title: "广州"},
        {id: 4, title: "海外"},
        {id: 5, title: "拖鞋"},
        {id: 6, title: "安踏"},
        {id: 7, title: "男裤"},
        {id: 8, title: "运动鞋"},
        {id: 9, title: "零食"},
        {id: 10, title: "优衣库"},
        {id: 11, title: "北京"},
        {id: 12, title: "上海 "},
        {id: 13, title: "广州"},
        {id: 14, title: "海外"},
        {id: 15, title: "拖鞋"},
        {id: 16, title: "安踏"},
        {id: 17, title: "男裤"},
        {id: 18, title: "运动鞋"},
        {id: 19, title: "零食"},
        {id: 20, title: "优衣库"},
        {id: 21, title: "北京"},
        {id: 22, title: "上海 "},
        {id: 23, title: "广州"},
        {id: 24, title: "海外"},
        {id: 25, title: "拖鞋"},
        {id: 26, title: "安踏"},
        {id: 27, title: "男裤"},
        {id: 28, title: "运动鞋"},
        {id: 29, title: "零食"},
        {id: 30, title: "优衣库"},
        {id: 31, title: "优衣库"},
    ];

    // const checkFreeShippingState = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     let status = true;
    //     return status;
    // }

    return (
        <>
            <SEO title="Product Filter - JiTeng" description="JiTeng Product Filter"/>
            <ModalProvider>
            <Modal>
                <Container>
                    <div className="container">
                        <PageContent>
                            <MainSection>
                                <FilterSection>
                                    <FixedSidebar>
                                        <div>用户反馈</div>
                                        <div>搜索帮助</div>
                                        <div>浏览历史</div>
                                        <div><a onClick={gotoTop} href="#"><ToTop/>&nbsp;顶部</a></div>
                                    </FixedSidebar>
                                    <FilterSectionTab>
                                        <ul>
                                            <li className='active'>
                                                <a><FormattedMessage id="filter.products" defaultMessage="现场产品"/></a>
                                            </li>
                                            <li>
                                                <a><FormattedMessage id="filter.shopping" defaultMessage="现场购物"/></a>
                                            </li>
                                        </ul>
                                    </FilterSectionTab>
                                    <FilterSectionBreadCrumb>
                                        <ul className="filter-breadcrumb">
                                            <li><a href="#" onClick={() => goToCategory("")}><FormattedMessage
                                                id="filter.allCategory" defaultMessage="All"/></a></li>
                                            {
                                                productCategoryBySlug?.level == 3 &&
                                                (<>
                                                    <li><a
                                                        href="#"
                                                        onClick={() => goToCategory(productCategoryBySlug.parents[0].slug)}>{productCategoryBySlug.parents[0].name}</a>
                                                    </li>
                                                    <li><a
                                                        href="#"
                                                        onClick={() => goToCategory(productCategoryBySlug.parent.slug)}>{productCategoryBySlug.parent.name}</a>
                                                    </li>
                                                    <li><a
                                                        href="#"
                                                        onClick={() => goToCategory(productCategoryBySlug.slug)}>{productCategoryBySlug.name}</a>
                                                    </li>
                                                </>)
                                            }
                                            {
                                                productCategoryBySlug?.level == 2 &&
                                                (<>
                                                    <li><a
                                                        href="#"
                                                        onClick={() => goToCategory(productCategoryBySlug.parent.slug)}>{productCategoryBySlug.parent.name}</a>
                                                    </li>
                                                    <li><a
                                                        href="#"
                                                        onClick={() => goToCategory(productCategoryBySlug.slug)}>{productCategoryBySlug.name}</a>
                                                    </li>
                                                </>)
                                            }
                                            {
                                                productCategoryBySlug?.level == 1 &&
                                                (<>
                                                    <li><a
                                                        href="#"
                                                        onClick={() => goToCategory(productCategoryBySlug.slug)}>{productCategoryBySlug.name}</a>
                                                    </li>
                                                </>)
                                            }
                                        </ul>
                                        <span className="filter-collapse expanded">
                                            <a onClick={handleFilterCollapse}>
                                                <FormattedMessage id="filter.collapse"
                                                                  defaultMessage="Collapse/Expand"/>
                                                {filterCollapse ? <ChevronDown/> : <ChevronUp/>}
                                            </a>
                                        </span>
                                    </FilterSectionBreadCrumb>
                                    <div className={"filter-attributes-section-wrapper"}>
                                        <FilterAttributesSection className={filterCollapse && "collapsed"}>
                                            {filterVariations?.map((attrs, idx) => {
                                                return <FilterAttributes className="filter-attributes" key={idx}>
                                                    <FilterAttributeTitle>
                                                        {attrs?.displayName}
                                                    </FilterAttributeTitle>
                                                    <FilterAttributeValues>
                                                        {
                                                            attrs?.values?.map((attr, idx) => {
                                                                return (
                                                                    <Button
                                                                        key={idx}
                                                                        size="small"
                                                                        type="button"
                                                                        variant="text"
                                                                        className={attrInSelectedAttrs({
                                                                            name: attrs.name,
                                                                            value: attr
                                                                        }) && "selected"}
                                                                        onClick={() => {
                                                                            if (!attrInSelectedAttrs({
                                                                                name: attrs.name,
                                                                                value: attr
                                                                            })) {
                                                                                setSelectedAttrs([...selectedAttrs, {
                                                                                    name: attrs.name,
                                                                                    value: attr
                                                                                }])
                                                                            } else {
                                                                                setSelectedAttrs(selectedAttrs.filter(selAttr => selAttr.name != attrs.name || selAttr.value != attr))
                                                                            }
                                                                        }}
                                                                    >
                                                                        {attr}
                                                                    </Button>
                                                                )
                                                            })
                                                        }
                                                    </FilterAttributeValues>
                                                    <FilterAttributeOption>
                                                        <Button className="multi-select" size="small" type="button"
                                                                variant="outlined">
                                                            <FormattedMessage id="filter.multiselect"
                                                                              defaultMessage="多选"/>
                                                        </Button>
                                                        {attrs?.values?.length > 10 &&
                                                        <div className="filter-more">
                                                            <Button className="dropbtn" size="small" type="button"
                                                                    variant="outlined"><FormattedMessage id="more"
                                                                                                         defaultMessage="更多"/><ChevronDown/></Button>
                                                            <div className="dropdown-content">
                                                                <a href="#">Link 1</a>
                                                                <a href="#">Link 2</a>
                                                                <a href="#">Link 3</a>
                                                            </div>
                                                        </div>
                                                        }

                                                    </FilterAttributeOption>
                                                </FilterAttributes>
                                            })}

                                        </FilterAttributesSection>
                                    </div>
                                    <FilterCategoriesSection>
                                        <FilterCategories className="filter-categories">
                                            <FilterCategoryTitle>
                                                <FormattedMessage id="filter.category" defaultMessage="您是不是想找"/>
                                            </FilterCategoryTitle>
                                            <FilterCategoryValues>
                                                {
                                                    filterCategories?.map((category, idx) => {
                                                        return (
                                                            <Button
                                                                key={idx}
                                                                size="small"
                                                                type="button"
                                                                variant="text"
                                                                className={selectedCategories.indexOf(category.id) != -1 && "selected"}
                                                                onClick={() => {
                                                                    if (selectedCategories.indexOf(category.id) == -1) {
                                                                        setSelectedCategories([...selectedCategories, category?.id])
                                                                    } else {
                                                                        setSelectedCategories(selectedCategories.filter(selCategory => selCategory != category?.id))
                                                                    }
                                                                }}
                                                            >
                                                                {category.name}
                                                            </Button>
                                                        )
                                                    })
                                                }
                                            </FilterCategoryValues>
                                        </FilterCategories>
                                    </FilterCategoriesSection>
                                    <FilterPaginationSection>
                                        <FilterPaginationTitle>
                                            <FormattedMessage id="filter.pagination" defaultMessage="综合排序"/>
                                        </FilterPaginationTitle>
                                        <FilterPaginationValues>
                                            <div className="left">
                                                <Button size="small" type="button" variant="text">销量</Button>
                                                <Button size="small" type="button" variant="text">信用</Button>
                                                <Button size="small" type="button" variant="text">价格</Button>
                                                <input type="text" placeholder={CURRENCY} />
                                                &nbsp;<label>-</label>&nbsp;
                                                <input type="text" placeholder={CURRENCY} />
                                            </div>
                                            <div className="filter-pagination">
                                                <div className="filter-more">
                                                    <Button size="small" type="button" variant="text" className="placesBtn">
                                                        发货地&nbsp;
                                                        <ChevronDown width="10" height="10"/>
                                                    </Button>
                                                    <div className="dropdown-content">
                                                        <div className="place-first">
                                                            {deliveredPlaces_1.map((item, idx) => {
                                                                return (
                                                                    <a href="#" key={idx}>{item.title}</a>
                                                                )
                                                            })}
                                                        </div>

                                                        <div className="place-two">
                                                            {deliveredPlaces_2.map((item, idx) => {
                                                                return (
                                                                    <a href="#" key={idx}>{item.title}</a>
                                                                )
                                                            })}
                                                        </div>

                                                        <div className="place-two">
                                                            {deliveredPlaces_3.map((item, idx) => {
                                                                return (
                                                                    <a href="#" key={idx}>{item.title}</a>
                                                                )
                                                            })}
                                                        </div>

                                                        <div className="input-bar">
                                                            <input type="text" placeholder="多个地区用逗好分隔"/>
                                                            <Button variant='primary' size='small' type='submit' className="determine">
                                                                <FormattedMessage id='continueBtn' defaultMessage='Continue'/>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button size="small" type="button" variant="text"
                                                        className={productViewType == 0 ? "viewTypeActive" : ""} onClick={() => SetProductViewType(0)}><TiledView/></Button>
                                                <Button size="small" type="button" variant="text"
                                                        className={productViewType == 1 ? "viewTypeActive" : ""} onClick={() => SetProductViewType(1)}><NaviIcon width="30" height="30"/></Button>
                                                <Button
                                                    size="small"
                                                    type="button"
                                                    onClick={() => prevPage()}
                                                    variant="text"
                                                >
                                                    <ChevronLeft/>
                                                </Button>
                                                <div style={{padding: '10px 0'}}>
                                                    <span>{page}</span>
                                                    <span>&nbsp; / &nbsp;</span>
                                                    <span>{total}</span>
                                                </div>
                                                <Button
                                                    size="small"
                                                    type="button"
                                                    onClick={() => nextPage()}
                                                    variant="text"
                                                >
                                                    <ChevronRight/>
                                                </Button>
                                            </div>
                                        </FilterPaginationValues>
                                    </FilterPaginationSection>
                                    <FilterServiceSection>
                                        <div className="checkboxdiv">
                                            <div className="custom-control custom-checkbox">
                                                <input id="freeshipping" name="freeshipping" type="checkbox"
                                                       className="custom-control-input"/>
                                                <label htmlFor="freeshipping" className="custom-control-label">
                                                    <FormattedMessage id="filter.freeshipping"
                                                                      defaultMessage="Free Shipping"/>
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input id="freereturn" name="freereturn" type="checkbox"
                                                       className="custom-control-input"/>
                                                <label htmlFor="freereturn" className="custom-control-label">
                                                    <FormattedMessage id="filter.freereturn"
                                                                      defaultMessage="Free Return"/>
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input id="cashdelivery" name="cashdelivery" type="checkbox"
                                                       className="custom-control-input"/>
                                                <label htmlFor="cashdelivery" className="custom-control-label">
                                                    <FormattedMessage id="filter.cashdelivery"
                                                                      defaultMessage="Cash on delivery"/>
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input id="newproduct" name="newproduct" type="checkbox"
                                                       className="custom-control-input"/>
                                                <label htmlFor="newproduct" className="custom-control-label">
                                                    <FormattedMessage id="filter.newproduct"
                                                                      defaultMessage="New product"/>
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input id="charity" name="charity" type="checkbox"
                                                       className="custom-control-input"/>
                                                <label htmlFor="charity" className="custom-control-label">
                                                    <FormattedMessage id="filter.charity"
                                                                      defaultMessage="Charity baby"/>
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input id="guarantee" name="guarantee" type="checkbox"
                                                       className="custom-control-input"/>
                                                <label htmlFor="guarantee" className="custom-control-label">
                                                    <FormattedMessage id="filter.guarantee"
                                                                      defaultMessage="Genuine security"/>
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input id="foreigngoods" name="foreigngoods" type="checkbox"
                                                       className="custom-control-input"/>
                                                <label htmlFor="foreigngoods" className="custom-control-label">
                                                    <FormattedMessage id="filter.foreigngoods"
                                                                      defaultMessage="Foreign goods"/>
                                                </label>
                                            </div>
                                            <Button size="small" type="button" variant="text">
                                                <FormattedMessage id="more" defaultMessage="More" />
                                            </Button>
                                        </div>
                                        <div className="buttondiv">
                                            <Button size="small" type="button" variant="outlined">合并同款货品</Button>
                                        </div>
                                    </FilterServiceSection>
                                </FilterSection>
                                    <ProductSection>
                                        {!productViewType ?
                                            (<ProductGrid fetchLimit={20} handleTotal={handleTotal} page={page} />)
                                            :
                                            (<ProductList fetchLimit={20} handleTotal={handleTotal} page={page} />)
                                        }
                                        <ReactPaginate
                                            pageCount={total}
                                            pageRangeDisplayed={5}
                                            marginPagesDisplayed={2}
                                            forcePage={page-1}
                                            containerClassName={'pagination'}
                                            subContainerClassName={'pages pagination'}
                                            activeClassName={'paginate-active'}
                                            previousLabel={<><ChevronLeft /><FormattedMessage id="filter.prev" defaultMessage="Prev" /></>}
                                            nextLabel={<><FormattedMessage id="filter.next" defaultMessage="Next" /><ChevronRight /></>}
                                            onPageChange={handlePageClick}
                                            disableInitialCallback={true}
                                        />
                                        {/*<ProductListPagination totalPages={total} />*/}
                                    </ProductSection>
                            </MainSection>
                            <SideSection>
                                <SideSectionTitle>
                                    <h3><FormattedMessage id="section-title.best-seller" defaultMessage="Best Sellers"/>
                                    </h3>
                                </SideSectionTitle>
                                <SideSectionContent>
                                    <BestSellerGrid fetchLimit={8}/>
                                </SideSectionContent>
                            </SideSection>
                        </PageContent>
                        <BestSeller>
                            <BestSellerHeader>
                                <Button size="small" type="button" variant="text">热卖好货</Button>
                                {bestSellerProducts.map((item, idx) => {
                                    return (
                                        <Button size="small" type="button" variant="text"
                                                key={idx}>{item.title}</Button>
                                    )
                                })}
                            </BestSellerHeader>
                            <BestSellerContent>
                                <ProductGridThree fetchLimit={5} type={""}/>
                            </BestSellerContent>
                        </BestSeller>
                        <PageFooter/>
                    </div>
                </Container>
                {/*<CartPopUp deviceType={deviceType}/>*/}
            </Modal>
        </ModalProvider>
        </>
    )
}

const Container = styled.div`
    background: ${themeGet('colors.white')};
`;
const PageContent = styled.main(
    css({
        display: 'grid',
        gridColumnGap: '20px',
        gridRowGap: ['5px', '10px', '0'],
        gridTemplateColumns: [
            'auto',
            'auto 40%',
            'auto 30%',
            'auto 30%',
            'auto 20%',
        ],
        padding: '40px 0',
    })
);
const MainSection = styled.section`
`;
const FilterSection = styled.div`
.filter-attributes-section-wrapper {
    overflow: hidden;
}
`;
const FilterSectionTab = styled.div`
    ul {
        display: flex;
        border-bottom: 5px solid ${themeGet("colors.red")};
        font-size: ${themeGet("fontSizes.placeholder")}px;
        
        li {
            a {
                display: block;
                padding: 10px 25px;
                transition: transform 300ms;
            }
            color: ${themeGet("colors.black")};
            background-color: ${themeGet("colors.white")};
            cursor: pointer;
        }
        li:hover {
            a {
                transform: translate3d(0, -3px, 0);
            }
        }
        li.active {
            background-color: ${themeGet("colors.red")};
            color: ${themeGet("colors.white")};
        }
    }
`;
const FilterSectionBreadCrumb = styled.div`
    margin-top: 10px;
    justify-content: space-between;
    display: flex;
    ul.filter-breadcrumb {
        padding: 10px 20px;
        list-style: none;
        margin-left: 20px;
        width: 80%; 
        li {
            display: inline;
            font-size: ${themeGet("fontSizes.sm")}px;
            a {
                color: ${themeGet("colors.gray.1000")};
                text-decoration: none;
            }
            a :hover {
                color: ${themeGet("colors.red")};
            }
        }
        
        li + li:before {
            padding: 8px;
            color: black;
            content: "›";
        }
    }
    span.filter-collapse{
        cursor: pointer;
        margin: 7px 17px;
        a {
            border: 1px solid ${themeGet("colors.gray.900")};
            display: block;
            color: ${themeGet("colors.gray.900")};
            padding: 3px 3px;
            svg {
                margin-left: 5px;
            }
        }
    }
`;
const FilterAttributesSection = styled.div`
    margin-top: 20px;
    border: 1px solid ${themeGet("colors.gray.800")};
    transition: 1s all cubic-bezier(0.55, 0.06, 0.68, 0.19);

    div.filter-attributes {
        border-bottom: 1px solid ${themeGet("colors.gray.800")}50;
    }
    div.filter-attributes:last-child {
        border-bottom: 0;
    }
    &.collapsed {
        margin-bottom: -100%;
    }
`;
const FilterAttributes = styled.div`
    display: flex;
    line-height: 2.5rem;
`;
const FilterAttributeTitle = styled.div`
    padding: 10px 20px;
    width: 10%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${themeGet("fontSizes.sm")}px;
    color: ${themeGet("colors.gray.900")};
    background: ${themeGet("colors.gray.300")};
`;
const FilterAttributeValues = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-flow: wrap;
    width: 70%;
    button {
        color: ${themeGet("colors.text.gray1")};
        font-size: ${themeGet("fontSizes.sm")}px;
        font-weight: ${themeGet("fontWeights.regular")};
    }
    button.selected {
        color: ${themeGet("colors.white")};
        background-color: ${themeGet("colors.primary.hover")};
        font-weight: ${themeGet("fontWeights.bold")};
    }
    button + button {
        margin-left: 10px;
    }
`;
const FilterAttributeOption = styled.div`
    display: flex;
    padding: 10px 20px;
    min-width: 20%;
    text-align: right;
    button {
        color: ${themeGet("colors.gray.1000")};
        font-size: ${themeGet("fontSizes.sm")}px;
        font-weight: ${themeGet("fontWeights.regular")};
        border-color: ${themeGet("colors.gray.800")};
        white-space: nowrap;
    }
    button.multi-select {
        margin-right: 20px;
    }
    button.dropbtn{
        svg {
            margin-left: 5px;
        }
    }
    div.filter-more {
        position: relative;
        display: inline-block;
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            a {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }
            a: hover { 
                background-color: #ddd;
            }
        }
    }
    div.filter-more:hover {
        .dropdown-content {
            display: block;
            text-align: left;
        }
    }
`;
const FilterCategoriesSection = styled.div`
    margin-top: 20px;
    border: 1px solid ${themeGet("colors.gray.800")};
    div.filter-categories {
        border-bottom: 1px solid ${themeGet("colors.gray.800")}50;
    }
    div.filter-categories:last-child {
        border-bottom: 0;
    }
    button.selected {
        color: ${themeGet("colors.white")};
        background-color: ${themeGet("colors.primary.hover")};
        font-weight: ${themeGet("fontWeights.bold")};
    }
    button + button {
        margin-left: 10px;
    }
`;
const FilterCategories = styled.div`
    display: flex;
    line-height: 2.5rem;
`;
const FilterCategoryTitle = styled.div`
    padding: 10px 20px;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${themeGet("fontSizes.sm")}px;
    color: ${themeGet("colors.gray.900")};
    border-right: 1px solid ${themeGet("colors.gray.300")};

`;
const FilterCategoryValues = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-flow: wrap;
    button {
        // height: 100%;
        color: ${themeGet("colors.text.gray1")};
        font-size: ${themeGet("fontSizes.sm")}px;
        font-weight: ${themeGet("fontWeights.regular")};
    }
    button + button {
        margin-left: 10px;
    }
`;
const FilterPaginationTitle = styled.div`
    padding: 10px 20px;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${themeGet("fontSizes.sm")}px;
    color: ${themeGet("colors.gray.900")};
    border-right: 1px solid ${themeGet("colors.gray.300")};

`;
const FilterPaginationValues = styled.div`
    // padding: 10px 20px;
    display: flex;
    justify-content:space-between;
    width: 100%;
    div {
        display: flex;   
    }
    button {
        height: 100%;
        color: ${themeGet("colors.text.gray1")};
        font-size: ${themeGet("fontSizes.sm")}px;
        font-weight: ${themeGet("fontWeights.regular")};
    }
    label {
        line-height: 2;
    }
    button + button {
        margin-left: 10px;
    }
    input {
        width: 80px;
        border: 1px solid ${themeGet("colors.gray.900")};
        margin-top: 5px;
        margin-bottom: 5px;
    }
    div.filter-more {
        button.placesBtn {
            height: 100%;
        }
        position: relative;
        display: inline-block;
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: ${themeGet("colors.white")};;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            border: 1px solid ${themeGet('colors.gray.700', '#828282')};
            z-index: 1;
            width: 25vw;
            padding: 10px;
            .place-first {
                display: inline-grid;
                grid-template-columns: calc(100% / 6) calc(100% / 6) calc(100% / 6) calc(100% / 6) calc(100% / 6) calc(100% / 6);
                width:100%;
                text-align: center;
            }
            .place-two {
                padding-top: 30px;
                display: inline-grid;
                grid-template-columns: calc(100% / 7) calc(100% / 7) calc(100% / 7) calc(100% / 7) calc(100% / 7) calc(100% / 7) calc(100% / 7);
                width:100%;
                text-align: center;
            }
            a {
                color: black;
                line-height: 2;
                text-decoration: none;
                &:hover {
                    color: ${themeGet("colors.red")};
                }
            }
            .input-bar {
                input {
                    height: 30px;
                    width: 50%;
                    border: 1px solid ${themeGet('colors.gray.700', '#828282')};
                }
                .determine {
                    margin-top: 4px;
                    margin-left: 10px;
                    background: ${themeGet("colors.red")};
                    color: white;
                    height: 30px;
                }
            }
        }
    }
    div.filter-more:hover {
        .dropdown-content {
            display: block;
            // text-align: left;
        }
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-left: 1px solid ${themeGet('colors.gray.700', '#828282')};
        border-right: 1px solid ${themeGet('colors.gray.700', '#828282')};
    }
`;
const FilterPaginationSection = styled.div`
    margin-top: 20px;
    border: 1px solid ${themeGet("colors.gray.800")};
    display: flex;
`;
const FilterServiceSection = styled.div`
    border: 1px solid ${themeGet("colors.gray.800")};
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    .checkboxdiv {
        display: flex;
        div{
            padding-right: 20px;
            margin-top: 5px;
        }
        button {
            padding-left: 100px;
            color: ${themeGet('colors.text.regular', '#4F4F4F')};
            font-size: ${themeGet("fontSizes.sm")}px;
            font-weight: ${themeGet("fontWeights.regular")};
        }
    }
    .buttondiv {
        button {
            color: ${themeGet('colors.text.regular', '#4F4F4F')};
            &:hover {
                color: red;
            }
        }
    }
`;
const ProductSection = styled.div`
    padding-top: 40px;
    
    .pagination {
        margin-top: 40px;
        justify-content: center;
        display: flex;
        padding-left: 15px;
        padding-right: 15px;
        
        li {
            display: inline-block;
            a {
                padding: 10px;
                border-top: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
                border-bottom: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
                border-left: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
            }
            
        }
        li: last-child {
            a: last-child {
                border-right: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
            }
        }
        
        li.paginate-active a {
            background: #EF3900;
            color: white;
        }
    }

`;
const BestSeller = styled.div`
`;
const BestSellerHeader = styled.div`
    padding: 5px;
    background: ${themeGet('colors.gray.500')};
    display: flex;
    button {
        color: ${themeGet('colors.text.regular', '#4F4F4F')};
        font-size: ${themeGet("fontSizes.sm")}px;
        font-weight: ${themeGet("fontWeights.regular")};
    }
`;
const BestSellerContent = styled.div`
    padding: 10px;
    border: 1px solid ${themeGet('colors.gray.700')};
`;
const SideSection = styled.aside``;
const SideSectionTitle = styled.div`
    padding-bottom: 15px;
    border-bottom: 1px solid ${themeGet('colors.gray.700')};
    h3 {
        font-size: ${themeGet('fontSizes.md')}px;
    }
`;
const SideSectionContent = styled.div``;
const PageFooter = styled.section``;

const FixedSidebar = styled.div`
    position: fixed;
    top: 50%;
    left: 0;
    width: 100px;
    transform: translate(0, -50%);
    @media screen and (max-width: 1600px) {
        width: 80px;
        font-size: ${themeGet('fontSizes.xs')}px;
        transition: all 0.3s;
        &:hover{
            left: 0;
        }
    };
    @media screen and (max-width: 1366px) {
        left: -65px;
        width: 80px;
        font-size: ${themeGet('fontSizes.xs')}px;
        transition: all 0.3s;
        &:hover{
            left: 0;
        }
    };
    z-index: 10000;
    background: ${themeGet('colors.white')};
    padding: 3px;
    text-align: center;
    div {
        padding: 10px;
        border: 1px solid ${themeGet('colors.gray.700')};
        &:last-child {
            background: ${themeGet('colors.red')};
            color: ${themeGet('colors.white')};
        }
        a {
            text-decoration: none;
            color: ${themeGet('colors.white')};
        }
        a:hover {
            font-weight: ${themeGet('fontWeights.bold')};
        }
    }
`;
