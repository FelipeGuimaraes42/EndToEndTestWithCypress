describe('Jira Clone Functionality Tests', () => {
    it('should handle navigation clicks without redirection', () => {
      cy.visit('https://jira.ivorreic.com/project/board');
      cy.url().should('eq', 'https://jira.ivorreic.com/project/board');
  
      // Wait for 15 seconds to load the page
      cy.wait(15000);
  
      cy.get('[data-testid="icon:shipping"]').click();
      cy.url().should('eq', 'https://jira.ivorreic.com/project/board');
  
      cy.get('[data-testid="icon:issues"]').click();
      cy.url().should('eq', 'https://jira.ivorreic.com/project/board');
  
      cy.get('[data-testid="icon:page"]').click();
      cy.url().should('eq', 'https://jira.ivorreic.com/project/board');
  
      cy.get('[data-testid="icon:reports"]').click();
      cy.url().should('eq', 'https://jira.ivorreic.com/project/board');
  
      cy.get('[data-testid="icon:component"]').click();
      cy.url().should('eq', 'https://jira.ivorreic.com/project/board');
    });
  });
  