# Playwright Challenge — SI Tickets

A Playwright test suite written as part of a QA technical interview challenge, testing a live event listing page on [SI Tickets](https://www.sitickets.com).

## What it covers

- URL validation
- Event title, date, and location assertions
- Ticket group count verification
- Event description validation

Tests run across Chromium, Firefox, and WebKit via GitHub Actions on every push.

## Note on selectors

The target site uses styled-components with generated class names. Selectors reflect the site's structure at the time of the challenge and may drift if the site updates its styles.

## Run locally

```bash
npm install
npx playwright install
npx playwright test
```
