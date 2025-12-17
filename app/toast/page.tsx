'use client';

import { useState } from 'react';
import Link from 'next/link';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

export default function ToastPage() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (type: ToastType, message: string) => {
    const id = Date.now();
    setToasts([...toasts, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const getToastColor = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-success';
      case 'error':
        return 'bg-danger';
      case 'info':
        return 'bg-info';
      case 'warning':
        return 'bg-warning';
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <Link href="/" className="btn btn-sm btn-outline-secondary mb-3">
          ← Back to Home
        </Link>
        <h2 className="text-center mb-4">Toast Notifications</h2>

        <div className="d-grid gap-2">
          <button
            className="btn btn-success"
            onClick={() => showToast('success', 'Success! Operation completed.')}
          >
            Show Success Toast
          </button>
          <button
            className="btn btn-danger"
            onClick={() => showToast('error', 'Error! Something went wrong.')}
          >
            Show Error Toast
          </button>
          <button
            className="btn btn-info"
            onClick={() => showToast('info', 'Info! Here is some information.')}
          >
            Show Info Toast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => showToast('warning', 'Warning! Please be careful.')}
          >
            Show Warning Toast
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`alert ${getToastColor(toast.type)} alert-dismissible fade show mb-2`}
            role="alert"
            style={{ minWidth: '250px' }}
          >
            {toast.message}
            <button
              type="button"
              className="btn-close"
              onClick={() => removeToast(toast.id)}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
}
