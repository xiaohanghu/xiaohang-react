import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {focus:false}

    //鼠标移入移出的回调
    handleMouse = (event) =>{
        this.setState({focus:!this.state.focus})
    }

    //勾选以及取消勾选的id
    updateChecked =(event)=>{
        const {id} = this.props
        this.props.updateChecked(id,event.target.checked);
    }

    //删除按钮
    handleDelete = () => {

        const {id} = this.props

        // confirm()方法用于显示一个带有指定消息和确认及取消按钮的对话框。
        // 如果访问者点击"确定"，此方法返回true，否则返回false。
        // 如果直接使用confrim会提示错误，因此使用window.confrim
        if(window.confirm('确认删除'+id+'吗？')){
            this.props.deleteById(id);
        }

    }

    render() {
        const {id,name,done} = this.props;
        const {focus} = this.state;

        return (
            <li style={{backgroundColor:focus?'#ddd':'white'}} onMouseLeave={this.handleMouse} onMouseEnter={this.handleMouse}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.updateChecked}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete} className="btn btn-danger" style={{display:focus?'block':'none'}}>删除</button>
            </li>
        )
    }
}