import "../styles/globals.scss";
import React from "react";
import { Layout } from "@components/index";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>TNT&apos;s Websites </title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
