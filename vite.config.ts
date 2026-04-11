import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { glob } from 'glob';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // Find all HTML files in root and tools directory
  const rootHtmlFiles = glob.sync('*.html').reduce((acc, file) => {
    const name = path.basename(file, '.html');
    acc[name === 'index' ? 'main' : name] = path.resolve(__dirname, file);
    return acc;
  }, {} as Record<string, string>);

  const toolsHtmlFiles = glob.sync('tools/*.html').reduce((acc, file) => {
    const name = `tools/${path.basename(file, '.html')}`;
    acc[name] = path.resolve(__dirname, file);
    return acc;
  }, {} as Record<string, string>);

  const guidesHtmlFiles = glob.sync('guides/*.html').reduce((acc, file) => {
    const name = `guides/${path.basename(file, '.html')}`;
    acc[name] = path.resolve(__dirname, file);
    return acc;
  }, {} as Record<string, string>);

  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    build: {
      rollupOptions: {
        input: {
          ...rootHtmlFiles,
          ...toolsHtmlFiles,
          ...guidesHtmlFiles,
        },
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['lucide-react', 'motion'],
            'pdf-vendor': ['pdf-lib', 'pdfjs-dist', 'jspdf', 'mammoth', 'docx'],
            'image-vendor': ['browser-image-compression', 'react-easy-crop', 'tesseract.js'],
          }
        }
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
