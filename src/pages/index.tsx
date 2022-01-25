import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {SEO} from "../components/seo";
import {siteMetadata} from "../site-settings/site-metadata";

// the redirect will only happen on the client-side. This is by design,
const IndexPage: React.FC<{}> = () => {
  useEffect(() => {
    Router.replace('/home', '/');
  });
  return (
    <SEO  title={siteMetadata.home.title} description={siteMetadata.home.description} />
  );
};

export default IndexPage;
