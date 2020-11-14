import React from 'react';

import Layout from 'components/common/Layout';
import SEO from 'components/common/Seo';
import Hero from 'components/common/Hero';
import Button from 'components/common/Button';
import { H1 } from 'components/common/Typography';
import Main from 'components/home/Main';

export default function Index() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="A simple starter project to get up and developing quickly with Gatsby."
      />
      <Hero>
        <H1>Dolor sociosqu curae mi torquent a phasellus class primis.</H1>
        <Button size="large" color="black" to="/about">
          Read more
        </Button>
      </Hero>
      <Main />
    </Layout>
  );
}
