import React,{Component} from 'react';
// import { Button } from 'antd';
import './bottomnav.scss'
import createhashhistory from '../util/history'
export default class BottomNav extends Component{
    constructor(){
        super()
        this.state={
            navData:['首页','发布','消息','我的']
        }
    }
    NavClick(item,index){
        if(index === 0){
            createhashhistory.push('/home');
        }else if(index === 1){
            createhashhistory.push('/subscribe');
        }else if(index === 2){

        }else if(index === 3){
            createhashhistory.push('/personal');
        }
    }
    click(val1,val2){
        console.log(val1,val2)
    }
    render(){
        return(
            <div id='nav'>
                <ul className='navul'>
                    {this.state.navData.map((item,index)=>{
                        return <li onClick={() => this.NavClick(item,index) } className='navli' key={item}>{item}</li>
                    })}
                </ul>
                {/* <Button onClick={this.click.bind(this,'test','one')}>测试按钮</Button> */}
            </div>
        )
    }
}