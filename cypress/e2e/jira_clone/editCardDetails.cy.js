describe('Edit Comment on Issue', () => {
    it('should edit a comment on an issue', () => {
        // Visit the specified URL
        cy.visit('https://jira.ivorreic.com/project/board');

        // Wait for 15 seconds after the page loads
        cy.wait(15000);

        // Get the card details component and click on it
        cy.contains('.sc-kPVwWT.eYJELZ', 'Each issue has a single reporter but can have multiple assignees')
            .click();

        // Wait for 3 seconds after loading card details
        cy.wait(3000);

        // Click on the description text to edit
        cy.get('.ql-editor')
            .click();

        // Type the biggest English word and a space
        cy.get('.ql-editor')
            .type('pneumonoultramicroscopicsilicovolcanoconiosis ');

        // Click the Save button
        cy.get('.sc-bwzfXH.dIxFno')
            .click();

        // Assert that the edited text is on the page
        cy.contains('.ql-editor', 'pneumonoultramicroscopicsilicovolcanoconiosis');
    });
});
