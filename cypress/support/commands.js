// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//const cypress = require("cypress")

Cypress.Commands.add("generateRandomString", (length = 8) => {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
})

Cypress.Commands.add("login", (login, password) => { 

    cy.visit('https://buggy.justtestit.org/')
    cy.get('input[name="login"]').type(login)
    cy.get('input[name="password"]').type(password, {log: true})
    cy.get('.btn-success').click()     
})

Cypress.Commands.add('clickButton', () => {

    cy.get('.btn-default').should('be.visible').click({multiple: true})
      
})

Cypress.Commands.add('Button', () => {

    cy.get('[role="button"]').should('be.visible').click({multiple: true})
      
})


Cypress.Commands.add('checkHobby',() =>{
    
    for (const hobby of ['Hiking',
        'Reading',
        'Working',
        'Learning',
        'Video Games',
        'Biking',
        'Movies',
        'Reading Comics',
        'Drawing',
        'Jogging',
        'Knitting',
        'Bird-watching',
        'Other']) {
        cy.get('#hobby').select(hobby).should('be.focused')
        
       
    }
})
      
