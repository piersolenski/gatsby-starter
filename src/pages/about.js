import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/common/Layout';
import Main from '../components/common/Main';
import SEO from '../components/common/Seo';
import { H1, P } from '../components/common/Typography';

export default function About() {
  return (
    <Layout>
      <Main>
        <SEO
          title="About"
          description="A longer description of the about page."
        />
        <H1>About</H1>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          consectetur nisi ex, nec cursus turpis eleifend sed. Proin ornare
          ullamcorper eleifend. In laoreet efficitur imperdiet. Suspendisse
          porttitor semper eros ut pharetra. Praesent faucibus dictum nulla sed
          ornare. Nulla semper eu lorem vel sagittis. Curabitur auctor odio
          nunc, a luctus nibh consectetur et. Vestibulum et condimentum lectus,
          in imperdiet nisi. Proin faucibus quis nunc sed suscipit. Nulla
          facilisi. Vestibulum sit amet felis blandit, fringilla quam nec,
          egestas risus.
        </P>

        <P>
          Sed in ex non tellus malesuada imperdiet. Nunc eu est nec velit
          consequat ornare id vitae erat. Integer rhoncus auctor blandit. Donec
          venenatis arcu non purus ornare interdum. Aliquam dignissim luctus
          bibendum. Sed ullamcorper faucibus libero, a faucibus diam posuere eu.
          Nullam eget tempus nulla. Maecenas eget sollicitudin est, sit amet
          mollis est. Maecenas sollicitudin nisl at metus finibus finibus. Proin
          dignissim turpis sapien. Maecenas non lacinia justo. Fusce lacinia
          auctor pharetra. Proin a justo id mauris consectetur sollicitudin.
        </P>

        <P>
          Morbi placerat pharetra arcu id cursus. Mauris maximus dui vitae
          sapien hendrerit bibendum. Sed porttitor sem nec iaculis laoreet.
          Fusce eget enim suscipit risus condimentum maximus. Praesent porta,
          dui id pretium placerat, nisi leo hendrerit leo, et elementum orci
          nunc sit amet turpis. Integer porttitor ipsum sed egestas malesuada.
          Nulla dictum ante quis quam volutpat facilisis.
        </P>

        <P>
          Etiam fermentum vehicula arcu, nec auctor nulla vulputate a. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Donec nec diam tincidunt est finibus euismod.
          Proin a porta metus. In ut nibh a est bibendum mollis. Duis sed odio
          magna. In maximus risus erat, mattis mattis enim porttitor vitae. In
          et ex vel arcu tempor ultricies eu eget erat. Sed mollis arcu et
          gravida gravida.
        </P>

        <P>
          Aliquam consectetur porttitor mauris ac pulvinar. Etiam in varius
          neque, non convallis nibh. Etiam id porttitor felis. Mauris at mi
          nunc. Sed et risus faucibus, congue enim a, efficitur nisi. In
          volutpat metus in egestas volutpat. Vivamus bibendum massa
          sollicitudin placerat consequat. Aenean quis tempus nisi.
        </P>
        <P>
          Morbi placerat pharetra arcu id cursus. Mauris maximus dui vitae
          sapien hendrerit bibendum. Sed porttitor sem nec iaculis laoreet.
          Fusce eget enim suscipit risus condimentum maximus. Praesent porta,
          dui id pretium placerat, nisi leo hendrerit leo, et elementum orci
          nunc sit amet turpis. Integer porttitor ipsum sed egestas malesuada.
          Nulla dictum ante quis quam volutpat facilisis.
        </P>

        <P>
          Etiam fermentum vehicula arcu, nec auctor nulla vulputate a. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Donec nec diam tincidunt est finibus euismod.
          Proin a porta metus. In ut nibh a est bibendum mollis. Duis sed odio
          magna. In maximus risus erat, mattis mattis enim porttitor vitae. In
          et ex vel arcu tempor ultricies eu eget erat. Sed mollis arcu et
          gravida gravida.
        </P>

        <P>
          Aliquam consectetur porttitor mauris ac pulvinar. Etiam in varius
          neque, non convallis nibh. Etiam id porttitor felis. Mauris at mi
          nunc. Sed et risus faucibus, congue enim a, efficitur nisi. In
          volutpat metus in egestas volutpat. Vivamus bibendum massa
          sollicitudin placerat consequat. Aenean quis tempus nisi.
        </P>
        <P>
          Morbi placerat pharetra arcu id cursus. Mauris maximus dui vitae
          sapien hendrerit bibendum. Sed porttitor sem nec iaculis laoreet.
          Fusce eget enim suscipit risus condimentum maximus. Praesent porta,
          dui id pretium placerat, nisi leo hendrerit leo, et elementum orci
          nunc sit amet turpis. Integer porttitor ipsum sed egestas malesuada.
          Nulla dictum ante quis quam volutpat facilisis.
        </P>

        <P>
          Etiam fermentum vehicula arcu, nec auctor nulla vulputate a. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Donec nec diam tincidunt est finibus euismod.
          Proin a porta metus. In ut nibh a est bibendum mollis. Duis sed odio
          magna. In maximus risus erat, mattis mattis enim porttitor vitae. In
          et ex vel arcu tempor ultricies eu eget erat. Sed mollis arcu et
          gravida gravida.
        </P>

        <P>
          Aliquam consectetur porttitor mauris ac pulvinar. Etiam in varius
          neque, non convallis nibh. Etiam id porttitor felis. Mauris at mi
          nunc. Sed et risus faucibus, congue enim a, efficitur nisi. In
          volutpat metus in egestas volutpat. Vivamus bibendum massa
          sollicitudin placerat consequat. Aenean quis tempus nisi.
        </P>
        <Link to="/">Go back to the homepage</Link>
      </Main>
    </Layout>
  );
}
