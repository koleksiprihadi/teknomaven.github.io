'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import QRCode from 'qrcode';

export default function QRGeneratorPage() {
  const [text, setText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRCode = async () => {
    if (!text.trim()) {
      alert('Please enter text to generate QR code');
      return;
    }

    try {
      const canvas = canvasRef.current;
      if (canvas) {
        await QRCode.toCanvas(canvas, text, {
          width: 300,
          margin: 2,
        });
        const url = canvas.toDataURL();
        setQrCodeUrl(url);
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Error generating QR code');
    }
  };

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = qrCodeUrl;
      link.click();
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">QR Code Generator</h2>

        <div className="mb-3">
          <label htmlFor="qrText" className="form-label">
            Enter text or URL
          </label>
          <input
            type="text"
            className="form-control"
            id="qrText"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL"
          />
        </div>

        <button onClick={generateQRCode} className="btn btn-primary w-100 mb-3">
          Generate QR Code
        </button>

        <div className="text-center">
          <canvas ref={canvasRef} className="border" style={{ display: qrCodeUrl ? 'inline-block' : 'none' }} />
        </div>

        {qrCodeUrl && (
          <button onClick={downloadQRCode} className="btn btn-success w-100 mt-3">
            Download QR Code
          </button>
        )}
      </div>
    </div>
  );
}
