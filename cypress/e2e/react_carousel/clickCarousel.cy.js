// Strangely, this test doesn't work as expected on Cypress
// Even the original tests use mouse move instead of clicking
// As we can see here: https://github.com/brainhubeu/react-carousel/blob/master/cypress/integration/ClickToChange.test.js

describe('Should test click carousel', () => {
    // Test Case 1
    it('clicks on the image to the right and sees it highlighted', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/clickToChange');
        cy.get('.BrainhubCarouselItem--clickable').eq(1).click();
        cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src').should('include', 'scream');
    });

    // Test Case 2
    it('clicks on the image to the right and returns to the first one by clicking on the left', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/clickToChange');
        cy.get('.BrainhubCarouselItem--clickable').eq(1).click();
        cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src').should('include', 'scream');
        cy.get('.BrainhubCarouselItem--clickable').eq(0).click();
        cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src').should('include', 'mona');
    });

    // Test Case 3
    it("cannot click on the left of the image if already on the first image", () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/clickToChange');
        cy.get('.BrainhubCarouselItem--clickable').eq(0).click();
        cy.get('.BrainhubCarouselItem--clickable').eq(0).should('have.class', 'BrainhubCarouselItem--active');
        cy.get('.BrainhubCarouselItem--clickable').eq(0).should('not.have.class', 'BrainhubCarouselItem--draggable');
    });

    // Test Case 4
    it("cannot click on the right of the image if already on the last image", () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/clickToChange');
        cy.get('.BrainhubCarouselItem--clickable').eq(2).click();
        cy.get('.BrainhubCarouselItem--clickable').eq(2).should('have.class', 'BrainhubCarouselItem--active');
        cy.get('.BrainhubCarouselItem--clickable').eq(2).should('not.have.class', 'BrainhubCarouselItem--draggable');
        cy.get('.BrainhubCarouselItem--clickable').eq(2).click();
        cy.get('.BrainhubCarouselItem--clickable').eq(2).should('have.class', 'BrainhubCarouselItem--active');
        cy.get('.BrainhubCarouselItem--clickable').eq(2).should('not.have.class', 'BrainhubCarouselItem--draggable');
        cy.get('.BrainhubCarouselItem--clickable').eq(2).click();
        cy.get('.BrainhubCarouselItem--clickable').eq(2).should('have.class', 'BrainhubCarouselItem--active');
        cy.get('.BrainhubCarouselItem--clickable').eq(2).should('not.have.class', 'BrainhubCarouselItem--draggable');
    });
});
