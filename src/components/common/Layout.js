import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../utils/globalStyles';
import theme from '../../utils/theme';
import Header from './Header';
import Footer from './Footer';

const Grid = styled.div`
  display: grid;
  grid-template-columns:
    [start] minmax(2%, 1fr) [wrapper-start] repeat(12, minmax(0, 100px))
    [wrapper-end] minmax(2%, 1fr) [end];
  grid-column-gap: 2%;
`;

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
      render={data => (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Grid>
              <Header siteTitle={data.site.siteMetadata.title} />
              {children}
              <Footer siteTitle={data.site.siteMetadata.title} />
            </Grid>
          </>
        </ThemeProvider>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
