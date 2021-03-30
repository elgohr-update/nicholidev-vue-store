const category = {

  get products(): Cypress.Chainable {
    return cy.get('[data-e2e="category-product-card"] a');
  }

};

export default category;
