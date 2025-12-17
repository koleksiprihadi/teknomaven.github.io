import PageLayout from '@/components/PageLayout';

export default function InvoicePage() {
  return (
    <PageLayout title="Invoice">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Generate Invoice</h2>
        <p className="text-slate-600 mb-6">Buat invoice profesional untuk bisnis Anda</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-slate-700 font-semibold mb-2">Nama Klien</label>
            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          
          <div>
            <label className="block text-slate-700 font-semibold mb-2">Deskripsi Layanan</label>
            <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg" rows={4}></textarea>
          </div>
          
          <div>
            <label className="block text-slate-700 font-semibold mb-2">Total</label>
            <input type="number" className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
            Generate Invoice
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
