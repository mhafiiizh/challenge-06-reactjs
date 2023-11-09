/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';

import styles from './Faq.module.css';
import '../public/styles/custom-bootstrap.css';

export default function Faq() {
  return (
    <section id={styles.faq}>
      <div className={styles.faqContainer}>
        <div className={styles.faqText}>
          <h3 className={styles.h3Title}>Frequently Asked Question</h3>
          <p className={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="card mb-3">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed accordion-text"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  ullam ea at dignissimos, dolores dicta nihil, laudantium
                  error, eos cupiditate pariatur alias magni. Illo omnis dolor
                  explicabo nobis eligendi! Inventore!
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                  veniam corporis nulla. Et porro impedit, dolorem odit optio
                  commodi non quam magni incidunt dolores, placeat quaerat
                  architecto officia nulla nisi!
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis sapiente nostrum optio rem at quaerat fuga vero debitis,
                  alias suscipit veritatis nemo ipsa ex nisi qui tempora omnis
                  sequi deserunt.
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia excepturi laborum id quas amet optio sunt repudiandae
                  delectus assumenda autem provident, maxime ad tempore eveniet?
                  Iure dignissimos delectus ullam laborum?
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia earum beatae cumque veritatis, iste, adipisci maiores
                  quisquam dolorum eum voluptas quaerat, dolore suscipit porro
                  obcaecati accusantium perspiciatis delectus quidem unde?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
