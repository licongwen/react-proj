import React,{ Component } from 'react';
import { Tabs  } from 'antd'
import Nav from '../../components/BottomNav';
import request from '../../util/request'
import './index.scss'
import ContentList from '../../components/contentList';

 const TabPane = Tabs.TabPane;
class Home extends Component{
    
    constructor(){
        super();
        this.state={
            loginname:'',
            key:'all',
            allDate:[],
        }
    }
    componentDidMount(){
        this.changeTab('all');
    }
    changeTab = (key)=>{
        console.log(key)
        request({
            url:'/v1/topics?tab='+key,
            methods:'post'
        }).then(response=>{
            console.log(response);
            this.setState({
                allDate:response.data.data
            },()=>{
                console.log(this.state.allDate)
            })
        })
    }
    
    render(){
        return(
            <div id='home'>
                <p className='title'>VueJs中文社区</p>
                <div className='content'>
                    <Tabs defaultActiveKey="all" onChange={this.changeTab}>
                        <TabPane tab="全部" key="all">
                            <ContentList dataInfo={this.state.allDate}/>
                        </TabPane>
                        <TabPane tab="精华" key="good">
                            <ContentList dataInfo={this.state.allDate}/>
                        </TabPane>
                        <TabPane tab="weex" key="weex">
                            <ContentList dataInfo={this.state.allDate}/>
                        </TabPane>
                        <TabPane tab="分享" key="share">
                            <ContentList dataInfo={this.state.allDate}/>
                        </TabPane>
                        <TabPane tab="问答" key="ask">
                            <ContentList dataInfo={this.state.allDate}/>
                        </TabPane>
                        <TabPane tab="招聘" key="job">
                            <ContentList dataInfo={this.state.allDate}/>
                        </TabPane>
                    </Tabs>
                </div>
                
                <Nav/>
            </div>
        )
    }
}

export default Home;