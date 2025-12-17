import PageLayout from '@/components/PageLayout';

export default function LinktreePage() {
  return (
    <PageLayout title="Linktree">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">TeknoMaven</h2>
          <p className="text-slate-600 mb-8">Semua link penting dalam satu tempat</p>
          
          <div className="space-y-4">
            {['Website', 'Portfolio', 'Course', 'Download', 'Artikel'].map((item) => (
              <a key={item} href="#" className="block bg-slate-100 hover:bg-slate-200 p-4 rounded-full font-semibold transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
