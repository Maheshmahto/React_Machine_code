import React, { useState } from "react";
import QRCode from "react-qr-code";
import './style.css'
const QrCode = () => {
  const [input, setinput] = useState("");
  const [qrCode, setQrcode] = useState("");
  const handleGenerateQrcode = () => {
    setQrcode(input);
    setinput("");
  };
  return (
    <>
      <div className="qr-container">
        {/* <h1>QR Code Generator</h1> */}
        <div className="inputbox">
          <input
            type="text"
            onChange={(e) => setinput(e.target.value)}
            value={input}
            placeholder="enter your value"
          />
          <button onClick={handleGenerateQrcode}>Generate</button>
        </div>
        <div className="output">
          <QRCode value={qrCode}></QRCode>
        </div>
      </div>
    </>
  );
};

export default QrCode;
