import React from 'react';
import styled from 'styled-components';
import { fluidRange } from 'polished';

import Button from '../components/common/Button';
import Image from '../components/common/Image';
import Layout from '../components/common/Layout';
import Main from '../components/common/Main';
import SEO from '../components/common/Seo';
import { H1 } from '../components/common/Typography';

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
