'use client';

import Link from 'next/link';

export default function ArtikelPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/50 z-50">
        <nav className="flex justify-between items-center px-[5%] py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            TeknoMaven
          </Link>
          <Link href="/" className="text-slate-600 hover:text-blue-500">← Kembali ke Beranda</Link>
        </nav>
      </header>

      <main className="pt-24 px-[5%] pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-slate-900">Artikel</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/artikel/premium" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold mb-3 text-slate-900">Premium Artikel</h2>
              <p className="text-slate-600">Akses artikel eksklusif untuk member premium</p>
            </Link>

            <Link href="/artikel/generate" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold mb-3 text-slate-900">Generate Artikel</h2>
              <p className="text-slate-600">Buat artikel otomatis dengan AI</p>
            </Link>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Artikel Terbaru</h2>
            <p className="text-slate-600">Konten artikel akan ditampilkan di sini...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
