import React,{ Component } from 'react';
import Nav from '../../components/BottomNav';

class Home extends Component{
    constructor(){
        super();
        this.state={
            loginname:''
        }
    }
    render(){
        return(
            <div id='home'>
                its home page
                <Nav/>
            </div>
        )
    }
}

export default Home;