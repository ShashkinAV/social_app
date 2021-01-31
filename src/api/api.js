import * as axios from 'axios';

const instanse = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "48264660-10df-4544-bf2f-23492eab1fa7"
	},
	withCredentials: true
})
export const usersApi = {
	getUsers (currentPage=1, pageSize=6){
		return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)},
	getProfile(userId){
		return instanse.get(`profile/` + userId).then(response=> response.data);
	},
	setFollow(userId){
		return instanse.post(`follow/${userId}`).then(response => response.data)},
	setUnfollow(userId){
		return instanse.delete(`follow/${userId}`).then(response => response.data)},
	me(){return instanse.get(`auth/me`)},
	}
