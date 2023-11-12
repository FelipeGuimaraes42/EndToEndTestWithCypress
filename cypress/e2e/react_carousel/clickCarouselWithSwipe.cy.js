// Test Case 1: Swipe an image to the right and see the next one highlighted
describe('Image swiping to the right', () => {
  it('should swipe to the right and highlight the next image', () => {
    cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/clickToChange');
    cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/mona-7a1ceae9bdb8c43272eb101c091c5408.jpg');

    // Swipe to the right
    cy.get('.BrainhubCarouselItem--active img')
      .trigger('mousedown', { which: 1, pageX: 0 })
      .trigger('mousemove', { pageX: -200 })
      .wait(500)
      .trigger('mouseup', { force: true });

    // Assert the next image is highlighted
    cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/scream-ee207a05c1e6fed03aafa156cc511abe.jpg');
  });
});

// Test Case 2: Cannot swipe to the right if already on the last image
describe('Cannot swipe to the right on the last image', () => {
  it('should not swipe to the right after reaching the last image', () => {
    cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/clickToChange');
    cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/mona-7a1ceae9bdb8c43272eb101c091c5408.jpg');

    // Swipe to the right three times
    for (let i = 0; i < 3; i++) {
      cy.get('.BrainhubCarouselItem--active img')
        .trigger('mousedown', { which: 1, pageX: 0 })
        .trigger('mousemove', { pageX: -200 })
        .wait(500)
        .trigger('mouseup', { force: true });
    }

    // Assert still on the last image
    cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src', '/react-carousel/static/starry-night-39eed0a107ddb6c9f980eb3081a8bdd3.jpg');
  });
});
