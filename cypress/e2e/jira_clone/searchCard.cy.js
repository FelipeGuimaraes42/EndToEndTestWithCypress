describe('Search functionality', () => {
    it('should be able to search for a card', () => {
        cy.visit('https://jira.ivorreic.com/project/board');
        cy.wait(15000);
        cy.get('.sc-kpOJdX.bYAXKl input').type('This is an issue of type');
        cy.wait(1000);
        cy.get('.sc-hrWEMg.efIbEb').contains('This is an issue of type');
    });
});
