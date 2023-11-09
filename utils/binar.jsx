import { useState, useEffect } from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Binar() {
  const populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(
        timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
      );

      return {
        ...car,
        availableAt,
      };
    });
  };

  const listCars = async (filterer) => {
    let cars;
    let cachedCarsString = localStorage.getItem('CARS');

    if (!!cachedCarsString) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = populateCars(cacheCars);
    } else {
      const response = await fetch(
        'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
      );
      const body = await response.json();
      cars = populateCars(body);

      localStorage.setItem('CARS', JSON.stringify(cars));
    }

    if (filterer instanceof Function) return cars.filter(filterer);

    return cars;
  };

  return {
    listCars,
  };
}
