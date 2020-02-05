import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../utils/globalStyles';
import theme from '../../utils/theme';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              author
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer author={data.site.siteMetadata.author} />
        </ThemeProvider>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
