// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://4a3cdd2d990a44c84c0cc1341c51be2e@o4507875663085568.ingest.us.sentry.io/4507875680649216",

	// Only load heavy integrations in production (speeds up dev mode significantly)
	integrations:
		process.env.NODE_ENV === "production"
			? [
					Sentry.replayIntegration(),
					Sentry.feedbackIntegration({
						colorScheme: "system",
						isNameRequired: true,
						isEmailRequired: true,
					}),
			  ]
			: [],

	// Reduce tracing in development
	tracesSampleRate: process.env.NODE_ENV === "production" ? 0.5 : 0.1,

	// Only record replays in production
	replaysSessionSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 0,

	// Define how likely Replay events are sampled when an error occurs.
	replaysOnErrorSampleRate: 1.0,

	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,
});

