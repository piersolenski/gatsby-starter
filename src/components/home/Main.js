import React from 'react';
import styled from 'styled-components';

import Grid from '../common/Grid';
import { H2, P } from '../common/Typography';
import { maxWidth, minWidth } from '../../utils/breakpoints';

const Item = styled.div`
  ${maxWidth('tablet')} {
    grid-column: col 1 / span 12;
  }
  ${minWidth('tablet')} {
    grid-column-end: span 4;
    &:first-child {
      grid-column-start: col 1;
    }
  }
`;

export default function Main() {
  return (
    <Grid padded>
      <Item>
        <H2>Modern web tech</H2>
        <P>
          Enjoy the power of the latest web technologies – React.js, Webpack,
          modern JavaScript and CSS and more — all set up and waiting for you to
          start building.
        </P>
      </Item>
      <Item>
        <H2>Your own data</H2>
        <P>
          Gatsby’s rich data plugin ecosystem lets you build sites with the data
          you want — from one or many sources: Pull data from headless CMSs,
          SaaS services, APIs, databases, your file system, and more directly
          into your pages using GraphQL.
        </P>
      </Item>
      <Item>
        <H2>Super fast</H2>
        <P>
          Gatsby.js builds the fastest possible website. Instead of waiting to
          generate pages when requested, pre-build pages and lift them into a
          global cloud of servers — ready to be delivered instantly to your
          users wherever they are.
        </P>
      </Item>
    </Grid>
  );
}
