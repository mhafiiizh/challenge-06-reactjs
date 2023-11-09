/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

import React, { useState, useEffect } from 'react';
import { useCarContext } from '@/store/carContext';

import Image from 'next/image';

import 'bootstrap/dist/css/bootstrap.css';
import styles from './ShowCars.module.css';
import CarCard from './CarCard';
import Search from './Search';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

export default function ShowCars() {
  const { state, dispatch } = useCarContext();

  useEffect(() => {
    async function getCars() {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        dispatch({ type: 'SET_ERROR', payload: '' });

        const response = await fetch(
          'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
        );
        const data = await response.json();

        const filteredData = data.filter((car) => {
          const tanggalJemputData = new Date(car.availableAt).getTime();
          const tanggal = new Date(`${state.date} ${state.time}`).getTime();
          const checkWaktu = tanggalJemputData >= tanggal;
          const availableAt =
            state.driver === 'true' && car.available ? true : false;
          const notAvailableAt =
            state.driver === 'false' && !car.available ? true : false;
          const penumpang = car.capacity >= state.capacity;

          if (
            state.driver !== 'default' &&
            state.date !== '' &&
            state.time !== 'false' &&
            state.capacity >= 0
          ) {
            return (availableAt || notAvailableAt) && checkWaktu && penumpang;
          } else if (state.driver !== 'default' && state.capacity > 0) {
            return (availableAt || notAvailableAt) && penumpang;
          } else if (
            state.date !== '' &&
            state.time !== 'false' &&
            state.capacity > 0
          ) {
            return checkWaktu && penumpang;
          } else if (state.date !== '' && state.time !== 'false') {
            return checkWaktu;
          } else if (state.driver !== 'default') {
            return availableAt || notAvailableAt;
          } else {
            return penumpang;
          }
        });
        console.log(filteredData);

        dispatch({ type: 'SET_CARS', payload: filteredData });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }
    getCars();
  }, [state.driver, state.date, state.time, state.capacity]);

  function handleFilterCars() {
    const selectedDriver = document.getElementById('tipeDriver').value;
    const selectedDate = document.getElementById('tanggal').value;
    const selectedTime = document.getElementById('waktuJemput').value;
    const selectedCapacity = parseInt(
      document.getElementById('jumlahPenumpang').value
    );

    dispatch({ type: 'SET_DRIVER', payload: selectedDriver });
    dispatch({ type: 'SET_DATE', payload: selectedDate });
    dispatch({ type: 'SET_TIME', payload: selectedTime });
    dispatch({ type: 'SET_CAPACITY', payload: selectedCapacity });
  }

  return (
    <>
      <Search handleFilterCars={handleFilterCars} />
      <section className={styles.cars}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row" id="cars-container">
                {state.isLoading ? (
                  <Loader />
                ) : state.error ? (
                  <ErrorMessage message={state.error} />
                ) : (
                  state.cars.map((car, index) => (
                    <CarCard key={index} car={car} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
