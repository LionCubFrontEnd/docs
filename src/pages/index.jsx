import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <>
      <Head>
        <meta title="小狮子前端编程成长圈" />
        <meta property="og:title" content="小狮子前端编程成长圈" />
        <meta
          property="og:description"
          content="小狮子前端编程成长圈 🚀"
        />
        <meta
          property="description"
          content="小狮子前端编程成长圈 🚀"
        />
        <link rel="canonical" href="https://docs.yangchaoyi.vip/" />
      </Head>
      <Redirect to="/docs/home/introduction" />
    </>
  );
}
