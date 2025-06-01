@training
Feature: Training feature

  Some scenarios to understand better how protractor and cucumber work

  @training_0
  Scenario: Test angular features button
    Given I navigate to angular website
    And I click the LEARN ANGULAR button
    Then the text WELCOME TO THE ANGULAR TUTORIAL is displayed

  @training_01
  Scenario: Test angular features button 1
    Given I navigate to angular website
    And I click the LEARN ANGULAR button
    Then the text WELCOME TO THE ANGULAR TUTORIAL is displayed
    And the section PREVIEW is displayed
    And the section HOW TO USE THIS TUTORIAL is displayed
  

  @training_02
  Scenario: Test angular features button 2
    Given I navigate to angular website
    And I click the LEARN ANGULAR button
    Then the text ANGULAR FEATURES is displayed
    And the section texts are displayed
      | sectionText        |
      | ANY APP SIZE       |
      | A GREAT COMMUNITY  |
      | BUILD PRODUCTIVELY |


  @training_1
  Scenario: Test angular features button
    Given I navigate to angular website
    And I click the DOCS button
    Then the text Introduction to the Angular Docs is displayed

  @training_2
  Scenario Outline: Test angular tab buttons
    Given I navigate to angular website
    And I click the "<tabButton>" button
    Then the text "<title>" is displayed

    Examples:
      | tabButton | title                            |
      | LEARN ANGULAR| Angular Features                 |
      | Docs      | Introduction to the Angular Docs |

  @training_3
  Scenario: Test angular features button
    Given I navigate to angular website
    And I search for text Nothing
    Then No result found

  @training_4
  Scenario: Test angular features button
    Given I navigate to angular website
    And I search for text "Protractor"
    Then Some results are found

  @training_5
  Scenario Outline: Test angular features button
    Given I navigate to angular website
    And I search for text "<text>"
    Then "<resultString>" found

    Examples:
      | text       | resultString |
      | Nothing    | No result    |
      | Protractor | Some results |
      | Test       | Some results |
      | a          | Some results |