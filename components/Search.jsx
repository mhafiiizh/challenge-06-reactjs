/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import React from 'react';
import Image from 'next/image';

import styles from './Search.module.css';

export default function Search({ handleFilterCars }) {
  return (
    <section className={styles.search}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className={`row ${styles.searchCard} mx-lg-5 py-3 px-4`}>
              <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                <label>Tipe Driver</label>
                <select
                  className={`form-select ${styles.formSelect}`}
                  aria-label="Default select example"
                  id="tipeDriver"
                  defaultValue="default"
                >
                  <option value="default" className="optRent">
                    Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="true" className="optRent">
                    Dengan Supir
                  </option>
                  <option value="false" className="optRent">
                    Tanpa Supir (Lepas Kunci)
                  </option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label>Tanggal</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="tanggal"
                />
              </div>
              <div
                className={`col-lg-auto col-xl-auto col-md-auto ${styles.searchTime}`}
              >
                <label>Pilih Waktu</label>
                <select
                  className={`form-select ${styles.formSelect}`}
                  aria-label="Default select example"
                  id="waktuJemput"
                  defaultValue={false}
                >
                  <option value="false" className="optRent">
                    Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="08:00" className="optRent">
                    08.00 WIB
                  </option>
                  <option value="09:00" className="optRent">
                    09.00 WIB
                  </option>
                  <option value="10:00" className="optRent">
                    10.00 WIB
                  </option>
                  <option value="11:00" className="optRent">
                    11.00 WIB
                  </option>
                  <option value="12:00" className="optRent">
                    12.00 WIB
                  </option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label className="fw-light">Jumlah Penumpang (optional)</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control border-end-0"
                    placeholder="Jumlah Penumpang"
                    id="jumlahPenumpang"
                  />
                  <span className="input-group-text bg-white">
                    <Image
                      src="/images/fi_users.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                <button
                  className={`btn ${styles.mainBtn}`}
                  id="load-btn"
                  onClick={handleFilterCars}
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
