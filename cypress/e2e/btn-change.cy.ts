describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.login-dropdown').select('Katrina')
    cy.contains('Add Resource')
  })
})