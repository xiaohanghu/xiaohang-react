import React, { Component } from 'react';
import './index.css'
class Footer extends Component {

    
    //全选以及全不选
    chose = (event) =>{
        //1.如果选中，所有的全都选中
        this.props.choseAll(event.target.checked)
    }

    //删除选中内容
    deleteChecked = () =>{
        this.props.deleteChecked();
    }

    render() {
        const {numChecked, numTotal} = this.props
        return (
            <div className="todo-footer">
                <label>
                    {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checkede就必须添加onChange*/}
                <input onChange={this.chose} type="checkbox"  checked = {numChecked === numTotal && numTotal!==0?true:false}/>
                </label>
                <span>
                <span>已完成{numChecked}</span> / 全部{numTotal}
                </span>
                <button onClick={this.deleteChecked} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;
