/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Hero.module.css';
import '../public/images/Mercedes Car EQC 300kW Edition.png';

export default function Hero() {
  const isHomePage = useRouter().pathname === '/';

  return (
    <section id={styles.hero}>
      <div className="container d-flex pt-md-5 h-100">
        <div className="row d-flex align-items-center justify-content-center">
          <div className={`col-md-6 py-5 ${styles.heroLeftSide}`}>
            <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
            <p className={styles.descText}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {isHomePage && (
              <div className={styles.rentBtn}>
                <Link href="/cars" className={styles.rentBtn}>
                  Mulai Sewa Mobil
                </Link>
              </div>
            )}
          </div>
          <div className={`col-md-6 ${styles.heroRightSide}`}>
            <img
              src="/images/img_car.png"
              alt="Mercedes Car EQC 300kW Edition"
              className="imgHero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
