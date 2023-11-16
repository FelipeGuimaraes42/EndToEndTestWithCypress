describe('Edit Comment on Jira-like App', () => {
    it('should edit a comment on an issue', () => {
        // Visit the Jira-like app URL
        cy.visit('https://jira.ivorreic.com/project/board');

        // Wait for 15 seconds after the page loads
        cy.wait(15000);

        // Click on a card to view details
        cy.contains('.sc-kPVwWT.eYJELZ p', 'Try leaving a comment on this issue.').click();

        // Wait for 3 seconds after loading card details
        cy.wait(3000);

        // Click on the "Edit" button
        cy.contains('.sc-daURTG.bBZxGK', 'Edit').click();

        // Edit the comment with the biggest English word and a space
        cy.get('.sc-fMiknA.edMYdI textarea').eq(1).type('pneumonoultramicroscopicsilicovolcanoconiosis ');

        // Click on the "Save" button
        cy.contains('.sc-bwzfXH.dIxFno.sc-esOvli.keRYgb .sc-bxivhb.rljZq', 'Save').click();

        // Wait for 3 seconds after saving the comment
        cy.wait(3000);

        // Assert that the edited word is present on the page
        cy.contains('.sc-gojNiO.cYOpjs', 'pneumonoultramicroscopicsilicovolcanoconiosis');
    }
    )
});