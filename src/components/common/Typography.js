import styled from 'styled-components';

import lock from '../../utils/lock';

export const H1 = styled.h1`
  margin: 0 0 1.5rem;
  line-height: 1.2em;
  font-weight: bold;
  ${lock('font-size', '32px', '62px')};
`;

export const H2 = styled.h2`
  margin: 0 0 1.5rem;
  font-weight: bold;
  ${lock('font-size', '21px', '24px')};
`;

export const P = styled.p`
  margin: 0 0 1.5rem;
  line-height: 1.6em;
  ${lock('font-size', '15px', '17px')};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Small = styled.p`
  line-height: 1.6em;
  margin: 0;
  ${lock('font-size', '13px', '15px')};
`;
