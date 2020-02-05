import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/common/Layout';
import SEO from '../components/common/Seo';
import Hero from '../components/home/Hero';
import Main from '../components/home/Main';

export default function Index({ data }) {
  return (
    <Layout>
      <SEO
        title="Get started with Gatsby"
        description="A simple starter project to get up and developing quickly with Gatsby."
      />
      <Hero image={data.heroImage.childImageSharp.fluid} />
      <Main />
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
