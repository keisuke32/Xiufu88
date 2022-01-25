import React, {useState} from 'react';
import CommentsWrapper from './comment.style';
import {FormattedMessage} from 'react-intl';
import {OperationSuccess} from "../../assets/icons/OperationSuccess";
import {Clock} from "../../assets/icons/Clock";
import product_package_red from "../../assets/images/product-package-red.png";
import product_transport_black from "../../assets/images/product-transport-black.png";
import product_deliver_black from "../../assets/images/product-deliver-black.png";
import product_sign_black from "../../assets/images/product-sign-black.png";
import {TransportCheck} from "../../assets/icons/TransportCheck";
import {ProductGrid} from "../../components/product-grid/product-grid-two";
import {Photo} from "../../assets/icons/Photo";
import useOrders from "../../data/use-orders";

interface Props {
    token?: string;
    nextStep: any;
}

const order_items = [
    {
        id: 1,
        title: "大码连衣裙微胖妹妹遮肚子减龄中长款洋气收腰显瘦复...",
        status: "未發貨",
        price: "754.5",
        quantity: "2",
        thumbnail: "http://d2egstjft38v2o.cloudfront.net/thumbnails/bf5b372c-9b48-4571-9671-1fef2abc51de-thumbnail.jpg"
    },
    {
        id: 2,
        title: "针织连衣裙女2020新款冬季打底内搭毛衣中长款法式秋冬配大...",
        status: "未發貨",
        price: "754.5",
        quantity: "2",
        thumbnail: "http://d2egstjft38v2o.cloudfront.net/thumbnails/bf5b372c-9b48-4571-9671-1fef2abc51de-thumbnail.jpg"
    },
    {
        id: 3,
        title: "LDTJ徐睿知高文英显瘦百褶西装裙2020秋季新款黑色收腰连衣...",
        status: "未發貨",
        price: "754.5",
        quantity: "2",
        thumbnail: "http://d2egstjft38v2o.cloudfront.net/thumbnails/bf5b372c-9b48-4571-9671-1fef2abc51de-thumbnail.jpg"
    },
];

const CommentFeature = ({token, nextStep}: Props) => {

    const {orders, error, loading} = useOrders({
        feature: 'CREATED_AT',
        sortType: "DESC",
        limit: 1,
        token: token
    });

    return (
        orders[0]?.items.map((item, idx) => {
            return <CommentsWrapper key={idx}>
                <div className="wrapper">
                    <div className="comments-header">
                        <label><FormattedMessage id="checkout.comment" defaultMessage="評論"/></label>
                        <div className="order-info">
                            <span>
                                <FormattedMessage id="checkout.store" defaultMessage="店铺"/>：小花花的美妆
                            </span>
                            <span>
                                <FormattedMessage id="checkout.seller" defaultMessage="賣家"/>：好貨集中地
                            </span>
                        </div>
                    </div>
                    <div className="comments-content">
                        <div className="comments-content-image">
                            <img
                                src={item?.product?.thumbnail?.url || item?.product?.assets[0]?.thumbnail || item?.product?.assets[0]?.url}
                                alt=""/>
                            <div><a href={"/products/" + item?.product?.slug}>{item?.product?.title}</a></div>
                        </div>
                        <div className="comments-content-main">
                            <div className="header">
                                <label><FormattedMessage id="checkout.comment" defaultMessage="評論"/>:</label>
                            </div>
                            <div className="content">
                                <textarea name="" id="" />
                                <div>
                                    <button><Photo/> <FormattedMessage id="checkout.uploadImage" defaultMessage="曬照片"/>
                                    </button>
                                    <label><FormattedMessage id="checkout.uploadLimit" defaultMessage="限5張"
                                                             values={{count: 5}}/></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-comment">
                    <button className="post-comment-btn"><FormattedMessage id="checkout.comment.publish"
                                                                           defaultMessage="發表評論"/></button>
                </div>
            </CommentsWrapper>
        })

    );
};

export default CommentFeature;
