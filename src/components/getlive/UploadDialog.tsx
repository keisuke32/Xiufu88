import React from 'react';
import {CenterModal} from 'react-spring-modal';
import {ModalDialog} from './getlivestyle';
import VideoUpload from './dropzone';

export const UploadDialog = ({isopen,setopen}) => {
    return (
        <CenterModal isOpen={isopen} onRequestClose={()=>setopen(false)}>
            <ModalDialog>
                <h1 className="title"> 影片上传</h1>
                <p>这将自动保存到云中</p>
                <div style={{marginTop:'15px'}}>
                    <VideoUpload/>
                </div>
                <div className="buttoncontainer">
                    <div className="submit" style={{marginLeft:'auto'}} onClick={()=>setopen(false)}>确认</div>
                </div>
            </ModalDialog>
        </CenterModal>
    )
}