import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function CoursePage() {
  return (
    <PageLayout title="Course">
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link href="/course/premium" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Premium Course</h2>
          <p className="text-slate-600">Kursus eksklusif untuk member premium</p>
        </Link>

        <Link href="/course/view" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">View Course</h2>
          <p className="text-slate-600">Lihat semua kursus yang tersedia</p>
        </Link>

        <Link href="/course/generate" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Generate Course</h2>
          <p className="text-slate-600">Buat kursus dengan AI</p>
        </Link>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Kursus Populer</h2>
        <p className="text-slate-600">Daftar kursus akan ditampilkan di sini...</p>
      </div>
    </PageLayout>
  );
}
