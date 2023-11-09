/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import React from 'react';

import Image from 'next/image';
import styles from './Service.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Service() {
  return (
    <section id={styles.ourServices}>
      <div className="container d-flex h-100">
        <div className="row d-flex align-items-center justify-content-center">
          <div
            className={`col-md-6 d-flex justify-content-center py-5 ${styles.servicesLeftSide}`}
          >
            <Image
              src="/images/img-index/img-service.png"
              alt="Our Services Image"
              width={459}
              height={428}
            />
          </div>
          <div className={`col-md-5 ${styles.servicesRightSide}`}>
            <h3 className={styles.servicesTitle}>
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h3>
            <p className={styles.descText}>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceContainer}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{
                    color: '#cfd4ed',
                    backgroundColor: '#0d28a6',
                    borderRadius: '13px',
                  }}
                />
                <p className={styles.listText}>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </div>
              <div className={styles.serviceContainer}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{
                    color: '#cfd4ed',
                    backgroundColor: '#0d28a6',
                    borderRadius: '13px',
                  }}
                />
                <p className={styles.listText}>
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
              </div>
              <div className={styles.serviceContainer}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{
                    color: '#cfd4ed',
                    backgroundColor: '#0d28a6',
                    borderRadius: '13px',
                  }}
                />
                <p className={styles.listText}>
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
              </div>
              <div className={styles.serviceContainer}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{
                    color: '#cfd4ed',
                    backgroundColor: '#0d28a6',
                    borderRadius: '13px',
                  }}
                />
                <p className={styles.listText}>
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
              </div>
              <div className={styles.serviceContainer}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{
                    color: '#cfd4ed',
                    backgroundColor: '#0d28a6',
                    borderRadius: '13px',
                  }}
                />
                <p className={styles.listText}>
                  Layanan Airport Transfer / Drop In Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
