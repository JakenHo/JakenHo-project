import axios from 'axios'

const requests = axios.create({
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    return config
})

requests.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(new Error('faile'))
    }
)

export default requests