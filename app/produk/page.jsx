import PageLayout from '@/components/PageLayout';

export default function ProdukPage() {
  return (
    <PageLayout title="Produk">
      <div className="row g-4">
        {['Digital Template', 'Source Code', 'UI Kit', 'Plugin'].map((item, i) => (
          <div key={i} className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <div className="fs-1 mb-3">📦</div>
                <h3 className="h4 fw-bold mb-3">{item}</h3>
                <p className="text-secondary mb-4">Produk digital berkualitas untuk developer</p>
                <button className="btn btn-primary rounded-pill px-4">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
