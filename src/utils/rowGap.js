import { css } from 'styled-components';

const rowGap = (gaps = 1, justify = 'start') => css`
  display: grid;
  row-gap: calc(var(--baseline) * ${gaps});
  justify-items: ${justify};
  align-content: baseline;
`;

export default rowGap;
