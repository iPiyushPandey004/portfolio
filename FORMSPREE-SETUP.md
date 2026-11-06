# Contact form setup (Formspree)

The portfolio contact form is connected to the Formspree endpoint supplied for this project:

`https://formspree.io/f/mwlljkgj`

The endpoint is configured in `src/app/config/contact.config.ts`. No additional package or dependency is required. The Angular form submits JSON with the visitor's name, email address, and message, and displays sending, success, or error feedback. It also validates the email format and includes a basic honeypot field.

## Important: verify the recipient in Formspree

In the Formspree dashboard, open this form and confirm that its notification recipient is `saurabhstudies9984@gmail.com`. Complete any email verification Formspree requests. The endpoint alone does not prove which inbox is configured, and successful delivery depends on the dashboard settings and Formspree accepting the submission.

## Test locally

1. Install dependencies with the project's pinned Node.js/npm versions.
2. Run `npm start`.
3. Submit a test message using a valid email address.
4. Confirm that the submission appears in Formspree and that the notification reaches the configured inbox (check Spam if necessary).

The endpoint is public client-side configuration, not a password or secret. Never put a Formspree account password or private API key in this Angular frontend.
