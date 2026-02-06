import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // 👈 ADD THIS
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],

    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'src/main.tsx',
        'src/test/**',
        '**/*.d.ts',
      ],
      lines: 80,
      functions: 70,
      branches: 70,
      statements: 80,
    },
  },
});
