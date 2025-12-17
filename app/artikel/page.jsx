import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function ArtikelPage() {
  return (
    <PageLayout title="Artikel">
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <Link href="/artikel/premium" className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h3 fw-bold mb-3">Premium Artikel</h2>
                <p className="text-secondary">Akses artikel eksklusif untuk member premium</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <Link href="/artikel/generate" className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h3 fw-bold mb-3">Generate Artikel</h2>
                <p className="text-secondary">Buat artikel otomatis dengan AI</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="h3 fw-bold mb-4">Artikel Terbaru</h2>
          <p className="text-secondary">Konten artikel akan ditampilkan di sini...</p>
        </div>
      </div>
    </PageLayout>
  );
}
