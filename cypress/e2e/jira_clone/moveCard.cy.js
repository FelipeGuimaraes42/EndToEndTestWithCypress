// Cypress test case for moving an issue to update its status
describe('Move Issue and Update Status', () => {
  it('should move an issue, update its status, and assert changes', () => {
    // Visit the Jira board
    cy.visit('https://jira.ivorreic.com/project/board');

    // Wait for 15 seconds after page load
    cy.wait(15000);

    // Select the card on home by its content
    cy.contains('.sc-kfGgVZ.duybNU', 'Try dragging issues to different columns to transition their status.')
      .as('issueCard')
      .click();

    // Assert the initial status of the card
    cy.get('[data-testid="select:status"]').should('contain', 'Backlog');

    // Click on close button to return to home
    cy.get('[data-testid="icon:close"]').click();

    // Move the card 100px to the right using drag-and-drop
    cy.get('@issueCard')
      .trigger('mousedown', { button: 0 })
      .trigger('mousemove', { clientX: 100, clientY: 0, force: true })
      .trigger('mouseup', { force: true });

    // Click on the moved card again
    cy.get('@issueCard').click();

    // Assert the updated status of the card
    cy.get('[data-testid="select:status"]').should('not.contain', 'Backlog');
  });
});
