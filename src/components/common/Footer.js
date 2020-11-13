import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import Github from '../icons/GitHub';
import Grid from './Grid';
import { Small } from './Typography';
import lock from '../../utils/lock';

const Wrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => darken(0.8, theme.colors.white)};
`;

const Inner = styled(Grid)`
  ${lock('height', '80px', '96px')};
  align-items: center;
`;

const Copyright = styled(Small)`
  grid-column: span 6;
`;

const Social = styled.a`
  color: ${({ theme }) => theme.colors.white};
  grid-column: span 6;
  justify-self: flex-end;
`;

export default function Footer({ title }) {
  return (
    <Wrapper>
      <Inner>
        <Copyright>
          &copy;&nbsp;
          {new Date().getFullYear()}
          &nbsp;
          {title}
        </Copyright>
        <Social href="https://github.com/superfunkminister/gatsby-starter">
          <Github />
        </Social>
      </Inner>
    </Wrapper>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};
