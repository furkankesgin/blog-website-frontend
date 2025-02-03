// eslint-disable-next-line import/no-unresolved
import { Roles } from "../data/types/globals";
import { auth } from "@clerk/nextjs/server";



export const checkRole = async (role: Roles) => {
	const { sessionClaims } = await auth();
	return sessionClaims?.metadata.role === role;
};