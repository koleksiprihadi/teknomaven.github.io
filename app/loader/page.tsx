'use client';

import Link from 'next/link';

export default function LoaderPage() {
  return (
    <div className="container py-5">
      <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
        ← Back to Home
      </Link>
      <h2 className="text-center mb-5">Loader Animations</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-4 text-center">
            <h5>Spinner</h5>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-4 text-center">
            <h5>Growing Spinner</h5>
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-4 text-center">
            <h5>Multiple Spinners</h5>
            <div className="d-flex justify-content-center gap-2">
              <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
              <div className="spinner-border spinner-border-sm text-success" role="status"></div>
              <div className="spinner-border spinner-border-sm text-danger" role="status"></div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-4 text-center">
            <h5>Button with Spinner</h5>
            <button className="btn btn-primary" disabled>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Loading...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
