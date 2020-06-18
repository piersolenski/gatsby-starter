import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Grid from '../common/Grid';
import { H1, P } from '../common/Typography';

const Features = styled.div`
  grid-column: col 1 / span 12;
  display: grid;
  justify-items: center;
  padding: 12vh 0;
`;

export default function Main() {
  return (
    <Grid padded>
      <Features>
        <H1>404</H1>
        <P>Page not found!</P>
        <Button to="/">Go home</Button>
      </Features>
    </Grid>
  );
}
