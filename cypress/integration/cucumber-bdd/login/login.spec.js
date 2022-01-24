/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './LoginPO'

Given('I open the homepage', () => {
  LoginPage.visit()
})

When('I submit form', () => {
  cy.fixture('user').then(({ username, password }) => {
    LoginPage.fillForm(username, password)
    LoginPage.submitForm()
  })
})

Then('I see homepage', () => {
  cy.url().should('include', 'account-summary')
})