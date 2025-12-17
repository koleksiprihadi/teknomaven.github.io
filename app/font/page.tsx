'use client';

import { useState } from 'react';
import Link from 'next/link';

const fonts = [
  'Arial',
  'Verdana',
  'Helvetica',
  'Times New Roman',
  'Courier New',
  'Georgia',
  'Palatino',
  'Garamond',
  'Comic Sans MS',
  'Impact',
  'Lucida Console',
  'Trebuchet MS',
];

export default function FontPage() {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog');
  const [fontSize, setFontSize] = useState(24);

  return (
    <div className="container py-5">
      <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
        ← Back to Home
      </Link>
      <h2 className="text-center mb-4">Font Visualizer</h2>

      <div className="card p-4 mb-4">
        <div className="mb-3">
          <label className="form-label">Enter Text</label>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Font Size: {fontSize}px</label>
          <input
            type="range"
            className="form-range"
            min="12"
            max="72"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="row">
        {fonts.map((font) => (
          <div key={font} className="col-md-6 mb-4">
            <div className="card p-3">
              <h6 className="text-muted mb-2">{font}</h6>
              <p style={{ fontFamily: font, fontSize: `${fontSize}px`, margin: 0 }}>
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
