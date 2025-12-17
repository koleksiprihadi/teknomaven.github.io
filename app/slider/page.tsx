'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = [
  'https://picsum.photos/600/400?random=1',
  'https://picsum.photos/600/400?random=2',
  'https://picsum.photos/600/400?random=3',
  'https://picsum.photos/600/400?random=4',
];

export default function SliderPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '700px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">Image Slider</h2>

        <div className="position-relative">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-100 rounded"
            style={{ height: '400px', objectFit: 'cover' }}
          />

          <button
            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-2"
            onClick={prevSlide}
          >
            ‹
          </button>

          <button
            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>

        <div className="text-center mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm ${
                index === currentIndex ? 'btn-primary' : 'btn-outline-primary'
              } mx-1`}
              onClick={() => goToSlide(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
