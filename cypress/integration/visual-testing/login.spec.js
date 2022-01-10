describe('Visual regression login page', () => {

  before(function()  {
    cy.visit('http://zero.webappsecurity.com')
    cy.contains('#signin_button', "Signin").click()

    cy.get('#user_login').type("login")
    cy.get('#user_password').type("password")
    cy.get('#user_remember_me').click()

  })

  it('Desktop Layout', () => {
    
    cy.SetViewport([1280, 720])
    cy.matchImageSnapshot()
  })

  // it('Tablet Layout', () => {
  //   cy.SetViewport('ipad-2')
  //   cy.matchImageSnapshot()
  // })
  
  // it('Mobile Layout', () => {
  //   cy.SetViewport('iphone-6')
  //   cy.matchImageSnapshot()
  // })

})