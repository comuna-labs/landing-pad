# landing-pad

## Conventional commits

Commit messages are validated with the repository's Git hooks. Enable them after cloning:

```sh
./scripts/install-git-hooks.sh
```

Use the format `type(scope): description`; for example, `feat: add waitlist form` or `fix(api): handle malformed requests`.

## Waitlist submissions

Emails are stored in a Google Sheet via a server-side API route. Credentials
must stay in `.env.local`; they are never sent to the browser.

1. Create a Google Cloud project, enable the **Google Sheets API**, then create
   a service account and generate a JSON key for it.
2. Create a spreadsheet with a `Waitlist` tab. Add `Email` and `Submitted at`
   as the first two column headers.
3. Share the spreadsheet with the service account's `client_email` as an
   **Editor**.
4. Copy `.env.example` to `.env.local`. Set the spreadsheet ID (the part
   between `/d/` and `/edit` in its URL), the service account `client_email`,
   and its `private_key` from the JSON key. Keep the private key's `\\n`
   sequences as literal characters.

Set the same variables in the deployment provider's environment settings.
