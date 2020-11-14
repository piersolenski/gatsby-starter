import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from 'components/common/Grid';
import lock from 'utils/lock';
import { min, max } from 'utils/breakpoints';
import rowGap from 'utils/rowGap';

const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.black};
  background: linear-gradient(
    45deg,
    ${({ fromColor, toColor }) => `${fromColor}, ${toColor}`}
  );
`;

const Inner = styled(Grid)`
  ${lock('max-height', '300px', '700px')};
  height: 75vh;
  align-items: center;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.black};
  ${rowGap(1)};
  @media (${max('width', 'tablet')}) {
    grid-column: span 12;
  }
  @media (${min('width', 'tablet')}) {
    grid-column: span 9;
  }
`;

export default function Hero({
  children,
  fromColor = '#ff437f',
  toColor = '#ffbf93',
}) {
  return (
    <Wrapper fromColor={fromColor} toColor={toColor}>
      <Inner>
        <Content>{children}</Content>
      </Inner>
    </Wrapper>
  );
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  fromColor: PropTypes.string,
  toColor: PropTypes.string,
};
