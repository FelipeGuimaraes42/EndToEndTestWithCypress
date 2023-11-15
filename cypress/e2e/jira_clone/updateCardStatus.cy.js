describe('Update Card Status from Backlog to In Progress', () => {
    it('should update card status and reflect changes on the board', () => {
        cy.visit('https://jira.ivorreic.com/project/board');
        cy.wait(15000);

        // Click on the card in the Backlog
        cy.get('[data-testid="board-list:backlog"] [data-testid="icon:story"]').first().click();
        cy.wait(5000);

        // Change the status to In Progress
        cy.get('[data-testid="select:status"]').click();
        cy.get('[data-select-option-value="inprogress"]').click();
        cy.wait(5000);

        // Return to the home page
        cy.get('[data-testid="icon:close"]').click();
        cy.wait(5000);

        // Assert that the card is now in the In Progress column
        cy.get('[data-testid="board-list:inprogress"]').should('exist');

        // Use a Cypress selector to find the component based on its class
        cy.get('.sc-RefOD.iFErAO').should('exist');

        // Assert the content of the component
        cy.get('.sc-RefOD.iFErAO')
            .should('contain.text', 'Backlog')
            .should('contain.html', '<span class="sc-iQKALj XSDpq">3</span>');
    });
});
