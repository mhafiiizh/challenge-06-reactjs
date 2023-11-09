/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './CarCard.module.css';

export default function CarCard({ car }) {
  return (
    <div className="col-lg-4 my-2">
      <div className={`${styles.card} card px-2 py-4`}>
        <img src={car.image} className={styles.cardImg} alt={car.manufacture} />
        <div className="card-body">
          <h5 className="card-title">
            {car.manufacture}/{car.model}
          </h5>
          <h5 className="card-title">Rp {car.rentPerDay} / hari</h5>
          <p className={styles.cars__p}>{car.description}</p>
          <div className="row">
            <div className="col-1">
              <Image
                src="/images/fi_users1.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="col-10 ms-lg-2">{car.capacity} orang</div>
          </div>
          <div className="row mt-2">
            <div className="col-1">
              <Image
                src="/images/fi_settings.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="col-10 ms-lg-2">{car.transmission}</div>
          </div>
          <div className="row mt-2 mb-4">
            <div className="col-1">
              <Image
                src="/images/fi_calendar.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="col-10 ms-lg-2">Tahun {car.year}</div>
          </div>
          <Link href="#" className={styles.goBtn} style={{ width: '100%' }}>
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
}
