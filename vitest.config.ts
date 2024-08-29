/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,//para ter acesso as variaveis globais
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts"],
        include: ["src/**/*.spec.tsx"]//todas as pastas em src, que tiverem ".spec.tsx"
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./src")}]//se tiver um "@" pegue da rota rais "src"
    }
})