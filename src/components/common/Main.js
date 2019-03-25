import styled from 'styled-components';

const Main = styled.main`
  grid-column: wrapper-start / wrapper-end;
  @media (max-width: 499px) {
    padding: 24px 0;
  }
  @media (min-width: 500px) {
    padding: 48px 0;
  }
`;

export default Main;
