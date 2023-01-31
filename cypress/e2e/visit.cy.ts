describe('Web loading', () => {
  it('Checks that the website loads', () => {
    cy.visit('http://localhost:3000')
  })
})