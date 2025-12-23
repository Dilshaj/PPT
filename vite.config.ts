export default defineConfig({
  base: '/PPT/',  // 👈 THIS IS THE KEY (repo name)
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
