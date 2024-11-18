import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Footer from "../components/Footer";


function Documents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <>
    <div className="documents-container">
      {/* Content Section */}
      <div className="documents-card">
        <h1 className="documents-title">District Industrial Profile</h1>
<div>
        {/* PDF 1 Section */}
        <div className="pdf-section-container">
        <div className="pdf-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
            alt="PDF"
            className="pdf-icon"
          />
          <div className="pdf-details">
            <h2 className="pdf-title">Amravati District Industrial Profile</h2>
            <p className="pdf-text">
              Click below to view or download the complete profile in PDF format.
            </p>
          </div>
          <a
            href="/Amravati.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-pdf-button"
          >
            View PDF
          </a>
        </div>

        {/* PDF 2 Section */}
        <div className="pdf-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
            alt="PDF"
            className="pdf-icon"
          />
          <div className="pdf-details">
            <h2 className="pdf-title">Buldhana District Industrial Profile</h2>
            <p className="pdf-text">
            Click below to view or download the complete profile in PDF format.
            </p>
          </div>
          <a
            href="/Buldhana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-pdf-button"
          >
            View PDF
          </a>
        </div>


        <div className="pdf-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
            alt="PDF"
            className="pdf-icon"
          />
          <div className="pdf-details">
            <h2 className="pdf-title">Nagpur District Industrial Profile</h2>
            <p className="pdf-text">
            Click below to view or download the complete profile in PDF format.
            </p>
          </div>
          <a
            href="/Nagpur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-pdf-button"
          >
            View PDF
          </a>
        </div>


        <div className="pdf-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
            alt="PDF"
            className="pdf-icon"
          />
          <div className="pdf-details">
            <h2 className="pdf-title">Wardha District Industrial Profile</h2>
            <p className="pdf-text">
            Click below to view or download the complete profile in PDF format.
            </p>
          </div>
          <a
            href="/Wardha.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-pdf-button"
          >
            View PDF
          </a>
        </div>


        <div className="pdf-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
            alt="PDF"
            className="pdf-icon"
          />
          <div className="pdf-details">
            <h2 className="pdf-title">Washim District Industrial Profile</h2>
            <p className="pdf-text">
            Click below to view or download the complete profile in PDF format.
            </p>
          </div>
          <a
            href="/Washim.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-pdf-button"
          >
            View PDF
          </a>
          
          </div>


          <div className="pdf-section">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/267px-PDF_file_icon.svg.png"
            alt="PDF"
            className="pdf-icon"
          />
          <div className="pdf-details">
            <h2 className="pdf-title">Report</h2>
            <p className="pdf-text">
            Click below to view or download the complete profile in PDF format.
            </p>
          </div>
          <a
            href="/Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="view-pdf-button"
          >
            View PDF
          </a>
          
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
}

export default Documents;
