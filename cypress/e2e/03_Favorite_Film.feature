Feature: Add film to favorite

Background:
    Given open homepage of TMDB

@PositiveCase @favorite
Scenario: User can't add favorite film because not login yet
    When I search the film
    Then I go to the film details
    And I click favorite icon
    Then tools tip Login to add this movie to your favorite list will appear

@PositiveCase @favorite
Scenario: Success add favorite film
    When I login with valid data
    Then verify should be on dashboard page
    Then I click Logo TMDB icon
    And I search one film
    Then I go to the film details
    And I click favorite icon
    Then I go to Favorite page
    And Validate 'Mission Imposible' should be on the favorite list

@PositiveCase @favorite
Scenario: Success add favorite film for the second time
    When I login with valid data
    Then verify should be on dashboard page
    Then I click Logo TMDB icon
    And I search one film again
    Then I go to the film details of Minions
    And I click favorite icon
    Then I go to Favorite page
    And Validate 'Minions' should be appear on the favorite list

@PositiveCase @favorite
Scenario: Success remove one favorite film
    When I login with valid data
    Then verify should be on dashboard page
    Then I go to Favorite page
    Then I remove minions movies from favorite list
    And Validate 'Minions' should not appear on the favorite list

@PositiveCase @favorite
Scenario: Success sorting favorite film
    When I login with valid data
    Then verify should be on dashboard page
    Then I go to Favorite page
    And Select Descending-Ascending-Descending-Ascending sorting