import styled from 'styled-components';
import lock from 'utils/lock';

export default styled.div`
  ${lock('max-width', '280px', '1800px')};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 4%;
  margin: auto;
`;
