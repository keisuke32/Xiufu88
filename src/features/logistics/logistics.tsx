import React, {useEffect, useState} from 'react';
import LogisticsWrapper from './logistics.style';
import {FormattedMessage} from 'react-intl';
import {OperationSuccess} from "../../assets/icons/OperationSuccess";
import {Clock} from "../../assets/icons/Clock";
import product_package_red from "../../assets/images/product-package-red.png";
import product_transport_black from "../../assets/images/product-transport-black.png";
import product_deliver_black from "../../assets/images/product-deliver-black.png";
import product_sign_black from "../../assets/images/product-sign-black.png";
import {TransportCheck} from "../../assets/icons/TransportCheck";
import {ProductGrid} from "../../components/product-grid/product-grid-two";
import useOrders from "../../data/use-orders";

interface Props {
    token?: string;
    nextStep: any;
}

const LogisticsFeature = ({token, nextStep}: Props) => {
    const [orderItem, setOrderItem] = useState(null);
    const {orders, error, loading} = useOrders({
        feature: 'CREATED_AT',
        sortType: "DESC",
        limit: 1,
        token: token
    });
    console.log(orders);
    useEffect(() => {
        if(!error && !loading && orders.length > 0){
            setOrderItem(orders[0].items[0]);
        }
    }, [loading]);

    const handleProductChange = (e) => {
        setOrderItem(orders[0].items[e.target.value]);
    }
    return (
        <LogisticsWrapper>
            <div className="order-detail">
                <p>
                    <label>
                        <FormattedMessage id="checkout.order.status" defaultMessage="當前訂單狀態"/>:
                    </label>&nbsp;
                    <FormattedMessage id="checkout.order.deliveryMessage" defaultMessage="deliveryMessage"/>
                </p>
                <p className="deliver-time">
                    <label>
                        <FormattedMessage id="checkout.order.deliveryRate" defaultMessage="賣家還有"
                                          values={{RATE: 72, UNIT: "小時"}}/>:
                    </label>
                </p>
                {orders?.length > 0 && orders[0].items?.map((item, idx) => {
                    return (
                        <p key={idx} className="order-item">{item.title}</p>
                    )
                })}
            </div>
            <div className="logistics-info">
                <div className="logistics-info-header">
                    <FormattedMessage id="checkout.order.productInfo" defaultMessage="物流信息"/>
                </div>
                <div className="view-products">
                    <label>
                        <FormattedMessage id="checkout.order.product" defaultMessage="查看商品"/>
                        ：</label>
                    <select onChange={handleProductChange}>
                        {orders?.length > 0 && orders[0].items?.map((item, idx) => {
                            return (
                                <option value={idx} key={idx}>{item.title}</option>
                            )
                        })}
                    </select>
                    <div className="logistics-diagram">
                        <img src={product_package_red} className="active"></img>
                        <label>...............................................</label>
                        <img src={product_transport_black}></img>
                        <label>...............................................</label>
                        <img src={product_deliver_black}></img>
                        <label>...............................................</label>
                        <img src={product_sign_black}></img>
                    </div>
                    <div className="transport-detail">
                        <div className="transport-detail-header">
                            你的包裹還未發出
                        </div>
                        <div className="transport-detail-content">
                            <span className="check-icon"><TransportCheck/></span>
                            <span>2020-11-09</span>
                            <span>周一</span>
                            <span>15：47：56</span>
                            <span>商家正通知快遞公司攬件</span>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-outline-danger gonext" onClick={() => nextStep(4)}>
                    <FormattedMessage id="order.next" defaultMessage="下一步"/>
                </button>
                <div className="logistics-order-detail">
                    <div className="logistics-order-detail-header">
                        <FormattedMessage id="checkout.order.detail" defaultMessage="訂單詳情"/>

                        <button className="download">
                            <FormattedMessage id="checkout.order.download" defaultMessage="下載訂單"/>
                        </button>
                    </div>
                    <div className="logistics-order-detail-content">
                        <p>
                            <label>
                                <FormattedMessage id="checkout.order.deliveryAddress" defaultMessage="貨物寄送至"/>
                                : </label>&nbsp;
                            {orders?.length > 0 && orders[0].deliveryOrders[0]?.deliveryAddress?.region?.name}&nbsp;
                            {orders?.length > 0 && orders[0].deliveryOrders[0]?.deliveryAddress?.city}&nbsp;
                            {orders?.length > 0 && orders[0].deliveryOrders[0]?.deliveryAddress?.street}&nbsp;
                            {orders?.length > 0 && orders[0].deliveryOrders[0]?.deliveryAddress?.zipcode}&nbsp;
                        </p>
                        <p>
                            <label>
                                <FormattedMessage id="checkout.order.deliveryMethod" defaultMessage="配送方式"/>
                                : </label>&nbsp;
                            {orders?.length > 0 && orders[0].deliveryOrders[0]?.carrier?.name}&nbsp;
                            {orders?.length > 0 && orders[0].deliveryOrders[0]?.deliveryPrice?.formatted}
                        </p>
                        <p className="seller-info">
                            <label>
                                <FormattedMessage id="checkout.order.seller" defaultMessage="賣家信息"/>
                            </label>
                            <span>
                                <FormattedMessage id="checkout.order.seller.nickName" defaultMessage="昵稱"/>
                                ：{orderItem?.seller?.name}</span>
                            <span>
                                <FormattedMessage id="checkout.order.seller.realName" defaultMessage="真實姓名"/>
                                ：{orderItem?.seller?.name}</span>
                            <span>
                                <FormattedMessage id="checkout.order.seller.city" defaultMessage="城市"/>
                                ：{orderItem?.seller?.address?.city}</span>
                        </p>
                        <p className="order-info">
                            <label>
                                <FormattedMessage id="checkout.order.info" defaultMessage="訂單信息"/>
                            </label>
                            <span>
                                <FormattedMessage id="checkout.order.id" defaultMessage="訂單號"/>
                                ：137314119720716192</span>
                            <span>
                                <FormattedMessage id="checkout.order.created" defaultMessage="創建時間"/>
                                ：{orders?.length > 0 && orders[0]?.createdAt}</span>
                            <span>
                                <FormattedMessage id="checkout.order.paymentCreated" defaultMessage="付款時間"/>
                                ：{orders?.length > 0 && orders[0]?.payments[0]?.createdAt}</span>
                        </p>
                    </div>
                    <div className="product-info">
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    <FormattedMessage id="checkout.order.product.product" defaultMessage="商品"/>
                                </th>
                                <th>
                                    <FormattedMessage id="checkout.order.product.status" defaultMessage="狀態"/>
                                </th>
                                <th>
                                    <FormattedMessage id="checkout.order.product.price" defaultMessage="單價"/>
                                </th>
                                <th>
                                    <FormattedMessage id="checkout.order.product.amount" defaultMessage="數量"/>
                                </th>
                                <th>
                                    <FormattedMessage id="checkout.order.product.edit" defaultMessage="商品操作"/>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="title">
                                    <img src={orderItem?.product?.thumbnail?.url || orderItem?.product?.assets[0]?.thumbnail || orderItem?.product?.assets[0]?.url} alt=""/>
                                    <a href="">{orderItem?.product?.title}</a>
                                </td>
                                <td>{orderItem?.status}</td>
                                <td>{orderItem?.price?.formatted}</td>
                                <td>{orderItem?.quantity}</td>
                                <td>
                                    <a href="">
                                        <FormattedMessage id="checkout.order.product.refund" defaultMessage="退款"/>
                                    </a>/
                                    <a href="">
                                        <FormattedMessage id="checkout.order.product.return" defaultMessage="退貨"/>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} />
                                <td>
                                    <FormattedMessage id="checkout.order.product.total" defaultMessage="店铺合计"/>:&nbsp;
                                    <span className="total-price">{orderItem?.total?.formatted}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="favourite-goods">
                <div className="goods-header">
                    <FormattedMessage id="payment.recommend" defaultMessage="猜你喜歡"/>
                </div>
                <ProductGrid fetchLimit={4}/>
            </div>
        </LogisticsWrapper>
    );
};

export default LogisticsFeature;
