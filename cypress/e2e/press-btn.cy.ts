describe('Tag buttons', () => {
  it('Checks tag buttons exist and can be clicked', () => {
    cy.visit('http://localhost:3000/add-resource')
    cy.get('.tag').click({multiple: true})
  })
})