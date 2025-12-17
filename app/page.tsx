'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    // Set title
    document.title = 'TeknoMaven - Membangun Masa Depan Digital';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Animated Background Particles */}
      <div className="particles fixed inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/50 z-50">
        <nav className="flex justify-between items-center px-[5%] py-4 max-w-7xl mx-auto">
          <div className="logo text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            TeknoMaven
          </div>
          <ul className="hidden md:flex gap-8">
            <li><Link href="/" className="text-slate-600 hover:text-blue-500 font-medium transition-colors relative group">
              Beranda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all" />
            </Link></li>
            <li><Link href="/artikel" className="text-slate-600 hover:text-blue-500 font-medium transition-colors relative group">
              Artikel
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all" />
            </Link></li>
            <li><Link href="/course" className="text-slate-600 hover:text-blue-500 font-medium transition-colors relative group">
              Course
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all" />
            </Link></li>
            <li><Link href="/download" className="text-slate-600 hover:text-blue-500 font-medium transition-colors relative group">
              Download
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all" />
            </Link></li>
            <li><Link href="/portofolio" className="text-slate-600 hover:text-blue-500 font-medium transition-colors relative group">
              Portofolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all" />
            </Link></li>
            <li><Link href="/produk" className="text-slate-600 hover:text-blue-500 font-medium transition-colors relative group">
              Produk
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all" />
            </Link></li>
          </ul>
          <Link href="/invoice" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
            Invoice
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center text-center pt-20">
        <div className="hero-content max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Membangun Masa Depan Digital
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Solusi teknologi terdepan untuk mengakselerasi transformasi digital bisnis Anda
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/course" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
              Mulai Belajar
            </Link>
            <Link href="/portofolio" className="bg-white border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all">
              Lihat Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Tentang Kami</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
            TeknoMaven adalah platform pembelajaran dan solusi digital yang berfokus pada pengembangan teknologi web modern.
            Kami menyediakan kursus, tools, dan layanan untuk membantu developer dan bisnis mencapai potensi maksimal mereka.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-[5%] bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Layanan Kami</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', desc: 'Pengembangan website modern dan responsif', icon: '💻' },
              { title: 'Online Course', desc: 'Kursus programming dari dasar hingga advanced', icon: '📚' },
              { title: 'Digital Products', desc: 'Tools dan template siap pakai untuk developer', icon: '🚀' },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-[5%] bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai Perjalanan Digital Anda?</h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan ribuan developer yang telah mempercayai TeknoMaven
          </p>
          <Link href="/course" className="inline-block bg-white text-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Daftar Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-[5%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              TeknoMaven
            </h3>
            <p className="text-slate-400">Membangun masa depan digital bersama</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/artikel" className="hover:text-white transition-colors">Artikel</Link></li>
              <li><Link href="/course" className="hover:text-white transition-colors">Course</Link></li>
              <li><Link href="/download" className="hover:text-white transition-colors">Download</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/produk" className="hover:text-white transition-colors">Semua Produk</Link></li>
              <li><Link href="/portofolio" className="hover:text-white transition-colors">Portofolio</Link></li>
              <li><Link href="/invoice" className="hover:text-white transition-colors">Invoice</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <p className="text-slate-400">Email: info@teknomaven.com</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 TeknoMaven. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
