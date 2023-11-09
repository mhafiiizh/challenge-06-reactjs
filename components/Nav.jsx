/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import React from 'react';
import Link from 'next/link';

import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
      <div className="container">
        <Link href="/" className={`navbar-brand ${styles.logo}`}>
          Binar Car Rental
        </Link>
        <button
          className={`btn btn-mobile d-md-none ${styles.btnMobile}`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end ${styles.offcanvasEnd}`}
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <Link
              href="/"
              className={`offcanvas-brand ${styles.logo} ${styles.offcanvasBrand}`}
            >
              Binar Car Rental
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className={`offcanvas-body ${styles.offcanvasBody}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={styles.navLink} href="#our-services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.navLink} href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.navLink} href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className={styles.navLink} href="#faq">
                  FAQ
                </a>
              </li>
              <li className={`nav-item ${styles.navbarRegisterBtn}`}>
                <a className={styles.navLink} href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
