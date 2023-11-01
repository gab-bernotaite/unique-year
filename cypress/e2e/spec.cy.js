

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  })
  it('has correct information in template', () => {
    cy.visit('http://localhost:8001');
    cy.get('title').contains("Unique Year Checker");
    cy.get('h1').contains("Unique Year Checker");
    cy.get('input');
    cy.get('body').contains('enter');
    cy.get('button').contains('Submit');
  })
})
