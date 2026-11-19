import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(import.meta.dirname, 'index.html'),
          about: path.resolve(import.meta.dirname, 'about.html'),
          products: path.resolve(import.meta.dirname, 'product-listing.html'),
          refurbishedProducts: path.resolve(import.meta.dirname, 'refurbished-products.html'),
          brandNewProducts: path.resolve(import.meta.dirname, 'brand-new-products.html'),
          facilityZld: path.resolve(import.meta.dirname, 'facility-zld.html'),
          careers: path.resolve(import.meta.dirname, 'careers.html'),
          contact: path.resolve(import.meta.dirname, 'contact.html'),
          bestosiaCmp: path.resolve(import.meta.dirname, 'bestosia-cmp.html'),
          bestosiaGicm: path.resolve(import.meta.dirname, 'bestosia-gicm.html'),
          bestosiaHdpec: path.resolve(import.meta.dirname, 'bestosia-hdpec.html'),
          bestosiaIbcMax: path.resolve(import.meta.dirname, 'bestosia-ibc-max.html'),
          bestosiaIbcPremium: path.resolve(import.meta.dirname, 'bestosia-ibc-premium.html'),
          bestosiaOtec: path.resolve(import.meta.dirname, 'bestosia-otec.html'),
          bestosiaOtp: path.resolve(import.meta.dirname, 'bestosia-otp.html'),
          brandNewCompositeIbc: path.resolve(import.meta.dirname, 'brand-new-1000-liter-composite-ibcs.html'),
          brandNewGiBarrels: path.resolve(import.meta.dirname, 'brand-new-gi-barrels.html'),
          brandNewMsBarrels: path.resolve(import.meta.dirname, 'brand-new-ms-barrels.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
