import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8081/api',
})

export const addUserDetail = payload => api.post(`/userDetails`, payload)

const apis = {
    addUserDetail
}

export default apis