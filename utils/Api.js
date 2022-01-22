import Axios from "axios";

const API = Axios.create({
	baseURL: "/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export default API;
