// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://miloszekxk.github.io',

  // Content Security Policy: przeglądarka uruchomi tylko skrypty i style tej strony
  // (Astro sam dopisuje ich odciski sha256). GitHub Pages nie ustawia nagłówków,
  // więc CSP trafia do <meta> w każdej stronie.
  // Po włączeniu analityki GoatCounter (src/data/site.ts) trzeba tu dopuścić jej domeny.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-src 'none'"
      ]
    }
  },

  i18n: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl',
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl-PL',
          en: 'en-US'
        }
      }
    })
  ]
});
