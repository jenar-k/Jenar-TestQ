import { Before, After, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("open homepage of TMDB", ()=>{
    cy
    .visit("https://www.themoviedb.org/")
})

When("I click Login button in header section", ()=>{
    cy
    .xpath("(//*[contains(text(),'Login')])[1]")
    .click()
})

Then("I login with my account", ()=>{
    cy
    .InputValidInLogin()
})

// Then("I log in as Following", (datatable)=>{
//     datatable
//     .hashes()
//     .forEach(element => {
//         cy
//         .get('#username')
//         .clear()
//         .type(element.Username)
//         cy
//         .get('#password')
//         .clear()
//         .type(element.Password)
//     });
// })

Then("I only inputting username", (datatable)=>{
    datatable
    .hashes()
    .forEach(element => {
        cy
        .get('#username')
        .type(element.Username)
    });
})

Then("I only inputting password", (datatable)=>{
    datatable
    .hashes()
    .forEach(element => {
        cy
        .get('#password')
        .type(element.Password)
    });
})

Then("click on login button", ()=>{
    cy
    .get('#login_button')
    .should('be.visible')
    .click()
})

And("verify {string} should be appear", ()=>{
    cy
    .contains('Stats')
})

And("verify username should be appear", ()=>{
    cy
    .contains(Cypress.env('username'))
})

And("verify error box and 'We couldn't find your username.' is appear", ()=>{
    cy
    .ErrorMessage("We couldn't find your username.")
})


And("verify error box and 'We couldn't validate your information. Want to try again?' is appear", ()=>{
    cy
    .ErrorMessage("We couldn't validate your information. Want to try again?")
})