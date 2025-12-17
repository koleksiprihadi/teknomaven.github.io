import PageLayout from '@/components/PageLayout';

export default function DownloadPage() {
  return (
    <PageLayout title="Download">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Tools & Resources</h2>
          <p className="text-slate-600 mb-4">Download berbagai tools dan resources untuk development</p>
          <ul className="space-y-2 text-slate-600">
            <li>• Chords & Lyrics Player</li>
            <li>• Lyrics Player (Mode Kata & Baris)</li>
            <li>• Source Code Templates</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Latest Downloads</h2>
          <p className="text-slate-600">File download terbaru akan ditampilkan di sini...</p>
        </div>
      </div>
    </PageLayout>
  );
}
