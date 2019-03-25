import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 0 0 24px;
  font-weight: bold;
  @media (max-width: 599px) {
    font-size: 24px;
  }
  @media (min-width: 600px) {
    font-size: 32px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  margin: 0 0 24px;
`;
