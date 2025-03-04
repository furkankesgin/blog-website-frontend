import { auth } from "@clerk/nextjs/server";
import { AxiosError } from "axios";

import UserService from "@/services/user-service";


interface Props {
	children: React.ReactNode;
}


const InitUser = async (props: Props) => {

	const { userId } = await auth();

	if (userId) {
		try {
			await UserService.getMe();
		}
		catch (e: unknown) {
			if (e instanceof AxiosError) {
				console.error(e);
				if (e.response?.status === 404) {
					try {
						await UserService.createMe();
					}
					catch (e: unknown) {
						console.error(e);
					}
				}
			}
		}
	}

	return props.children;
};

export default InitUser;
