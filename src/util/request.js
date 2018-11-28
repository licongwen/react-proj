import axios from 'axios';

const server = axios.create({
    baseURL: 'https://www.vue-js.com/api',
    timeout: 1000000
})
//拦截请求
server.interceptors.request.use({

})
//拦截响应
server.interceptors.response.use({

})

export default server;