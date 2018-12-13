import axios from 'axios';

const server = axios.create({
    baseURL: 'https://www.vue-js.com/api',
    timeout: 1000000
})
//拦截请求
server.interceptors.request.use({

})
//拦截响应
server.interceptors.response.use(
    response=>{
        //console.log(response);
        return response;
    },
    error=>{
        console.log(error.response);
        // if(error.response.status === 403){
        //     alert(error.response.data.error_message);
        // }
        return error.response;
    }
)

export default server;