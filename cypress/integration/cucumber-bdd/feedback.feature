Feature: Send feedback

    As a user i want to 
    send feedback form

    Scenario: Submit feedback form
       Given I visit feedback page
       And I should see "Zero - Contact Us" title
       When I fill form
        |firstname|email       |subject    |question  |
        |test     |test@test.ru|Sample text|quest text|
       And I submit form
       Then i see "sendFeedback.html" in url
       