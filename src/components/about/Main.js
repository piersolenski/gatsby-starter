import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Section from '../common/Section';
import Grid from '../common/Grid';
import { H2, P } from '../common/Typography';
import { max, min } from '../../utils/breakpoints';

const Spiel = styled.div`
  @media (${max('width', 'tablet')}) {
    grid-column: 1 / -1;
  }
  @media (${min('width', 'tablet')}) {
    grid-column: span 8;
  }
`;

const Aside = styled.aside`
  @media (${max('width', 'tablet')}) {
    grid-column: 1 / -1;
  }
  @media (${min('width', 'tablet')}) {
    grid-column: span 4;
  }
  ${H2} {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Feature = styled(P).attrs(() => ({
  as: 'li',
}))`
  margin: 0;
`;

export default function Main() {
  return (
    <Section>
      <Grid>
        <Spiel>
          <P>
            Lacinia facilisis metus tincidunt risus elit ridiculus tempor massa,
            interdum ultrices rutrum pharetra faucibus litora mi, augue ad
            vulputate erat facilisi mattis curae. Mattis mus libero ridiculus
            porta luctus amet senectus facilisi, tincidunt pulvinar lacinia
            rutrum ut netus est, dui volutpat ex malesuada molestie auctor
            integer.
          </P>
          <P>
            Odio senectus hendrerit ullamcorper penatibus phasellus fringilla
            ligula laoreet turpis non, nulla lorem commodo quisque mattis ad
            diam tempor dictumst volutpat, efficitur est adipiscing nisi nec
            maximus vehicula id eu. Integer id faucibus lorem amet finibus
            primis habitant accumsan phasellus nisi, aptent justo posuere ac vel
            mi eleifend ultrices fringilla diam commodo, leo per mus habitasse
            torquent lobortis maximus sapien viverra.
          </P>
          <P>
            Cubilia justo adipiscing laoreet phasellus malesuada facilisi
            viverra augue vestibulum congue nisl erat, consequat platea
            facilisis duis fames aliquam curae pharetra ornare ad cursus, fusce
            elementum tortor dictumst nam ullamcorper tellus nullam egestas nisi
            tincidunt.
          </P>
          <Button
            color="white"
            href="https://github.com/superfunkminister/gatsby-starter"
          >
            Read the docs
          </Button>
        </Spiel>
        <Aside>
          <ul css="margin: 0;">
            {[
              'Himenaeos in dis orci taciti',
              'Elementum id feugiat vehicula',
              'Iaculis ad sollicitudin',
              'Cursus dignissim volutpat ego',
              'Mus euismod luctus sodales',
              'Morbi primis ridiculus',
              'Volutpat diam mi justicus',
            ].map((feature, i) => (
              <Feature key={i}>{feature}</Feature>
            ))}
          </ul>
        </Aside>
      </Grid>
    </Section>
  );
}
