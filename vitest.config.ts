/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { configDefaults } from 'vitest/config'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,//para ter acesso as variaveis globais
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts"],
        include: ["src/**/*.spec.tsx", "src/**/*.spec.ts", "src/**/*.test.ts"],//todas as pastas em src, que tiverem ".spec.tsx" ou ".spec.ts"
        coverage: {
            exclude: [...configDefaults.coverage.exclude,
            "*/types/*", //para nao ter de testar os types com a analise do covarage
            "src/main.tsx"
            ]
        }
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./src")}]//se tiver um "@" pegue da rota rais "src"
    }
})