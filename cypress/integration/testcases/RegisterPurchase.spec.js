/// <reference types="cypress" />



context('Querying', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.title().should('eq','STORE')
  })

  it('Inicio de Sesión exitoso', () => {
    
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text','Samsung galaxy s6');
    
    cy.get(':nth-child(1) > .card > .card-block > .card-title').click() 
    cy.get('.col-sm-12 > .btn').click() 
    cy.wait(1000);
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000);
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000);
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000);
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(1000);
    cy.get('#cartur').click();
    cy.wait(1000);
    //Registrar Compra
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type('Sara Depaz');
    cy.get('#country').type('Perú');
    cy.get('#city').type('Lima');
    cy.get('#card').type('4456530000001005');
    cy.get('#month').type('Mayo');
    cy.get('#year').type('2022')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000);
    //Validar compra
    cy.get('.sweet-alert > h2').should('have.text','Thank you for your purchase!')
    cy.get('.confirm').click();
    cy.wait(3000);
  })



  
})
