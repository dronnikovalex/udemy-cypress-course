import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep('I want to wait {int} milliseconds', n => {
  cy.wait(n)
})

defineStep('I should see {string} title', title => {
  cy.title().should('include', title)
}) 

defineStep('I want to reload page', () => {
  cy.reload()
}) 