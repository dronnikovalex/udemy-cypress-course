var faker = require('faker');
import 'cypress-network-idle'

const user = {
  name: faker.name.firstName(),
  payeeAddress: faker.address.cityName(),
  account: faker.name.jobArea(),
  payeeDetails: faker.lorem.word()
}

describe('New Payee test', () => {

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

  it('Should add new payee to the list and verify that is successfull', () => {
    cy.log('**move to pay bills**')

    cy.get('#pay_bills_tab').click()
    cy.contains('a', 'Add New Payee').click()

    cy.log('**fill inputs and submit form**')
    const base = '#np_new_payee_'
    let { name, payeeAddress, account, payeeDetails } = user

    cy.get(`${base}name`).type(name)
    cy.get(`${base}address`).type(payeeAddress)
    cy.get(`${base}account`).type(account)
    cy.get(`${base}details`).type(payeeDetails)

    cy.get('#add_new_payee').click()
    cy.log('**verify that the new payee has been successfully created**')
    cy.waitForNetworkIdle(500)

    cy.get('#alert_content', { timeout: 0 })
      .invoke('text')
      .should(text => expect(text).contain(`The new payee ${name} was successfully created.`))
     
  })

})