import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Optional: Shortcut for src folder
      'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css'), // Alias for Bootstrap CSS
    },
  },
});
