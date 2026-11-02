import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

import { cloudflare } from "@cloudflare/vite-plugin";

function preloadGeistLatin(): Plugin {
  return {
    name: 'preload-geist-latin',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle;
        if (!bundle) return html;
        const font = Object.values(bundle).find(
          (item) =>
            item.type === 'asset' &&
            item.fileName.includes('geist-latin-wght-normal') &&
            item.fileName.endsWith('.woff2'),
        );
        if (!font || font.type !== 'asset') return html;
        const tag = `    <link rel="preload" href="/${font.fileName}" as="font" type="font/woff2" crossorigin />`;
        if (html.includes(font.fileName)) return html;
        return html.replace('</head>', `${tag}\n  </head>`);
      },
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), preloadGeistLatin(), cloudflare()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
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
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});