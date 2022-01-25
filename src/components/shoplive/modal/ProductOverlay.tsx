import React from 'react'
import {ProductItem} from './shopliveitem.style'
import useProducts from 'data/use-products'
export default function ProductOverlay({productdurations})
{
    const {products,error,loading} = useProducts({limit:3,isFeatured:true})

    if(!products)
    {
        return null;
    }
    return (
        <div style={{height:'400px',backgroundColor:'white',overflowY:'auto'}}>
            {
                productdurations.map((item,index)=>(
                    <ProductItem key={index}>
                        <img src={item.product.assets.length > 0?item.product.assets[0].url:''} className="productlogo"></img>
                        <div className="content" style={{marginLeft:'15px',flex:1}}>
                            <div className="producttitle">{item.product.title}</div>
                            <div className="pricecontainer">
                                <span className="price">{item.product.price.formatted}</span>
                                <a className="cart" href={'/products/' + item.product.slug}>去買</a>
                            </div>
                        </div>
                    </ProductItem>
                ))
            }

            {
                (!loading && productdurations.length == 0) && products.map((item,index) => (
                    <ProductItem key={index}>
                        <img src={item.assets.length > 0?item.assets[0].url:''} className="productlogo"></img>
                        <div className="content" style={{marginLeft:'15px',flex:1}}>
                            <div className="producttitle">{item.title}</div>
                            <div className="pricecontainer">
                                <span className="price">{item.price.formatted}</span>
                                <a className="cart" href={'/products/' + item.slug}>去買</a>
                            </div>
                        </div>
                    </ProductItem>
                ))
            }
        </div>
    )
}