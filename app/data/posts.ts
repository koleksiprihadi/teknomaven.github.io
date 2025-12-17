export interface Post {
  url: string;
  image: string;
  title: string;
  category: 'ui' | 'ux' | 'sc' | 'all';
  description: string;
}

export const posts: Post[] = [
  {
    url: "/hide-show-password-form",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4mLMDJEwx3Q-fqnSbwSLe4LuvBvffeaM7E-EnntIKLKy7Hs2j2r93aH0wXCbGn90xPfHlu2dGMCwx2oopSxj79XdQQ74qjsl81gVDd-cgJJG-2WcPo0TZeh7BHVGWbQWYCgZqB7JsNRFZjnx9EZlttlizZHXZlinAvy-B5LGXOw7onKCBbFsse1ql3tbV/w640-h360/Tutorial%20Lengkap:%20Membuat%20Tombol%20Tampilkan%20Sembunyikan%20Password%20dengan%20Bootstrap%205.3.png",
    title: "Hide Show Password",
    category: "ui",
    description: "Technology : HTML, CSS, JavaScript (JQuery)",
  },
  {
    url: "/form-otp",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi24sBmhO9oipDX6-jfUgGByTUruIQm9YnmhQ7YNNlUXCQw99P8lDD-zzqqQaxRvKiX7uM9QxfA3NmwlX1X2Avq3839jb5piCSe_gPxwsXQERjhPkE7D3TGpXVQnOvSDv7of2Wh-_WXsHw_F2tE76nFQ0zpUDgYnMWveTy3sRl1tzo2jia2orfIS1DZoD2O/w640-h360/thumb%20Cara%20Membuat%20Form%20OTP%206%20Kotak%20dengan%20Bootstrap%205%20dan%20jQuery.png",
    title: "Demo OTP Form",
    category: "sc",
    description: "Technology : HTML, CSS, JavaScript (JQuery)",
  },
  {
    url: "/email-autocomplete",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcQk9Snvz8H-KLf6BxDWql8uHzcutubocQsjq2BEt1Izl29qKLTekzG6M7LrX4GrwTcfMzpLnbZ4UBTlECBv3Wc9nohRz8CaKI1rw5oyeC8bXf1qRuwL3PKek71WqhV7KcdqZKhwDd7W2yFmfHHzokgiYviwlFO9TKvwyI72ddxLVVMTYzpm_tKOYU73k7/s1280/Tutorial%20Membuat%20Autocomplete%20Email%20di%20Form%20dengan%20Bootstrap%20dan%20jQuery.png",
    title: "Demo Email Autocomplete with Bootstrap 5",
    category: "ux",
    description: "Technology : HTML, CSS, JavaScript (JQuery)",
  },
  {
    url: "/format-no-hp",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVVtF43NvmVh7vpKeFHwDEeHF7x0ELkTWc0mwE1hounTCKorltGwp2Au05Se3MfRr_4BX95319SlXNtC9nFF-6mOgeQKDrSHnUx8UFTGV-k7CkRS0zyTx5E1OI9KCgaywx8OQIHMBE2NMFrnX9w2I-K9gC81Bs7O2kLOgY5FMGXB0tYCqicOqXWWsQiPyV/s1280/Cara%20Mudah%20Membuat%20Input%20Nomor%20Handphone%20yang%20Auto-Format%20di%20Website%20dengan%20JavaScript.png",
    title: "Demo Input Nomor Handphone yang Auto-Format di Website dengan JavaScript",
    category: "ux",
    description: "Technology : HTML, CSS, JavaScript (JQuery)",
  },
  {
    url: "/countdown-timer",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsmystOqdvwnvqiAdhD3VVWMhhLwqiv5QaS9S9Yo7bAhPqQDhWoeQFeCo9IxzfQgHMSuRD12kdtyGKi-214J2VhdMzuD7o7UoB7gOVHMP-Wm0ePnZ3qvTUHKrSsDhoM2EOEzZVdDz4hoe7ePKjGIMKlKcsDQAUi3x6WfzafLOQyYGQWPV2Ck9N28xfavWB/s1280/Tutorial%20Membuat%20Countdown%20Timer%20dengan%20Notifikasi%20Suara%20dan%20Pesan%20Menggunakan%20Bootstrap%205.3%20dan%20jQuery.png",
    title: "Demo Countdown Timer dengan Notifikasi Suara dan Pesan Menggunakan Bootstrap 5.3 dan jQuery",
    category: "ux",
    description: "Technology : HTML, CSS, JavaScript (JQuery)",
  },
  {
    url: "/captcha",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWOSZlRogyb1DQE_YrnSMY_QR7VUZQw50dCBOXMmusRfO71FHEy648mYzqY2EcZJvcO8_iTo62s-pLPbtsQu64BhA2TW2tATeHYu9WrmoImTeVo6ydQ3rUTL6tRQMMBN4IYRLDlKPq2XrHejbHNht88BuFJnVr90AqzWTiMsI0BuwX9MrmFdWSejphlDNm/s1280/Membuat%20Form%20CAPTCHA%204-Digit%20dengan%20HTML,%20CSS,%20jQuery,%20dan%20Bootstrap.png",
    title: "Demo Captcha",
    category: "sc",
    description: "Technology : HTML, CSS, JavaScript (JQuery)",
  },
  {
    url: "/todo-list",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFejcpz2KKCM42Tzzdn9dzuoRDTommTRv6aFl25wJDeek76cHwIiKr9aleSgPP_Wr8h0-bwGAioLEcHgZizUInGznOXL6m33X-kvWTprpHvXsQM-cLo5gsUn8CwjU7fUneC6FjMPLsby-yezVsGRlAGtkihyphenhyphenuQLrFCXP3V4PPqdVpzV6DDA5KpDVM5lRX/s1280/Membuat%20Aplikasi%20Todo%20List%20Interaktif%20dengan%20Bootstrap%20dan%20jQuery.png",
    title: "Demo Todo List",
    category: "ux",
    description: "Technology : HTML, CSS, JavaScript (JQuery)",
  },
  {
    url: "/draw-a-signature",
    image: "https://via.placeholder.com/640x360?text=Draw+Signature",
    title: "Draw a Signature",
    category: "ui",
    description: "Technology : HTML, CSS, JavaScript (Canvas)",
  },
  {
    url: "/dynamic-form",
    image: "https://via.placeholder.com/640x360?text=Dynamic+Form",
    title: "Dynamic Form",
    category: "ui",
    description: "Technology : HTML, CSS, JavaScript (JQuery)",
  },
  {
    url: "/hover-text-animation",
    image: "https://via.placeholder.com/640x360?text=Hover+Animation",
    title: "Hover Text Animation",
    category: "ui",
    description: "Technology : HTML, CSS",
  },
  {
    url: "/ketik",
    image: "https://via.placeholder.com/640x360?text=Typing+Animation",
    title: "Typing Animation",
    category: "ux",
    description: "Technology : HTML, CSS, JavaScript (Prism.js)",
  },
  {
    url: "/loader",
    image: "https://via.placeholder.com/640x360?text=Loader",
    title: "Loader Animations",
    category: "ui",
    description: "Technology : HTML, CSS",
  },
  {
    url: "/Qr-Generator",
    image: "https://via.placeholder.com/640x360?text=QR+Generator",
    title: "QR Code Generator",
    category: "ux",
    description: "Technology : HTML, CSS, JavaScript",
  },
  {
    url: "/slider",
    image: "https://via.placeholder.com/640x360?text=Slider",
    title: "Image Slider",
    category: "ui",
    description: "Technology : HTML, CSS, JavaScript",
  },
  {
    url: "/toast",
    image: "https://via.placeholder.com/640x360?text=Toast",
    title: "Toast Notifications",
    category: "ux",
    description: "Technology : HTML, CSS, JavaScript",
  },
  {
    url: "/font",
    image: "https://via.placeholder.com/640x360?text=Font+Creator",
    title: "Font Creator",
    category: "ui",
    description: "Technology : HTML, CSS, JavaScript",
  },
];
