Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Átila')
    cy.get('#lastName').type('Cassel')
    cy.get('#email').type('atila@cassel.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
