import React from 'react';
import {AddProductlistContainer,ProductCard} from './getlivestyle';
import {CheckMark} from 'assets/icons/CheckMark';
import {CloseIcon} from 'assets/icons/CloseIcon';

export const AddProductList = ({data = [],title='请选择商品',selected,setSelected,added = false}) => {

    const select = (id) => {
        if(added)
        {
            return;
        }
        if(selected.indexOf(id) > -1)
        {
            selected.splice(selected.indexOf(id),1);
        }
        else
        {
            selected.push(id);
        }


        setSelected(selected);
    }

    const deleteitem = (id) => {
        let list = [];
        for(let item in data)
        {
            list.push(data[item].id);
        }

        list.splice(list.indexOf(id),1);
        setSelected(list);
    }

    return (
        <AddProductlistContainer>
            <h1 className="title">{title}</h1>
            <div className="productcontainer">
            {
                data.map((item)=>{
                    return (
                        <ProductCard key={item.id} style={{border:selected.indexOf(item.id)> -1?'3px solid #EF3900':'1px solid #E0E0E0'}} onClick={()=>select(item.id)}>
                            <div className="image" style={{backgroundImage:`url('${item.assets.length > 0?item.assets[0].url:''}')`}}></div>
                            <div className="price"> {item.price.formatted}</div>
                            <div className="description">{item.description}</div>
                            {
                                (selected.indexOf(item.id) > -1 && !added) && (
                                    <div className="mask"><CheckMark/></div>
                                )
                            }
                            {
                                added && (
                                    <div className="mask" onClick={()=>deleteitem(item.id)}><CloseIcon/></div>
                                )
                            }
                            
                        </ProductCard>
                    )
                })
            }
            </div>
        </AddProductlistContainer>
    )
}