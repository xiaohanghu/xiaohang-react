//创建外壳组件APP
import React,{Component} from 'react'
import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom'

import Todos from './components/Todos'
import PageHeader from './components/PageHeader'
import MyNavLink from './components/MyNavLink'
import Home from './components/Home'


import './App.css'

class App extends Component{

    render(){
        return ( 
            <BrowserRouter>
                <div>
                    <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <PageHeader />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                        {/* <a className="list-group-item active" href="./about.html">About</a>
                        <a className="list-group-item" href="./home.html">Home</a> */}
                        {/* RouteBrowserRouterr:就是利用H5推出的history身上的API
                            HashRouter:就是利用#,也就是锚点 hash值
                        */}

                        {/*NavLink在点击的时候就会去找activeClassName="ss"所指定的class的值，如果不添加默认是active
                            这是因为Link相当于是把标签写死了，不能去改变什么。
                        */}
                        {/* <NavLink  className="list-group-item"  to="/about">About</NavLink>
                        <NavLink className="list-group-item"  to="/home">Home</NavLink> */}

                        {/*将NavLink进行封装，成为MyNavLink,通过props进行传参数，标签体内容是props特殊的一个属性，叫做children */}
                            <NavLink className="list-group-item" to = "/home" >Home</NavLink>
                            <NavLink className="list-group-item" to = "/todos" >Todos</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                        <div className="panel-body">
                        {/* 注册路由，也就是写对应的关系 */}
                            <Routes>
                                <Route path="/home" element={<Home />} />
                                <Route path="/todos" element={<Todos />} />
                            </Routes>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

    
}

export default App  