/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
'use client';

import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Head from 'next/head';

import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ShowCars from '../components/ShowCars';
import { CarProvider } from '../store/carContext';

export default function Cars() {
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
        <title>BCR - Binar Car Rental</title>
      </Head>
      <Nav />
      <Hero />
      <CarProvider>
        <ShowCars />
      </CarProvider>
      <Footer />
    </>
  );
}
