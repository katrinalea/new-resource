describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/add-resource')
    cy.get('.tag').click({multiple: true})
  })
})