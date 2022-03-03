
const { default: login } = require("../PageObjects/login")

describe('Login', function () {

    beforeEach(function () {


        cy.fixture('tesetdata').as('data')


    })

    it('Valid login Test', function () {

        cy.login(this.data.register.username, this.data.register.password)
        cy.contains('li', 'Hi', + this.data.register.firstname).should('be.visible')
        cy.contains('a', 'Logout').click()

    })


    it('Invalid login Test', function () {

        const randomstring = cy.generateRandomString

        cy.generateRandomString(10).then(login => {
            cy.login(login, login)

            cy.contains('Invalid username/password').should('be.visible')
        })

    })

})