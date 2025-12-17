import PageLayout from '@/components/PageLayout';

export default function PortofolioPage() {
  return (
    <PageLayout title="Portofolio">
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Project {i}</h3>
              <p className="text-slate-600">Deskripsi project akan ditampilkan di sini</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
