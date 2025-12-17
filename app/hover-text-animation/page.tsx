'use client';

import Link from 'next/link';

export default function HoverTextAnimationPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-5">Hover Text Animations</h2>

        <div className="text-center">
          <h3 className="hover-scale mb-4" style={{ transition: 'transform 0.3s' }}>
            Hover to Scale
          </h3>

          <h3 className="hover-color mb-4" style={{ transition: 'color 0.3s' }}>
            Hover to Change Color
          </h3>

          <h3 className="hover-rotate mb-4" style={{ transition: 'transform 0.3s' }}>
            Hover to Rotate
          </h3>

          <h3 className="hover-shadow mb-4" style={{ transition: 'box-shadow 0.3s' }}>
            Hover for Shadow
          </h3>
        </div>

        <style jsx>{`
          .hover-scale:hover {
            transform: scale(1.1);
          }

          .hover-color {
            color: #333;
          }
          .hover-color:hover {
            color: #007bff;
          }

          .hover-rotate:hover {
            transform: rotate(5deg);
          }

          .hover-shadow:hover {
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
}
