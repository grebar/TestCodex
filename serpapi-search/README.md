# SerpApi Search SPA

Single Page Application in Angular and Angular Material that consumes the [SerpApi](https://serpapi.com/) Google Search API entirely from the client side.

## Features
- Runtime API key entry via the UI (stored locally in the browser).
- Web and image searches (`engine=google`, `tbm=isch`).
- Filters for date restriction (`tbs=qdr:<period>`) and site search (`as_sitesearch`).
- Language selector (EN/IT/ES) to set `hl` and localize the UI labels.
- Pagination using the SerpApi `start` parameter.
- Basic quota feedback with a request counter (defaults to the 250 free-tier calls, stored locally).
- Error messaging that distinguishes quota/limit errors.

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm start
   ```
3. Enter your SerpApi key in the UI, pick the search type/filters, and run queries.

## Notes
- All calls are client-side; be mindful of exposing API keys in production.
- Request counting is local-only and does not read real quota from SerpApi.
