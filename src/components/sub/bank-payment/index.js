import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from './assets/arrow-left.svg';
import Rect from './assets/rect.svg';
import Copy from './assets/copy.svg';
import Count1Day from '../count1day';
import ConfirmUpload from '../confirm-upload';
import './style.css';

const BankPayment = () => {
  let bank = (localStorage.getItem("bank"))
  let dataBank = [{}];

  switch (bank) {
    case "BCA":
      dataBank = [
        {
          "id": 1,
          "name": "BCA",
          "desc": "BCA Transfer",
          "atm": "ATM BCA",
          "mb": "M-BCA",
          "klik": "BCA Klik",
          "ib": "Internet Banking",
          "rek": "54104257877",
        }
      ];
      break;
    case "BNI":
      dataBank = [
        {
          "id": 2,
          "name": "BNI",
          "desc": "BNI Transfer",
          "atm": "ATM BNI",
          "mb": "M-Banking BNI",
          "klik": "BNI Klik",
          "ib": "Internet Banking",
          "rek": "65162365515",
        }
      ];
      break;
    case "Mandiri":
      dataBank = [
        {
          "id": 3,
          "name": "Mandiri",
          "desc": "Mandiri Transfer",
          "atm": "ATM Mandiri",
          "mb": "M-Banking Mandiri",
          "klik": "Mandiri Klik",
          "ib": "Internet Banking",
          "rek": "76562662662",
        }
      ];
      break;
    default:
      break;
  };

  const d_names = ["Minggu", "Senin", "Selasa",
    "Rabu", "Kamis", "Jumat", "Sabtu"];

  const m_names = ["Januari", "Februari", "Maret",
    "April", "Mei", "Juni", "Juli", "Agustus", "September",
    "Oktober", "November", "Desember"];

  const today = new Date();
  const limitPayment = new Date();
  limitPayment.setDate(today.getDate() + 1);

  const day = limitPayment.getDay();
  const date = limitPayment.getDate();
  const month = limitPayment.getMonth();
  const year = limitPayment.getFullYear();
  const hour = limitPayment.getHours();
  const min = limitPayment.getMinutes();

  const [copyText, setCopyText] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText)
  };

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [confirm, setConfirm] = useState("confirm");

  return (
    <section className="bank-payment">
      <div className="bg" />
      {dataBank.map((x, key) => {
        return (
          <div className="container" key={key}>
            <div className="payment-nav">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="back-button">
                      <Link to={-1}>
                        <img src={ArrowLeft} alt="back to detail mobil" />
                      </Link>
                      <h3>{x.desc}</h3>
                    </div>
                    <h4>Order ID: 86754231</h4>
                  </div>
                  <div className="col-md-8">
                    <div className="state-payment">
                      <div className="one">1</div>
                      <h5>Pilih Metode</h5>
                      <img src={Rect} alt="-" />
                      <div className="two">2</div>
                      <h5>Bayar</h5>
                      <img src={Rect} alt="-" />
                      <div className="three">3</div>
                      <h5>Tiket</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bank-detail">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <div className="payment-deadline">
                      <div className="deadline-date">
                        <h3>Selesaikan Pembayaran Sebelum</h3>
                        <p>
                          {
                            d_names[day] + ", " + (parseInt(date) < 10 ? "0" + date : date) + " " + m_names[month] + " " + year
                          } jam {
                            (parseInt(hour) < 10 ? "0" + hour : hour) + "." + (parseInt(min) < 10 ? "0" + min : min)
                          } WIB
                        </p>
                      </div>
                      <Count1Day />
                    </div>
                    <div className="transfer-detail">
                      <h3>Lakukan Transfer Ke</h3>
                      <div className="cont">
                        <div className="bank">{x.name}</div>
                        <h5>{x.desc}</h5>
                      </div>
                      <p>a.n Binar Car Rental</p>
                      <h4>Nomor Rekening</h4>
                      <div className="account">
                        <p
                          className="account-number"
                          defaultValue={copyText}
                          onChange={(e) => setCopyText(e.target.defaultValue)}
                        >
                          {x.rek}
                        </p>
                        <button
                          onClick={handleCopy}
                        >
                          <img src={Copy} alt="copy-to-clipboard" />
                        </button>
                      </div>
                      <h4>Total Bayar</h4>
                      <div className="total-payment">
                        <p
                          className="price-to-pay"
                          defaultValue={copyText}
                          onChange={(e) => setCopyText(e.target.defaultValue)}
                        >
                          Rp 3.500.000
                        </p>
                        <button
                          onClick={handleCopy}
                        >
                          <img src={Copy} alt="copy-to-clipboard" />
                        </button>
                      </div>
                    </div>
                    <div className="payment-instr">
                      <h3>Intruksi Pembayaran</h3>
                      <div className="bloc-tabs">
                        <div className="col-3">
                          <div
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                          >
                            {x.atm}
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                          >
                            {x.mb}
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                          >
                            {x.klik}
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(4)}
                          >
                            {x.ib}
                          </div>
                        </div>
                      </div>
                      <div className="content-tabs">
                        <div
                          className={toggleState === 1 ? "content active-content" : "content"}
                        >
                          <ul>
                            <li>Masukkan kartu ATM, lalu PIN</li>
                            <li>Pilih menu “Transaksi Lainnya” – “Transfer” – “Ke Rek {x.name} Virtual Account”</li>
                            <li>Masukkan nomor {x.name} Virtual Account: 70020+Order ID<br />Contoh:<br />Order ID: 12345678, maka ditulis 7002012345678</li>
                            <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                            <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                          </ul>
                        </div>
                        <div
                          className={toggleState === 2 ? "content active-content" : "content"}
                        >
                          <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione?</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, nulla.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, aliquid?</li>
                          </ul>
                        </div>
                        <div
                          className={toggleState === 3 ? "content active-content" : "content"}
                        >
                          <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione?</li>
                          </ul>
                        </div>
                        <div
                          className={toggleState === 4 ? "content active-content" : "content"}
                        >
                          <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione?</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, nulla.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, aliquid?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reprehenderit.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam?</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="confirm-payment">
                      {confirm === "confirm" ?
                        <div className="confirm-click">
                          <h5>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</h5>
                          <button onClick={() => setConfirm("confirm-payment")}>
                            Konfirmasi Pembayaran
                          </button>
                        </div>
                        :
                        <ConfirmUpload />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default BankPayment;