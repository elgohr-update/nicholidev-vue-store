describe('basic client path', () => {
  it('should go through basic user flow', () => {
    cy.visit('/')
    cy.get('.modal-close', {
      timeout: 120000
    })
    indexedDB.deleteDatabase('shop')
    cy.clearLocalStorage()
    cy.reload()
    cy.get(':nth-child(6) > .product > .no-underline > .product-image > img')
      .first()
      .click({ force: true })
    cy.get('[data-testid=addToCart]').click()
    cy.get('[data-testid=notificationAction2]').click()
    cy.get('[name=first-name]').type('Firstname', { force: true })
    cy.get('[name=last-name]').type('Lastname', { force: true })
    cy.get('[name=email-address]').type('e2e@vuestorefront.io', {
      force: true
    })
    cy.get('[data-testid=personalDetailsSubmit]').click({ force: true })
    cy.get('[name=street-address]').type('Streetname', { force: true })
    cy.get('[name=apartment-number]').type('28', { force: true })
    cy.get('[name=city]').type('Wroclaw', { force: true })
    cy.get('[name=state]').type('Lowersilesian', { force: true })
    cy.get('[name=zip-code').type('50-000', { force: true })
    cy.get('[name=countries]').select('PL', { force: true })
    cy.get('[name=phone-number]').type('111 222 333', { force: true })
    cy.get('[data-testid=shippingSubmit]').click({ force: true })
    cy.get('#sendToShippingAddressCheckbox').check({ force: true })
    cy.get('[data-testid=paymentSubmit]').click({ force: true })
    cy.get('#acceptTermsCheckbox').check({ force: true })
    cy.get('[data-testid=orderReviewSubmit]').click({ force: true })
    cy.get('.category-title').should('contain', 'Order confirmation')
  })
})
