const pages = ['https://example.com/']

const sizes = ['iphone-6', 'ipad-2', [1200, 800]]

describe('Visual regression', () => {

  sizes.forEach(size => {
    pages.forEach(page => {

      it(`Should match ${page} in resulution of size ${size}`, () => {
        let currentTIme = new Date(Date.UTC(2021, 1, 1)).getDate()
        cy.clock(currentTIme)
        cy.SetViewport(size)
        cy.visit(page)
        cy.matchImageSnapshot()
      })

    })
  })

})

describe('Single element snapshot', () => {

  it('Should match a single element on the page', () => {

    cy.visit(pages[0])
    cy.get('h1').matchImageSnapshot()

  })

})

