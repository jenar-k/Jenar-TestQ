import { Before, After, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {faker} from '@faker-js/faker';

const userName = faker.internet.userName()
const password = faker.internet.password()
const email = faker.internet.email()
const alphanumeric = faker.string.alphanumeric(5)

Given("open homepage of TMDB", ()=>{
    cy
    .visit("https://www.themoviedb.org/")
})

When("I click Login button in header section", ()=>{
    cy
    .xpath("(//*[contains(text(),'Login')])[1]")
    .click()
})

And("I click the click here button", ()=>{
    cy
    .xpath("//*[contains(text(),'Click here')]")
    .click()
})

And("I type the username", ()=>{
    cy
    .get('#username')
    .type(userName)
})

And("I type the new username", ()=>{
    cy
    .get('#username')
    .type(userName + alphanumeric)
})

And("I type same username with other user", (datatable)=>{
    datatable
    .hashes()
    .forEach(element => {
        cy
        .get('#username')
        .clear()
        .type(element.RegisteredUsername)
    });
})

And("I type the password", ()=>{
    cy
    .get('#password')
    .type(password)
})

And("I type the password less than 4 character and re-type it in confirm password", (datatable)=>{
    datatable
    .hashes()
    .forEach(element => {
        cy
        .get('#password')
        .clear()
        .type(element.InvalidPassword)
        cy
        .get('#password_confirm')
        .clear()
        .type(element.InvalidConfirmPassword)
    });
})

And("I type the password confirm different with password", ()=>{
    cy
    .get('#password_confirm')
    .type(password+'123')
})

And("I retype the password on password confirm", ()=>{
    cy
    .get('#password_confirm')
    .type(password)
})

And("I type my email", ()=>{
    cy
    .get('#email')
    .type(email)
})

And("I type invalid format email", (datatable)=>{
    datatable
    .hashes()
    .forEach(element => {
        cy
        .get('#email')
        .clear()
        .type(element.InvalidEmail)
    });
})

And("I type registered email", (datatable)=>{
    datatable
    .hashes()
    .forEach(element => {
        cy.get('#email')
        .clear()
        .type(element.RegisteredEmail)
    });
})

Then("I click sign up button", ()=>{
    cy
    .get('#sign_up_button')
    .click()
})

And("verify Account verification required is appear", ()=>{
    cy
    .ErrorMessage("Account verification required")
})

Then("verify error title There was an error processing your signup is appear", ()=>{
    cy
    .ErrorMessage("There was an error processing your signup")
})

And("verify error message Username has already been taken is appear", ()=>{
    cy
    .ErrorMessage("Username has already been taken")
})

And("verify error message Email has already been taken is appear", ()=>{
    cy
    .ErrorMessage("Email has already been taken")
})

And("verify error message Username is required is appear", ()=>{
    cy
    .ErrorMessage("Username is required")
})

And("verify error message Password is required is appear", ()=>{
    cy
    .ErrorMessage("Password is required")
})

And("verify error message Password confirm can't blank is appear", ()=>{
    cy
    .ErrorMessage("Password confirm can't be blank")
})

And("verify error message Email is required is appear", ()=>{
    cy
    .ErrorMessage("Email is required")
})

And("verify error message Email does not appear to be a valid email address is appear", ()=>{
    cy
    .ErrorMessage("Email does not appear to be a valid email address")
})

And("verify error message Password needs to be at least 4 characters long is appear", ()=>{
    cy
    .ErrorMessage("Password needs to be at least 4 characters long")
})

And("verify error message Password and password confirmation do not match is appear", ()=>{
    cy
    .ErrorMessage("Password and password confirmation do not match")
})