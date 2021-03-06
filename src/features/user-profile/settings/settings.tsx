import React, {useContext, useState, useRef} from 'react';
import {Camera} from "react-camera-pro";

import {
    SettingsForm,
    SettingsFormContent,
    HeadingSection,
    SettingsContainer,
    InformationContent,
    InformationItem,
    UserAvatarSection,
    AvatarButtonGroup,
    UserAvatarContent,
    MainAvatarContent,
    MainAvatar,
    ExtraAvatarContent,
    ExtraAvatarGrid,
    ExtraAvatar160,
    ExtraAvatar60,
    ExtraAvatar30,
} from './settings.style';
import {FormattedMessage, useIntl} from 'react-intl';

import {AuthContext} from "contexts/auth/auth.context";

import PhoneInput from "react-phone-input-2";
import Cookie from "js-cookie";
import cn from 'react-phone-input-2/lang/cn.json'
import {ProfileContext} from "contexts/profile/profile.context";
import DefaultAvatar from "assets/images/user.jpg";

import {UploadIcon} from "assets/icons/UploadIcon";
import {TakePhotoIcon} from "assets/icons/TakePhotoIcon";
import {updateUserPhoto} from "../../../data/use-user";
import {updateUserInfo} from "../../../data/use-auth";
import nameInitials from 'name-initials';

type SettingsContentProps = {
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const SettingsContent: React.FC<SettingsContentProps> = ({ deviceType }) => {

    const intl = useIntl();
    const {authState: {isAuthenticated, phone, token}} = React.useContext<any>(AuthContext);

    if(!isAuthenticated || phone == ''){
        return <div>loading...</div>
    }

    const { state, dispatch } = useContext(ProfileContext);

    const localSetting = Cookie.get('locale');
    const camera = useRef(null)
    const [photoType, setPhotoType] = useState(false);
    const [sectionNumber, setSectionNumber] = useState(0);
    const [avatar, setAvatar] = useState(state?.photo?.url || null);
    const [avatarFile, setAvatarFile] = useState(null);

    const [gender, setGender] = useState(state?.gender || "MALE");
    const [name, setName] = useState(state?.name || "");
    const handleChangeSettingSection = (sectionNumber) => {
        setSectionNumber(sectionNumber)
    }

    const handleChangeAvatar = (e) => {
        if (!photoType && e.target) {
            setAvatar(URL.createObjectURL(e.target.files[0]))
            setAvatarFile(e.target.files[0]);
        }
    }

    const handleChangePhotoType = (type) => {
        setPhotoType(type);

        if (type && camera?.current?.getNumberOfCameras())
            setAvatar(camera?.current?.takePhoto())
    }

    const handleSaveAvatar =  async () => {
        if(avatarFile){
            const profileAsset = await updateUserPhoto(avatarFile, token);
            if (profileAsset && profileAsset?.id){
                const updatedUser = await updateUserInfo({photo: profileAsset.id, token: token});
                if(updatedUser){
                    dispatch({type: 'SET_USER_PROFILE', payload: {photo: {id: profileAsset.id, url: profileAsset.url}}});
                    console.log(state);
                }
            }
        }
    }

    const handleSaveProfile = async () => {
        const updatedUser = await updateUserInfo({gender: gender, name:name, token: token});
        if(updatedUser){
            dispatch({type: 'SET_USER_PROFILE', payload: {name: name, gender: gender}});
        }
    }

    return (
        <SettingsForm>
            <SettingsFormContent>
                <HeadingSection>
                    <li className={sectionNumber==0?"current-page":""} onClick={() => handleChangeSettingSection(0)}><FormattedMessage id="profile.setting.basic-information" defaultMessage="????????????" /></li>
                    <li className={sectionNumber==1?"current-page":""} onClick={() => handleChangeSettingSection(1)}><FormattedMessage id="profile.setting.profile-avatar" defaultMessage="????????????" /></li>
                </HeadingSection>
                {
                    sectionNumber==0?(
                        <SettingsContainer>
                            <div className="setting-note">
                                <FormattedMessage id="profile.setting.dear" defaultMessage="?????????" />
                                <span className="profile-name">{state.name}</span>,
                                <FormattedMessage id="profile.setting.note" defaultMessage="??????????????????????????????????????????????????????" />
                            </div>
                            <InformationContent>
                                <InformationItem>
                                    <span><FormattedMessage id="profile.setting.profile-avatar.profile-avatar" defaultMessage="???????????????" /></span>
                                    <div className="profile-avatar">
                                        {state?.photo ?
                                            <img className="avatar" src={state.photo?state.photo.url:""} alt="streamer" />
                                            :
                                            <div className="avatar" style={{backgroundColor: state?.color?.background, color: state?.color?.text, width: '100%', textAlign:'center'}}>{nameInitials(state?.name ?? "")}</div>
                                        }
                                    </div>
                                </InformationItem>
                                <InformationItem>
                                    <span className="require"><FormattedMessage id="profile.setting.profile-nickname" defaultMessage="?????????" /></span>
                                    <div className="profile-nickname">
                                        <div className="profile-input-group">
                                            <input type="text" defaultValue={state.name} />
                                        </div>
                                        <span className="note"><FormattedMessage id="profile.setting.profile-nickname.note" defaultMessage="*?????????????????????????????????????????????????????????????????????????????????????????????" /></span>
                                    </div>
                                </InformationItem>
                                <InformationItem>
                                    <span className="require"><FormattedMessage id="profile.setting.profile-realname" defaultMessage="???????????????" /></span>
                                    <div className="profile-input-group profile-realname">
                                        <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </InformationItem>
                                <InformationItem>
                                    <span className="require"><FormattedMessage id="profile.setting.profile-gender" defaultMessage="?????????" /></span>
                                    <div className="profile-input-group profile-gender">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="male" name="gender" className="custom-control-input" checked={gender === 'MALE' } onChange={() => setGender('MALE')}/>
                                            <label className="custom-control-label" htmlFor="male"><FormattedMessage id="profile.setting.profile-gender.male" defaultMessage="???" /></label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="female" name="gender" className="custom-control-input"  checked={gender === 'FEMALE' } onChange={() => setGender('FEMALE')} />
                                            <label className="custom-control-label" htmlFor="female"><FormattedMessage id="profile.setting.profile-gender.female" defaultMessage="???" /></label>
                                        </div>
                                    </div>
                                </InformationItem>
                                <InformationItem>
                                    <span className="require"><FormattedMessage id="profile.setting.profile-phone" defaultMessage="???????????????" /></span>
                                    <div className="profile-input-group profile-phone">
                                        <PhoneInput
                                            country='cn'
                                            placeholder={intl.formatMessage({
                                                id: 'login.phone_placeholder',
                                                defaultMessage: 'Phone'
                                            })}
                                            value={state.phone}
                                            localization={localSetting !== 'en' && cn}
                                        />
                                    </div>
                                </InformationItem>
                                <InformationItem>
                                    <span><FormattedMessage id="profile.setting.profile-residence" defaultMessage="????????????" /></span>
                                    <div className="profile-input-group profile-residence">
                                        <input type="text" style={{width: '60%'}} defaultValue={state.address?.city} />
                                    </div>
                                </InformationItem>
                                <InformationItem>
                                    <span><FormattedMessage id="profile.setting.profile-hometown" defaultMessage="?????????" /></span>
                                    <div className="profile-input-group profile-hometown">
                                        <input type="text" style={{width: '60%'}} defaultValue={state.address?.street} />
                                    </div>
                                </InformationItem>
                            </InformationContent>
                            <button className="btn btn-danger px-4 mt-2" onClick={handleSaveProfile}>
                                <FormattedMessage id="profileSaveBtn" defaultMessage="??????" />
                            </button>
                        </SettingsContainer>
                    ):(
                        <SettingsContainer>
                            <UserAvatarSection>
                                <AvatarButtonGroup>
                                    <label htmlFor="avatar-uploader" className="btn btn-outline-secondary" style={{margin: 0}} onClick={() => handleChangePhotoType(false)}>
                                        <UploadIcon />
                                        <FormattedMessage id="profile.avatar.local-upload" defaultMessage="????????????" />
                                        <input id="avatar-uploader" type="file" style={{display: 'none'}} onChange={handleChangeAvatar} accept={"image/*"}/>
                                    </label>
                                    <button type="button" className="btn btn-outline-secondary ml-2" onClick={() => handleChangePhotoType(true)}>
                                        <TakePhotoIcon />
                                        <FormattedMessage id="profile.avatar.take-photo" defaultMessage="????????????" />
                                    </button>
                                </AvatarButtonGroup>
                                <UserAvatarContent>
                                    {
                                        photoType ?
                                            <Camera
                                                ref={camera}
                                                aspectRatio={1}
                                                errorMessages={{
                                                    noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
                                                    permissionDenied: 'Permission denied. Please refresh and give camera permission.',
                                                    switchCamera:
                                                        'It is not possible to switch camera to different one because there is only one video device accessible.',
                                                    canvas: 'Canvas is not supported.',
                                                }}
                                            />
                                            :
                                            <MainAvatarContent>
                                                <p><FormattedMessage id="profile.avatar.note" defaultMessage="?????????JPG, GIF, PNG??????????????????????????????5M???" /></p>
                                                <MainAvatar>
                                                    <p><FormattedMessage id="profile.avatar.note1" defaultMessage="?????????????????????????????????" /></p>
                                                    <p><FormattedMessage id="profile.avatar.note2" defaultMessage="???????????????????????????????????????????????????????????????" /></p>
                                                    <p><FormattedMessage id="profile.avatar.note3" defaultMessage="??????????????????????????????????????????????????????" /></p>
                                                    <img src={avatar} alt=""/>
                                                </MainAvatar>
                                            </MainAvatarContent>
                                    }
                                    <ExtraAvatarContent>
                                        <p><FormattedMessage id="profile.avatar.note4" defaultMessage="???????????????????????????????????????????????? ?????????????????????????????????????????????" /></p>
                                        <ExtraAvatarGrid>
                                            <ExtraAvatar160>
                                                <p><FormattedMessage id="profile.avatar.note5" defaultMessage="?????????????????? ???????????????" /></p>
                                                <img src={avatar} alt=""/>
                                                <p><FormattedMessage id="profile.avatar.note6" defaultMessage="??????????????? 160x160??????" /></p>
                                            </ExtraAvatar160>
                                            <div className="d-flex flex-column justify-content-around h-75 ">
                                                <ExtraAvatar60>
                                                    <p><FormattedMessage id="profile.avatar.note5" defaultMessage="?????????????????? ???????????????" /></p>
                                                    <img src={avatar} alt=""/>
                                                </ExtraAvatar60>
                                                <p><small><FormattedMessage id="profile.avatar.note7" defaultMessage="??????????????? 60x60??????" /></small></p>
                                                <ExtraAvatar30>
                                                    <p><FormattedMessage id="profile.avatar.note5" defaultMessage="?????????????????? ???????????????" /></p>
                                                    <img src={avatar} alt=""/>
                                                </ExtraAvatar30>
                                                <p><small><FormattedMessage id="profile.avatar.note8" defaultMessage="??????????????? 30x30??????" /></small></p>
                                            </div>
                                        </ExtraAvatarGrid>
                                    </ExtraAvatarContent>
                                </UserAvatarContent>
                            </UserAvatarSection>
                            <button className="btn btn-danger px-4 mt-2" onClick={handleSaveAvatar}>
                                <FormattedMessage id="profileSaveBtn" defaultMessage="??????" />
                            </button>
                        </SettingsContainer>
                    )
                }
            </SettingsFormContent>
        </SettingsForm>
    );
};

export default SettingsContent;
