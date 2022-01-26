import FeedbackPage from './feedbackPage'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit feedback page', () => {
  FeedbackPage.visit()
})

When('I fill form', datatable => {
  FeedbackPage.fillForm(datatable)
})

When('I submit form', () => {
  FeedbackPage.submitForm()
})