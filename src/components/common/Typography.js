import styled from 'styled-components';

import fluidRange from '../../utils/fluidRange';

export const H1 = styled.h1`
  margin: 0 0 1.5rem;
  line-height: 1.2em;
  font-weight: bold;
  ${fluidRange({
    prop: 'font-size',
    fromSize: '41.89px',
    toSize: '109.66px',
  })};
`;

export const H2 = styled.h2`
  margin: 0 0 1.5rem;
  font-weight: bold;
  ${fluidRange({
    prop: 'font-size',
    fromSize: '25.89px',
    toSize: '41.89px',
  })};
`;

export const P = styled.p`
  margin: 0 0 1.5rem;
  line-height: 1.6em;
  ${fluidRange({
    prop: 'font-size',
    fromSize: '16px',
    toSize: '21px',
  })};
  &:last-child {
    margin-bottom: 0;
  }
`;
