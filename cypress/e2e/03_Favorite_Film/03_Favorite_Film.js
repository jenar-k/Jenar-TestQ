import { Before, After, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("open homepage of TMDB", ()=>{
    cy
    .visit("https://www.themoviedb.org/")
})

//01. Search Mission before login
When("I search the film", ()=>{
    cy
    .SearchHomepage('Mission')
})

//02. Search mission imposible after login
And("I search one film", ()=>{
    cy
    .SearchHomepage('Mission')
})

//02. card mission imposible
Then("I go to the film details", ()=>{
    cy
    .xpath("(//*[@data-id='5c3d283fc3a36824ea3bc815'])[1]")
    .click()
})

//03. Search minion after login
And("I search one film again", ()=>{
    cy
    .SearchHomepage('Minion')
})

//03. Card minion
Then("I go to the film details of Minions", ()=>{
    cy
    .xpath("(//*[@data-id='6369bd7e1b1f3c007c309e71'])[1]")
    .click()
})


And("I click favorite icon", ()=>{
    cy
    .get('#favourite')
    .click()
})

Then("tools tip Login to add this movie to your favorite list will appear", ()=>{
    cy
    .contains("Login to add this movie to your favorite list")
})

Then("I click Logo TMDB icon", ()=>{
    cy
    .xpath("//*[@class='logo']")
    .click()
})

When("I login with valid data", ()=>{
    cy
    .LoginValid()
})

Then("verify should be on dashboard page", ()=>{
    cy
    .DashboardValidation()
})

Then("I go to Favorite page", ()=>{
    cy
    .GoToFavouritePage()
})

// 02. Validate Mission imposible
And("Validate {string} should be on the favorite list", ()=>{
    cy
    .ValidateMission('Mission')
})

// 03. Validate Minion
And("Validate {string} should be appear on the favorite list", ()=>{
    cy
    .ValidateMinion('Minion')
})

//03. remove minion
Then("I remove minions movies from favorite list", ()=>{
    cy
    .xpath('(//*[@data-media-card="card_movie_6369bd7e1b1f3c007c309e71"])[3]')
    .click()
})

//03. validate minion is not be visible minion
And("Validate {string} should not appear on the favorite list", ()=>{
    cy
    .get("#card_movie_6369bd7e1b1f3c007c309e71", { timeout: 10000 })
    .reload()
    .should('not.be.visible', {force: true})
})

And("Select Descending-Ascending-Descending-Ascending sorting", ()=>{
    // cy
    // // cy.get('ul').find('>li').filter('#filter_by_created_at')
    // cy.get('ul').find('>li').contains('popularity')
    // // .get("a[data-sort-by='popularity']")
    // .click()
    
    //Descending
    cy
    .get('.group_dropdown > .selected > span')
    .click({force: true})
    .wait(2000)
    //Ascending
    cy
    .get('.group_dropdown > .selected > span')
    .click({force: true})
    .wait(1000)
    //Descending
    cy
    .get('.group_dropdown > .selected > span')
    .click({force: true})
    .wait(1000)
    //Ascending
    cy
    .get('.group_dropdown > .selected > span')
    .click({force: true})
    .wait(1000)
})

