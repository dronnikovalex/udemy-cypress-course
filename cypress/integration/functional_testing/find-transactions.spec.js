/// <reference types="cypress" />

describe('It test Find Transactions', () => {

  before(() => {
    cy.log('**visit page and login to account**')

    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.contains('#signin_button', "Signin").click()

    cy.fixture('user.json').then(user => {
      const username = user.username
      const password = user.password

      cy.login(username, password)

      cy.url().should('include', 'account-summary')
    })
  })

  it('should filter transacations and display results', () => {
    const base = '#aa_'

    cy.get('#account_activity_tab').click()
    cy.contains('Find Transactions').click()
    
    cy.get(`${base}fromAmount`).type(100)
    cy.get(`${base}toAmount`).type(1000)

    cy.get('button[type="submit"]').contains('Find').click()

    cy.log('**verify results**')
    cy.get('#filtered_transactions_for_account').should('be.visible')
    cy.get('#filtered_transactions_for_account')
      .find('tbody tr').should('have.length.gt', 0)

  })

})
