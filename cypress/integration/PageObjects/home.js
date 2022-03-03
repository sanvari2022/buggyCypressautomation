class Home
{

 HomePage()
 {
     const homepage= cy.contains('h2', 'Popular Model')
     cy.contains('h2', 'Popular Make')
     cy.contains('h2', 'Overall Rating')

     homepage.should('be.visible')

 }

  PopularMake()
  {
    const popularmake=cy.get('[src="/img/cars/Lamborghini-Logo.png"]')
    popularmake.click()
    
  }

  PopularModel()
  {
      const popularmodel=cy.get('[src="/img/cars/Diablo.jpg"]')
      popularmodel.click()
  }

  OverallRating()
  {
      const overallrating=cy.get('[src="/img/overall.jpg"]')
      overallrating.click()
  }

  Make()
  {
      const make=cy.contains('a', 'Model')
      cy.contains('a', 'Rank')
      cy.contains('a', 'Votes')
      cy.get('.comments').contains('Comments')
      make.should('be.visible')
  }

 Model()
 {
    const model= cy.contains('th', 'Date')
    cy.contains('th', 'Author')
    cy.contains('th', 'Comment')
    model.should('be.visible')

 }

 Overall()
 {
     const overall=cy.contains('a', 'Model')
     cy.contains('a', 'Rank')
     cy.contains('a', 'Votes')
     cy.contains('a', 'Engine')
     cy.get('.comments').contains('Comments')
     overall.should('be.visible')
 }
   


}


export default Home