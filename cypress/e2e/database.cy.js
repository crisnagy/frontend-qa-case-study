describe('Database management', () => {
  beforeEach(() => {
    cy.login();
    cy.goToDatabases();
  });

  it('should lose created database after refresh (bug)', () => {
    const dbName = `qa-db-${Date.now()}`;

    cy.createDatabase(dbName);
    cy.contains(dbName, { timeout: 10000 }).should('be.visible');

    cy.reload();
    cy.url().should('include', '/bancos-de-dados');
    cy.contains(/bancos de dados/i).should('be.visible');

    cy.contains(dbName, { timeout: 10000 }).should('not.exist');
  });

  it('should allow duplicate database names without visual distinction (bug)', () => {
    const dbName = `qa-dup-${Date.now()}`;

    cy.createDatabase(dbName);
    cy.contains(dbName, { timeout: 10000 }).should('be.visible');

    cy.createDatabase(dbName);

    cy.get('body').then(($body) => {
      const exactMatches = $body
        .find('*')
        .filter(
          (_, el) =>
            Cypress.$(el).is(':visible') &&
            Cypress.$(el).children().length === 0 &&
            Cypress.$(el).text().trim() === dbName
        );

      expect(exactMatches.length, 'duplicate entries found').to.be.greaterThan(1);
    });
  });

  it('should not archive database when archive action is used (bug)', () => {
    const dbName = `qa-archive-${Date.now()}`;

    cy.createDatabase(dbName);
    cy.contains(dbName, { timeout: 10000 }).should('be.visible');

    cy.contains(dbName)
      .parents()
      .then(($parents) => {
        const $container = $parents
          .filter((_, el) =>
            Cypress.$(el)
              .find('button[title="Arquivar"]')
              .toArray()
              .some(() => true)
          )
          .first();

        expect($container.length, 'container with archive action').to.be.greaterThan(0);
        cy.wrap($container).within(() => {
          cy.get('button[title="Arquivar"]')
            .first()
            .click({ force: true });
        });
      });

    // second archive click required, but item still remains (bug)
    cy.get('button:visible').then(($buttons) => {
      const $archiveButtonsByIconClass = $buttons.filter(
        (_, el) => Cypress.$(el).find('svg.bi-archive-fill').length > 0
      );

      const $archiveButtonsByVariant = $buttons.filter(
        (_, el) =>
          Cypress.$(el).attr('variant') === 'icon' ||
          Cypress.$(el).attr('data-variant') === 'icon'
      );

      const $archiveButtons =
        $archiveButtonsByIconClass.length > 0
          ? $archiveButtonsByIconClass
          : $archiveButtonsByVariant;

      expect($archiveButtons.length, 'archive icon buttons found').to.be.greaterThan(0);
      cy.wrap($archiveButtons.last()).click({ force: true });
    });

    cy.contains(dbName, { timeout: 10000 }).should('be.visible');
  });
});
