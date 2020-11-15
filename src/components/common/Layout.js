import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyles from 'utils/globalStyles';
import theme from 'utils/theme';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <ThemeProvider theme={theme}>
          <Helmet>
            {/* If you are using Google Fonts, consider using https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/ */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer title={data.site.siteMetadata.title} />
        </ThemeProvider>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
