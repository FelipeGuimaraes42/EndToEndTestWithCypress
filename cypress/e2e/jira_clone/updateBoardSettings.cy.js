describe('Board Update Test', () => {
    it('should update name, URL, description, and category of the board', () => {
        cy.visit('https://jira.ivorreic.com/project/board');
        cy.wait(15000);

        // Open Project Settings
        cy.get('[data-testid="icon:settings"]').click();
        cy.wait(5000);

        // Update Name
        cy.get('[data-testid="form-field:name"] input').clear().type('Updated Board Name');

        // Update URL
        cy.get('[data-testid="form-field:url"] input').clear().type('https://www.updated-url.com');

        // Update Description
        cy.get('[data-testid="form-field:description"] .ql-editor').clear().type('Updated project description.');

        // Update Category
        cy.get('[data-testid="select:category"]').click();
        cy.get('[data-select-option-value="business"]').click();

        // Save Changes
        cy.get('button[type="submit"]').click();
        cy.wait(3000);

        // Assert Changes have been saved successfully
        cy.contains('Changes have been saved successfully.');


        // Reload the page
        cy.reload();
        cy.wait(15000);

        // Assert Project Name update
        cy.get('.sc-feJyhm.jwrhXI').should('contain.text', 'Updated Board Name');

        // Assert Inputs have been updated
        cy.get('[data-testid="form-field:name"] input').should('have.value', 'Updated Board Name');
        cy.get('[data-testid="form-field:url"] input').should('have.value', 'https://www.updated-url.com');
        cy.get('[data-testid="form-field:description"] .ql-editor').should('have.text', 'Updated project description.');
        cy.get('[data-testid="select:category"]').should('contain.text', 'Business');

    });
});
