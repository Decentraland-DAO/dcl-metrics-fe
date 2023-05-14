describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should be rendered", () => {
    cy.findAllByText("Unique Visitors").should("be.visible")
    cy.findAllByText("Parcel Visitors").should("be.visible")
    cy.findAllByText("Scenes Visited").should("be.visible")
    cy.findAllByText("Online Users").should("be.visible")
    cy.findAllByText("Active Users").should("be.visible")
    cy.findAllByText("Land Picker").should("be.visible")
    cy.findAllByText("Land Sales").should("be.visible")
    cy.findAllByText("Rentals Daily").should("be.visible")
    cy.findAllByText("Rentals Total").should("be.visible")
    cy.findAllByText("Top Market Deals").should("be.visible")
  })

  describe("Sidebar", () => {
    it("renders sidebar list", () => {
      cy.findByText("Global").should("be.visible")
      cy.findByText("Users").should("be.visible")
      cy.findByText("Scenes").should("be.visible")
      cy.findByText("Parcels").should("be.visible")
      cy.findByText("Status").should("be.visible")
      cy.findByText("Blog").should("be.visible")
      cy.findByText("Roadmap").should("be.visible")
      cy.findByText("About").should("be.visible")
    })

    it("can be collapsed and adjust the width accordingly", () => {
      const wideSideBar = cy.get("div.css-uzcmrh div").eq(36)
      wideSideBar.should("be.visible")
      const collapseBtn = cy.contains("p", "Collapse")
      collapseBtn.should("be.visible")
      const narrowSideBar = cy.get("div.css-uzcmrh div").eq(36)
      collapseBtn.click({ force: true })
      wideSideBar.should("not.equal", narrowSideBar)
    })
  })
})

export {}