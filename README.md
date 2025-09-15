# What3Words QA Tech Test

A comprehensive end-to-end testing framework for What3Words map site using **Cypress**, **Cucumber**, and **CircleCI**.

📋 **Test Cases for Share Functionality**: See [Share-Action-Tab-Test-Cases.md](./Share-Action-Tab-Test-Cases.md)

## 🏗️ Project Structure Overview

```
w3w-qa-tech-test/
├── cypress/
│   ├── integration/e2e/
│   │   └── location-search.feature       # Cucumber feature files with @tags
│   ├── support/
│   │   ├── pages/                        # Layer 1: Page Objects (element getters)
│   │   ├── actions/                      # Layer 2: Actions (business logic)
│   │   ├── assertions/                   # Layer 2: Assertions (validations)
│   │   └── step_definitions/             # Layer 3: Step Definitions (Gherkin mapping)
│   └── reports/                          # Generated test reports
├── .circleci/config.yml                  # CircleCI pipeline configuration
├── scripts/generate-html-report.js       # HTML report generation
└── package.json                          # Dependencies and test scripts
```

**Framework Architecture**: 3-Layer design pattern

- **Page Objects** → **Actions/Assertions** → **Step Definitions**
- **Selector Strategy**: Exclusive use of `data-testid` attributes
- **BDD Approach**: Cucumber Gherkin syntax with tag-based execution

## 🧪 Local Testing

### Prerequisites

```bash
# Install dependencies
npm install

# Verify Cypress installation
npx cypress verify
```

### Run Tests Locally

```bash
# All tests
npm run test

# Custom tag combinations
npx cypress run --e2e --spec 'cypress/integration/e2e/**/*.feature' --env TAGS='@smoke and @search'
```

### Interactive Development

```bash
# Open Cypress Test Runner for development
npm run cypress:open
```

## 📊 HTML Reports & Artifacts

### Report Generation

The framework automatically generates comprehensive HTML reports regardless of test outcomes:

```bash
# Generate reports locally
npm run generate:report

# Run tests with report generation
npm run test:ci
```

## 🔄 CircleCI Integration & Workflows

The project is fully integrated with **CircleCI** providing automated testing across different scenarios:

### Available Workflows

| Workflow                | Trigger      | Tags        | Schedule            | Purpose                   |
| ----------------------- | ------------ | ----------- | ------------------- | ------------------------- |
| **Manual Testing**      | API/Manual   | Custom      | On-demand           | Developer-triggered tests |
| **Nightly Regression**  | Scheduled    | @regression | Daily 2:00 AM UTC   | Comprehensive validation  |
| **PR Testing**          | Pull Request | @smoke      | Auto on PR          | Quick validation          |
| **Main Branch Testing** | Git Push     | @smoke      | Auto on main/master | Post-merge verification   |

### Manual Pipeline Execution

**Step-by-Step Instructions:**

1. **Navigate to CircleCI**

   - Go to: https://app.circleci.com/pipelines/github/nhkhang-git/w3w-qa-tech-test

2. **Trigger Custom Pipeline**

   - Click **"Trigger Pipeline"** button (top right)

3. **Set Parameters**

   - **Key**: `test_tags`
   - **Value**: Choose from:
     - `@smoke` - Quick validation (2 scenarios)
     - `@regression` - Full test suite (4 scenarios)
     - `@search` - Search functionality only
     - `@smoke or @search` - Multiple tags

4. **Execute**
   - Click **"Trigger Pipeline"**
   - Monitor execution in real-time

### CircleCI Artifacts Location

**Step-by-Step Access Instructions:**

1. **Navigate to Job**

   - Go to CircleCI → Your Pipeline → Select Job (e.g., "Manual Testing")

2. **Access Artifacts Tab**

   - Click **"Artifacts"** tab in the job details page

3. **Available Report Files**

   ```
   📁 Artifacts/
   ├── 📄 html-report/index.html          # ← Main HTML report (click to view)
   ├── 📁 json-reports/                   # Raw Cucumber JSON data
   ├── 📄 test-summary.json               # Execution statistics
   ├── 📁 screenshots/                    # Failure screenshots
   └── 📁 videos/                         # Test execution videos
   ```

4. **View Interactive Report**

   - Click **`html-report/index.html`**
   - Report includes:
     - ✅ Passed scenarios (green indicators)
     - ❌ Failed scenarios (red indicators) with detailed error messages
     - 📊 Execution time and performance statistics
     - 🏷️ Tag-based filtering (@smoke, @regression, @search)
     - 📸 Screenshots captured at failure points
