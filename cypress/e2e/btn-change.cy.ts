describe('Login functionality', () => {
  it('Check that selecting Katrina in the login dropdown makes the Add Resource tab to appear', () => {
    cy.visit('http://localhost:3000')
    cy.get('.login-dropdown').select('Katrina')
    cy.contains('Add Resource')
  })
})