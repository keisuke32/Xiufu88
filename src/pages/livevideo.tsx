import React,{useState} from 'react';
import {Modal} from '@redq/reuse-modal';
import {LeftSidebar} from '../components/getlive/LeftSidebar';
import {MainContainer,Card,VideoUpload} from '../components/getlive/getlivestyle';
import {GetStaticProps} from 'next';
import axios from 'axios';
import {UploadDialog} from '../components/getlive/UploadDialog';

const recording_url = "https://recording.shoclef.com";

export default function LiveVideo()
{
    const [open,setOpen] =  useState(false);
    return (
        <Modal>
            <div style={{display:'flex',marginTop:'110px',paddingTop:'20px'}}>
                <LeftSidebar></LeftSidebar>
                <MainContainer>
                    <Card>
                        <div className="card-body">
                            <VideoUpload>
                                <div>
                                    <h1 className="title">发佈短视频</h1>
                                    <p className="info_video">你可以马上录製短视频，或上传现成的视频， 并附上商品推广。</p>
                                    <div className="upload_buttons">
                                        <div className="upload_container">
                                            <h1 className="upload_title">录影短视频</h1>
                                            <div className="upload_button" onClick={()=>window.location.href = '/addgetlive'}>开始录製</div>
                                        </div>
                                        <div className="upload_container">
                                            <h1 className="upload_title">上传短视频</h1>
                                            <div className="upload_button" onClick={()=>setOpen(true)}>开始上传</div>
                                        </div>
                                    </div>
                                    <div style={{marginTop:'72px'}}>
                                        <h1 className="title">发佈帮助</h1>
                                        <ul className="list">
                                            <li>发佈视频规範</li>
                                            <li>注意事项</li>
                                            <li>发佈流程教学</li>
                                        </ul>
                                    </div>
                                </div>
                            </VideoUpload>
                        </div>
                    </Card>
                </MainContainer>
                <UploadDialog isopen={open} setopen={setOpen}></UploadDialog>
            </div>
        </Modal>
    )
}
