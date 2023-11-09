/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';

import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section id={styles.whyUs}>
      <div className={styles.container}>
        <div className={styles.wuText}>
          <h3 className={styles.h3Title}>Why Us?</h3>
          <p className={styles.descText}>
            Mengapa harus pilih Binar Car Rental?
          </p>
        </div>
        <div className={styles.wuContainer}>
          <div className={styles.wuCard}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#F9CC00" />
              <path
                d="M11.8334 24.3333H9.33335C8.89133 24.3333 8.4674 24.1577 8.15484 23.8452C7.84228 23.5326 7.66669 23.1087 7.66669 22.6667V16.8333C7.66669 16.3913 7.84228 15.9674 8.15484 15.6548C8.4674 15.3423 8.89133 15.1667 9.33335 15.1667H11.8334M17.6667 13.5V10.1667C17.6667 9.50362 17.4033 8.86773 16.9345 8.39889C16.4656 7.93005 15.8297 7.66666 15.1667 7.66666L11.8334 15.1667V24.3333H21.2334C21.6353 24.3379 22.0253 24.197 22.3316 23.9367C22.6379 23.6763 22.8398 23.3141 22.9 22.9167L24.05 15.4167C24.0863 15.1778 24.0702 14.9339 24.0028 14.7019C23.9354 14.4698 23.8184 14.2552 23.6599 14.0729C23.5014 13.8906 23.3051 13.7449 23.0847 13.646C22.8642 13.5471 22.6249 13.4973 22.3834 13.5H17.6667Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className={styles.descTitle}>Mobil Lengkap</h4>
            <p className={styles.wuDesc}>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className={styles.wuCard}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#FA2C5A" />
              <path
                d="M23.1583 17.175L17.1833 23.15C17.0286 23.305 16.8447 23.4279 16.6424 23.5118C16.4401 23.5956 16.2232 23.6388 16.0042 23.6388C15.7851 23.6388 15.5683 23.5956 15.3659 23.5118C15.1636 23.4279 14.9798 23.305 14.825 23.15L7.66667 16V7.66666H16L23.1583 14.825C23.4688 15.1373 23.643 15.5597 23.643 16C23.643 16.4403 23.4688 16.8627 23.1583 17.175V17.175Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8333 11.8333H11.8417"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className={styles.descTitle}>Harga Murah</h4>
            <p className={styles.wuDesc}>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className={styles.wuCard}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#0D28A6" />
              <path
                d="M16 24.3333C20.6024 24.3333 24.3333 20.6024 24.3333 16C24.3333 11.3976 20.6024 7.66666 16 7.66666C11.3976 7.66666 7.66667 11.3976 7.66667 16C7.66667 20.6024 11.3976 24.3333 16 24.3333Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11V16L19.3333 17.6667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className={styles.descTitle}>Layanan 24 Jam</h4>
            <p className={styles.wuDesc}>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className={styles.wuCard}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#5CB85F" />
              <path
                d="M16 18.5C19.2217 18.5 21.8333 15.8883 21.8333 12.6667C21.8333 9.44502 19.2217 6.83334 16 6.83334C12.7783 6.83334 10.1667 9.44502 10.1667 12.6667C10.1667 15.8883 12.7783 18.5 16 18.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.8417 17.575L11.8333 25.1667L16 22.6667L20.1667 25.1667L19.1583 17.5667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className={styles.descTitle}>Sopir Profesional</h4>
            <p className={styles.wuDesc}>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
