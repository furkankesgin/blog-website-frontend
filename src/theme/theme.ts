"use client";

import { createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xxl: true;
	}

	interface PaletteColor {
		dark: string;
		light: string;
		main: string;

		"50": string;
		"100": string;
		"200": string;
		"300": string;
		"400": string;
		"500": string;
		"600": string;
		"700": string;
		"800": string;
		"900": string;
	}
}

const THEME = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			xxl: 1920
		}
	},
	typography: {
		fontFamily: "var(--font-roboto)"
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				"::-webkit-scrollbar": {
					width: "5px",
					height: "5px"
				},
				"::-webkit-scrollbar-track": {
					background: "#FAFAFA"
				},
				"::-webkit-scrollbar-thumb": {
					background: "#3230B8",
					borderRadius: "8px"
				},
				"::-webkit-scrollbar-thumb:hover": {
					background: "#092D27"
				},
				"@media (prefers-reduced-motion: no-preference)": {
					":has(:target)": {
						scrollBehavior: "smooth",
						scrollPaddingTop: "3rem"
					},
					"body": {
						scrollBehavior: "smooth",
						scrollPaddingTop: "3rem"
					}
				}
			}
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					// fontFamily: "Inter",
					fontStyle: "normal",
					fontWeight: "300",
					fontSize: "10px",
					lineHeight: "150%"
				}
			}
		},
		MuiTypography: {

		},
		MuiLink: {
			styleOverrides: {
				root: {
					cursor: "pointer"
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none"
				}
			}
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					textTransform: "none"
				}
			}
		}
	},
	palette: {
		mode: "light"
	}
});


export default THEME;
