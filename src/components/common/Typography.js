import styled from 'styled-components';
import lock from 'utils/lock';

export const H1 = styled.h1`
  ${lock('font-size', '32px', '72px')};
  line-height: 1.2em;
  font-weight: bold;
  letter-spacing: -0.025em;
`;

export const H2 = styled.h2`
  ${lock('font-size', '19px', '24px')};
  font-weight: bold;
  line-height: 1.4em;
`;

export const P = styled.p`
  ${lock('font-size', '15px', '17px')};
  line-height: 1.6em;
`;

export const Small = styled.p`
  ${lock('font-size', '13px', '15px')};
  line-height: 1.5em;
`;
