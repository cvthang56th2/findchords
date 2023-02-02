const rem = (px, base = 16) => `${px / base}rem`
const lineHeight = (fontSize, lineH) => (lineH / fontSize).toFixed(4)
const getFont = (fontSize, lineH) => [rem(fontSize), { lineHeight: lineHeight(fontSize, lineH) }]

const fontSize = {
  xs: ['0.75rem', { lineHeight: '1' }],
  sm: ['0.875rem', { lineHeight: '1.25' }],
  base: ['1rem', { lineHeight: '1.75' }],
  lg: ['1.125rem', { lineHeight: '1.56' }],
  xl: ['1.25rem', { lineHeight: '1.33' }],
  '2xl': ['1.5rem', { lineHeight: '2' }],
  '3xl': ['1.875rem', { lineHeight: '2.25' }],
  '4xl': ['2.25rem', { lineHeight: '2.5' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
  '9xl': ['8rem', { lineHeight: '1' }],
  h1: getFont(35, 40),
  h2: getFont(28, 30),
  h3: getFont(26, 28),
  h4: getFont(24, 26),
  h5: getFont(20, 24),
  h6: getFont(18, 30),
  h7: getFont(18, 23),
  body: getFont(16, 24),
  small: getFont(14, 23),
  'h1-md': getFont(35, 40),
  'h2-md': getFont(28, 30),
  'h3-md': getFont(26, 28),
  'h4-md': getFont(24, 26),
  'h5-md': getFont(20, 24),
  'h6-md': getFont(18, 30)
}

const screens = {
  'sm': '481px',
  'md': '768px',
  'lg': '1025px',
  '2lg': '1025px',
  'xl': '1200px',
  '2xl': '1400px',
  '2k': '1920px',
  'down_xl': {'max': '1199px'},
  'down_lg': {'max': '1024px'},
  'down_2lg': {'max': '1024px'},
  'down_md': {'max': '767px'},
  'down_sm': {'max': '480px'}
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens,
    extend: {
      fontSize
    },
  },
  plugins: [],
}
