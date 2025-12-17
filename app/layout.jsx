import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "TeknoMaven - Membangun Masa Depan Digital",
  description: "Platform pembelajaran dan solusi digital untuk pengembangan teknologi web modern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/gambar/favicon.PNG" />
      </head>
      <body>{children}</body>
    </html>
  );
}
