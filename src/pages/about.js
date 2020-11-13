import React from 'react';

import Layout from '../components/common/Layout';
import SEO from '../components/common/Seo';
import Hero from '../components/common/Hero';
import Main from '../components/about/Main';
import { H1 } from '../components/common/Typography';

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        description="Metus ligula montes enim risus sapien taciti ullamcorper semper ornare, tortor molestie torquent porttitor massa ante quis nisl."
      />
      <Hero fromColor="#b32cf1" toColor="#2269f2">
        <H1>Lacus ridiculus massa commodo convallis.</H1>
      </Hero>
      <Main />
    </Layout>
  );
}
