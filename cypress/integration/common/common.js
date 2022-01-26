import { defineStep } from "cypress-cucumber-preprocessor/steps";
// Those steps will be available in each feature file

defineStep('I want to wait {int} milliseconds', n => {
  cy.wait(n)
})

defineStep('I should see {string} title', title => {
  cy.title().should('include', title)
}) 

defineStep('I want to reload page', () => {
  cy.reload()
}) 

defineStep('i see {string} in url', (str) => {
  cy.url().should('include', str)
}) 