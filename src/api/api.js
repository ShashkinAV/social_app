import * as axios from 'axios';

const instanse = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "48264660-10df-4544-bf2f-23492eab1fa7"
	},
	withCredentials: true
})

export const getUsers = (currentPage=1, pageSize=6)=> {
	return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
	
	}