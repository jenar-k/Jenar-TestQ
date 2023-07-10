Feature: TMDB Login

Background:
    Given open homepage of TMDB

@PositiveCase @Login
Scenario: Success Login into TMDB using valid credentials
    When I click Login button in header section
    Then I login with my account
    And verify 'Stats' should be appear
    And verify 'username' should be appear

@NegativeCase @Login
Scenario: Failed Login into TMDB using unregistered username
    When I click Login button in header section
    Then I log in as Following
        |Username| Password    |
        |jenzqu  | Jenar123!@# |
    Then click on login button
    And verify error box and 'We couldn't find your username.' is appear

@NegativeCase @Login
Scenario: Failed Login into TMDB because inputting wrong password
    When I click Login button in header section
    Then I log in as Following
        |Username| Password  |
        |jenzq   | Jenar123@ |
    Then click on login button
    And verify error box and 'We couldn't validate your information. Want to try again?' is appear

@NegativeCase @Login
Scenario: Failed Login into TMDB because user leaves blank username column
    When I click Login button in header section
    Then I only inputting password
        |Password    |
        |Jenar123!@# |
    Then click on login button
    And verify error box and 'We couldn't find your username.' is appear

@NegativeCase @Login
Scenario: Failed Login into TMDB because user leaves blank password column
    When I click Login button in header section
    Then I only inputting username
        |Username|
        |jenzqu  |
    Then click on login button
    And verify error box and 'We couldn't find your username.' is appear

@NegativeCase @Login
Scenario: Failed Login into TMDB because user leaves blank in username and password column
    When I click Login button in header section
    Then click on login button
    And verify error box and 'We couldn't find your username.' is appear