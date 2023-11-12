describe('Carousel Arrow Navigation Test', () => {
    // Test Case 1: Click on an arrow button to the right and change the image.
    it('should change image when clicking on the right arrow', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/defaultArrows');
        cy.get('.BrainhubCarousel__arrowRight').click();
        cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/scream-ee207a05c1e6fed03aafa156cc511abe.jpg');
    });

    // Test Case 2: Cannot click on an arrow to the left when on the first image.
    it('should disable left arrow on the first image', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/defaultArrows');
        cy.get('.BrainhubCarousel__arrowLeft').should('have.attr', 'disabled');
    });

    // Test Case 3: Cannot click on an arrow to the right when on the last image.
    it('should disable right arrow on the last image', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/defaultArrows');
        cy.get('.BrainhubCarousel__arrowRight').click().click(); // Navigate to the last image
        cy.get('.BrainhubCarousel__arrowRight').should('have.attr', 'disabled');
    });


    // Test Case 4: Click on the right arrow and then click on the left arrow to return to the previous image.
    it('should return to the previous image when clicking on the left arrow', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/defaultArrows');
        cy.get('.BrainhubCarousel__arrowRight').click();
        cy.get('.BrainhubCarousel__arrowLeft').click();
        cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/mona-7a1ceae9bdb8c43272eb101c091c5408.jpg');
    });
});
