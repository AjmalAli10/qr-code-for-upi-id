import React from 'react';
import './style.css';
import QRCode from 'qrcode.react';

const UPIQRCodeGenerator = ({ upiId, payeeName, amount }) => {
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    payeeName
  )}&am=${amount}`;

  return (
    <div>
      <QRCode
        value={upiLink}
        size={200}
        level={'H'}
        includeMargin={true}
        renderAs={'svg'}
        fgColor="#009E82"
      />
    </div>
  );
};
export default function App() {
  const upiId = 'ajmal700@paytm';
  const payeeName = 'Ajmal Ali';
  const amount = '10000.00';
  return (
    <div>
      <div>
        <h2>Scan the QR code to make a payment:</h2>
        <UPIQRCodeGenerator
          upiId={upiId}
          payeeName={payeeName}
          amount={amount}
        />
      </div>
    </div>
  );
}
