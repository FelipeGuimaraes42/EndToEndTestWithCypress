/// <reference types="Cypress" />

describe('Simple Carousel E2E Test', () => {
  it('should drag image to the left 500px and verify the change', () => {
    cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/simpleUsage');

    // Click on the first image
    cy.get('.BrainhubCarouselItem--active img').click();

    // Drag the image to the left 500px
    cy.get('.BrainhubCarouselItem--active img')
      .trigger('mousedown', { which: 1, pageX: 0 })
      .trigger('mousemove', { pageX: -500 })
      .wait(500)
      .trigger('mouseup', { force: true });

    // Verify that the first image is not mona anymore, it is scream
    cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/scream-ee207a05c1e6fed03aafa156cc511abe.jpg');
  });
  it('should drag image to the right and verify it is still mona', () => {
    cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/simpleUsage');

    // Click on the first image
    cy.get('.BrainhubCarouselItem--active img').click();

    // Drag the image to the right 500px
    cy.get('.BrainhubCarouselItem--active img')
      .trigger('mousedown', { which: 1, pageX: 0 })
      .trigger('mousemove', { pageX: 500 })
      .wait(500)
      .trigger('mouseup', { force: true });

    // Verify that the first image is still mona
    cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/mona-7a1ceae9bdb8c43272eb101c091c5408.jpg');
  });
  it('should drag image to the left three times and verify the last image', () => {
    cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/simpleUsage');

    // Loop to drag the image to the left three times
    for (let i = 0; i < 3; i++) {
      // Click on the active image
      cy.get('.BrainhubCarouselItem--active img').click();

      // Drag the image to the left 500px
      cy.get('.BrainhubCarouselItem--active img')
        .trigger('mousedown', { which: 1, pageX: 0 })
        .trigger('mousemove', { pageX: -500 })
        .wait(500)
        .trigger('mouseup', { force: true });
    }

    // Verify that the last image is the third one
    cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/starry-night-39eed0a107ddb6c9f980eb3081a8bdd3.jpg');
  });
});
