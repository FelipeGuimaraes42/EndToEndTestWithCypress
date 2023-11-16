describe('Issue Commenting', () => {
    it('1. User should be able to add a comment on an issue', () => {
        // Visit the specified URL
        cy.visit('https://jira.ivorreic.com/project/board');

        // Wait for 15 seconds after the page loads
        cy.wait(15000);

        // Locate the card on the board and click to view card details
        cy.contains('.sc-kPVwWT.eYJELZ', 'Try leaving a comment on this issue.').click();

        // Wait for 3 seconds after the card details load
        cy.wait(3000);

        // Type a comment in the comment section
        cy.get('.sc-bMVAic.cnatGv').type('This is a test comment');

        // Wait for 3 seconds after typing the comment
        cy.wait(3000);

        // Click the Save button to save the comment
        cy.contains('.sc-bwzfXH.dIxFno.sc-esOvli.keRYgb', 'Save').click();

        // Wait for 3 seconds after saving the comment
        cy.wait(3000);

        // Assert that the comment is added by checking its existence
        cy.contains('p', 'This is a test comment');

        // Assert that the Edit and Delete options are available for the added comment
        cy.get('div:contains("This is a test comment") + div:contains("Edit")').should('exist');
        cy.get('div:contains("This is a test comment") + div:contains("Delete")').should('exist');
    });
});
