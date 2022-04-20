import React, { Component } from 'react';

import './Form.css';
class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            formdata:[
                {name:'BTC',val:'0'},
                {name:'ETH',val:'0'},
            ]
        }
        this.addli = this.addli.bind(this)
        this.edit = this.edit.bind(this)
    }
    jump(url) {
      window.location.href=url;
    }
    edit(key,index,e){
        let formdata = this.state.formdata;
        formdata[index][key] = e.target.value;
        console.log(formdata);
        this.setState({
            formdata:formdata
        })
    }
    addli(){
        let formdata = this.state.formdata;
        formdata.push({
            name:"",val:""
        })
        this.setState({
            formdata:formdata
        })
    }
    renderli(){
        return this.state.formdata.map((item,index)=>{
            return (
                <li key={index}><input onChange={this.edit.bind(this,'name',index)} type={'text'} defaultValue={item.name}></input>:<input onChange={this.edit.bind(this,'val',index)} type={'text'} defaultValue={item.val}></input></li>
            )
        })
    }
    render(){
        return (
            <div className="form-box">
                <div>
                    <p className="form-tit1">Your PortFolio</p>
                </div>
                <div className="form-continer">
                    <div className='ullist'></div>
                    <div className='input-form'>
                        <input placeholder='your name' name="name"></input>
                    </div>
                    <div className='input-form'>
                        <input placeholder='coin number' name="number"></input>
                    </div>
                </div>
                <div className='bottom'>
                    <div onClick={this.jump.bind(this,'/create?type=buy')} className='quit button'>BUY</div>
                    <div onClick={this.jump.bind(this,'/create?type=sell')} className='ok button'>SELL</div>
                </div>
            </div>
        );
    }
}
export default Form;