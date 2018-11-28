import React ,{ Component } from 'react';
import {Button,Input} from 'antd';
import request from '../../util/request';

import './login.scss'
class Login extends Component{
    constructor(){
        super()
        this.state={
            title:'登陆',
            access_token:'',
        }
    }
    login = ()=>{
        // accesstoken : b497e46c-fddc-47d9-9af1-fba46e273016
        request({
            url:'/v1/accesstoken',
            method:'post',
            data:{
                accesstoken:this.state.access_token
            }
        }).then(response=>{
            console.log(response);
            console.log(this.state.access_token)
            localStorage.setItem('accessToken',this.state.access_token);
            this.props.history.push('/personal');
        },error=>{
            console.log(error.response)
            alert(error.response.data.error_msg)
        })
    }
    handleInputChange(type,event){
        this.setState({
            access_token:event.target.value
        })
    }
    render(){
        return (
            <div className="login" id="login">
                <p className='title'>{this.state.title}</p>
                <div className='content'>
                    <div className='middle'>
                        <label className='tokenname'>Access token:</label>
                        <Input className='tokeninp' placeholder="access token" value={this.state.access_token} onChange={this.handleInputChange.bind(this,'access_token')}/>
                    </div>
                    <div className="loginbtn">
                        <Button type="primary" block onClick={this.login}>登陆</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;