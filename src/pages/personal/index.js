import React,{ Component } from 'react';
import request from '../../util/request';
import { Button } from 'antd';
import { getToken, getLoginName, removeLocalStorage } from '../../util/auth'
import './index.scss'
class Personal extends Component{
    constructor(){
        super()
        this.state={
            access_token:'',
            loginname:'',
            userData:{
                avatar_url:'',
                collect_topics:[],
                create_at:'',
                githubUsername:'',
                loginname:'',
                recent_replies:[],
                recent_topics:[],
                score:''
            }
        }
    }
    componentWillMount(){
        // setState是异步函数
        let token = getToken();
        this.setState({
            loginname:getLoginName()
        })
        this.setState({
            access_token:token
        })
    }
    componentDidMount(){
        this.getUserData();
    }
    getUserData(){
        request({
            url:'/v1/user/'+this.state.loginname,
            method:'get',
        }).then(response=>{
            this.setState({
                userData:response.data.data
            })
        },error=>{
            console.log(error.response)
        })
    }
    logout = ()=>{
        removeLocalStorage();
        this.props.history.push('/login');
    }
    render(){
        return(
            <div id="peronal">
                <p className='personalcenter'>
                    个人中心
                </p>
                <main className = 'main' >
                    <img className='userimg' alt='头像' src={this.state.userData.avatar_url}/>
                    <span className='loginname'>{this.state.loginname}</span>
                    <div>
                        <span>积分:{this.state.userData.score}</span>
                        <span className='createat'>注册时间:{this.state.userData.create_at}</span>
                    </div>
                    <section>
                        <ul className='contentlist'>
                            <li className = 'contentli'>最近主题: {this.state.userData.recent_topics.length}</li>
                            <li className = 'contentli'>最近回复: {this.state.userData.recent_replies.length}</li>
                            <li className = 'contentli'>收藏主题: {this.state.userData.collect_topics.length}</li>
                        </ul>
                    </section>
                </main>
                <Button className='logoutbtn' type="primary" block onClick={this.logout}>退出登陆</Button>
            </div>
        )
    }
}

export default Personal