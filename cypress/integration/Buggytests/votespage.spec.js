import Home from '../PageObjects/home'
import vote from '../PageObjects/vote'
 

describe('Votes script for buggycarr', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('tesetdata').as('data')
        

    })
    it('Check vote button enabled only when user logged in and not voted earlier', function () {
        const overallRating=new Home()
        const button= new vote()
        

        overallRating.OverallRating()  
        button.votebutton()
        cy.contains('You need to be logged in to vote.').should('be.visible')
        cy.login(this.data.user.username, this.data.user.password)
        overallRating.HomePage()
        overallRating.OverallRating()  
        button.votebutton()
        cy.contains('button', 'Vote').should('be.visible')
 
      
    })

    // it('Check user can vote', function () {
    //     const overallRating=new Home()
    //     const button= new vote()
                
    //     cy.login(this.data.register.username, this.data.register.password)
    //     overallRating.HomePage()
    //     overallRating.OverallRating()  
    //     button.votebutton()
    //     button.votetext('Test')
    //     cy.contains('button', 'Vote').click()
    //     cy.contains('Thank you for your vote!').should('be.visible')
      
    //})

    
})
