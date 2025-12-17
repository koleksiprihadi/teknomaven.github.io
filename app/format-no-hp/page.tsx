'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FormatNoHPPage() {
  const [phone, setPhone] = useState('');

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');

    // Format: 0812-3456-7890
    let formatted = '';
    if (digits.length > 0) {
      formatted = digits.substring(0, 4);
      if (digits.length > 4) {
        formatted += '-' + digits.substring(4, 8);
      }
      if (digits.length > 8) {
        formatted += '-' + digits.substring(8, 12);
      }
    }

    setPhone(formatted);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">Format Nomor HP</h2>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Nomor Handphone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => formatPhoneNumber(e.target.value)}
            placeholder="0812-3456-7890"
            maxLength={14}
          />
          <small className="text-muted">Format: 0812-3456-7890</small>
        </div>
        <button className="btn btn-primary w-100">Submit</button>
      </div>
    </div>
  );
}
