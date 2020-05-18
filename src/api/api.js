import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '471777fd-12fb-464f-93c6-72276fe48232'
    }
})

export const userApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}}`)
            .then(Response => Response.data)
    }
}

export const followApi = {
    setUnFollow(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(Response => Response.data)
    },
    setFollow(userId) {
        return instance.post(`/follow/${userId}`)
            .then(Response => Response.data)
    }
}

export const authApi = {
    getAuth() {
        return instance.get(`/auth/me`)
        .then(Response => Response.data)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
        .then(Response => Response.data)
    }
}