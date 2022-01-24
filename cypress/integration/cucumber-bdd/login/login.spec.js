/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './LoginPO'

Given('I open the homepage', () => {
  LoginPage.visit()
})

When('I fill username with {string}', username => {
  LoginPage.fillLogin(username)
})

When('I fill password with {string}', password => {
  LoginPage.fillPassword(password)
})

When('I submit form', () => {
  LoginPage.submitForm()
})

Then('I see homepage', () => {
  cy.url().should('include', 'account-summary')
})

Then('I see error', () => {
  LoginPage.getErrorMessage()
})