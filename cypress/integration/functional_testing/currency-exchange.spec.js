describe('It tests curency exchange', () => {

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

  it('Should fill form and verify amount', () => {
    //better way to use '#pay_bills_tab"
    cy.get('a[href$="pay-bills.html"]').click()
    cy.contains('a', 'Purchase Foreign Currency').click()

    cy.log('**fill the form**')
    cy.get('#pc_currency').select('CHF')
    cy.get('input[name="amount"]').last().type(1000)
    cy.get('#pc_inDollars_true').check()
    cy.get('#pc_calculate_costs').click()

    cy.log('**verify conversation amount**')
    cy.get('#pc_conversion_amount')
      .invoke('text')
      .should('be.eql', '878.50 franc (CHF) = 1000.00 U.S. dollar (USD)')

  })

})