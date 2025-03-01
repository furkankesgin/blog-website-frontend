import { auth } from "@clerk/nextjs/server";

import AxiosConfig from "@/components/context/axios/axios-config";


interface Props {
	children: React.ReactNode;
}

AxiosConfig.setAxiosDefaults();

const AxiosContext = async (props: Props) => {

	const { getToken } = await auth();

	AxiosConfig.setRequestInterceptor(getToken);

	return props.children;
};

export default AxiosContext;
