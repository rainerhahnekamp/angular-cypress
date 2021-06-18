describe("Home", () => {
  it("should click the button", () => {
    cy.visit("");
    cy.get("button").click();
    cy.get("div.message").should("contain.text", "You clicked me");
  })

  it.skip("should fail", () => {
    let isSuccessful = false;
    cy.visit("");
    cy.get("button").click();
    cy.get("div.message").then(() => {
      isSuccessful = true;
    })

    if (!isSuccessful) {
      throw new Error("something is not working");
    }

  })
})
