describe('Homepage', () => {
  it('Observes Home when visiting the homepage', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Home')
  })
})