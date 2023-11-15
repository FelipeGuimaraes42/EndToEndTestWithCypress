describe('Search Issues', () => {
    beforeEach(() => {
        cy.visit('https://jira.ivorreic.com/project/board')
        cy.wait(15000)
        cy.get('[data-testid="icon:search"]').first().click() // Click on the first search button
    })

    it('should be able to search for an issue', () => {
        cy.get('input[placeholder="Search issues by summary, description..."]').type('This is an issue of type')
        cy.wait(10000)
        cy.get('.sc-jVODtj').should('exist')
    })

    it('should see an error message when searching for a non-existing card', () => {
        cy.get('input[placeholder="Search issues by summary, description..."]').type('wasd')
        cy.wait(10000)
        cy.get('.sc-hmXxxW').should('exist')
    })
})
