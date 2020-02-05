import React from 'react';

import Layout from '../components/common/Layout';
import SEO from '../components/common/Seo';
import Main from '../components/about/Main';

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        description="All the features you could ever possibly want"
      />
      <Main />
    </Layout>
  );
}
