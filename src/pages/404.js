import React from 'react';

import Layout from '../components/common/Layout';
import SEO from '../components/common/Seo';
import Main from '../components/404/Main';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Not found" />
      <Main />
    </Layout>
  );
}
