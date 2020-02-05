import styled from 'styled-components';
import fluidRange from '../../utils/fluidRange';

export default styled.section`
  display: grid;
  grid-column-gap: 2.5vw;
  grid-template-columns:
    [full-bleed-start] minmax(2.5vw, 1fr) [main-start] repeat(
      12,
      [col] minmax(0, 100px)
    )
    [main-end] minmax(2.5vw, 1fr) [full-bleed-end];
  grid-row-gap: 5vw;
    ${({ padded }) =>
      padded &&
      fluidRange({
        prop: 'padding-top',
        fromSize: '30px',
        toSize: '100px',
      })}
  }
  ${({ padded }) =>
    padded &&
    fluidRange({
      prop: 'padding-bottom',
      fromSize: '30px',
      toSize: '100px',
    })}
`;
