import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Github from '../icons/GitHub';

const Wrapper = styled.footer`
  grid-column: start / end;
  background: ${({ theme }) => theme.colors.purple};
  display: inherit;
  grid-template-columns: inherit;
  grid-gap: inherit;
  grid-column: start / end;
`;

const Inner = styled.div`
  grid-column: wrapper-start / wrapper-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  color: ${({ theme }) => theme.colors.white};
`;

export default function Footer({ siteTitle }) {
  return (
    <Wrapper>
      <Inner>
        <span>
          &copy;
          {siteTitle}
          &nbsp;
          {new Date().getFullYear()}
        </span>
        <a href="https://github.com/superfunkminister/gatsby-starter">
          <Github />
        </a>
      </Inner>
    </Wrapper>
  );
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
};
