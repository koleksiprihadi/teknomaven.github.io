# 🚀 Quick Start Guide - Teknomaven Next.js

## Cara Install & Menjalankan

### 1. Extract File Zip
Ekstrak file `teknomaven-nextjs.zip` ke folder yang Anda inginkan.

### 2. Install Dependencies
Buka terminal/command prompt di folder project, lalu jalankan:
```bash
npm install
```

Ini akan menginstall semua package yang dibutuhkan (~400MB).

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka browser dan akses: http://localhost:3000

### 4. Build untuk Production
```bash
npm run build
```

File hasil build ada di folder `out/` dan siap di-deploy.

## 📋 Persyaratan Sistem

- Node.js 18 atau lebih tinggi
- npm (terinstall otomatis dengan Node.js)

## 📦 Isi Package

✅ Source code lengkap (TypeScript)
✅ 16 demo components (React)
✅ Konfigurasi Next.js
✅ GitHub Actions workflow
✅ Tailwind CSS + Bootstrap
✅ README lengkap

## 🌐 Deployment ke GitHub Pages

1. Upload project ke GitHub repository
2. Aktifkan GitHub Pages di Settings > Pages
3. Pilih Source: "GitHub Actions"
4. Push ke branch main → otomatis deploy!

## 📝 Struktur Folder

```
teknomaven-nextjs/
├── app/              # Semua halaman & components
├── public/           # Static files (images, CNAME)
├── package.json      # Dependencies
├── next.config.ts    # Next.js config
└── README.md         # Dokumentasi lengkap
```

## ❓ Butuh Bantuan?

Lihat file `README.md` untuk dokumentasi lengkap.

## 🎯 Tips

- Gunakan `npm run dev` untuk development
- Gunakan `npm run build` untuk production
- Folder `node_modules/` akan dibuat saat `npm install`
- Folder `out/` berisi hasil build

Selamat coding! 🎉
