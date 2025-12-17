# Teknomaven Demo Portfolio

Interactive web components and tutorials showcasing modern web development.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap 5** - Component library
- **React 19** - UI library

## 📦 Features

This portfolio includes 16+ interactive demos:

- ✅ **Captcha** - 4-digit CAPTCHA verification
- ⏱️ **Countdown Timer** - Timer with notifications
- ✍️ **Draw Signature** - Canvas-based signature tool
- 📝 **Dynamic Form** - Add/remove form fields
- 📧 **Email Autocomplete** - Smart email suggestions
- 🔢 **OTP Form** - 6-digit OTP input
- 📱 **Phone Format** - Auto-format phone numbers
- 👁️ **Password Toggle** - Show/hide password
- ✨ **Hover Animations** - CSS hover effects
- ⌨️ **Typing Animation** - Code typing effect
- 🔄 **Loaders** - Loading animations
- 🔲 **QR Generator** - Generate QR codes
- 🖼️ **Image Slider** - Carousel component
- 🔔 **Toast** - Notification system
- ☑️ **Todo List** - Task management
- 🔤 **Font Visualizer** - Preview different fonts

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
npm install
\`\`\`

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

This generates a static export in the `out/` directory.

### Preview Production Build

\`\`\`bash
npm run start
\`\`\`

## 🌐 Deployment

This site is configured for GitHub Pages deployment:

1. Push to `main` or `master` branch
2. GitHub Actions automatically builds and deploys
3. Site available at: https://demo.teknomaven.com

### Manual Deployment

\`\`\`bash
npm run build
# Deploy the out/ directory to your hosting provider
\`\`\`

## 📁 Project Structure

\`\`\`
teknomaven.github.io/
├── app/                      # Next.js app directory
│   ├── captcha/             # Captcha demo
│   ├── countdown-timer/     # Timer demo
│   ├── todo-list/           # Todo list demo
│   ├── ...                  # Other demos
│   ├── data/                # Data files
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # Reusable components
├── public/                  # Static assets
├── .github/workflows/       # GitHub Actions
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
\`\`\`

## 🔧 Configuration

### GitHub Pages Setup

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy on push

### Custom Domain

The `CNAME` file in `public/` configures the custom domain: `demo.teknomaven.com`

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and create your own demos!

---

**Previous Version:** This site was migrated from static HTML/jQuery to Next.js/React. The old version is preserved in `old-html-backup/` for reference.
