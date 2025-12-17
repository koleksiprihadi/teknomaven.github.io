'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    document.title = 'TeknoMaven - Membangun Masa Depan Digital';
  }, []);

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
      {/* Header */}
      <header className="fixed-top bg-white shadow-sm" style={{ backdropFilter: 'blur(10px)' }}>
        <nav className="navbar navbar-expand-lg navbar-light container-fluid px-4">
          <Link href="/" className="navbar-brand fw-bold fs-3" style={{ 
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            TeknoMaven
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><Link href="/" className="nav-link">Beranda</Link></li>
              <li className="nav-item"><Link href="/artikel" className="nav-link">Artikel</Link></li>
              <li className="nav-item"><Link href="/course" className="nav-link">Course</Link></li>
              <li className="nav-item"><Link href="/download" className="nav-link">Download</Link></li>
              <li className="nav-item"><Link href="/portofolio" className="nav-link">Portofolio</Link></li>
              <li className="nav-item"><Link href="/produk" className="nav-link">Produk</Link></li>
            </ul>
            <Link href="/invoice" className="btn btn-primary rounded-pill ms-3">Invoice</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <div className="container">
          <h1 className="display-1 fw-bold mb-4" style={{
            background: 'linear-gradient(135deg, #1e293b, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Membangun Masa Depan Digital
          </h1>
          <p className="lead fs-4 text-secondary mb-5">
            Solusi teknologi terdepan untuk mengakselerasi transformasi digital bisnis Anda
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/course" className="btn btn-primary btn-lg rounded-pill px-5">
              Mulai Belajar
            </Link>
            <Link href="/portofolio" className="btn btn-outline-primary btn-lg rounded-pill px-5">
              Lihat Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-3">Tentang Kami</h2>
          <div className="mx-auto mb-5" style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }}></div>
          <p className="lead text-center text-secondary col-lg-8 mx-auto">
            TeknoMaven adalah platform pembelajaran dan solusi digital yang berfokus pada pengembangan teknologi web modern.
            Kami menyediakan kursus, tools, dan layanan untuk membantu developer dan bisnis mencapai potensi maksimal mereka.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-3">Layanan Kami</h2>
          <div className="mx-auto mb-5" style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }}></div>
          <div className="row g-4">
            {[
              { title: 'Web Development', desc: 'Pengembangan website modern dan responsif', icon: '💻' },
              { title: 'Online Course', desc: 'Kursus programming dari dasar hingga advanced', icon: '📚' },
              { title: 'Digital Products', desc: 'Tools dan template siap pakai untuk developer', icon: '🚀' },
            ].map((service, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="fs-1 mb-3">{service.icon}</div>
                    <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                    <p className="text-secondary">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Siap Memulai Perjalanan Digital Anda?</h2>
          <p className="lead mb-4">
            Bergabunglah dengan ribuan developer yang telah mempercayai TeknoMaven
          </p>
          <Link href="/course" className="btn btn-light btn-lg rounded-pill px-5">
            Daftar Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <h3 className="fw-bold mb-3" style={{
                background: 'linear-gradient(135deg, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                TeknoMaven
              </h3>
              <p className="text-secondary">Membangun masa depan digital bersama</p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link href="/artikel" className="text-secondary text-decoration-none">Artikel</Link></li>
                <li className="mb-2"><Link href="/course" className="text-secondary text-decoration-none">Course</Link></li>
                <li className="mb-2"><Link href="/download" className="text-secondary text-decoration-none">Download</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Produk</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link href="/produk" className="text-secondary text-decoration-none">Semua Produk</Link></li>
                <li className="mb-2"><Link href="/portofolio" className="text-secondary text-decoration-none">Portofolio</Link></li>
                <li className="mb-2"><Link href="/invoice" className="text-secondary text-decoration-none">Invoice</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Kontak</h5>
              <p className="text-secondary">Email: info@teknomaven.com</p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-secondary text-decoration-none">Twitter</a>
                <a href="#" className="text-secondary text-decoration-none">GitHub</a>
              </div>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="text-center text-secondary">
            <p>&copy; 2024 TeknoMaven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
