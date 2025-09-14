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

## CircleCI Integration

### Available Commands

```bash
# Run tests with specific tags (local development)
TAGS="@smoke" npm run test:tags
TAGS="@regression" npm run test:tags  
TAGS="@smoke,@search" npm run test:tags

# Run tests with report generation (CI/Local)
TAGS="@regression" npm run test:ci

# Generate HTML report from existing test results
npm run generate:report
```

### CircleCI Features

- ✅ **Manual Triggers**: Run any tag combination via pipeline parameters
- ✅ **Nightly Regression**: Automatic @regression execution at 2 AM UTC
- ✅ **HTML Reports**: Beautiful reports available as CircleCI artifacts
- ✅ **Pull Request Testing**: @smoke tests on feature branches
- ✅ **Main Branch Testing**: @smoke → @regression sequence

### Manual Trigger Usage

1. Go to CircleCI → Your Project → "Trigger Pipeline"
2. Add parameter: `test_tags` with value like:
   - `@smoke` - Run smoke tests only
   - `@regression` - Run full regression suite
   - `@smoke,@search` - Run multiple tag combinations
3. Click "Trigger Pipeline"

### Viewing Reports

After test execution:
1. Go to CircleCI job → "Artifacts" tab
2. Open `html-report/index.html` for detailed test results
3. Check `test-summary.json` for execution statistics
