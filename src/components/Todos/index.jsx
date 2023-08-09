//创建外壳组件APP
import React,{Component} from 'react'
import {nanoid} from 'nanoid'
import PubSub from 'pubsub-js'
import axios from 'axios'

import Footer from '../Footer'
import Header from '../Header'
import List from '../List'

import './index.css'

class Todos extends Component{

    async componentDidMount(){
        const app = this
        axios.get('/todos.json').then(
            response=>{
                app.state.todos = response.data
                app.setState(app.state)
                console.log(response.data)
            },
            error=>{
                alert(error)
            }
        )
        axios.get(
            'https://api.github.com/search/users?q=test',
            // 👇️ set withCredentials to `true`
            // {
            //     withCredentials: true,
            // },
        ).then(
            response=>{
                console.log(response.data)
            },
            error=>{
                alert(error)
            }
        )

        fetch('/todos.json').then(
            response=>{
                console.log("连接服务器成功")
                return response.json()
            },
            // error=>{
            //     console.log("连接服务器失败")
            //     return new Promise(()=>{}) // 这里可以终止then
            // }
        ).then(
            json=>{
                console.log("fetch:", json)
            }
        ).catch(
            error=>{
                console.error(error)
            } 
        )
        console.log("fetch submitted")

        try {
            const response = await fetch('/todos.json')
            const data = await response.json()
            console.log("await fetch", data)
        } catch(error) {
            console.error(error)
        }
        

        PubSub.subscribe('ADD-ITEM', (msg, value)=>{
            this.addItem(value);
        })
    }

    state={todos:[]}

    //添加相应的事情
    addItem = (value)=>{
        const todos = this.state.todos;
        //如果想要子组件中的值传递给父组件，就可以给子组件一个函数，子组件在调用函数的时候，将值作为参数传递过去
        let newItem = {id:nanoid(),name:value,done:false}
        this.setState({todos:[newItem,...todos]});
    }

    //根据id,修改状态中是否被选中
    updateChecked = (id, checked) =>{

        this.state.todos.every(todo=>{
            if(todo.id == id){
                todo.done = checked;
                return false;
            }
            return true
        })

        this.setState(this.state)

    }

    //点击删除按钮，删除其中一行
    deleteById =(id)=>{
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        const newTo = this.state.todos.filter((todo)=>{
            return todo.id !== id
        })

        this.setState({todos:newTo})
    }

    //全选
    choseAll = (done)=> {
        this.state.todos.map((todo)=>{
            todo.done = done
        })
        this.setState(this.state)
    }

    //删除选中的内容
    deleteChecked = () =>{
        const {todos} = this.state;
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        const newTo = todos.filter((todo)=>{
            return todo.done !== true
        })
        this.setState({todos:newTo})
    }

    render(){
        const numChecked =  this.state.todos.reduce((pre,todo)=>{
            return pre+(todo.done?1:0)
        },0)
        const numTotal = this.state.todos.length;

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header onAddItem = {this.addItem} />
                    {/*注意：传递参数的属性名称不能是关键字，比如delete*/}
                    <List todos = {this.state.todos} updateChecked = {this.updateChecked} deleteById = {this.deleteById}/>
                    <Footer allCheck = {this.state} numChecked = {numChecked} numTotal={numTotal} choseAll = {this.choseAll} deleteChecked = {this.deleteChecked} />
                </div>
            </div>
        )
    }
}

export default Todos  