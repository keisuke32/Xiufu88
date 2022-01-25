import React, {useContext, useEffect, useState} from 'react';
import {SEO} from 'components/seo';
import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {Input} from "../components/forms/input";
import Dropdown from "../components/dropdown/dropdown";
import {FormattedMessage, useIntl} from "react-intl";
import Select from 'react-select'
import {Label} from "../components/forms/label";
import Dropzone from "react-dropzone-uploader";
import {DownloadIcon} from "../assets/icons/DownloadIcon";
import {Button} from "../components/button/button";
import {useRouter} from "next/router";
import MobileHeader from "../layouts/header/mobile-header";
import {useAppState} from "../contexts/app/app.provider";
import useIssues, {addIssue, useIssueCategories} from "../data/use-support";
import {AuthContext} from "../contexts/auth/auth.context";
import {toast} from "react-toastify";
import {ProfileContext} from "../contexts/profile/profile.context";
import useUser from "../data/use-user";
import PhoneInput from "react-phone-input-2";

import 'react-phone-input-2/lib/style.css'
import cn from 'react-phone-input-2/lang/cn.json'
import Cookie from "js-cookie";
import {Plus} from "../assets/icons/Plus";
import Table from "rc-table";
import {textAlign} from "styled-system";

export default function SupportPage({deviceType}) {
    console.log(deviceType)
    const intl = useIntl();
    const router = useRouter();
    const isSticky = useAppState('isSticky');
    const {authState: {isAuthenticated, token}} = React.useContext<any>(AuthContext);
    const [formSubmit, setFormSubmit] = useState(1);
    const [checkedIssues, setCheckedIssues] = useState([]);

    useEffect(() => {
        if (isAuthenticated) {
            setFormSubmit(0)
        } else {
            setFormSubmit(1)
        }
    }, [isAuthenticated])

    const {data, error, loading} = useIssueCategories();
    let supportType = [];
    if (!loading && data) {
        supportType = data?.map((item) => {
            return {value: item.id, label: item.name, notifyEmails: item.notifyEmails}
        })
    }

    const [content, setContent] = useState({
        name: '',
        phone: '',
        email: '',
        urgency: null,
        message: '',
        category: null,
        attachments: [],
    });

    const {user, error: userError} = useUser();

    const localSetting = Cookie.get('locale');

    useEffect(() => {
        if (user) {
            let new_content = JSON.parse(JSON.stringify(content));
            new_content = {...new_content, name: user.name, email: user.email, phone: user.phone};
            setContent(new_content);
        }
    }, [user])

    const supportUrgency = [
        {value: "CRITICAL", label: intl.formatMessage({id: "support.urgency.1", defaultMessage: "立即關注"})},
        {value: "HIGH", label: intl.formatMessage({id: "support.urgency.2", defaultMessage: "高級優先"})},
        {value: "NORMAL", label: intl.formatMessage({id: "support.urgency.3", defaultMessage: "中級優先"})},
        {value: "Low", label: intl.formatMessage({id: "support.urgency.4", defaultMessage: "低優先級"})}
    ]

    const checkIssue = (idx, value) => {
        let newChecked = new Array(checkedIssues.length)
        for (let i = 0; i < newChecked.length; i++) {
            newChecked[i] = i == idx ? value : checkedIssues[i];
        }
        setCheckedIssues(newChecked)
    }

    const {data: issues} = useIssues({token})

    useEffect(() => {
        let newChecked = new Array(issues?.length)
        for (let idx = 0; idx < newChecked.length; idx++) {
            newChecked[idx] = false;
        }
        setCheckedIssues(newChecked)
    }, [issues])

    const historyTableColumns = [
        {
            title: '',
            dataIndex: 'check',
            key: 'check',
            render: idx => <div className="custom-control custom-checkbox select-issues">
                <input
                    id={"select-issue-" + idx}
                    name={"select-issue-" + idx}
                    type="checkbox"
                    className="custom-control-input"
                    checked={checkedIssues[idx]}
                    onChange={(e) => checkIssue(idx, !checkedIssues[idx])}

                />
                <label htmlFor={"select-issue-" + idx}
                       className="custom-control-label"/>
            </div>
        },
        {
            title: intl.formatMessage({
                id: 'support.urgency',
                defaultMessage: 'Urgency',
            }),
            dataIndex: 'urgency',
            key: 'urgency',
        },
        {
            title: intl.formatMessage({
                id: 'support.type',
                defaultMessage: 'Topic',
            }),
            dataIndex: 'topic',
            key: 'topic',
        },
        {
            title: intl.formatMessage({
                id: 'support.date',
                defaultMessage: 'date',
            }),
            dataIndex: 'date',
            key: 'date',
        }
    ];
    const historyData = issues?.map((item, idx) => {

        return {
            key: item.id,
            check: idx,
            urgency: supportUrgency.find(urgency => urgency.value == item.urgency).label,
            topic: item.category.name,
            date: '111'
        }

    })

    const getuploadparams = ({meta, file}) => {
        let formdata = new FormData();
        formdata.append('files', file);
        return {
            url: 'https://recording.shoclef.com/uploadfile',
            body: formdata
        }
    }

    const inputContent = (
        <AttachmentPlaceholder key="AttachmentPlaceholder">
            <DownloadIcon/>
            <FormattedMessage id="support.attachment.placeholder" defaultMessage="放下附件"/>
        </AttachmentPlaceholder>
    )

    const handleContent = (value, item) => {
        let new_content = JSON.parse(JSON.stringify(content));
        new_content[item] = value;
        setContent(new_content);
    }

    const submit = (e) => {
        if (content.name != '' && content.email != '' && content.phone != '' && content.urgency != null && content.category != null && content.message != '') {
            addIssue({
                attachments: content.attachments,
                name: content.name,
                email: content.email,
                phone: content.phone,
                message: content.message,
                category: content.category.value,
                urgency: content.urgency.value,
                token: token
            })
                .then((res) => {
                    if (res.state === 'success') {
                        setFormSubmit(2);
                    }
                })
                .catch((err) => {
                    toast.error(intl.formatMessage({
                        id: "support.failed",
                        defaultMessage: "Contact Failed"
                    }), {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                    });
                })
        }
    }
    const createTicket = () => {
        setFormSubmit(1);
    }

    const returnHome = (e) => {
        // router.push('/');
        setFormSubmit(formSubmit - 1);
    }
    const getCheckedState = (s = false) => {
        return checkedIssues.filter(item => item == s).length == 0;
    }
    const checkAllIssues = () => {
        const checkedState = getCheckedState();
        let newChecked = new Array(issues.length)
        for (let idx = 0; idx < newChecked.length; idx++) {
            newChecked[idx] = !checkedState;
        }
        setCheckedIssues(newChecked)
    }
    const deleteTickets = () => {

    }

    return (
        <>
            <SEO title="Support" description="Support"/>
            <MobileHeader className={isSticky ? 'sticky' : 'unSticky'}
                          livestream={router.pathname.includes('/shoplive')} enableheader={true}/>
            <Title>
                <FormattedMessage id="support.title" defaultMessage="Submit a support ticket"/>
            </Title>
            {formSubmit == 0 &&
            <HistoryForm>
                <CreateButton>
                    <Button type="button" onClick={createTicket}>
                        <Plus width="16px" height="16px"/>
                        <FormattedMessage id="support.create" defaultMessage="建立新支持工单"/>
                    </Button>
                </CreateButton>
                <TableControl>
                    <div className="custom-control custom-checkbox select-all-issues">
                        <input
                            id="select-all"
                            name="select-all"
                            type="checkbox"
                            className="custom-control-input"
                            checked={getCheckedState()}
                            onChange={() => checkAllIssues()}

                        />
                        <label htmlFor="select-all"
                               className="custom-control-label"><FormattedMessage
                            id="support.tickets.selectAll"
                            defaultMessage="Select All"/></label>
                    </div>
                    {!getCheckedState(true) &&
                    <Button variant="text" type="button" onClick={deleteTickets} s>
                        <FormattedMessage id="support.tickets.delete" defaultMessage="Delete"/>
                    </Button>
                    }
                </TableControl>
                <HistoryTable>
                    <Table
                        data={historyData}
                        columns={historyTableColumns}
                        emptyText={<div style={{textAlign: "center"}}>
                            <FormattedMessage id="support.nodata" defaultMessage="No Data"/>
                        </div>}
                    />
                </HistoryTable>
            </HistoryForm>
            }
            {formSubmit == 1 &&
            <SupportForm>
                <SupportDetail>
                    <Label>
                        <FormattedMessage id="support.name" defaultMessage="Name"/>
                    </Label>
                    <Input value={content.name} onChange={(e) => handleContent(e.target.value, 'name')} required/>
                </SupportDetail>
                <SupportDetail>
                    <Label>
                        <FormattedMessage id="support.mobile" defaultMessage="Phone"/>
                    </Label>
                    <PhoneInput
                        country='cn'
                        value={content.phone}
                        onChange={(e) => handleContent(e, 'phone')}
                        placeholder={intl.formatMessage({
                            id: 'login.phone_placeholder',
                            defaultMessage: 'Phone'
                        })}
                        localization={localSetting == 'zn' && cn}
                    />
                </SupportDetail>
                <SupportDetail>
                    <Label>
                        <FormattedMessage id="support.email" defaultMessage="Email"/>
                    </Label>
                    <Input type="email" value={content.email} onChange={(e) => handleContent(e.target.value, 'email')}/>
                </SupportDetail>
                <SupportDropDown>
                    <Label htmlFor="urgency">
                        <FormattedMessage id="support.urgency" defaultMessage="紧急程度"/>
                    </Label>
                    <Select
                        options={supportUrgency}
                        placeholder={intl.formatMessage({
                            id: "support.urgency.placeholder",
                            defaultMessage: "Choose urgency"
                        })}
                        defaultValue={content.urgency}
                        onChange={(e) => handleContent(e, 'urgency')}
                    />
                </SupportDropDown>
                <SupportDropDown>
                    <Label htmlFor="type">
                        <FormattedMessage id="support.type" defaultMessage="类型"/>
                    </Label>
                    <Select
                        options={supportType}
                        placeholder={intl.formatMessage({
                            id: "support.type.placeholder",
                            defaultMessage: "Choose Topic"
                        })}
                        defaultValue={content.category}
                        onChange={(e) => handleContent(e, 'category')}
                    />
                </SupportDropDown>
                <SupportDetail>
                    <Label>
                        <FormattedMessage id="support.detail" defaultMessage="详细写出您的担忧"/>
                    </Label>
                    <textarea rows={8} onChange={(e) => handleContent(e.target.value, 'message')}
                              value={content.message}/>
                </SupportDetail>
                <SupportAttachment>
                    <Label>
                        <FormattedMessage id="support.attachment" defaultMessage="附件可选 "/>
                    </Label>
                    <Dropzone
                        // onChangeStatus={handlechangestatus}
                        getUploadParams={getuploadparams}
                        accept="image/*"
                        styles={{
                            dropzone: {
                                overflow: 'auto',
                                border: '1px solid ${themeGet("colors.gray.700")}',
                                background: "themeGet('colors.gray.200')",
                                minHeight: '120px',
                            }
                        }}
                        inputContent={inputContent}
                        inputWithFilesContent={intl.formatMessage({
                            id: "support.attachment.add",
                            defaultMessage: "Add Files"
                        })}
                        canCancel={true}
                        autoUpload={true}
                    />
                </SupportAttachment>
                <ButtonGroup>
                    {isAuthenticated &&
                    <Button type="button" onClick={returnHome}>
                        <FormattedMessage id="support.submit.back" defaultMessage="返回"/>
                    </Button>
                    }
                    <Button type="button" onClick={submit}>
                        <FormattedMessage id="support.submit" defaultMessage="提交"/>
                    </Button>
                </ButtonGroup>
            </SupportForm>
            }
            {formSubmit == 2 &&
            <SupportSuccess>
                <div>
                    <FormattedMessage id="support.submit.success" defaultMessage="成功提交支持工單。我们会儘快回复你。"/>
                </div>
                <Button type="button" onClick={returnHome}>
                    <FormattedMessage id="support.submit.complete" defaultMessage="完成"/>
                </Button>
            </SupportSuccess>
            }
        </>
    );
}

const Title = styled.div`
    font-size: ${themeGet('fontSizes.md', '19')}px;
    font-weight: ${themeGet('fontWeights.body', '400')};
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid ${themeGet('colors.gray.700')};
    width: 50%;
    margin: 50px auto 0 auto;
    
    @media (max-width: 990px){
        width: 80%;
        margin: 40px auto 0 auto;
    }
    @media (max-width: 480px){
        width: 90%;
        margin: 20px auto 0 auto;
    }
`;
const HistoryForm = styled.div`
    width: 40%;
    margin: 40px auto;
    .select-issues{
        label::before {
            border-radius: 50%;
        }
    }
    .select-all-issues{
        label::before {
            border-radius: 50%;
        }
    }
    label {
        font-size: ${themeGet('fontSizes.base')}px;
    }
    
    @media (max-width: 1280px){
        width: 50%;
        margin: 40px auto 40px auto;
    }
    @media (max-width: 990px){
        width: 70%;
        margin: 20px auto 150px auto;
    }
    @media (max-width: 640px){
        width: 80%;
        margin: 20px auto 150px auto;
    }
    @media (max-width: 480px){
        width: 90%;
        margin: 20px auto 150px auto;
    }
    
`;
const SupportForm = styled.div`
    width: 40%;
    margin: 40px auto;
    label {
        font-size: ${themeGet('fontSizes.placeholder', '16')}px;
    }
    button {
        margin: 0 auto;
    }
    
    @media (max-width: 1280px){
        width: 60%;
        margin: 60px auto 40px auto;
    }
    @media (max-width: 990px){
        width: 70%;
        margin: 60px auto 100px auto;
    }
    @media (max-width: 640px){
        width: 80%;
        margin: 60px auto 100px auto;
    }
    @media (max-width: 480px){
        width: 90%;
        margin: 60px auto 100px auto;
    }
`;

const SupportDropDown = styled.div`
    padding: 10px 10px 20px 10px;
`;

const SupportDetail = styled.div`
    padding: 10px 10px 20px 10px;
    textarea {
        width: 100%;
        border: 1px solid ${themeGet('colors.gray.700')};
    }
    
    input {
        min-height: 38px;
    }
    
    .react-tel-input input {
        width: 100%;
    }
`;

const SupportAttachment = styled.div`
    padding: 10px 10px 20px 10px;
    .dzu-inputLabel {
        color: ${themeGet('colors.gray.900')};
        font-weight: ${themeGet('fontWeights.regular')};
    }
`;

const AttachmentPlaceholder = styled.div`
    line-height: 2rem;
    svg {
        margin-right: 10px;
    }
`;

const SupportSuccess = styled.div`
    width: 40%;
    margin: 40px auto;
    div {
       text-align: center;
       padding: 40px;
    }
    
    button {
        margin: 0 auto;
    }
    
    @media (max-width: 1280px){
        width: 60%;
        margin: 60px auto 40 auto;
    }
    @media (max-width: 990px){
        width: 70%;
        margin: 60px auto 40 auto;
    }
    @media (max-width: 640px){
        width: 80%;
        margin: 60px auto 40 auto;
    }
    @media (max-width: 480px){
        width: 90%;
        margin: 60px auto 40 auto;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    width: 200px;
    margin: 0 auto;
}
`;
const CreateButton = styled.div`
    display: block;
    @media (max-width: 999px){
        padding: 20px 0;
        position: fixed;
        bottom: 60px;
        left: 0;
        width: 100%;
        background: white;
        z-index: 999;
    }
    button {
        border-radius: 20px;
        font-size: ${themeGet('fontSizes.placeholder')}px;
        margin-left: auto;   
        @media (max-width: 480px){
            font-size: ${themeGet('fontSizes.sm')}px;
        }
        @media (max-width: 990px){
            margin-left: 50%;
            transform: translateX(-50%);
        }
        svg {
            margin-right: 5px;
        }
    }
`;

const TableControl = styled.div`
    display: flex;
    
    .custom-checkbox {
        margin: auto 0;
    }
    
    button {
        margin-left: 20px;
        color: ${themeGet('colors.black')};
        font-weight: ${themeGet('fontWeights.regular')};
        height: 100%;
    }
`;

const HistoryTable = styled.div`
    margin-top: 20px;
    .rc-table th {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid ${themeGet('colors.gray.800')};
        background: ${themeGet('colors.gray.500')};
        text-align: left;
    }
    .rc-table td {
        border: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid ${themeGet('colors.gray.800')};
        background: none;

    }

`;
