class LoginPage {

  static visit() {
    cy.visit('http://zero.webappsecurity.com/login.html')
  }

  static fillForm(username, password) {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
  }

  static submitForm() {
    cy.contains('Sign in').click()
  }

}

export default LoginPage