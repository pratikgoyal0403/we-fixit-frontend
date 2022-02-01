import Axios from "axios";

console.log({ nodeEnv: process.env.NODE_ENV });

const baseUrl =
	process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000";

const API = Axios.create({
	baseURL: baseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

export default API;
