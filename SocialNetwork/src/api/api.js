import * as axios from 'axios';

const instance = axios.create({
		withCredentials: true,
		headers: {"API-KEY": "5a8ce0ff-26a8-4764-98b4-de40e0f4a217"},
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});
export const usersAPI = {
	getUsers(pageSize, currentPage) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	getAuthUser() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	follow(userId) {
		return instance.post(`follow/${userId}`).then(response => response.data);
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data);
	},
	getProfile(userId) {
		return instance.get(`profile/` + userId).then(response => response.data);
	},

}

export const authAPI = {
	me() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	

}