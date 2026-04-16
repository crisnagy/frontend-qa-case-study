describe('Auth and protected routes', () => {
  beforeEach(() => {
    cy.resetSessionState();
  });

  it('should block access to dashboard without login', () => {
    cy.visit('/dashboard', { failOnStatusCode: false });

    cy.url().should('include', 'login');
    cy.contains(/entrar|login|acessar/i).should('be.visible');
  });

  it('should login with valid credentials and reach authenticated area', () => {
    cy.login();

    cy.url().should('not.include', 'login');
    cy.url().should('include', 'dashboard');
    cy.location('pathname').should('match', /\/dashboard(\/|$)/);
  });

  it('should not show incorrect-login message for valid credentials', () => {
    cy.login({ handleInconsistentPrompt: false });

    cy.get('body').then(($body) => {
      const text = $body.text().toLowerCase();
      expect(text).to.not.include('login está incorreto');
      expect(text).to.not.include('login esta incorreto');
    });
    cy.url().should('include', 'dashboard');
  });
});
