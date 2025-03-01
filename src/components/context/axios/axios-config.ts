import axios, { InternalAxiosRequestConfig } from "axios";

import Environment from "@/config/environment";


const setAxiosDefaults = () => {
	axios.defaults.baseURL = Environment.apiUrl;
	axios.defaults.headers["Content-Type"] = "application/json-patch+json";
};

const setRequestInterceptor = (getToken: () => Promise<string | null>) => {
	axios.interceptors.request.use(
		async (config: InternalAxiosRequestConfig<unknown>) => {
			console.info("[Axios] intercepting request");

			const accessToken = await getToken?.();
			if (accessToken) {
				console.info("[Axios] Access token added to request", config);
				config.headers.Authorization = `Bearer ${accessToken}`;
			}
			return config;
		},
		error => Promise.reject(error)
	);
};

const AxiosConfig = {
	setAxiosDefaults,
	setRequestInterceptor
};

export default AxiosConfig;
