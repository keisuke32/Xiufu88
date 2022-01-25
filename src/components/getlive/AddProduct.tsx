import React,{useState,useEffect} from 'react';
import {CenterModal} from 'react-spring-modal';
import {ProductModal,TabList,AddButton} from './getlivestyle';
import {AddProductList} from './AddProductList';

interface Props{
    open:boolean;
    setOpen?:any;
    selected:Array<String>;
    setSelected?:any;
    data:Array<any>;
}

export const AddProduct:React.FC<Props> = ({open,setOpen,selected,setSelected,data}) => {
    const [state,setState] = useState({
        tab:0,
        selectedItem:[],
        releaseditem:[]
    })

    useEffect(()=>{
        setState({
            ...state,
            releaseditem:selected
        })
    },[selected,open])


    const additems = () => {
        let released = []
        for(let item in state.selectedItem)
        {
            if(state.releaseditem.indexOf(state.selectedItem[item]) == -1)
            {
                released.push(state.selectedItem[item]);
            }
        }

        setState(state=>{
            return {
                ...state,
                selectedItem:[],
                releaseditem:[...released,...state.releaseditem]
            }
        });
    }

    const getdata = () => {
        let datalist = [];
        for(let item in data)
        {
            if(state.releaseditem.indexOf(data[item].id) > -1)
            {
                datalist.push(data[item]);
            }
        }

        return datalist;
    }

    return (
        <CenterModal isOpen={open} onRequestClose={()=>setOpen(false)}>
            <ProductModal>
                <h1 className="title" style={{marginBottom:'35px'}}>添加商品</h1>
                <TabList>
                    <li className={state.tab == 0?'select':''} onClick={()=>setState(state=>({...state,tab:0}))}>已发佈</li>
                    <li className={state.tab == 1?'select':''} onClick={()=>setState(state=>({...state,tab:1}))}>新商品</li>
                </TabList>
                <AddProductList data={data} selected={state.selectedItem} setSelected={(selectitem)=>setState(state=>({...state,selectedItem:selectitem}))}></AddProductList>
                <div style={{display:'flex',marginTop:'23px',marginBottom:'63px'}}>
                    <AddButton style={{marginLeft:'auto'}} onClick={additems}>加入商品</AddButton>
                </div>
                {/* <AddProductList data={selected} title="已添加商品  3/50"></AddProductList> */}
                <AddProductList data={getdata()} selected={state.releaseditem} setSelected={(selectitem)=>{setState({...state,releaseditem:selectitem})}} added={true}></AddProductList>
                <div style={{display:'flex',marginTop:'52px'}}>
                    <span className="submit" onClick={()=>{setOpen(false);setSelected(state.releaseditem)}}>确认</span>
                    <span className="cancel" onClick={()=>setOpen(false)}>取消</span>
                </div>
                
            </ProductModal>
        </CenterModal>
    )
}