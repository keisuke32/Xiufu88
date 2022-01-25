import React from 'react';
import Head from 'next/head';

type SeoProps = {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    css?: string;
    js?: string;
    image?: string;
};

export const SEO: React.FC<SeoProps> = ({
                                            title,
                                            description,
                                            canonical,
                                            keywords,
                                            css,
                                            js,
                                            image,
                                        }) => (
    <Head>
        <title>{title}</title>
        <meta
            name="viewport"
            content="width=device-width,maximum-scale=1,initial-scale=1"
        />

        <meta name="title" content={title}/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>

        <meta property="og:type" content="website"/>
        <meta name="og:title" property="og:title" content={title}/>
        <meta
            name="og:description"
            property="og:description"
            content={description}
        />
        <meta property="og:site_name" content="JiTeng"/>
        <meta property="og:url" content={`${canonical || "jiteng.cn"}`}/>
        {image ? (
            <meta property="og:image" content={`${image}`}/>
        ) : (
            <meta
                property="og:image"
                content="http://d2egstjft38v2o.cloudfront.net/xiufu88/JiTeng_logo.png"
            />
        )}

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:site" content={`${canonical || "jiteng.cn"}`}/>
        {image && <meta name="twitter:image" content={`${image}`}/>}

        {canonical && <link rel="canonical" href={`${canonical}`}/>}
        <link rel="publisher" href="https://plus.google.com/+Shoclef"/>
        <meta name="robots"   content="index,follow" /> 
        <meta name="GOOGLEBOT"   content="index,follow" />

        {css && <link rel="stylesheet" href={`${css}`}/>}
        {js && <script type="text/javascript" src={`${js}`}></script>}
    </Head>
);
