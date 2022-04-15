/// <reference types="cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.title().should('eq','STORE')
  })

  it('Inicio de Sesión exitoso', () => {
    cy.get(':nth-child(2) > .nav-link').click()
    cy.wait(1000);
    cy.get('#recipient-email').should('be.enabled').type("testAutomation@gmail.com");
    cy.wait(1000);
    cy.get('#recipient-name').should('be.enabled').type("Sara Depaz");
    cy.wait(1000);
    cy.get('#message-text').should('be.enabled').type("Requiero comprar 5 laptops y 2 teléfonos");
    cy.wait(1000);
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible').click();
  })


  
})
