import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function CoursePage() {
  return (
    <PageLayout title="Course">
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <Link href="/course/premium" className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4 text-center">
                <h2 className="h4 fw-bold mb-3">Premium Course</h2>
                <p className="text-secondary">Kursus eksklusif untuk member premium</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/course/view" className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4 text-center">
                <h2 className="h4 fw-bold mb-3">View Course</h2>
                <p className="text-secondary">Lihat semua kursus yang tersedia</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link href="/course/generate" className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4 text-center">
                <h2 className="h4 fw-bold mb-3">Generate Course</h2>
                <p className="text-secondary">Buat kursus dengan AI</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="h3 fw-bold mb-4">Kursus Populer</h2>
          <p className="text-secondary">Daftar kursus akan ditampilkan di sini...</p>
        </div>
      </div>
    </PageLayout>
  );
}
