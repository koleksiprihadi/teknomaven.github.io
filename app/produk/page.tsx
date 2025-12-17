import PageLayout from '@/components/PageLayout';

export default function ProdukPage() {
  return (
    <PageLayout title="Produk">
      <div className="grid md:grid-cols-2 gap-8">
        {['Digital Template', 'Source Code', 'UI Kit', 'Plugin'].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">{item}</h3>
            <p className="text-slate-600 mb-4">Produk digital berkualitas untuk developer</p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
