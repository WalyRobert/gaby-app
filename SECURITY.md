# Security Policy

## Current status

Gaby is an experimental prototype. Its Gemini service is not yet a real API integration. Do not configure a real Gemini API key in this frontend repository.

## Secrets

- Never commit `.env`, `.env.local`, API keys, access tokens, passwords, private keys, or personal data.
- Keep local environment files on the developer's machine. They are ignored by Git.
- A Vite variable embedded in client-side code is public to anyone who can download the application. A future real Gemini integration must call a trusted backend that stores the key server-side.
- If a real credential was ever committed or shared, revoke/rotate it at its provider. Deleting a file from the latest commit does not erase it from Git history or copies.

## Reporting

Do not open public issues containing secrets, personal information, or private user data. Report security concerns privately to the repository owner.

## Deployment

This prototype must not be treated as a secure automation agent or connected to sensitive accounts/devices. Add server-side authorization, validation, rate limits, and human confirmation before any real automation is introduced.
