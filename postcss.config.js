export default {
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'postcss-nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
    ...process.env.NODE_ENV === 'production'
      ? {
          'cssnano': {
            preset: 'default',
          },
        }
      : {}
  }
};
