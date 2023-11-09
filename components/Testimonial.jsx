/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';

import styles from './Testimonial.module.css';
import '../public/styles/custom-bootstrap.css';

export default function Testimonial() {
  return (
    <section id={styles.testimonial}>
      <h3 className={styles.h3Title}>Testimonial</h3>
      <p className={styles.descText}>
        Berbagai review positif dari para pelanggan kami
      </p>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={styles.testiContainer}>
              <img
                src="images/img-index/testi-pro-1.jpg"
                alt="Testimonial Image Profile"
                className={styles.imgTesti}
              />
              <div className={styles.testiDesc}>
                <div className={styles.starTestimonial}>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                </div>
                <p className={styles.testiText}>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className={styles.testiProfile}>Marsha 17, Jakarta</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className={styles.testiContainer}>
              <img
                src="images/img-index/testi-pro-2.jpg"
                alt="Testimonial Image Profile"
                className={styles.imgTesti}
              />
              <div className={styles.testiDesc}>
                <div className="star-testimonial">
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                </div>
                <p className={styles.testiText}>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className={styles.testiProfile}>Vonzy 22, Bogor</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className={styles.testiContainer}>
              <img
                src="images/img-index/testi-pro-3.jpg"
                alt="Testimonial Image Profile"
                className={styles.imgTesti}
              />
              <div className={styles.testiDesc}>
                <div className="star-testimonial">
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59229 0L10.3884 5.52786H16.2007L11.4985 8.94427L13.2946 14.4721L8.59229 11.0557L3.89 14.4721L5.68612 8.94427L0.983833 5.52786H6.79617L8.59229 0Z"
                      fill="#F9CC00"
                    />
                  </svg>
                </div>
                <p className={styles.testiText}>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p className={styles.testiProfile}>Sze 17, Bogor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-prev-next">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="68"
                viewBox="0 0 57 68"
                fill="none"
              >
                <path
                  d="M35.4835 51L21.2901 34L35.4835 17"
                  stroke="black"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="68"
                viewBox="0 0 57 68"
                fill="none"
              >
                <path
                  d="M21.5164 51L35.7099 34L21.5164 17"
                  stroke="black"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
