// import S3 from 'react-aws-s3';

// const config = {
//     region:'ap-east-1',
//     accessKeyId:'AKIAQ2QKLKSPM6NEE7E2',
//     secretAccessKey:"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",
//     bucketName:"shoclef-hk-user-assets-prod",
//     s3Url:'https://d2egstjft38v2o.cloudfront.net/'
// }


// const ReactS3Client = new S3(config);

// export const fileupload = (file,filename = new Date().getTime() + '.png') => {
//     return new Promise((resolve,reject)=>{
//         ReactS3Client.uploadFile(file,filename).then(data=>{
//             resolve(data.location);
//         })
//         .catch(err=>reject(err))
//     })
// }


import AWS from 'aws-sdk'
import { PutObjectRequest } from 'aws-sdk/clients/s3'

const config = {
    region:'ap-east-1',
    accessKeyId:'AKIAQ2QKLKSPM6NEE7E2',
    secretAccessKey:"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",
    bucketName:"shoclef-hk-user-assets-prod",
    s3Url:'https://d2egstjft38v2o.cloudfront.net/'
}

AWS.config.update({
    accessKeyId:config.accessKeyId,
    secretAccessKey:config.secretAccessKey
})

export const fileupload = (file,filename = new Date().getTime() + '.png') => {
    return new Promise((resolve,reject)=>{
        const bucket = new AWS.S3({
            params:{Bucket:config.bucketName},
            region:config.region
        })

        const params:PutObjectRequest = {
            ACL:"public-read",
            Key:filename,
            ContentType:'.png',
            Body:file,
            Bucket:config.bucketName
        }

        bucket.upload(params).send((err,data)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data.Location)
            }
        })
    })
    
}