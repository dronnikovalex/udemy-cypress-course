describe('Visual regression - data tables', () => {

  before(function()  {
    cy.visit('http://zero.webappsecurity.com')
    cy.contains('#signin_button', "Signin").click()

    cy.get('#user_login').type("username")
    cy.get('#user_password').type("password")
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()

  })

  it('Should load account_activity', () => {
    cy.get('#account_activity_tab').click()
    cy.matchImageSnapshot()
  })

})