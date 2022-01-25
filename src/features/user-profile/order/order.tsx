import React, { useState, useEffect } from 'react';
import {
    HotItemWrapper,
    OrderBox,
    OrderContainer,
    OrderContainerContent,
    OrderContainerFooter,
    OrderContainerHeader,
    OrderList,
    OrderListHead,
    OrderListTool,
    OrderSearchBar,
    OrderWrapper,
    StoreContainer,
    StoreHeader,
    StoreItem,
    StoreList,
    ProductList,
    ProductItem,
    RealPayment,
    TransactionStatus,
    TransactionOperation
} from './order.style';

import OrderDetails from './order-details/order-details';
import OrderCard from './order-card/order-card';
import { FormattedMessage, useIntl } from 'react-intl';
import useOrders, {useAllOrders} from 'data/use-orders';
import ErrorMessage from 'components/error-message/error-message';
import {TrashIcon} from "assets/icons/TrashIcon";
import {SmallMessageIcon} from "../../../assets/icons/SmallMessageIcon";
import {ShippingPackIcon} from "../../../assets/icons/ShippingPackIcon";
import {AuthContext} from "../../../contexts/auth/auth.context";
import {useRouter} from "next/router";

const OrdersContent: React.FC<{}> = () => {
    // const { data, error } = useOrders({ userId: 1, limit: 7 });
    //
    // if (error) return <ErrorMessage message={error.message} />;
    // if (!data) return <div>loading...</div>;
    const {authState: {isAuthenticated, phone, token}} = React.useContext<any>(AuthContext);
    const [orders, setOrders] = useState(null);
    const [orderState, setOrderState] = useState(undefined);
    const router = useRouter();
    useEffect( () => {
        if(!isAuthenticated){
            router.push('/login?redirect_to=' + router.asPath);
        }
    }, [isAuthenticated]);
    const intl = useIntl();
    const {orders: purchaseOrders, loading, revalidate} = useOrders({token: token, statuses: orderState});

    useEffect(() => {
        console.log(loading);
        if(!loading){
            setOrders(purchaseOrders);
        }
    }, [loading]);

    const handleOrderState = (status) => {
        if(status) {
            setOrderState([status]);
        } else {
            setOrderState(undefined);
        }
        revalidate();
    }
    return (
        <OrderBox>
            <OrderContainer>
                <OrderContainerHeader>
                    <ul className="order-menu">
                        <li className="menu-item"><a onClick={() => handleOrderState(undefined)}><FormattedMessage id="order.menu.all-orders" defaultMessage="所有訂單" /></a></li>
                        <li className="menu-item"><a onClick={() => handleOrderState('ORDERED')}><FormattedMessage id="order.menu.pending" defaultMessage="待付款" /></a></li>
                        <li className="menu-item"><a onClick={() => handleOrderState('DELIVERED')}><FormattedMessage id="order.menu.delivered" defaultMessage="待發貨" /></a></li>
                        <li className="menu-item"><a onClick={() => handleOrderState('CARRIER_RECEIVED')}><FormattedMessage id="order.menu.received" defaultMessage="待收貨" /></a></li>
                        <li className="menu-item"><a onClick={() => handleOrderState('COMPLETE')}><FormattedMessage id="order.menu.evaluation" defaultMessage="待評價" /></a></li>
                    </ul>
                    <a className="to-trash">
                        <TrashIcon />
                        <span><FormattedMessage id="order.to-trash" defaultMessage="訂單回收站" /></span>
                    </a>
                </OrderContainerHeader>
                <OrderContainerContent>
                    <OrderSearchBar>
                        <input type="text" className="search-input" placeholder={intl.formatMessage({
                            id: 'profile.order.search-input.placeholder',
                            defaultMessage: '輸入商品標題或訂單號進行搜索'
                        })} />
                        <button className="search-button"><FormattedMessage id="profile.order.search-button" defaultMessage="訂單搜索" /></button>
                        <a className="advance-filter"><FormattedMessage id="profile.order.advance-filter" defaultMessage="更多篩選條件" /></a>
                    </OrderSearchBar>
                    <OrderList>
                        <OrderListHead>
                            <div className="product-head">
                                <span><FormattedMessage id="profile.order.list.head.product" defaultMessage="商品" /></span>
                                <span><FormattedMessage id="profile.order.list.head.unit" defaultMessage="單價" /></span>
                                <span><FormattedMessage id="profile.order.list.head.quantity" defaultMessage="數量" /></span>
                                <span><FormattedMessage id="profile.order.list.head.product-operation" defaultMessage="商品操作" /></span>
                            </div>
                            <span><FormattedMessage id="profile.order.list.head.real-payment" defaultMessage="实付款" /></span>
                            <span><FormattedMessage id="profile.order.list.head.status" defaultMessage="交易狀態" /></span>
                            <span><FormattedMessage id="profile.order.list.head.trading-operation" defaultMessage="交易操作" /></span>
                        </OrderListHead>
                        <OrderListTool>
                            <div className="tool-left">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="select-all" />
                                        <label className="custom-control-label" htmlFor="select-all">
                                            <FormattedMessage id="cart.product.header.select-all" defaultMessage="Select All"/>
                                        </label>
                                </div>
                                <button className="btn btn-default btn-sm btn-outline-secondary"><FormattedMessage id="order.combined-payment" defaultMessage="合并付款" /></button>
                                <button className="btn btn-default btn-sm btn-outline-secondary"><FormattedMessage id="order.batch-confirm-invoice" defaultMessage="批量確認收穫" /></button>
                            </div>
                            <div className="tool-right">
                                <button className="btn btn-default btn-sm btn-outline-secondary" disabled><FormattedMessage id="order.prev" defaultMessage="上一頁" /></button>
                                <button className="btn btn-default btn-sm btn-outline-secondary"><FormattedMessage id="order.next" defaultMessage="下一頁" /></button>
                            </div>
                        </OrderListTool>
                        <OrderWrapper>
                            <StoreList>
                                {
                                    orders?.map((order, index) => (
                                        <StoreItem key={index}>
                                            <StoreHeader className={order.status}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="store-id" />
                                                    <label className="custom-control-label" htmlFor="store-id">
                                                        {order.createdAt}
                                                    </label>
                                                </div>
                                                <span className="order-number"><FormattedMessage id="order.number" defaultMessage="訂單號：" />{order.id}</span>
                                                <span className="store-name">{order.store_name}</span>
                                                <span className="contact-seller">
                                                    <a><SmallMessageIcon /><FormattedMessage id="profile.order.store.contact-seller" defaultMessage="聯係賣家" /></a>
                                                </span>
                                            </StoreHeader>
                                            <StoreContainer>
                                                <ProductList>
                                                    {
                                                        order?.items?.map((product, idx) => (
                                                            <ProductItem key={idx}>
                                                                <div className="product-basic">
                                                                    <div className="product-image">
                                                                        <img
                                                                            src={product?.product?.thumbnail?.url || product?.product?.thumbnail?.thumbnail || product?.product?.assets[0]?.thumbnail || product?.product?.assets[0]?.url}
                                                                            alt=""/>
                                                                    </div>
                                                                    <div className="product-name">
                                                                        {product?.title}
                                                                    </div>
                                                                </div>
                                                                <div className="price">
                                                                    {product?.price?.formatted}
                                                                </div>
                                                                <div className="quantity">
                                                                    {product?.quantity}
                                                                </div>
                                                                <div className="operation">

                                                                </div>
                                                            </ProductItem>
                                                        ))
                                                    }
                                                    <div className="grid-footer">
                                                        <FormattedMessage id="order.shipping-status" defaultMessage="官方物流-" />

                                                        {
                                                            (order.status == 'ORDERED') ?
                                                                (<FormattedMessage id="profile.order.shipping-button.direct-delivery" defaultMessage="直送" />):
                                                                (<FormattedMessage id="profile.order.shipping-button.consolidation" defaultMessage="集運" />)
                                                        }
                                                        {
                                                            (order.status == 'ORDERED') && (<span className="shipping-id">{order.shipping_id}</span>)
                                                        }
                                                    </div>
                                                </ProductList>
                                                <RealPayment>
                                                    <div className="grid-content">
                                                        <span className="order-price">￥20.00</span>
                                                        <span className="shipping-price">（含運費：￥0.00）</span>
                                                        <div className="shipping-button-wrap">
                                                            <ShippingPackIcon />

                                                            {
                                                                (order.status == 'ORDERED') ?
                                                                    (<button className="shipping-button direct-delivery"><FormattedMessage id="profile.order.shipping-button.direct-delivery" defaultMessage="直送" /></button>):
                                                                    (<button className="shipping-button consolidation"><FormattedMessage id="profile.order.shipping-button.consolidation" defaultMessage="集運" /></button>)
                                                            }

                                                        </div>
                                                    </div>
                                                    <div className="grid-footer">
                                                        <a><FormattedMessage id="order.view-consolidation" defaultMessage="查看集運詳情" /></a>
                                                    </div>
                                                </RealPayment>
                                                <TransactionStatus>
                                                    <div className="grid-content">
                                                        <span className="shipping-status"><FormattedMessage id="order.shipping-status.shipped-by-seller" defaultMessage="賣家已發貨" /></span>
                                                        <a className="order-detail"><FormattedMessage id="order.order-detail" defaultMessage="訂單詳情" /></a>
                                                        <a className="view-products"><FormattedMessage id="order.transaction.view-products" defaultMessage="查看物流" /></a>
                                                    </div>

                                                    {
                                                        (order.status == 'ORDERED') &&
                                                            (
                                                                <div className="grid-footer">
                                                                    <FormattedMessage id="order.order-status.signed" defaultMessage="簽收成功" />
                                                                </div>
                                                            )
                                                    }
                                                </TransactionStatus>
                                                <TransactionOperation>
                                                    <div className="grid-content">
                                                        <span className="remain-date">還剩2天14時</span>
                                                        <button className="invoice-button confirm"><FormattedMessage id="order.transition.combine" defaultMessage="合并轉運" /></button>
                                                    </div>
                                                </TransactionOperation>
                                            </StoreContainer>
                                        </StoreItem>
                                    ))
                                }
                            </StoreList>
                        </OrderWrapper>
                    </OrderList>
                </OrderContainerContent>
                <OrderContainerFooter></OrderContainerFooter>
            </OrderContainer>
            <HotItemWrapper></HotItemWrapper>
        </OrderBox>
    );
};

export default OrdersContent;
