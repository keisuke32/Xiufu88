import React from 'react';
import {CenterModal} from 'react-spring-modal';
import {ModalDialog} from './getlivestyle';
import {CloseIcon} from 'assets/icons/CloseIcon';

export const Dialog = ({isopen,setOpen,data,title,button,submit,selected,setSelected,multiple}) => {

    const selectitem = (id) => {
        if(multiple)
        {
            if(selected.indexOf(id) > -1)
            {
                selected.splice(selected.indexOf(id),1);
            }
            else
            {
                selected.push(id);
            }
        }
        else
        {
            if(selected == id)
            {
                selected = false;
            }
            else
            {
                selected = id;
            }
        }

        setSelected(selected);
    }
    return (
        <CenterModal isOpen={isopen} onRequestClose={()=>setOpen(false)}>
            <ModalDialog>
                <h1 className="title">
                    {title}
                </h1>
                <div className="listcontainer">
                    {
                        data.map((item, idx) => {
                            return (
                                <div key={idx} onClick={()=>selectitem(item.id)} className={selected.indexOf(item.id) > -1?'selected item':"item"}>
                                    {item.name}
                                    {
                                        selected.indexOf(item.id) > -1 && (
                                            <div className="masked">
                                                <CloseIcon width="8px" height="8px"/>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="buttoncontainer">
                    <button className="submit" onClick={submit}>{button}</button>
                    <button className="cancel" onClick={()=>setOpen(false)}>取消</button>
                </div>
            </ModalDialog>
        </CenterModal>
    )
}
