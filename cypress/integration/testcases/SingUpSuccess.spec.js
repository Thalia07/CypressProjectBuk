/// <reference types="cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.title().should('eq','STORE')
  })

  it('Inicio de Sesión exitoso', () => {
    cy.get('#signin2').should('be.visible').click()
    cy.wait(1000)
    cy.get('#sign-username').type("testQABukAutomationNew1");
    cy.wait(1000)
    cy.get('#sign-password').type("testQABukAutomationNew1");
    cy.wait(1000)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible').click()
  })


  
})
