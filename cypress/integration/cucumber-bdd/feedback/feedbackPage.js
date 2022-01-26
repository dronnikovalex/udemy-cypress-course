const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME = '#name'
const EMAIL = '#email'
const SUBJECT = '#subject'
const QUESTION = '#comment'

export default class FeedbackPage {
  static visit() {
    cy.visit(URL)
  }

  static fillForm(datatable) {
    // alternate variant to parse datatable
    // datatable.rawTable.slice(1).forEach(item => { 
    //   let [fn, mail, subj, quest] = item
    //   cy.log(fn)
    // })

    datatable.hashes().forEach(({ email, firstname, question, subject }) => {
      cy.get(NAME).type(firstname)
      cy.get(EMAIL).type(email)
      cy.get(SUBJECT).type(subject)
      cy.get(QUESTION).type(question)
    })
  }

  static submitForm() {
    cy.get('.btn-signin').click()
  }
}