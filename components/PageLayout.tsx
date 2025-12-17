import Link from 'next/link';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
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
          <h1 className="text-5xl font-bold mb-4 text-slate-900">{title}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-12"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
