/// <reference types="cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit('http://demo.testim.io/')
   // cy.title().should('eq','Space & Beyond | Testim.io demo')
  })

  it('Buscar y seleccionar destino', () => {
    cy.get(':nth-child(1) > [data-react-toolbox="date-picker"] > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
    cy.get(':nth-child(22) > span').click();
    cy.get('.theme__navigation___3eiS- > :nth-child(2)').click();


    cy.get('.Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();

    cy.get(':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();

    cy.get('.Hero__hero___1FDXn > :nth-child(4) > .theme__button___1iKuo').click();

    //Seleccionar destino
    cy.get(':nth-child(1) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();
    
   
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();


    cy.get('.theme__cardActions___1aHjq > .theme__button___1iKuo').click();

    //CheckOut
    cy.wait(1000);
    cy.get('form > :nth-child(1)').type('Sara Depaz');
    cy.get('form > :nth-child(2)').type('sdepaz@gmail.com');
    cy.get('form > :nth-child(3)').type('555-50-1234');
    cy.get('form > :nth-child(4)').type('+51944555244');

    cy.get('.theme__check___2B20W').click();
  })


  
})
