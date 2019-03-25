import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Footer = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      <span>{siteTitle}</span>
      <span>
        &copy;
        {new Date().getFullYear()}
      </span>
    </Inner>
  </Wrapper>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
