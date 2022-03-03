import Register from '../PageObjects/register'


describe('Register User', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('tesetdata').as('data')

    })

    it('Valid Registration', function () {
        const register = new Register()


        register.registerbtn()
        cy.generateRandomString(10).then(data => {
            register.fillUserName(data)
            register.fillFirstName(data)
            register.fillLastName(data)

        })

        register.fillPassword('Test1234!')
        register.fillConfirmPassword('Test1234!')
        cy.clickButton('Register')
        cy.contains('Registration is successful').should('be.visible')
        cy.Button('Cancel')
        cy.contains('a','Buggy Rating').should('be.visible')

    })

    it('Check Login cannot be more than 50 characters long', function () {
        const register = new Register()


        register.registerbtn()
        cy.generateRandomString(60).then(data => {
            register.fillUserName(data)
            cy.contains('Login cannot be more than 50 characters long').should('be.visible')

        })

        cy.Button('Cancel')

    })

    it('Check registration form validation', function () {
        const register = new Register()


        register.registerbtn()

        register.fillUserName('HI')
        cy.get('#username').clear()
        cy.contains('Login is required').should('be.visible')

        register.fillFirstName('test')
        cy.get('#firstName').clear()
        cy.contains('First Name is required').should('be.visible')


        register.fillLastName('data')
        cy.get('#lastName').clear()
        //cy.contains('Last Name is required').should('be.visible')

        register.fillPassword('Test1234!')
        cy.get('#password').clear()
        cy.contains('Password is required').should('be.visible')


        register.fillConfirmPassword('Test1234!')
        cy.get('#confirmPassword').clear()
        cy.contains('Passwords do not match').should('be.visible')



    })

    it('User already exist', function () {
        const register = new Register()


        register.registerbtn()
        register.fillUserName(this.data.register.username)
        register.fillFirstName('test')
        register.fillLastName('data')
        register.fillPassword('Tes1234!')
        register.fillConfirmPassword('Tes1234!')
        cy.clickButton('Register')
        cy.contains('UsernameExistsException: User already exists').should('be.visible')
        cy.Button('Cancel')
        cy.contains('a','Buggy Rating').should('be.visible')

    })

    describe('Password Validation', function () {

        it('Invalid password length', function () {
            const register = new Register()


            register.registerbtn()

            register.fillUserName('HI')
            register.fillFirstName('test')
            register.fillLastName('data')
            register.fillPassword('test')
            register.fillConfirmPassword('test')
            cy.clickButton('Register')
            cy.contains("InvalidParameter: 1 validation error(s) found.").should('be.visible')
            cy.contains("- minimum field size of 6, SignUpInput.Password.").should('be.visible')


        })

        it('Password lowercase', function () {
            const register = new Register()


            register.registerbtn()

            register.fillUserName('HI')
            register.fillFirstName('test')
            register.fillLastName('data')
            register.fillPassword('TEST1234!')
            register.fillConfirmPassword('TEST1234!')
            cy.clickButton('Register')
            cy.contains('InvalidPasswordException: Password did not conform with policy: Password must have lowercase characters').should('be.visible')



        })

        it('Password not long enough', function () {
            const register = new Register()


            register.registerbtn()

            register.fillUserName('HI')
            register.fillFirstName('test')
            register.fillLastName('data')
            register.fillPassword('tes@12')
            register.fillConfirmPassword('tes@12')
            cy.clickButton('Register')
            cy.contains('InvalidPasswordException: Password did not conform with policy: Password not long enough').should('be.visible')


        })

        it('Password special characters', function () {
            const register = new Register()


            register.registerbtn()

            register.fillUserName('HI')
            register.fillFirstName('test')
            register.fillLastName('data')
            register.fillPassword('tes12')
            register.fillConfirmPassword('tes12')
            cy.clickButton('Register')
            cy.contains("InvalidParameter: 1 validation error(s) found.").should('be.visible')
            cy.contains("- minimum field size of 6, SignUpInput.Password.").should('be.visible')


        })

        it('Password Uppercase', function () {
            const register = new Register()


            register.registerbtn()

            register.fillUserName('HI')
            register.fillFirstName('test')
            register.fillLastName('data')
            register.fillPassword('test1234!')
            register.fillConfirmPassword('test1234!')
            cy.clickButton('Register')
            cy.contains('InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters').should('be.visible')



        })



    })

})