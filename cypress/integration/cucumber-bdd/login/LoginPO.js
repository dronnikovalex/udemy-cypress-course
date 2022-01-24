class LoginPage {

  static visit() {
    cy.visit('http://zero.webappsecurity.com/login.html')
  }

  static fillLogin(username) {
    cy.get('#user_login').type(username)
  }

  static fillPassword(password) {
    cy.get('#user_password').type(password)
  }

  static submitForm() {
    cy.contains('Sign in').click()
  }

  static getErrorMessage() {
    cy.get('.alert-error').invoke('text').should('include', 'Login and/or password are wrong.')
  }
}

export default LoginPage