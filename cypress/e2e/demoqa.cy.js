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

  it.only('Pratice Form', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()

    cy.get('#firstName').type('José')
    cy.get('#lastName').type('Ferreira')
    cy.get('#userEmail').type('jose@email.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('0123456789')

    cy.get('#dateOfBirthInput').click() /// Continuar aqui
    cy.get('.react-datepicker').should('be.visible')
    cy.get('.react-datepicker__month-select').select('February')
    cy.get('.react-datepicker__year-select').select('2030')
    cy.get('.react-datepicker__day--014').should('exist')
    cy.get('.react-datepicker__day--014').click()



    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
    cy.get('#uploadPicture').should('be.visible')
    cy.get('#currentAddress').type('Casa 01')

    // Drop down do State and City
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click()
    cy.get('.css-1n7v3ny-option')
      .contains('NCR')
      .click()

    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click()
    cy.get('#react-select-4-option-0').click()

    cy.get('#submit').click()
  })

})