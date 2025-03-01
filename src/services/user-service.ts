import axios from "axios";

import { AppUser } from "@/data/api/user";


const PATH = "/api/v1/users" as const;

const ROOT_QUERY_KEY = "users" as const;

const createMe = async (): Promise<AppUser> => {
	return (await axios.get(`${PATH}/me`)).data;
};

const getMe = async (): Promise<AppUser> => {
	return (await axios.post(`${PATH}/me`)).data;
};

const UserService = {
	ROOT_QUERY_KEY,
	createMe,
	getMe
};

export default UserService;
