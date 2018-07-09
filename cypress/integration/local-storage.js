describe('local-storage', () => {
  it('Items added to the cart should be kept.', () => {
    cy.visit('p/WS11/diva-gym-tee-1545/WS11')
    indexedDB.deleteDatabase('shop')
    indexedDB.deleteDatabase('carts')
    cy.clearLocalStorage()
    cy.get('[aria-label="Select color Yellow"]').click().should('have.class', 'active')
    cy.get('[aria-label="Select size S"]').click()
    cy.get('[data-testid=variantsLabel]').first().contains('Yellow')
    cy.get('[data-testid=variantsLabel]').last().contains('S')
    cy.get('[data-testid=addToCart]').click()
    cy.get('[data-testid=notificationMessage]').contains(
      'Product has been added to the cart!'
    )
    cy.get('[data-testid=openMicrocart]').click({ force: true })
    cy.get('[data-testid=microcart]').should('be.visible')
    cy.reload()
    cy.get('[data-testid=openMicrocart]').click({ force: true })
    cy.get('[data-testid=productSku]').contains('WS11-S-Yellow')
    cy.get('[data-testid=productQty]').contains('1')
    cy.get('[data-testid=editButton').click()
    cy.get('[data-testid=productQtyInput]').clear().type('2').blur()
    cy.get('.summary').click()
    cy.wait(500)
    cy.reload()
    cy.get('[data-testid=openMicrocart]').click({ force: true })
    cy.get('[data-testid=productQty]').contains('2')
    cy.get('[data-testid=closeMicrocart]').click()
    cy.get('[data-testid=minicartCount]').contains('2')
  })
})
