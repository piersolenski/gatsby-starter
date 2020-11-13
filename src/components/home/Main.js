import React from 'react';
import styled from 'styled-components';

import Section from '../common/Section';
import Grid from '../common/Grid';
import { H2, P } from '../common/Typography';
import { max, min } from '../../utils/breakpoints';

const Item = styled.div`
  text-align: center;
  @media (${max('width', 'tablet')}) {
    grid-column: span 12;
  }
  @media (${min('width', 'tablet')}) {
    grid-column-end: span 4;
  }
  ${H2} {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function Main() {
  return (
    <Section>
      <Grid>
        <Item>
          <H2>Partur pharetra nostra</H2>
          <P>
            Bibendum ad nunc arcu vestibulum nisi vulputate nullam erat aliquet
            quisque hac, imperdiet aptent quis iaculis sociosqu enim potenti
            tempus ex parturient, morbi litora.
          </P>
        </Item>
        <Item>
          <H2>Feugiat integer incept</H2>
          <P>
            Libero malesuada auctor torquent feugiat laoreet turpis habitant
            consequat aenean rhoncus, ligula ac phasellus ullamcorper nostra eu
            porttitor himenaeos non.
          </P>
        </Item>
        <Item>
          <H2>Nascet montes ex</H2>
          <P>
            Fusce arcu fermentum inceptos purus est in mollis vestibulum
            eleifend donec a fringilla luctus, potenti eget vehicula tempus
            risus pharetra iaculis amet sapien senectus curae.
          </P>
        </Item>
      </Grid>
    </Section>
  );
}
