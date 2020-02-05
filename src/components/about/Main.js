import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Grid from '../common/Grid';
import { H1, H2, P } from '../common/Typography';
import { maxWidth, minWidth } from '../../utils/breakpoints';

const features = [
  'Gatsby',
  'Styled Components',
  'Polished',
  'ESLint',
  'SVGR',
  'Sitemap generation',
  'Google Analytics',
];

const Features = styled.div`
  ${maxWidth('tablet')} {
    grid-column: col 1 / span 12;
  }
  ${minWidth('tablet')} {
    grid-column: col 1 / span 8;
  }
`;

const Aside = styled.aside`
  ${maxWidth('tablet')} {
    grid-column: col 1 / span 12;
  }
  ${minWidth('tablet')} {
    grid-column: col 9 / span 4;
  }
`;

const Feature = styled(P)`
  margin: 0;
`;

export default function Main() {
  return (
    <Grid padded>
      <Features>
        <H1>About</H1>
        <P>
          Gatsby.js is Internet Scale. Forget complicated deploys with databases
          and servers and their expensive, time-consuming setup costs,
          maintenance, and scaling fears. Gatsby.js builds your site as “static”
          files which can be deployed easily on dozens of services.
        </P>
        <P>
          Do not build a website with last decade’s tech. The future of the web
          is mobile, JavaScript and APIs—the
          <a href="https://jamstack.org/">JAMstack</a>. Every website is a web
          app and every web app is a website. Gatsby.js is the universal
          JavaScript framework you’ve been waiting for.
        </P>
        <P>
          Gatsby.js is a PWA (Progressive Web App) generator. You get code and
          data splitting out-of-the-box. Gatsby loads only the critical HTML,
          CSS, data, and JavaScript so your site loads as fast as possible. Once
          loaded, Gatsby prefetches resources for other pages so clicking around
          the site feels incredibly fast.
        </P>
        <P>
          Enjoy the power of the latest web technologies – React.js , Webpack ,
          modern JavaScript and CSS and more — all set up and waiting for you to
          start building.
        </P>
        <Button href="https://github.com/superfunkminister/gatsby-starter">
          Read Me
        </Button>
      </Features>
      <Aside>
        <H2>Features</H2>
        <ul>
          {features.map((feature, i) => (
            <Feature key={i} as="li">
              {feature}
            </Feature>
          ))}
        </ul>
      </Aside>
    </Grid>
  );
}
