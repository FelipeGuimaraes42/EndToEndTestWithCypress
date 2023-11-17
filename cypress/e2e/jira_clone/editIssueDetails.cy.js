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

        // Click on the unassigned option to open the dropdown
        cy.get('[data-testid="select:assignees"]').click();

        // Select Baby Yoda from the dropdown by its data-testid
        cy.get('[data-testid="select-option:Baby Yoda"]').click();

        // Add an assertion to verify that the assignee is updated to Baby Yoda
        cy.get('.sc-gHboQg.cTinVM').should('contain', 'Assignees');
        cy.get('.sc-emmjRN.goRxlI').should('contain', 'Baby Yoda');

        // Click on the reporter select option and update it to "Pickle Rick" by data-testid
        cy.get('[data-testid="select:reporter"]').click();
        cy.get('[data-testid="select-option:Pickle Rick"]').click();

        // Wait for 3 seconds
        cy.wait(3000);

        // Assert that the reporter has been updated to "Pickle Rick"
        cy.get('.sc-jAaTju.kMAIqY .sc-emmjRN.goRxlI').should('contain', 'Pickle Rick');

        // Click on the "Priority" field to open the options
        cy.get('[data-testid="select:priority"]').click();

        // Wait for 3 seconds after clicking on the "Priority" field
        cy.wait(3000);

        // Click on the option with text "Highest" to update the priority
        cy.contains('[data-select-option-value="5"]', 'Highest').click();

        // Wait for 3 seconds after updating the priority
        cy.wait(3000);

        // Assert that the priority has been updated to "Highest"
        cy.get('[data-testid="select:priority"]').should('contain.text', 'Highest');

        // Find and click on the "Original Estimate" input field
        cy.get('.sc-fYiAbW.erRKGE')
            .contains('Original Estimate (hours)')
            .next('.sc-kpOJdX.bYAXKl')
            .find('input')
            .clear()
            .type('6');

        // Add assertions to verify the changes (adjust selectors based on your actual application)
        cy.get('.sc-kpOJdX.bYAXKl')
            .find('input').eq(1)
            .should('have.value', '6');

        // Click on the "Stopwatch" icon
        cy.get('[data-testid="icon:stopwatch"]')
            .click();

        // Log more 4 hours to Time tracking
        cy.get('.sc-fjmCvl.ceYctA')
            .contains('Time spent (hours)')
            .next('div')
            .find('input')
            .clear()
            .type('8');

        // Click the "Done" button
        cy.get('.sc-bHwgHz.fplWgf')
            .contains('Done')
            .click();

        // Assert the changes
        cy.get('.sc-bnXvFD.eorMUq')
            .contains('8h logged');
    });
});
