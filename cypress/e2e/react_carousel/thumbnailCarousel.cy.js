// Cypress test case for clicking on an image and verifying if it is highlighted

describe('Carousel Image Highlight Test', () => {
    beforeEach(() => {
      cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/thumbnails');
    });
  
    it('should highlight Mona Lisa image when clicked', () => {
      cy.get('.BrainhubCarousel__thumbnail').eq(0).click();
      cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src').should('include', 'mona');
    });
  
    it('should highlight The Scream image when clicked', () => {
      cy.get('.BrainhubCarousel__thumbnail').eq(1).click();
      cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src').should('include', 'scream');
    });
  
    it('should highlight Starry Night image when clicked', () => {
      cy.get('.BrainhubCarousel__thumbnail').eq(2).click();
      cy.get('.BrainhubCarouselItem--active img').should('have.attr', 'src').should('include', 'starry-night');
    });
  });
  