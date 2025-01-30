import { Metadata } from "next";

import Link from "next/link";

import * as React from "react";

import { Box } from "@mui/material";

import { RiAlarmWarningFill } from "react-icons/ri";



export const metadata: Metadata = {
	title: "Not Found"
};

const NotFound = () => {
	return (
		<main>
			<Box sx={{ textAlign: "center" }}>
				<div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
					<RiAlarmWarningFill
						size={60}
						className='drop-shadow-glow animate-flicker text-red-500'
					/>

					<h1>Page Not Found</h1>

					<h5>change this in app/not-found.tsx</h5>

					<Link href='/'>Back to home</Link>

					<div>
						<Box
							component="img"
							src='https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7922.jpg'
							alt='404'
						/>
					</div>
				</div>
			</Box>
		</main>
	);
};

export default NotFound;
