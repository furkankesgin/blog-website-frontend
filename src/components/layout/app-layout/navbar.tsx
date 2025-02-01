import React from "react";

import { Box, Button } from "@mui/material";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


const Navbar = () => {
	return (
		<Box
			display="flex"
			width="100%"
			bgcolor="primary.main"
			justifyContent="space-between"
			alignItems="center"
			p={2}
		>
			Logo

			<Box
				display="flex"
				gap={1}
			>
				<SignedOut>
					<SignInButton
						mode="modal"
					>
						<Button
							variant="contained"
							color="secondary"
						>
							muzla
						</Button>
					</SignInButton>

				</SignedOut>

				<SignedIn>
					<UserButton />
				</SignedIn>
			</Box>
		</Box>
	);
};

export default Navbar;
