import PageLayout from '@/components/PageLayout';

export default function InvoicePage() {
  return (
    <PageLayout title="Invoice">
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="h3 fw-bold mb-4">Generate Invoice</h2>
          <p className="text-secondary mb-4">Buat invoice profesional untuk bisnis Anda</p>
          
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Klien</label>
              <input type="text" className="form-control" />
            </div>
            
            <div className="mb-3">
              <label className="form-label fw-semibold">Deskripsi Layanan</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>
            
            <div className="mb-4">
              <label className="form-label fw-semibold">Total</label>
              <input type="number" className="form-control" />
            </div>
            
            <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5">
              Generate Invoice
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
