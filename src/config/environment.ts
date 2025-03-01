const Environment = {
	apiUrl: process.env.NEXT_PUBLIC_API_URL
};

for (const key in Environment) {
	if (!Environment[key as keyof typeof Environment]) {
		throw new Error(`Environment variable ${key} is not defined`);
	}
}

export default Environment;
