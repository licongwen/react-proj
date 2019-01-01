import React,{Component} from 'react';
import './index.scss'
import Nav from '../../components/BottomNav';
import { Select,Input,Button,message } from 'antd';
import request from '../../util/request';
import {getToken} from '../../util/auth'
const Option = Select.Option;
const { TextArea } = Input;
export default class Subscribe extends Component{
    constructor(){
        super();
        this.state={
            tab:'',
            title:'',
            content:'',
        }
    }
    render(){
        return(
            <div id='subscribe'>
                <p className='title'>发布话题</p>
                <div className='content'>
                    <p className='title1'>选择板块</p>
                    <Select  className='typeselect' defaultValue="share" onChange={this.typeChange.bind(this)}>
                        <Option value="share">分享</Option>
                        <Option value="ask">问答</Option>
                        <Option value="job">招聘</Option>
                    </Select>
                    <p className='title2'>标题</p>
                    <Input  className='titleinput' placeholder='请输入标题' onChange={this.titleChange.bind(this)}/>
                    <TextArea  value={this.state.content} className='detailcontent' rows={6} onChange={this.contentChange.bind(this)}/>
                    <div>
                        <Button className='upload' onClick={this.submit}>发布话题</Button>
                    </div>
                    
                </div>
                <Nav/>
            </div>
        )
    }
    titleChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            title:event.target.value
        })
    }
    contentChange=(event)=>{
        this.setState({
            content:event.target.value
        })
    }
    typeChange=(event)=>{
        console.log(event)
        this.setState({
            tab:event
        })
    }
    submit = ()=>{
        request({
            url:'/v1/topics',
            method:'post',
            data:{
                accesstoken:getToken(),
                title:this.state.title,
                tab:this.state.tab || 'share',
                content:this.state.content,
            }
        }).then(response=>{
            console.log(response);
            if(response.status === 200){
                message.info('创建成功');
                this.setState({
                    tab:'',
                    content:'',
                    title:'',
                })
            }else{
                message.info(response.data.error_msg);
            }
        })
    }
}