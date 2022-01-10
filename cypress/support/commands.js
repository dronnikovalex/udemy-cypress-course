import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import '@percy/cypress'

addMatchImageSnapshotCommand({
  failureThreshold: 0.0,
  failureThresholdType: "percent",
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
})

Cypress.Commands.add('SetViewport', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})

Cypress.Commands.add('login', (username, password) => {
  cy.get('#user_login').type(username)
  cy.get('#user_password').type(password)
  cy.contains('Sign in').click()
})