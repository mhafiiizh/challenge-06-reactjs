/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';

import styles from './RentBanner.module.css';

export default function RentBanner() {
  return (
    <div className={styles.rentContainer}>
      <div className={styles.rentBanner}>
        <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.rentBtn}>
          <a href="rent.html" className="rent-btn">
            Mulai Sewa Mobil
          </a>
        </div>
      </div>
    </div>
  );
}
