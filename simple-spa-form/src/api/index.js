import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8081/api',
})

export const addUserDetail = payload => api.post(`/userDetails`, payload)
export const getUserDetails = () => api.get(`/userDetails`)
export const updateUserDetailsById = (id, payload) => api.put(`/userDetails/${id}`, payload)
export const deleteUserDetailsById = id => api.delete(`/userDetails/${id}`)
export const getUserDetailsById = id => api.get(`/userDetails/${id}`)

const apis = {
    addUserDetail,
    getUserDetails,
    updateUserDetailsById,
    deleteUserDetailsById,
    getUserDetailsById,
}

export default apis