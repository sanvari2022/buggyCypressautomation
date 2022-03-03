import Home from '../PageObjects/home'

describe('Home page', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('tesetdata').as('data')

    })


    it('Click on popular make', function(){
        const PopularMake=new Home()

        PopularMake.PopularMake()
        cy.scrollTo('center')
        PopularMake.Make()
        cy.url().should('include', '/make')
        

    })

    it('Click on popular model', function(){
        const PopularModel=new Home()

        PopularModel.PopularModel()  
        cy.url().should('include', '/model')
        PopularModel.Model()
        cy.contains('You need to be logged in to vote.').should('be.visible')
        PopularModel.PopularModel()
        PopularModel.HomePage()

    })

    it('Click on overall rating', function(){
        const overallRating=new Home()

        overallRating.OverallRating()  
        cy.url().should('include', '/overall')
        overallRating.Overall()
        

    })


})