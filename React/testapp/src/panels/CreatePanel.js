import React from "react";
import { create } from "../util/endpoints";


class CreatePanel extends React.Component{

    state = {
        msg : "NaN",
        name : null
    }

    inputChange = ()=>{
        
        this.setState({name:document.getElementById("create_name").value});
    }

    submit = () =>{
        create(this.state.name).then((res)=>{this.setState({msg:res.name})});
    }

    render(){

        return (<>
        <label>Name</label><br/>
        <input id="create_name" onChange={this.inputChange.bind(this)}/><br/>
        <button onClick={this.submit.bind(this)}>create</button><br/>
        {(this.state.msg === "NaN")?(null):(this.state.msg + " is created")}
        </>)
    }
}

export default CreatePanel;