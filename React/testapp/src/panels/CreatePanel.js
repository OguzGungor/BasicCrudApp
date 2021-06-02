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
            <div class="panelElement" >
                <label >Name : </label>
                <input id="create_name" onChange={this.inputChange.bind(this)}/>
            </div>
            <button class="panelElement" onClick={this.submit.bind(this)}>create</button><br/>
            {(this.state.msg === "NaN")?(null):(this.state.msg + " is created")}
        </>)
    }
}

export default CreatePanel;