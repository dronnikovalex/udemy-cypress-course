describe('It tests payment', () => {

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

  it('Should send new payment', () => {
    cy.log('**move to pay saved payee**')

    cy.get('#pay_bills_tab').click()
    cy.contains('Pay Saved Payee').click()

    //hande two select box
    cy.get('#sp_payee').select('bofa')
    cy.get('#sp_account').select('Loan')
    cy.get('#sp_amount').type(2000)
    //fill date
    cy.get("#sp_date").type('2020-01-02 {enter}')
    //fill description input
    cy.get('#sp_description').type('lorem')

    cy.get('#pay_saved_payees').click()

    cy.get('#alert_content')
      .should('be.visible')
      .and('have.text', 'The payment was successfully submitted.')

  })

})