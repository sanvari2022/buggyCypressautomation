import Profile from '../PageObjects/profile'
const { default: login } = require("../PageObjects/login")

describe('Profile', function () {

    beforeEach(function () {

        cy.fixture('tesetdata').as('data')


    })

    it('Check profile', function () {

        const profile=new Profile()

        cy.login(this.data.register.username, this.data.register.password)
        cy.contains('li', 'Hi', + this.data.register.firstname).should('be.visible')
        cy.contains('a', 'Profile').click()
        cy.url().should('include', '/profile')
        profile.Gender('Female')
        profile.Age('30')
        cy.clickButton('Save')
        cy.contains('a', 'Profile').click()
        cy.get('#gender').should('have.value', 'Female')
        cy.get('#age').should('have.value','30')
        cy.get('#gender').clear()
        cy.get('#age').clear()
        cy.clickButton('Save')


    })

    it('Check hobby', function () {

        cy.login(this.data.register.username, this.data.register.password)
        cy.contains('li', 'Hi', + this.data.register.firstname).should('be.visible')
        cy.contains('a', 'Profile').click()
        cy.checkHobby()
        

    })

})
