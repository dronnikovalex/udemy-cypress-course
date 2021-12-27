
describe('It test transfer funds', () => {

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

  it('Should fill form and verify values', () => {
    cy.get('a[href*="transfer-funds"]').contains('Transfer Funds').click()

    cy.get('h2').invoke('text').should('contain', 'Transfer Money & Make Payments')

    cy.log('**fill form**')
    cy.get('#tf_fromAccountId').select(2)
    cy.get('#tf_toAccountId').select(5)

    cy.get('#tf_amount').type(1000)
    cy.get('#tf_description').type(Cypress._.random())
    cy.get('#btn_submit').click()


    cy.get('.board-content  input:not([type="hidden"])').each($field => {
      expect($field.attr('disabled')).to.exist
    })

    cy.get('#btn_submit').click()
    cy.contains('.alert-success', 'You successfully submitted your transaction.').should('exist')

  })

})