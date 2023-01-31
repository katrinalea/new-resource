describe('Add resource', () => {
  it('Checks that the input exists and you can type something into it', () => {
    cy.visit('http://localhost:3000/add-resource')
    cy.get('.title').type('Hello')
  })
})