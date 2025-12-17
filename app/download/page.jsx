import PageLayout from '@/components/PageLayout';

export default function DownloadPage() {
  return (
    <PageLayout title="Download">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-3">Tools & Resources</h2>
              <p className="text-secondary mb-4">Download berbagai tools dan resources untuk development</p>
              <ul className="list-unstyled text-secondary">
                <li className="mb-2">• Chords & Lyrics Player</li>
                <li className="mb-2">• Lyrics Player (Mode Kata & Baris)</li>
                <li className="mb-2">• Source Code Templates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-3">Latest Downloads</h2>
              <p className="text-secondary">File download terbaru akan ditampilkan di sini...</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
