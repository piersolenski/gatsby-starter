import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ROUTES = [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }];

const Wrapper = styled.header`
  grid-column: wrapper-start / wrapper-end;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 499px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  font-size: 21px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: inline-grid;
  grid-auto-flow: column;
  grid-gap: 4vw;
`;

export default function Header({ siteTitle }) {
  return (
    <Wrapper>
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
