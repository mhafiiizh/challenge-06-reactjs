/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */

import React, { createContext, useReducer, useContext } from 'react';

const CarContext = createContext();

const initialState = {
  driver: 'default',
  date: '',
  time: 'false',
  capacity: 0,
  cars: [],
  isLoading: true,
  error: '',
};

const carReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DRIVER':
      return { ...state, driver: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_TIME':
      return { ...state, time: action.payload };
    case 'SET_CAPACITY':
      return { ...state, capacity: action.payload };
    case 'SET_CARS':
      return { ...state, cars: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};

export { CarProvider, useCarContext };
