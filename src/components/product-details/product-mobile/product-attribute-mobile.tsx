import React, {useEffect, useState} from 'react';
import {
    ProductAttributeMobileWrapper,
    Attributes,
    AttributesValues,
    AttributesWrapper,
    InfoTitle,
    ProductAmountWrapper,
    Quantity, FooterButtonGroup, CloseButton
} from "./product-mobile.style";
import {LocationIcon} from "../../../assets/icons/LocationIcon";
import {ArrowRight} from "../../../assets/icons/ArrowRight";
import {Button} from "../../button/button";
import {FormattedMessage} from "react-intl";
import {Counter} from "../../counter/counter";

export const ProductAttributeMobile = ({onRequestClose, product, amount, setAmount}) => {

    const [quantity, setQuantity] = useState(product?.quantity);

    const handleAmountRemoveClick = () => {
        if (amount > 1) {
            setAmount(amount => amount - 1);
        }
    }

    const handleAmountAddClick = () => {
        if (amount < quantity) {
            setAmount(amount => amount + 1);
        }
    }

    const [selectedAttributes, SetSelectedAttributes] = useState({});

    let variations = [];

    let variationKeys = [];

    if (product) {
        product.attrs?.map((attr, idx) => {
            attr?.variation?.map(variation_item => {
                if (!(variation_item.name in variations)) {
                    variations[variation_item.name] = [];
                    variationKeys.push(variation_item.name);
                }
                if (!variations[variation_item.name].includes(variation_item.value)) {
                    variations[variation_item.name].push(variation_item.value);
                }
            });

        })
    }

    const handleAttributes = (e, attr_key, attr_value) => {
        let oldAttrs = {}
        oldAttrs = JSON.parse(JSON.stringify(selectedAttributes));
        oldAttrs[attr_key] = attr_value;
        SetSelectedAttributes(oldAttrs);
        let selectedAttr = {price: {formatted: ""}, oldPrice: {formatted: ""}, quantity: 0};
        for (let attr_i = 0; attr_i < product?.attrs.length; attr_i++) {
            let isEqual = true;
            product?.attrs[attr_i].variation.map(variation => {
                isEqual = isEqual && ((variation.name in oldAttrs) && oldAttrs[variation.name] === variation.value);
            })
            if (isEqual) {
                selectedAttr = product?.attrs[attr_i];
                break;
            }

        }
        // setAttr(selectedAttr);
        // setPrice(selectedAttr?.price?.formatted);
        // setOldPrice(selectedAttr?.oldPrice?.formatted);
        setQuantity(selectedAttr?.quantity);
        if (selectedAttr?.quantity == 0) {
            setAmount(0);
        } else {
            setAmount(1);
        }
    }

    return (
        <ProductAttributeMobileWrapper>
            <CloseButton>
                <button
                    type='button'
                    onClick={onRequestClose}
                >
                    &#x2715;
                </button>
            </CloseButton>
            <div className="product_image_detail">
                <img src={product?.assets[0]?.url} alt=""/>
                <div className="product_detail">
                    <div className="product_price">
                        {product?.price?.formatted}
                    </div>
                    <div className="product_stock">
                        ??????{product?.quantity}???
                    </div>
                    <div className="product_hint">
                        ????????? ?????? ?????? ?????? ??????
                    </div>
                </div>
            </div>
            <div className="product_logistics">
                <div>
                    ????????????
                </div>
                <div className="product_location">
                    <div>
                        <LocationIcon color="#828282" width="20px" height="20px"/>
                        <span>?????????</span>&nbsp;&nbsp;&nbsp;
                        <span>?????????</span>&nbsp;&nbsp;&nbsp;
                        <span>?????????</span>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                        <ArrowRight width="20px" height="20px"/>
                    </div>
                </div>
                <div className="product_logistics_hint">
                    ????????????3????????????
                </div>
            </div>
            <div className="product_detail_size">
                <div className="size_header">
                    ??????????????????
                </div>
                {product?.attrs && (
                    <AttributesWrapper>
                        {variationKeys?.map((variation, idx) => {
                            return (<Attributes key={idx}>
                                <InfoTitle>{variation}</InfoTitle>
                                <AttributesValues>
                                    {variations[variation]?.map((attr, attr_idx) => {
                                        return (
                                            <Button key={attr_idx}
                                                    className={(variation in selectedAttributes) && selectedAttributes[variation] === attr ? 'active' : ''}
                                                    onClick={(e) => handleAttributes(e, variation, attr)}
                                                    type={'button'}>{attr}</Button>
                                        )
                                    })}
                                </AttributesValues>
                            </Attributes>)
                        })}
                    </AttributesWrapper>)
                }
            </div>
            <ProductAmountWrapper>
                <div className="quantity_header">
                    <FormattedMessage id="product.detail.quantity" defaultMessage="??????"/>
                </div>
                <Counter
                    value={amount}
                    onDecrement={handleAmountRemoveClick}
                    onIncrement={handleAmountAddClick}
                    className='amount-counter'
                    variant='lightHorizontal'
                />
            </ProductAmountWrapper>
            <div className="buy_button_group">
                <FooterButtonGroup>
                    <button style={{width:'45%'}}>
                        <FormattedMessage id="footer.add-shopping-cart" defaultMessage="??????" />
                    </button>
                    <button style={{width:'45%', marginRight:'10px'}}>
                        <FormattedMessage id="footer.buy-now" defaultMessage="??????" />
                    </button>
                </FooterButtonGroup>
            </div>
        </ProductAttributeMobileWrapper>
    );
};
