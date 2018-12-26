import React from 'react';
import styled from 'styled-components';
import { fluidRange } from 'polished';

import Button from '../components/Button';
import Image from '../components/Image';
import Layout from '../components/Layout';
import Main from '../components/Main';
import SEO from '../components/Seo';
import { H1 } from '../components/Typography';

const Hero = styled.div`
  background: #ddd;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: start / end;
  font-size: 21px;
  font-weight: bold;
  ${fluidRange(
    {
      prop: 'height',
      fromSize: '200px',
      toSize: '600px',
    },
    '400px',
    '1400px'
  )}
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `react`, `digital`]} />
    <Hero>Hero</Hero>
    <Main>
      <H1>
        A simple starter project to get up and developing quickly with Gatsby.
      </H1>
      <Button to="/about">Check out another page.</Button>
      <div style={{ maxWidth: `300px` }}>
        <Image />
      </div>
    </Main>
  </Layout>
);

export default IndexPage;
