import React ,{ Component } from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from '../pages/login/login'
import Personal from '../pages/personal/index'
import Home from '../pages/home/index'
import Subscribe from '../pages/subscribe/index'
export default class Routers extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/login" component= {Login}/>
                    <Route path="/personal" component= {Personal}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/subscribe' component={Subscribe}/>
                    <Redirect exact from='/' to='/login'/>
                </Switch>
            </HashRouter>
        )
    }
}