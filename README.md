# TestCodex

Angular SPA sample that showcases SerpApi-powered Google Search (web + image) with filters and localization. Source lives in `serpapi-search/`.

## How to run and test
1. Install dependencies inside the `serpapi-search` folder:
   ```bash
   cd serpapi-search
   npm install
   ```
2. Start the dev server and open <http://localhost:4200>:
   ```bash
   npm start
   ```
3. Run unit tests (Karma/Jasmine):
   ```bash
   npm test
   ```
4. Optional lint check:
   ```bash
   npm run lint
   ```

Note: the app is fully client-side; enter your SerpApi API key from the UI before running searches.

## Come pubblicare questo codice su GitHub
1. Crea un nuovo repository vuoto su GitHub (senza README o .gitignore).
2. Aggiungi il remote al repo locale e imposta il branch principale (sostituisci `YOUR-REPO-URL` con l'URL SSH/HTTPS del nuovo repo):
   ```bash
   git remote add origin YOUR-REPO-URL
   git branch -M main
   ```
3. Assicurati che il branch corrente (`work`) sia aggiornato e pushalo su GitHub:
   ```bash
   git push -u origin work
   ```
4. Facoltativo: apri una Pull Request da `work` verso `main` direttamente su GitHub per rivedere e unire le modifiche.

Se preferisci lavorare solo con `main`, puoi fare `git checkout -B main` e poi eseguire `git push -u origin main`.
