import PageLayout from '@/components/PageLayout';

export default function PortofolioPage() {
  return (
    <PageLayout title="Portofolio">
      <div className="row g-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-img-top" style={{
                height: '200px',
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)'
              }}></div>
              <div className="card-body">
                <h3 className="h5 fw-bold mb-2">Project {i}</h3>
                <p className="text-secondary">Deskripsi project akan ditampilkan di sini</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
