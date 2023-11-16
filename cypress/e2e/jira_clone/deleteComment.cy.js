describe('Delete Comment on Issue', () => {
    it('should be able to delete a comment saved on an issue', () => {
        // Visit the Jira board URL
        cy.visit('https://jira.ivorreic.com/project/board');

        // Wait for 15 seconds after the page loads
        cy.wait(15000);

        // Click on the card to open its details
        cy.contains('.sc-kPVwWT.eYJELZ', 'Try leaving a comment on this issue.').click();

        // Wait for 3 seconds after the card details load
        cy.wait(3000);

        // Locate and click the "Delete" button on the comment
        cy.contains('.sc-bXGyLb.dvzGmn', 'Delete').click();

        // Confirm deletion in the modal
        cy.contains('.sc-bxivhb.rljZq', 'Delete comment').click();

        // Wait for 3 seconds after deleting to ensure changes are reflected
        cy.wait(3000);

        // Assert that the comment is deleted
        cy.contains('.sc-gojNiO.cYOpjs', 'Everything I touch with tenderness, alas, pricks like a bramble.').should('not.exist');
    });
});
