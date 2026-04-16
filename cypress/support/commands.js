const emailSelectors = [
  'input[type="email"]',
  'input[name="email"]',
  'input[placeholder*="mail"]',
];

const passwordSelectors = [
  'input[type="password"]',
  'input[name="password"]',
  'input[placeholder*="senha"]',
];

const dbNameInputSelectors = [
  'input[name="name"]',
  'input[name="databaseName"]',
  'input[placeholder*="Nome do item"]',
  'input[placeholder*="nome do item"]',
  'input[placeholder*="banco"]',
  'input[placeholder*="database"]',
];

Cypress.Commands.add('firstVisible', (selectors) => {
  return cy.get(selectors.join(', ')).filter(':visible').first();
});

Cypress.Commands.add('clickByText', (pattern) => {
  return cy
    .contains('button, a, [role="button"]', pattern)
    .filter(':visible')
    .first()
    .click({ force: true });
});

Cypress.Commands.add('resetSessionState', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

Cypress.Commands.add('login', (options = {}) => {
  const { handleInconsistentPrompt = true } = options;

  cy.visit('/');
  cy.env(['authEmail', 'authPassword']).then(({ authEmail, authPassword }) => {
    cy.firstVisible(emailSelectors).clear().type(authEmail);
    cy.firstVisible(passwordSelectors).clear().type(authPassword, {
      log: false,
    });
  });
  cy.clickByText(/entrar|login|acessar/i);

  if (handleInconsistentPrompt) {
    // Known app issue: valid login can show an inconsistent prompt asking to continue.
    cy.get('body').then(($body) => {
      const bodyText = $body.text().toLowerCase();
      if (
        bodyText.includes('seu login está incorreto') ||
        bodyText.includes('seu login esta incorreto')
      ) {
        cy.clickByText(/continuar/i);
      }
    });
  }
});

Cypress.Commands.add('createDatabase', (databaseName) => {
  cy.clickByText(/novo|new|adicionar|criar/i);

  cy.contains('h2', /adicionar novo item/i).should('be.visible');
  cy.get('input[placeholder="Nome do item"], input[placeholder*="nome do item"]')
    .filter(':visible')
    .first()
    .clear()
    .type(databaseName);

  cy.contains('button', /salvar/i)
    .filter(':visible')
    .first()
    .click({ force: true });
});

Cypress.Commands.add('openCampaignModal', () => {
  cy.get('a[routerlink="/dashboard/campanha"], button[routerlink="/dashboard/campanha"]')
    .first()
    .click({ force: true });

  cy.contains('h3', /campanha/i).should('be.visible');
});

Cypress.Commands.add('goToDatabases', () => {
  cy.openCampaignModal();
  cy.contains('a', /bancos de dados/i).first().click({ force: true });
  cy.url().should('include', '/dashboard/campanha/bancos-de-dados');
});

Cypress.Commands.add('goToColmeiaForms', () => {
  cy.openCampaignModal();
  cy.contains('a', /colmeia forms/i).first().click({ force: true });
  cy.url().should('include', '/dashboard/campanha/colmeia-forms');
});
