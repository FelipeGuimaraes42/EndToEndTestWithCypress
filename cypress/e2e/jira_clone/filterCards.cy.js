// describe('Filter Cards Assigned to User', () => {
//     beforeEach(() => {
//         // Visit the URL
//         cy.visit('https://jira.ivorreic.com/project/board');

//         // Wait for 15 seconds after page load
//         cy.wait(15000);
//     });

//     it('should filter and display only cards assigned to the user', () => {
//         // Click on "Only My Issues" filter button
//         cy.contains('button', 'Only My Issues').click();

//         // Click on the board
//         cy.get('.sc-hrWEMg.efIbEb').click();

//         // Assert that the user's card is visible
//         cy.contains('.sc-kPVwWT.eYJELZ', 'Each issue has a single reporter but can have multiple assignees.').should('be.visible');

//         // Assert that the card not assigned to the user is not visible
//         cy.contains('.sc-kPVwWT.eYJELZ', 'Click on an issue to see what\'s behind it.').should('not.exist');
//     });
// });

describe('Clear Filters and Apply New Filter', () => {
    beforeEach(() => {
        // Visit the URL
        cy.visit('https://jira.ivorreic.com/project/board');

        // Wait for 15 seconds after page load
        cy.wait(15000);
    });

    it('should clear all filters and click on Recently Updated button', () => {
        // Click on "Only My Issues" filter button
        cy.contains('button', 'Only My Issues').click();

        // Click on the board
        cy.get('.sc-hrWEMg.efIbEb').click();

        // Assert that the user's card is visible
        cy.contains('.sc-kPVwWT.eYJELZ', 'Each issue has a single reporter but can have multiple assignees.').should('be.visible');

        // Assert that the card not assigned to the user is not visible
        cy.contains('.sc-kPVwWT.eYJELZ', 'Click on an issue to see what\'s behind it.').should('not.exist');

        // Click on "Clear Filters" button
        cy.contains('.sc-iyvyFf.eWAgnI', 'Clear all').click();

        // Click on "Recently Updated" filter button
        cy.contains('button', 'Recently Updated').click();

        // Assert that the card not assigned to the user is visible again
        cy.contains('.sc-kPVwWT.eYJELZ', 'Click on an issue to see what\'s behind it.').should('be.visible');
    });
});
