import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // If you still want the warning threshold higher, tweak this value (KB).
    // Prefer splitting instead of raising this, but raising can reduce noise while fixing splits.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Let Vite handle React/react-dom chunking automatically to avoid initialization issues
            // Don't manually chunk React packages

            if (id.includes('react-router-dom')) return 'vendor-router';

            // Large/optional libs we want isolated
            if (id.includes('recharts')) return 'vendor-charts';
            if (id.includes('html2pdf.js')) return 'vendor-html2pdf';
            if (id.includes('styled-components')) return 'vendor-styled';
            if (id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('i18next') || id.includes('react-i18next')) return 'vendor-i18n';
            if (id.includes('@supabase')) return 'vendor-supabase';
            if (id.includes('date-fns')) return 'vendor-datefns';
            if (id.includes('react-hot-toast')) return 'vendor-toast';

            // Fallback: group remaining node_modules by package name to avoid one large 'vendor' file
            const pathParts = id.split('node_modules/')[1]?.split('/') || [];
            if (pathParts.length > 0) {
              const maybeScope = pathParts[0];
              // scoped package (e.g., @scope/pkg) -> join first two parts
              if (maybeScope.startsWith('@') && pathParts.length > 1) {
                const pkg = `${maybeScope}/${pathParts[1]}`;
                return `vendor-${pkg.replace('/', '-')}`;
              }
              return `vendor-${maybeScope}`;
            }

            return 'vendor';
          }
        }
      }
    }
  }
})
