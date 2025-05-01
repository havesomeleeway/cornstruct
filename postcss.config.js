export default {
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'tailwindcss': {},
    ...process.env.NODE_ENV === 'production'
      ? {
          'cssnano': {
            preset: 'default',
          },
        }
      : {}
  }
};