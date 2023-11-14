// E2E Test Case: User creates an issue
describe('Create Issue', () => {
    it('should create an issue successfully', () => {
        // Visit the URL
        cy.visit('https://jira.ivorreic.com/project/board');

        // Wait for 15 seconds after the page loads
        cy.wait(15000);

        // Click on the "Create Issue" button
        cy.get('[data-testid="icon:plus"]').click();

        // Wait for 15 seconds for the modal to appear
        cy.wait(15000);

        // Fill in the Short Summary field
        cy.get('[data-testid="form-field:title"] input').type('E2E Test With Cypress');

        // Fill in the Description field
        cy.get('[data-testid="form-field:description"] .ql-editor').type('E2E Test With Cypress');

        // Click the "Create Issue" button
        cy.get('[type="submit"]').click();

        // Wait for at most 12 seconds after submitting
        cy.wait(12000);

        // Assert that the success message is displayed
        cy.contains('Issue has been successfully created.');
    });
});