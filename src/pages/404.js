import React from 'react';

import Layout from 'components/common/Layout';
import SEO from 'components/common/Seo';
import Button from 'components/common/Button';
import Hero from 'components/common/Hero';
import { H1 } from 'components/common/Typography';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Not found" />
      <Hero fromColor="#2ef17f" toColor="#5fb4ca">
        <H1>Page not found</H1>
        <Button color="black" to="/">
          Back to home
        </Button>
      </Hero>
    </Layout>
  );
}
