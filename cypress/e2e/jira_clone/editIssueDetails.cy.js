describe('Card Details Edit Test', () => {
    it('should be able to edit card details', () => {
        // Visit the URL
        cy.visit('https://jira.ivorreic.com/project/board');

        // Wait for 15 seconds after the page loads
        cy.wait(15000);

        // Click on the card by checking the card text
        cy.contains('.sc-kPVwWT.eYJELZ p', 'This is an issue of type: Task').click();

        // Wait for 3 seconds after loading card details
        cy.wait(3000);

        // Click on the status dropdown
        cy.get('[data-testid="select:status"]').click();

        // Select "Done" from the dropdown options
        cy.get('[data-select-option-value="done"]').click();

        // Assert that the status has been updated to "Done"
        cy.get('.sc-cMljjf.jnweIx').should('contain.text', 'Done');
    });
});
