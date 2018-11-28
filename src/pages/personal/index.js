import React,{ Component } from 'react';
import request from '../../util/request'
class Personal extends Component{
    constructor(){
        super()
        this.state={
            access_token:'',
            loginname:''
        }
    }
    componentWillMount(){
        // setState异步函数
        let token = localStorage.getItem('accessToken');
        this.setState({
            access_token:token
        })
    }
    componentDidMount(){
        this.getPersonalData();
        // console.log(this.state.access_token);
    }
    getPersonalData(){
        request({
            url:'/v1/accesstoken',
            method:'post',
            params:{
                accesstoken:this.state.access_token
            }
        }).then(response=>{
            console.log(response);
            this.setState({
                loginname:response.data.loginname
            },function(){
                this.getUserData();
            })
        },error=>{
            console.log(error.response)
        })
    }
    getUserData(){
        request({
            url:'/v1/user/'+this.state.loginname,
            method:'get',
        }).then(response=>{
            console.log(response)
        },error=>{
            console.log(error.response)
        })
    }
    render(){
        return(
            <div id="peronal">
                <p>
                    个人中心
                </p>
                {this.state.access_token}
            </div>
        )
    }
}

export default Personal