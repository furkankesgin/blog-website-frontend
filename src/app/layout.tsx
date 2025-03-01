import { Metadata } from "next";

import { Roboto } from "next/font/google";

import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { ClerkProvider } from "@clerk/nextjs";

import AxiosContext from "@/components/context/axios/axios-context";
import InitUser from "@/components/context/init-user";
import AppMetadata from "@/data/const/app-metadata";
import THEME from "@/theme/theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto"
});

export const metadata: Metadata = AppMetadata.DefaultMetadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider>
			<AxiosContext>
				<InitUser>
					<html lang="en" style={{ height: "100%", width: "100%" }}>
						<body className={roboto.variable} style={{ height: "100%", width: "100%" }}>
							<AppRouterCacheProvider>
								<ThemeProvider theme={THEME}>
									<CssBaseline />

									{children}
								</ThemeProvider>
							</AppRouterCacheProvider>
						</body>
					</html>
				</InitUser>
			</AxiosContext>
		</ClerkProvider>
	);
};

export default RootLayout;
