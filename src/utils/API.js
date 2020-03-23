import axios from "axios";
export default {
	// Gets all users, fetches API
	getUsers: function() {
		return axios.get("https://randomuser.me/api/?results=200&nat=us");
	}
};
