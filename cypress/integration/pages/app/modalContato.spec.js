/// <reference types="cypress" />

describe('/pages/contact/', () => {
  // it === teste
  it('go to contact page', () => {
    cy.visit('/contact/')
    cy.get('button[type="button"]').click()
    cy.get('#name').type('André Menezes')
    cy.get('#email').type('1992menezes@gmail.com')
    cy.get('#message').type('Oi carai')
    cy.get('button[type="submit"]').click()
    cy.get('[class*="Loading"]').should('exist')
    cy.get('[class*="Success"]').should('exist')
    cy.get('[class*="Modal"]').should('not.exist')
  })
})
