import store from "@/store";
import axios from "axios";

const requests = axios.create({
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
        console.log('token下发成功');
    }
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