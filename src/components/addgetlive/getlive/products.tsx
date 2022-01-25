import React,{useEffect, useState} from 'react'
import {Main,Button} from '../mobile.style'
import {ArrowPrev} from 'assets/icons/ArrowPrev'
import {CheckIcon} from 'assets/icons/Check'
export default function Products({productlist,settype,submit,setSubmit})
{
    const [products,setproducts] = useState(submit.products)

    useEffect(()=>{
        setproducts(submit.products)
    },[submit.products])

    const selectproduct = (id) => {
        let product = [...products]
        if(product.indexOf(id) > -1)
        {
            product.splice(product.indexOf(id),1)
        }
        else
        {
            product.push(id)
        }

        setproducts(product)
    }
    return (
        <div style={{display:'flex',flexDirection:'column',height:'100vh'}}>
            <Main>
                <div className="header">
                    <span style={{cursor:'pointer',color:'#747474'}} onClick={()=>settype('')}>
                        <ArrowPrev/>
                    </span>
                    <h4 className="title">添加商品</h4>
                    <span style={{width:'18px'}}></span>
                </div>
                <div style={{marginTop:'30px',flex:1,overflow:'hidden'}}>
                    {
                        productlist.map((item)=>{
                            return (
                                <div className="rowitem">
                                    <div className={products.indexOf(item.id)>-1?"checkbox checked":'checkbox'} onClick={()=>selectproduct(item.id)}>
                                        {
                                            products.indexOf(item.id) > -1 && (
                                                <CheckIcon width="12px" height="12px"/>
                                            )
                                        }
                                    </div>
                                    <img src={item.thumbnail.url}/>
                                    <div className="content">
                                        <p className="title">{item.title}</p>
                                        <p className="price">{item.price.formatted}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Main>
            <div style={{background:'#F2F2F2',padding:'15px',display:'flex'}}>
                <Button style={{marginLeft:'auto',marginRight:'5px'}} onClick={()=>settype('')}>取消</Button>
                <Button style={{color:'white',backgroundColor:'#FA4C4C'}} onClick={()=>{setSubmit({...submit,products}); settype('')}}>确认</Button>
            </div>
        </div>
    )
}