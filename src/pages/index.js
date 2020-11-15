import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/common/Layout';
import SEO from 'components/common/Seo';
import Hero from 'components/common/Hero';
import Button from 'components/common/Button';
import { H1 } from 'components/common/Typography';
import Main from 'components/home/Main';

export default function Index({ data }) {
  return (
    <Layout>
      <SEO title="Home" description={data.site.siteMetadata.description} />
      <Hero>
        <H1>{data.site.siteMetadata.description}</H1>
        <Button size="large" color="black" to="/about">
          Read more
        </Button>
      </Hero>
      <Main />
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

Index.propTypes = {
  data: PropTypes.object.isRequired,
};
