import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Trailers from '@sections/Trailers';
import Contact from '@sections/Contact';

import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <ChakraProvider>
      <Navbar />
      <Header />
      <About />
      <Trailers />
      <Contact />
      <Footer />
    </ChakraProvider>
  </Layout>
);

export default IndexPage;
