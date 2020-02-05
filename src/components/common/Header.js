import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';

const ROUTES = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }];

const Wrapper = styled(Grid)`
  height: 96px;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 21px;
  font-weight: bold;
  grid-column: col / span 6;
`;

const Nav = styled.nav`
  grid-column: col 7 / span 6;
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 4vw;
  justify-self: end;
`;

export default function Header({ siteTitle }) {
  return (
    <Wrapper as="header">
      <Logo to="/">{siteTitle}</Logo>
      <Nav>
        {ROUTES.map(route => (
          <Link key={route.path} to={route.path}>
            {route.name}
          </Link>
        ))}
      </Nav>
    </Wrapper>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};
