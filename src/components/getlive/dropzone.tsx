import Dropzone from 'react-dropzone-uploader';
import {initializeApollo} from 'utils/apollo';
import {addAssetsurl} from 'graphql/mutation/asset';
export default function VideoUploader()
{
    const apollo = initializeApollo();
    const recordingserver = "https://recording.shoclef.com";
    console.log('access_token',localStorage.getItem('access_token'));
    const getuploadparams = ({meta,file}) => {
        let formdata = new FormData();
        formdata.append('files',file);
        return {
            url:'https://recording.shoclef.com/uploadfile',
            body:formdata
        }
    }

    const handlechangestatus = (filemeta,status) => {
        if(status == 'done')
        {
            let data = JSON.parse(filemeta.xhr.response);
            console.log(filemeta);
            if(data.length > 0)
            {
                apollo.mutate({mutation:addAssetsurl,variables:{path:recordingserver + "/getfile?fileid=" + data[0],filename:filemeta.meta.name}}).catch(err=>console.log(err));
            }
        }
    }

    return (
        <Dropzone
            onChangeStatus={handlechangestatus}
            getUploadParams={getuploadparams}
            accept="video/*"
            styles={{
                dropzone:{overflow: 'auto', border: '1px solid #999', background: '#f5f5f5',minHeight:'350px'}
            }}
            canCancel={true}
            autoUpload={true}
        ></Dropzone>
    )
}