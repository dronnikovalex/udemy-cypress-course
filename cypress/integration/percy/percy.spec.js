describe('Visual regression with percy', () => {

  it('Should take percy snapshot', () => {
    cy.visit('https://example.com/')
    cy.wait(1000)

    cy.percySnapshot()
  })

})