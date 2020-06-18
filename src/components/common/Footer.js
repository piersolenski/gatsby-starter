import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Github from '../icons/GitHub';

import Grid from './Grid';

const Wrapper = styled(Grid)`
  grid-column: full-bleed;
  height: 96px;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.purple};
`;

const Copyright = styled.p`
  grid-column: col 1 / span 6;
`;

const Social = styled.a`
  grid-column: col 7 / span 6;
  justify-self: flex-end;
`;

export default function Footer({ title }) {
  return (
    <Wrapper as="footer">
      <Copyright>
        &copy;&nbsp;
        {new Date().getFullYear()}
        &nbsp;
        {title}
      </Copyright>
      <Social href="https://github.com/superfunkminister/gatsby-starter">
        <Github />
      </Social>
    </Wrapper>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};
