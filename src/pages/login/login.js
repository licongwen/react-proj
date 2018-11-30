import React ,{ Component } from 'react';
import { Button,Input } from 'antd';
import request from '../../util/request';
import { setToken, setLoginName } from '../../util/auth';

import './login.scss'
class Login extends Component{
    constructor(){
        super()
        this.state={
            title:'登陆',
            access_token:'b497e46c-fddc-47d9-9af1-fba46e273016',
        }
    }
    login = ()=>{
        // accesstoken : b497e46c-fddc-47d9-9af1-fba46e273016
        request({
            url:'/v1/accesstoken',
            method:'post',
            data:{
                accesstoken:this.state.access_token.trim()
            }
        }).then(response=>{
            console.log(response);
            if(response.status === 200){
                setToken(this.state.access_token);
                setLoginName(response.data.loginname);
                this.props.history.push('/personal');
            }else{
                alert(response.data.error_msg);
            }
        },error=>{
            //console.log(error.response)
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