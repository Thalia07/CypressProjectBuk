/// <reference types="cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.title().should('eq','STORE')
  })

  it('Inicio de Sesión exitoso', () => {
    cy.get('#login2').click()
    cy.wait(1000)
    cy.get('#loginusername').type("testQABukAutomationNew")
    cy.wait(1000)
    cy.get('#loginpassword').type("testQABukAutomationNew")
    cy.wait(1000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    cy.get('#nameofuser').should('have.text','Welcome testQABukAutomationNew')

  })


  
})
