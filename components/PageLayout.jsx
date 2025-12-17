import Link from 'next/link';

export default function PageLayout({ title, children }) {
  return (
    <div className="min-vh-100 bg-light">
      <header className="fixed-top bg-white shadow-sm">
        <nav className="navbar navbar-light container-fluid px-4 py-3">
          <Link href="/" className="navbar-brand fw-bold fs-3" style={{
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            TeknoMaven
          </Link>
          <Link href="/" className="btn btn-outline-secondary btn-sm">
            ← Kembali ke Beranda
          </Link>
        </nav>
      </header>

      <main className="container py-5" style={{ paddingTop: '100px' }}>
        <h1 className="display-3 fw-bold mb-4">{title}</h1>
        <div className="mb-5" style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #06b6d4)' }}></div>
        {children}
      </main>
    </div>
  );
}
