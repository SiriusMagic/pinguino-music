import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: "http://localhost:4173/",
    viewport: { width: 400, height: 860 },
    // Fuera de CI se puede usar un Chromium ya instalado: PW_CHROMIUM=/ruta/al/navegador
    launchOptions: process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 400, height: 860 } } }],
  webServer: {
    command: "yarn build:web && yarn serve -s dist -l 4173 --no-clipboard",
    url: "http://localhost:4173/",
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
});
