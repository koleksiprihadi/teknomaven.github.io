import PageLayout from '@/components/PageLayout';

export default function LinktreePage() {
  return (
    <PageLayout title="Linktree">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm text-center">
            <div className="card-body p-5">
              <div className="rounded-circle mx-auto mb-4" style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)'
              }}></div>
              <h2 className="h3 fw-bold mb-3">TeknoMaven</h2>
              <p className="text-secondary mb-4">Semua link penting dalam satu tempat</p>
              
              <div className="d-grid gap-3">
                {['Website', 'Portfolio', 'Course', 'Download', 'Artikel'].map((item) => (
                  <a key={item} href="#" className="btn btn-outline-primary btn-lg rounded-pill">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
