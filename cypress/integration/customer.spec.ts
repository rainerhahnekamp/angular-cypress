describe("Customer", () => {
  it.skip("is a flaky test", () => {
    cy.visit("");
    cy.get("a").contains("Customers").click();
    cy.get("a").contains("Add Customer").click();
  })
})
