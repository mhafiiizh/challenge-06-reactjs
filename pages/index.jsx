/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */

'use client';

import { useEffect } from 'react';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Service from '../components/Service';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import RentBanner from '../components/RentBanner';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../public/styles/custom-bootstrap.css';
import Head from 'next/head';

export default function LandingPage() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  });

  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Binar Car Rental | Landing Page</title>
      </Head>
      <Nav />
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <RentBanner />
      <Faq />
      <Footer />
    </>
  );
}
