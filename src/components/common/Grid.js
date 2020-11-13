import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 4%;
  width: 92%;
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
  margin: auto;
`;
