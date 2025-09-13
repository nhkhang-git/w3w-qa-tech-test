# what3words QA tech test

### Test framework

-   Test framework is built using Cypress, javascript, cucumber and circleCI.
-   Framework follows `Behaviour Driven Development` (BDD) using Gherkin
    language
-   Tests follow design pattern of Page Object Model (POM)

### Pre-requisites

-   Install node.js, npm and git in your machine.
-   Install Chrome, edge, firefox browsers if you want to run tests against
    these browsers locally.

### Getting started

-   After installing pre-requisites, clone this repository to desired location.
-   Once the repository is cloned, run `npm install` at the root folder of this
    repository.

### Adding tests to test suite:

1. Create a new .feature file. Feature files naming convention: small letters seperated by `-` with a
   .feature extension
2. Add the step definitions for steps in feature file under
   `cypress/support/step_definitions`.
4. Step definition files naming convention: small letters separated by `_` with
   a .js extension. File names must end with `-steps`
5. No element locators are defined in step definition files
6. Define the page elements (sometimes may also include actions) in
   `cypress/support/pages` to avoid replicating element locators.
7. Define all elements in this central place of page objects
