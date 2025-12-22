import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
	// Reduce dev compilation overhead
	experimental: {
		optimizePackageImports: ["framer-motion", "three", "@react-three/drei", "react-icons"],
	},

	// Security headers
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
				],
			},
		];
	},
};

export default withSentryConfig(
	nextConfig,
	{
		// For all available options, see:
		// https://github.com/getsentry/sentry-webpack-plugin#options

		// Suppresses source map uploading logs during build
		silent: true,
		org: "portfolio-7s",
		project: "javascript-nextjs",
	},
	{
		// For all available options, see:
		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

		// Suppress the annoying source map message
		silent: true,

		// Disable source maps entirely (faster builds, not needed for portfolio)
		sourcemaps: {
			disable: true,
		},

		// Reduce build time by not uploading extra source maps
		widenClientFileUpload: false,

		// Remove IE11 transpilation (reduces bundle size ~15%)
		transpileClientSDK: false,

		// Hides source maps from generated client bundles
		hideSourceMaps: true,

		// Automatically tree-shake Sentry logger statements to reduce bundle size
		disableLogger: true,

		// Enables automatic instrumentation of Vercel Cron Monitors.
		automaticVercelMonitors: true,
	}
);

