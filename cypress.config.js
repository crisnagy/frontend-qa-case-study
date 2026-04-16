const { defineConfig } = require('cypress');

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl:
      process.env.CYPRESS_BASE_URL ||
      'https://teste-colmeia-qa.colmeia-corp.com/',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    video: false,
  },
  env: {
    authEmail: process.env.CYPRESS_AUTH_EMAIL || 'qa@test.com',
    authPassword: process.env.CYPRESS_AUTH_PASSWORD || '123456',
  },
});
