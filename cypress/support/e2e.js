// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

beforeEach(() => {
  cy.clearCookies();

  // Force English language only for main page requests (cookie-independent)
  cy.intercept("GET", "**/what3words.com/**", (req) => {
    // Only apply to HTML page requests, not API calls or assets
    if (req.headers.accept?.includes("text/html")) {
      req.headers["Accept-Language"] = "en-US,en;q=0.9";
      req.headers["Accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8";
    }
  });

  return cy.on("uncaught:exception", () => false);
});
