export const addUserToLocalStorage = (user) => {
	localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
	localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
	const user = localStorage.getItem("user");
	//if we have user in local storage then take it , else return null
	if (user) {
		return JSON.parse(user);
	}
	return null;
};
