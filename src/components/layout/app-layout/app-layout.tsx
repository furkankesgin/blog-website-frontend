import React from "react";

import { Box } from "@mui/material";

import Navbar from "@/components/layout/app-layout/navbar";


interface Props {
	children: React.ReactNode;
}

const AppLayout = (props: Props) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			width="100%"
			height="100%"
			gap={2}
		>
			<Navbar />

			{props.children}
		</Box>
	);
};

export default AppLayout;
