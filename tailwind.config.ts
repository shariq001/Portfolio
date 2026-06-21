import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#020617',        // slate-950
        surface: '#0f172a',     // slate-900
        border: '#1e293b',      // slate-800
        muted: '#64748b',       // slate-500
        primary: '#00FFFF',     // Electric Cyan (accent)
        'primary-dim': '#0891b2' // subdued accent for hover states
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    }
  },
  plugins: [],
}
export default config
