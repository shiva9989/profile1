import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/profile1/', // Replace with your repo name
  plugins: [react()],
});
