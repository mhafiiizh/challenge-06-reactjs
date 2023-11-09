/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */

import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

import styles from '../components/CarouselTestimonial.module.css';
import '../public/styles/custom-bootstrap.css';

export default function CarouselTestimonial() {
  return (
    <Carousel
      prevIcon={
        <span className="carousel-control-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
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
      }
      nextIcon={
        <span className="carousel-control-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
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
      }
    >
      <Carousel.Item className="carousel-item">
        <Image
          src="/images/img-index/testi-pro-1.jpg"
          width={80}
          height={80}
          className={styles.imgTesti}
        />
        <Carousel.Caption className="carousel-caption">
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
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod”
          </p>
          <p className={styles.testiProfile}>Marsha 17, Jakarta</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Image
          src="/images/img-index/testi-pro-2.jpg"
          width={80}
          height={80}
          className={styles.imgTesti}
        />
        <Carousel.Caption className="carousel-caption">
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
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod”
          </p>
          <p className={styles.testiProfile}>Vonzy 22, Bogor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Image
          src="/images/img-index/testi-pro-3.jpg"
          width={80}
          height={80}
          className={styles.imgTesti}
        />
        <Carousel.Caption className="carousel-caption">
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
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod”
          </p>
          <p className={styles.testiProfile}>Sze 17, Bogor</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
