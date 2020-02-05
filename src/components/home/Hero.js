import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';

import Button from '../common/Button';
import Grid from '../common/Grid';
import { H1 } from '../common/Typography';
import fluidRange from '../../utils/fluidRange';
import { minWidth, maxWidth } from '../../utils/breakpoints';

const Wrapper = styled(Grid)`
  position: relative;
  align-items: center;
  ${fluidRange({
    prop: 'height',
    fromSize: '200px',
    toSize: '800px',
  })}
`;

const Img = styled(Image)`
  grid-column: full-bleed;
  object-fit: cover;
  position: absolute !important;
  height: 100%;
  width: 100%;
`;

const Intro = styled.div`
  color: ${({ theme }) => theme.colors.white};
  z-index: 5;
  filter: drop-shadow(0px 0px 0.5em rgba(0, 0, 0, 0.5));
  ${maxWidth('tablet')} {
    grid-column: col 1 / span 12;
  }
  ${minWidth('tablet')} {
    grid-column: col 1 / span 8;
  }
`;

export default function Hero({ image }) {
  return (
    <Wrapper>
      <Img fluid={image} />
      <Intro>
        <H1>A simple Gatsby Starter template</H1>
        <Button to="/about">About</Button>
      </Intro>
    </Wrapper>
  );
}

Hero.propTypes = {
  image: PropTypes.object.isRequired,
};
