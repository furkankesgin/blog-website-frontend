import React from "react";

import AppLayout from "@/components/layout/app-layout/app-layout";


interface Props {
	children: React.ReactNode;
}

const Layout = (props: Props) => {
	return (
		<AppLayout>
			{props.children}
		</AppLayout>
	);
};

export default Layout;
