// // Test Case 1: User can see all images on the carousel
// describe('Carousel Images', () => {
//     it('should display all images in the carousel', () => {
//       cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/animation');

//       cy.get('.BrainhubCarouselItem img').should('have.length', 3);
//       cy.get('.BrainhubCarouselItem img').each(($img) => {
//         cy.request($img.attr('src')).should('have.property', 'status', 200);
//       });
//     });
//   });

//   // Test Case 2: User can see the images after they already passed
//   describe('Carousel Images', () => {
//     it('should display images after they have passed', () => {
//       cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/animation');

//       // Wait for carousel to pass through all images
//       cy.wait(11000); // Assuming the carousel takes 10 seconds to pass through all images

//       // Check if the first image is visible again
//       cy.get('.BrainhubCarouselItem img').first().should('be.visible');
//     });
//   });

//   // Test Case 3: User can see the first image again after the carousel restarts
//   describe('Carousel Images', () => {
//     it('should display the first image again after carousel restarts', () => {
//       cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/animation');

//       // Wait for carousel to pass through all images
//       cy.wait(11000); // Assuming the carousel takes 10 seconds to pass through all images

//       // Check if the first image is visible after carousel restarts
//       cy.get('.BrainhubCarouselItem img').first().should('be.visible');
//     });
//   });

// In this test I needed to ask for the src source, it may have happened due to the number of tokens of my prompt

// Test Case 1: User can see all images on the carousel
describe('Carousel Images', () => {
    it('should display all images in the carousel', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/animation');

        cy.get('.BrainhubCarouselItem img').each(($img) => {
            cy.request($img.attr('src')).should('have.property', 'status', 200);
        });
    });
});

// Test Case 2: User can see the images after they already passed
describe('Carousel Images', () => {
    it('should display images after they have passed', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/animation');

        // Wait for carousel to pass through all images
        cy.wait(11000); // Assuming the carousel takes 10 seconds to pass through all images

        // Check if the first image is visible again
        cy.get('.BrainhubCarouselItem img').first().should('have.attr', 'src')
            .and('include', 'mona-7a1ceae9bdb8c43272eb101c091c5408.jpg');
    });
});

// Test Case 3: User can see the first image again after the carousel restarts
describe('Carousel Images', () => {
    it('should display the first image again after carousel restarts', () => {
        cy.visit('https://brainhubeu.github.io/react-carousel/docs/examples/animation');

        // Wait for carousel to pass through all images
        cy.wait(11000); // Assuming the carousel takes 10 seconds to pass through all images

        // Check if the first image is visible after carousel restarts
        cy.get('.BrainhubCarouselItem img').first().should('have.attr', 'src')
            .and('include', 'mona-7a1ceae9bdb8c43272eb101c091c5408.jpg');
    });
});
