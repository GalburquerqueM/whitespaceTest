Feature: Uploading documents. 

Scenario: Upload words document files test
Given I navigate to "https://filebin.net/"
When I upload word document
Then document should be uploaded
