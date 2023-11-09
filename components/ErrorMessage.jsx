/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */

import React from 'react';

import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return <p className={styles.error}>Error : {message}</p>;
}
