/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach('Página inicial', () => {
    cy.visit('https://demoqa.com/')
  })

  it('Text Box', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .avatar').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()

    cy.get('#userName').type('José')
    cy.get('#userEmail').type('jose@email.com')
    cy.get('#currentAddress').type('Casa 01')
    cy.get('#permanentAddress').type('Casa 02')

    cy.get('#submit').click()
  })

  it('Pratice Form', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()

    cy.get('#firstName').type('José')
    cy.get('#lastName').type('Ferreira')
    cy.get('#userEmail').type('jose@email.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('0123456789')
    cy.get('#dateOfBirthInput') /// Continuar aqui
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
    cy.get('#uploadPicture').should('be.visible')
    cy.get('#currentAddress').type('Casa 01')
  })

})