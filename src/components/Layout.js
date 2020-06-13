import React from 'react';

import '../css/style.scss';

import Seo from './Seo';
import Header from './Header';
import DoughCalculator from './DoughCalculator';
import Footer from './Footer';

const Layout = () => (
  <>
    <Seo />
    <Header />
    <DoughCalculator />
    <Footer />
  </>
);

export default Layout;
