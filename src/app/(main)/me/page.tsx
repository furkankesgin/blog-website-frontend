import React from "react";

import { auth } from "@clerk/nextjs/server";


const Page = async () => {

	const { orgRole, actor, has, getToken, sessionClaims } = await auth();

	console.log(orgRole);
	console.log(actor);


	console.log(has?.({ role: "admin" }));
	console.log(has?.({ role: "member" }));

	console.log(await getToken());

	console.log(sessionClaims);

	return (
		<div>Page</div>
	);
};

export default Page;
