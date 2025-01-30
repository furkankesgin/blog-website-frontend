import { Metadata } from "next";


const DefaultMetadata: Metadata = {
	title: {
		default: "Codehosue",
		template: "%s | Codehosue"
	},
	description: "Outsource solutions",
	robots: { index: true, follow: true },
	// metadataBase: new URL(SITE_CONFIG.url),
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico"
	},
	// manifest: `/site.webmanifest`,
	openGraph: {
		// url: SITE_CONFIG.url,
		title: "Codehosue",
		description: "Outsource solutions",
		siteName: "Codehosue",
		//   images: [`${SITE_CONFIG.url}/images/og.jpg`],
		type: "website",
		locale: "en_US"
	},
	twitter: {
		card: "summary_large_image",
		title: "Codehosue",
		description: "Outsource solutions"
		//   images: [`${SITE_CONFIG.url}/images/og.jpg`],
	},
	authors: []
};

const AppMetadata = {
	DefaultMetadata
};

export default AppMetadata;
