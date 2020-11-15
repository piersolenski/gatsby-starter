import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import lock from 'utils/lock';
import { P } from 'components/common/Typography';
import Grid from 'components/common/Grid';

const ROUTES = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

const Inner = styled(Grid)`
  ${lock('height', '80px', '96px')};
  align-items: center;
`;

const Logo = styled(Link)`
  ${lock('font-size', '17px', '19px')};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  grid-column: 1 / span 6;
  justify-self: flex-start;
`;

const Nav = styled.nav`
  grid-column: 7 / span 6;
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 3.8vw;
  justify-self: end;
  color: ${({ theme }) => theme.colors.white};
`;

export default function Header({ siteTitle }) {
  return (
    <header>
      <Inner>
        <Logo to="/">{siteTitle}</Logo>
        <Nav>
          {ROUTES.map((route) => (
            <P as={Link} key={route.path} to={route.path}>
              {route.name}
            </P>
          ))}
        </Nav>
      </Inner>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};
