import React, { useState } from "react";
import "./Qr.css";

const Qr = () => {
  const [imgg, setImg] = useState("");
  const [loading, setLoad] = useState(false);
  const [qrdata, setdata] = useState("");
  const [qrsize, setsize] = useState("");

  async function generateqr() {
    setLoad(true);
    try {
      const url =
        "https://api.qrserver.com/v1/create-qr-code/?size=" +
        qrsize +
        "x" +
        qrsize +
        "&data=" +
        encodeURIComponent(qrdata);
      setImg(url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <div className="qr-container">
      <div className="qr-box">
        <h2>QR CODE GENERATOR</h2>
        {loading && <p>Please wait....</p>}

        <div>{imgg && <img src={imgg} alt="Generated QR Code" />}</div>

        <div>
          <label htmlFor="datainput">ENTER THE DATA FOR QR:</label>
          <input
            type="text"
            value={qrdata}
            id="datainput"
            placeholder="Enter the data"
            onChange={(e) => setdata(e.target.value)}
          />

          <label htmlFor="imagesize">Image size (e.g., 150):</label>
          <input
            type="text"
            value={qrsize}
            id="imagesize"
            placeholder="Enter the image size"
            onChange={(e) => setsize(e.target.value)}
          />

          <button onClick={generateqr}>GENERATE QR CODE</button>

          {imgg && (
            <a href={imgg} download={`QR_Code_${qrdata}.png`}>
              <button className="btn2">DOWNLOAD QR CODE</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qr;
