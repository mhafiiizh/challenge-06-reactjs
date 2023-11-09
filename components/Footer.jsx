/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.footerPart}>
        <p className={styles.footerText}>
          Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000
        </p>
        <p className={styles.footerText}>binarcarrental@gmail.com</p>
        <p className={styles.footerText}>081-233-334-808</p>
      </div>
      <div className={styles.footerPart}>
        <Link href="#our-services" className={styles.footerNav}>
          Our Services
        </Link>
        <Link href="#why-us" className={styles.footerNav}>
          Why Us
        </Link>
        <Link href="#testimonial" className={styles.footerNav}>
          Testimonial
        </Link>
        <Link href="#faq" className={styles.footerNav}>
          FAQ
        </Link>
      </div>
      <div className={styles.footerPart}>
        <p className={styles.footerText}>Connect With Us</p>
        <div className={styles.socmedLogo}>
          <Link href="#">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#0D28A6" />
              <path
                d="M21 7.66663H18.5C17.3949 7.66663 16.3351 8.10561 15.5537 8.88701C14.7723 9.66842 14.3333 10.7282 14.3333 11.8333V14.3333H11.8333V17.6666H14.3333V24.3333H17.6667V17.6666H20.1667L21 14.3333H17.6667V11.8333C17.6667 11.6123 17.7545 11.4003 17.9107 11.244C18.067 11.0878 18.279 11 18.5 11H21V7.66663Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#0D28A6" />
              <path
                d="M20.1667 7.66663H11.8333C9.53215 7.66663 7.66667 9.53211 7.66667 11.8333V20.1666C7.66667 22.4678 9.53215 24.3333 11.8333 24.3333H20.1667C22.4679 24.3333 24.3333 22.4678 24.3333 20.1666V11.8333C24.3333 9.53211 22.4679 7.66663 20.1667 7.66663Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.3333 15.475C19.4362 16.1685 19.3177 16.8769 18.9948 17.4992C18.6719 18.1215 18.161 18.6262 17.5347 18.9414C16.9084 19.2566 16.1987 19.3663 15.5065 19.255C14.8143 19.1436 14.1748 18.8167 13.679 18.321C13.1833 17.8252 12.8564 17.1857 12.7451 16.4935C12.6337 15.8013 12.7434 15.0916 13.0586 14.4653C13.3738 13.8391 13.8785 13.3281 14.5008 13.0052C15.1232 12.6823 15.8315 12.5638 16.525 12.6667C17.2324 12.7716 17.8874 13.1012 18.3931 13.6069C18.8988 14.1126 19.2284 14.7676 19.3333 15.475Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5833 11.4166H20.5917"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#0D28A6" />
              <path
                d="M9.33333 9.33337H22.6667C23.5833 9.33337 24.3333 10.0834 24.3333 11V21C24.3333 21.9167 23.5833 22.6667 22.6667 22.6667H9.33333C8.41666 22.6667 7.66666 21.9167 7.66666 21V11C7.66666 10.0834 8.41666 9.33337 9.33333 9.33337Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.3333 11L16 16.8333L7.66666 11"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#0D28A6" />
              <path
                d="M19.3333 15.1666V11.8333M23.5 7.66663H8.5V21H12.6667V24.3333L16 21H20.1667L23.5 17.6666V7.66663ZM15.1667 15.1666V11.8333V15.1666Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#0D28A6" />
              <path
                d="M25.1667 8.49996C24.3687 9.06285 23.4851 9.49338 22.55 9.77496C22.0481 9.19788 21.3811 8.78887 20.6392 8.60323C19.8973 8.41759 19.1162 8.46429 18.4017 8.737C17.6872 9.00972 17.0737 9.49529 16.6441 10.1281C16.2146 10.7608 15.9897 11.5102 16 12.275V13.1083C14.5355 13.1463 13.0844 12.8215 11.7758 12.1628C10.4673 11.5042 9.34193 10.5322 8.5 9.33329C8.5 9.33329 5.16667 16.8333 12.6667 20.1666C10.9504 21.3316 8.90596 21.9157 6.83333 21.8333C14.3333 26 23.5 21.8333 23.5 12.25C23.4992 12.0178 23.4769 11.7863 23.4333 11.5583C24.2838 10.7195 24.884 9.66055 25.1667 8.49996V8.49996Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className={styles.footerPart}>
        <p className={styles.footerText}>Copyright Binar 2022</p>
        <div className={styles.footerLogo}>
          <Link href="index.html">Binar Car Rental</Link>
        </div>
      </div>
    </footer>
  );
}
