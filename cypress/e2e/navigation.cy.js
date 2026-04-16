describe('Navigation and critical links', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should navigate to Colmeia Forms route but fail to load feature content (bug)', () => {
    cy.goToColmeiaForms();

    cy.get('body').should('be.visible');
    cy.location('pathname').should('include', '/dashboard/campanha/colmeia-forms');

    cy.contains(/novo item|adicionar novo item/i).should('not.exist');
    cy.get('input').should('not.exist');
    cy.contains(/salvar/i).should('not.exist');
  });
});
