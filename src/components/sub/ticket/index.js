import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// import Pdf from 'react-to-pdf';
import ArrowLeft from './assets/arrow-left.svg';
import Rect from './assets/rect.svg';
import { PDFExport } from '@progress/kendo-react-pdf';
import Success from './assets/success.svg';
import Download from './assets/download.svg';
import Invoice from '../invoice';
import './style.css';

const Ticket = () => {
  let bank = (localStorage.getItem("bank"))
  let dataBank = [{}];

  switch (bank) {
    case "BCA":
      dataBank = [
        { "desc": "BCA Transfer" }
      ];
      break;
    case "BNI":
      dataBank = [
        { "desc": "BNI Transfer" }
      ];
      break;
    case "Mandiri":
      dataBank = [
        { "desc": "Mandiri Transfer" }
      ];
      break;
    default:
      break;
  };

  const downloadPDF = useRef(null);

  const handleDownloadPDF = (event) => {
    downloadPDF.current.save();
  }

  return (
    <section className="e-ticket">
      <div className="bg" />
      <div className="container">
        <div className="payment-nav">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="back-button">
                  <Link to={-1}>
                    <img src={ArrowLeft} alt="back to detail mobil" />
                  </Link>
                  {dataBank.map((x, key) => {
                    return (
                      <h3 key={key}>
                        {x.desc}
                      </h3>
                    )
                  })}
                </div>
                <h4>Order ID: 86754231</h4>
              </div>
              <div className="col-6">
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
        <div className="ticket">
          <img src={Success} alt="" />
          <h3>Pembayaran Berhasil!</h3>
          <h5>Tunjukkan invoice ini ke petugas BCR di titik temu.</h5>
          <div className="print-ticket">
            <div className="invoice-head">
              <div className="invoice-desc">
                <h4>Invoice</h4>
                <p>*no invoice</p>
              </div>
              <div className="download-btn" onClick={handleDownloadPDF}>
                <img src={Download} alt="" />
                <h4>Unduh</h4>
              </div>
            </div>
            <div className="pdf-viewer">
              <PDFExport
                fileName={"invoice"}
                ref={downloadPDF}
                paperSize="A4"
              >
                <Invoice />
              </PDFExport>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ticket;