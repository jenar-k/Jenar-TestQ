Feature: TMDB Registration

Background:
    Given open homepage of TMDB

@PositiveCase @Registration
Scenario: Success regisration new account for TMDB
    When I click Login button in header section
    And I click the click here button
    And I type the username
    And I type the password 
    And I retype the password on password confirm
    And I type my email
    Then I click sign up button
    And verify Account verification required is appear

@NegativeCase @Registration
Scenario: Failed regisration new account for TMDB because username already taken
    When I click Login button in header section
    And I click the click here button
    And I type the username
    And I type same username with other user
        |RegisteredUsername |
        |jenzq              |
    And I type the password 
    And I retype the password on password confirm
    And I type my email
    Then I click sign up button
    Then verify error title There was an error processing your signup is appear
    And verify error message Username has already been taken is appear

@NegativeCase @Registration
Scenario: Failed regisration new account for TMDB because leaves blank username
    When I click Login button in header section
    And I click the click here button
    And I type the password 
    And I retype the password on password confirm
    And I type my email
    Then I click sign up button
    Then verify error title There was an error processing your signup is appear
    And verify error message Username is required is appear

@NegativeCase @Registration
Scenario: Failed regisration new account for TMDB because leaves blank password
    When I click Login button in header section
    And I click the click here button
    And I type the username
    And I retype the password on password confirm
    And I type my email
    Then I click sign up button
    Then verify error title There was an error processing your signup is appear
    And verify error message Password is required is appear

@NegativeCase @Registration
Scenario: Failed regisration new account for TMDB because leaves blank confirm password
    When I click Login button in header section
    And I click the click here button
    And I type the username
    And I type the password 
    And I type my email
    Then I click sign up button
    Then verify error title There was an error processing your signup is appear
    And verify error message Password confirm can't blank is appear

@NegativeCase @Registration
Scenario: Failed regisration new account for TMDB because leaves blank Email
    When I click Login button in header section
    And I click the click here button
    And I type the username
    And I type the password 
    And I retype the password on password confirm
    Then I click sign up button
    Then verify error title There was an error processing your signup is appear
    And verify error message Email is required is appear

@NegativeCase @Registration
Scenario: Failed regisration new account for TMDB because invalid format email
    When I click Login button in header section
    And I click the click here button
    And I type the username
    And I type the password 
    And I retype the password on password confirm
    And I type invalid format email
        |InvalidEmail  |
        |jenqacc@gmail |
    Then I click sign up button
    Then verify error title There was an error processing your signup is appear
    And verify error message Email does not appear to be a valid email address is appear

@NegativeCase @Registration
Scenario: Failed regisration new account for TMDB because invalid password
    When I click Login button in header section
    And I click the click here button
    And I type the username
    And I type the password less than 4 character and re-type it in confirm password
        |InvalidPassword  | InvalidConfirmPassword |
        |123 | 123 |
    And I type my email
    Then I click sign up button
    Then verify error title There was an error processing your signup is appear
    And verify error message Password needs to be at least 4 characters long is appear

@NegativeCase @Registration
Scenario: Failed regisration new account for TMDB because password and confirm password is different
    When I click Login button in header section
    And I click the click here button
    And I type the username
    And I type the password 
    And I type the password confirm different with password
    And I type my email
    Then I click sign up button
    Then verify error title There was an error processing your signup is appear
    And verify error message Password and password confirmation do not match is appear