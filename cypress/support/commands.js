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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { should } from "chai"


// Login with valid data
Cypress.Commands.add('LoginValid', () => {
    cy
    .xpath("(//*[contains(text(),'Login')])[1]")
    .click()
    cy
    .get('#username')
    .should('be.visible')
    .type(Cypress.env('username'))
    cy
    .get('#password')
    .should('be.visible')
    .type(Cypress.env('password'))
    cy
    .get('#login_button')
    .click()
})

Cypress.Commands.add('InputValidInLogin', () => {
    cy
    .get('#username')
    .should('be.visible')
    .type(Cypress.env('username'))
    cy
    .get('#password')
    .should('be.visible')
    .type(Cypress.env('password'))
    cy
    .get('#login_button')
    .click()
})

// Validation for dashboard page
Cypress.Commands.add('DashboardValidation', () => {
    cy
    .contains('Stats')
})

// Error Message
Cypress.Commands.add('ErrorMessage', (label) => {
    cy
    .xpath("//*[@class='error_status card']")
    .should('be.visible')
    .contains(label)
})

// Search
Cypress.Commands.add('SearchHomepage', (label) => {
    cy
    .get('#inner_search_v4')
    .should('be.visible')
    .type(label+'{enter}')
})

// Go to favourite page
Cypress.Commands.add('GoToFavouritePage', () => {
    cy
    .visit('https://www.themoviedb.org/u/JenzQ/favorites')
})

// Validate mission imposible
Cypress.Commands.add('ValidateMission', (label) => {
    cy
    .wait(2000)
    .reload()
    .get("#card_movie_5c3d283fc3a36824ea3bc815", { timeout: 10000 })
    .should('be.visible')
    .contains(label)
})

//validate minion
Cypress.Commands.add('ValidateMinion', (label) => {
    cy
    .wait(2000)
    .reload()
    .get("#card_movie_6369bd7e1b1f3c007c309e71", { timeout: 10000 })
    .should('be.visible')
    .contains(label)
})