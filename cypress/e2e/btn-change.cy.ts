describe('Login functionality', () => {
  it('Checks that selecting Katrina in the login dropdown makes the Add Resource option in the navbar to appear', () => {
    cy.viewport(1500,1500)
    cy.visit('http://localhost:3000')
    cy.get('.dropdown').select('Katrina')
    cy.contains('Add Resource')
  })
})